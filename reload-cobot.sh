#!/bin/bash
# Force reload Cobot configuration

set -e

echo "=========================================="
echo "Reloading Cobot Configuration"
echo "=========================================="

# Check if proxy is running
if ! docker ps --format "{{.Names}}" | grep -q "jsrspaces_proxy"; then
    echo "❌ Proxy container not found!"
    echo "Starting proxy..."
    cd /home/ahmedemam/Documents/MasteryHub-ITS/jsrspaces-website
    docker-compose up -d proxy || docker compose up -d proxy
    sleep 5
fi

PROXY_NAME=$(docker ps --format "{{.Names}}" | grep "jsrspaces_proxy" | head -1)

if [ -z "$PROXY_NAME" ]; then
    echo "❌ Could not find proxy container!"
    exit 1
fi

echo "✓ Found proxy: $PROXY_NAME"

# Validate Caddyfile
echo ""
echo "Validating Caddyfile..."
docker exec $PROXY_NAME caddy validate --config /etc/caddy/Caddyfile

# Check if Cobot config exists in container
echo ""
echo "Checking Cobot configuration..."
if docker exec $PROXY_NAME cat /etc/caddy/Caddyfile | grep -q "^cobot.jsrspaces.com"; then
    echo "✓ Cobot configuration found in proxy"
else
    echo "⚠️  Cobot configuration NOT found - reloading will add it"
fi

# Reload Caddy
echo ""
echo "Reloading Caddy configuration..."
if docker exec $PROXY_NAME caddy reload --config /etc/caddy/Caddyfile 2>&1; then
    echo "✓ Caddy reloaded successfully"
else
    echo "⚠️  Reload failed, restarting proxy..."
    docker restart $PROXY_NAME
    sleep 3
fi

# Verify
echo ""
echo "Verifying Cobot route..."
docker exec $PROXY_NAME cat /etc/caddy/Caddyfile | grep -A 10 "^cobot.jsrspaces.com" || {
    echo "❌ Cobot config still not found!"
    echo "Proxy may need full restart with volume mount"
    exit 1
}

echo ""
echo "=========================================="
echo "✅ Cobot configuration reloaded!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Configure DNS: cobot.jsrspaces.com -> domains.cobot.me"
echo "2. Set custom domain in Cobot admin panel"
echo "3. Access at: https://cobot.jsrspaces.com"
echo ""

