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
DOCKER_COMPOSE_CMD=""  # Will be set by check_docker

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
    
    # Check if user can run docker (might need sudo or docker group)
    if ! docker ps &> /dev/null 2>&1; then
        print_warning "Cannot run docker commands. Try:"
        print_warning "  sudo usermod -aG docker $USER"
        print_warning "  Then log out and back in, or use: sudo ./manage.sh"
        print_error "Or run with sudo if you have sudo access"
        exit 1
    fi
    
    # Detect docker compose command (try plugin first, then standalone)
    if docker compose version &> /dev/null 2>&1; then
        DOCKER_COMPOSE_CMD="docker compose"
        print_status "Using: docker compose (plugin)"
    elif command -v docker-compose &> /dev/null && docker-compose version &> /dev/null 2>&1; then
        DOCKER_COMPOSE_CMD="docker-compose"
        print_status "Using: docker-compose (standalone)"
    else
        print_error "Docker Compose is not installed."
        print_error ""
        print_error "Install Docker Compose plugin:"
        print_error "  Amazon Linux 2: sudo yum install docker-compose-plugin -y"
        print_error "  Ubuntu/Debian: sudo apt install docker-compose-plugin -y"
        print_error ""
        print_error "OR install standalone docker-compose:"
        print_error "  curl -L \"https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)\" -o /usr/local/bin/docker-compose"
        print_error "  sudo chmod +x /usr/local/bin/docker-compose"
        exit 1
    fi
}

# Start services
start() {
    print_header "Starting JSRSpaces Infrastructure"
    check_docker
    $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE up -d
    print_status "Services started"
    $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE ps
    echo ""
    print_status "Access services:"
    print_status "  Website: https://www.jsrspaces.com"
    print_status "  ERPNext: https://erp.jsrspaces.com"
}

# Stop services
stop() {
    print_header "Stopping JSRSpaces Infrastructure"
    check_docker
    $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE stop
    print_status "Services stopped"
}

# Restart services
restart() {
    print_header "Restarting JSRSpaces Infrastructure"
    check_docker
    $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE restart
    print_status "Services restarted"
}

# Show status
status() {
    print_header "JSRSpaces Infrastructure Status"
    check_docker
    $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE ps
}

# Show logs
logs() {
    check_docker
    SERVICE=${1:-""}
    if [ -z "$SERVICE" ]; then
        docker logs jsrspaces_proxy 2>&1 | tail -100
    else
        # Try docker-compose first, fallback to docker logs
        if $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE logs --tail 100 "$SERVICE" 2>&1; then
            :
        else
            docker logs "jsrspaces_${SERVICE}" 2>&1 | tail -100
        fi
    fi
}

# Update services
update() {
    print_header "Updating JSRSpaces Infrastructure"
    check_docker
    $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE pull
    $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE up -d
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
        $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE down -v
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
    proxy-reload Reload proxy configuration (after Caddyfile changes)
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
EOF
}

# Reload Caddy proxy configuration
proxy_reload() {
    print_header "Reloading Caddy Proxy Configuration"
    check_docker
    
    if ! docker ps | grep -q jsrspaces_proxy; then
        print_error "Proxy container is not running!"
        print_status "Starting proxy..."
        $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE up -d proxy
        sleep 3
    fi
    
    print_status "Validating Caddyfile syntax..."
    docker exec jsrspaces_proxy caddy validate --config /etc/caddy/Caddyfile 2>&1 || {
        print_error "Caddyfile has syntax errors!"
        exit 1
    }
    
    print_status "Reloading Caddy configuration..."
    if docker exec jsrspaces_proxy caddy reload --config /etc/caddy/Caddyfile 2>&1; then
        print_status "Caddy configuration reloaded successfully"
    else
        print_warning "Could not reload Caddy config. Restarting proxy..."
        $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE restart proxy
        sleep 3
        print_status "Proxy restarted"
    fi
    
    print_status "Checking proxy logs..."
    docker logs jsrspaces_proxy --tail 20 | grep -i -E "error|reload" || echo "No relevant logs"
}

# ERPNext initialization helper
erp_init() {
    print_header "Initializing ERPNext"
    check_docker
    
    print_status "Checking if ERPNext site needs initialization..."
    
    # Check if site already exists
    if $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE exec -T jsrspaces_erp_backend bench --site jsrspaces.local list-apps 2>/dev/null | grep -q erpnext; then
        print_status "ERPNext site already initialized"
        $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE exec -T jsrspaces_erp_backend bench --site jsrspaces.local show-config 2>/dev/null || true
    else
        print_warning "ERPNext initialization takes 5-10 minutes on first run"
        print_status "Starting ERPNext services..."
        $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE up -d erp_db erp_redis_cache erp_redis_queue erp_redis_socketio
        
        print_status "Waiting for database to be ready..."
        sleep 10
        
        print_status "Running ERPNext site creation (this may take several minutes)..."
        $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE up erp_configurator erp_create_site
        
        print_status "Starting ERPNext backend and frontend..."
        $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE up -d
        
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
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed."
        print_error "Install Node.js and npm:"
        print_error "  Amazon Linux: sudo yum install nodejs npm -y"
        print_error "  Ubuntu/Debian: curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs"
        exit 1
    fi
    
    # Fix build directory permissions
    if [ -d "build" ]; then
        print_status "Fixing build directory permissions..."
        CURRENT_USER=$(whoami)
        sudo chown -R $CURRENT_USER:$CURRENT_USER build 2>/dev/null || true
        sudo rm -rf build 2>/dev/null || rm -rf build 2>/dev/null || true
    fi
    
    # Create build directory with proper permissions
    mkdir -p build
    chmod 755 build
    
    # Install dependencies
    print_status "Installing dependencies..."
    npm install
    
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
    $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE restart website 2>/dev/null || {
        print_status "Website container not running, starting services..."
        $DOCKER_COMPOSE_CMD -f $COMPOSE_FILE up -d website
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
    proxy-reload)
        proxy_reload
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

