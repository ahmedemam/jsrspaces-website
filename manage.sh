#!/bin/bash

# JSRSpaces Infrastructure Management Script
# Inspired by masteryhub-its-self-hosted-infrastructure

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

COMPOSE_FILE="docker-compose.yml"

# Print functions
print_header() {
    echo -e "${GREEN}════════════════════════════════════════${NC}"
    echo -e "${GREEN}$1${NC}"
    echo -e "${GREEN}════════════════════════════════════════${NC}"
}

print_status() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

# Check if Docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command -v docker compose &> /dev/null && ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
}

# Start services
start() {
    print_header "Starting JSRSpaces Infrastructure"
    check_docker
    docker compose -f $COMPOSE_FILE up -d
    print_status "Services started"
    docker compose -f $COMPOSE_FILE ps
}

# Stop services
stop() {
    print_header "Stopping JSRSpaces Infrastructure"
    check_docker
    docker compose -f $COMPOSE_FILE stop
    print_status "Services stopped"
}

# Restart services
restart() {
    print_header "Restarting JSRSpaces Infrastructure"
    check_docker
    docker compose -f $COMPOSE_FILE restart
    print_status "Services restarted"
}

# Show status
status() {
    print_header "JSRSpaces Infrastructure Status"
    check_docker
    docker compose -f $COMPOSE_FILE ps
}

# Show logs
logs() {
    SERVICE=${1:-""}
    if [ -z "$SERVICE" ]; then
        docker compose -f $COMPOSE_FILE logs -f
    else
        docker compose -f $COMPOSE_FILE logs -f $SERVICE
    fi
}

# Update services
update() {
    print_header "Updating JSRSpaces Infrastructure"
    check_docker
    docker compose -f $COMPOSE_FILE pull
    docker compose -f $COMPOSE_FILE up -d
    print_status "Services updated"
}

# Clean up
clean() {
    print_header "Cleaning JSRSpaces Infrastructure"
    check_docker
    print_warning "This will stop and remove all containers, networks, and volumes"
    read -p "Are you sure? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker compose -f $COMPOSE_FILE down -v
        print_status "Cleanup complete"
    else
        print_status "Cleanup cancelled"
    fi
}

# Show help
show_help() {
    cat << EOF
JSRSpaces Infrastructure Management

Usage: ./manage.sh [command]

Commands:
    deploy      Pull latest, build website, restart, and cleanup
    start       Start all services
    stop        Stop all services
    restart     Restart all services
    status      Show service status
    logs [svc]  Show logs (optionally for specific service)
    update      Update and restart all services
    erp-init    Initialize ERPNext (run after first start)
    clean       Remove all containers, networks, and volumes
    help        Show this help message

Examples:
    ./manage.sh start
    ./manage.sh logs website
    ./manage.sh restart

Services:
    - proxy     Caddy reverse proxy (SSL/TLS)
    - website   Nginx web server
    - erp       ERPNext (backend, frontend, database, workers)
    - booked    Booked Scheduler (resource booking system)
EOF
}

# ERPNext initialization helper
erp_init() {
    print_header "Initializing ERPNext"
    check_docker
    
    print_status "Checking if ERPNext site needs initialization..."
    
    # Check if site already exists
    if docker compose -f $COMPOSE_FILE exec -T jsrspaces_erp_backend bench --site jsrspaces.local list-apps 2>/dev/null | grep -q erpnext; then
        print_status "ERPNext site already initialized"
        docker compose -f $COMPOSE_FILE exec -T jsrspaces_erp_backend bench --site jsrspaces.local show-config 2>/dev/null || true
    else
        print_warning "ERPNext initialization takes 5-10 minutes on first run"
        print_status "Starting ERPNext services..."
        docker compose -f $COMPOSE_FILE up -d erp_db erp_redis_cache erp_redis_queue erp_redis_socketio
        
        print_status "Waiting for database to be ready..."
        sleep 10
        
        print_status "Running ERPNext site creation (this may take several minutes)..."
        docker compose -f $COMPOSE_FILE up erp_configurator erp_create_site
        
        print_status "Starting ERPNext backend and frontend..."
        docker compose -f $COMPOSE_FILE up -d
        
        print_status "ERPNext initialization complete!"
        print_status "Access ERPNext at: https://erp.jsrspaces.com"
        print_status "Default credentials:"
        print_status "  Username: Administrator"
        print_status "  Password: admin"
        print_warning "Please change the default password after first login!"
    fi
}

# Deploy website: pull, build, restart, cleanup
deploy() {
    print_header "Deploying Website"
    
    # Pull latest if git repo
    if [ -d ".git" ]; then
        print_status "Pulling latest from repository..."
        git pull || print_warning "Git pull failed or no remote configured"
    else
        print_warning "Not a git repository, skipping pull"
    fi
    
    # Install dependencies
    print_status "Installing dependencies..."
    if [ ! -d "node_modules" ]; then
        npm install
    else
        npm install
    fi
    
    # Build website
    print_status "Building website..."
    npm run build
    
    # Verify build
    if [ ! -f "build/index.html" ]; then
        print_error "Build failed! Check errors above."
        exit 1
    fi
    
    # Restart website container
    print_status "Restarting website container..."
    check_docker
    docker compose -f $COMPOSE_FILE restart website 2>/dev/null || {
        print_status "Website container not running, starting services..."
        docker compose -f $COMPOSE_FILE up -d website
    }
    
    # Cleanup node_modules
    print_status "Cleaning up node_modules..."
    rm -rf node_modules
    
    print_status "Deployment complete!"
    print_status "Website should be live at: https://www.jsrspaces.com"
}

# Main script
case "${1:-help}" in
    deploy)
        deploy
        ;;
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    logs)
        logs "$2"
        ;;
    update)
        update
        ;;
    clean)
        clean
        ;;
    erp-init)
        erp_init
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo
        show_help
        exit 1
        ;;
esac

