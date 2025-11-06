#!/bin/bash

# Website Deployment Script
# Builds the Vite + React website and prepares for deployment

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Building JSRSpaces website...${NC}"

# Get current user
CURRENT_USER=$(whoami)
CURRENT_DIR=$(pwd)

# Fix permissions for build directory
if [ -d "build" ]; then
    echo -e "${YELLOW}Fixing permissions for build directory...${NC}"
    # Remove build directory with proper permissions
    sudo rm -rf build 2>/dev/null || rm -rf build 2>/dev/null || {
        echo -e "${YELLOW}Attempting to change ownership of build directory...${NC}"
        sudo chown -R $CURRENT_USER:$CURRENT_USER build 2>/dev/null || true
        rm -rf build
    }
fi

# Create build directory with proper permissions
mkdir -p build
chmod 755 build

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install
fi

# Build the website
echo -e "${GREEN}Running build...${NC}"
npm run build

# Check if build was successful
if [ -d "build" ] && [ -f "build/index.html" ]; then
    echo -e "${GREEN}✓ Build successful!${NC}"
    echo -e "${GREEN}Website files are in ./build/ directory${NC}"
    echo ""
    echo -e "Next steps:"
    echo -e "  1. Start services: ./manage.sh start"
    echo -e "  2. Access at: https://jsrspaces.com"
else
    echo -e "${YELLOW}⚠ Build may have failed. Check for errors above.${NC}"
    exit 1
fi

