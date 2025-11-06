#!/bin/bash

# Fix Build Permissions Script
# Run this script if you encounter permission errors during build

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Fixing build directory permissions...${NC}"

# Get current user and directory
CURRENT_USER=$(whoami)
CURRENT_DIR=$(pwd)

echo -e "${YELLOW}Current user: $CURRENT_USER${NC}"
echo -e "${YELLOW}Current directory: $CURRENT_DIR${NC}"

# Check if build directory exists
if [ -d "build" ]; then
    echo -e "${YELLOW}Removing existing build directory...${NC}"
    
    # Try to remove with sudo first
    if sudo rm -rf build 2>/dev/null; then
        echo -e "${GREEN}✓ Removed build directory with sudo${NC}"
    # Try to change ownership and remove
    elif sudo chown -R $CURRENT_USER:$CURRENT_USER build 2>/dev/null && rm -rf build; then
        echo -e "${GREEN}✓ Changed ownership and removed build directory${NC}"
    # Try to remove without sudo
    elif rm -rf build 2>/dev/null; then
        echo -e "${GREEN}✓ Removed build directory${NC}"
    else
        echo -e "${RED}✗ Failed to remove build directory${NC}"
        echo -e "${YELLOW}Attempting to fix permissions...${NC}"
        sudo chown -R $CURRENT_USER:$CURRENT_USER build
        sudo chmod -R 755 build
        rm -rf build
        echo -e "${GREEN}✓ Fixed permissions and removed build directory${NC}"
    fi
else
    echo -e "${GREEN}Build directory doesn't exist, creating it...${NC}"
fi

# Create build directory with proper permissions
mkdir -p build
chmod 755 build
echo -e "${GREEN}✓ Created build directory with proper permissions${NC}"

# Fix permissions for entire project directory (if needed)
echo -e "${YELLOW}Fixing project directory permissions...${NC}"
sudo chown -R $CURRENT_USER:$CURRENT_USER . 2>/dev/null || true
chmod -R 755 . 2>/dev/null || true

echo -e "${GREEN}✓ Permissions fixed!${NC}"
echo -e "${GREEN}You can now run: npm run build${NC}"

