# Build Permission Fix Guide

## Problem
Build fails with error:
```
EACCES: permission denied, rmdir '/home/ec2-user/jsrspaces-website/build/assets'
```

## Solution

### Quick Fix (On EC2 Server)

Run this command on your EC2 server:

```bash
cd /home/ec2-user/jsrspaces-website
chmod +x fix-build-permissions.sh
./fix-build-permissions.sh
```

Or manually:

```bash
cd /home/ec2-user/jsrspaces-website

# Remove build directory with sudo
sudo rm -rf build

# Fix project ownership
sudo chown -R ec2-user:ec2-user .

# Create build directory
mkdir -p build
chmod 755 build

# Now build
npm run build
```

### Permanent Fix

The deployment scripts have been updated to handle permissions automatically:

1. **`deploy-website.sh`** - Now fixes permissions before building
2. **`manage.sh`** - Updated deploy function to handle permissions
3. **`fix-build-permissions.sh`** - Standalone script to fix permissions

### Using the Updated Deploy Script

```bash
# Make sure script is executable
chmod +x deploy-website.sh

# Run deployment
./deploy-website.sh
```

### Using Manage Script

```bash
# Make sure script is executable
chmod +x manage.sh

# Deploy using manage script
./manage.sh deploy
```

## Root Cause

The build directory was likely created by:
- A different user (root, docker, etc.)
- A different process with different permissions
- Docker container with different user permissions

## Prevention

1. Always run builds as the same user
2. Use the updated deployment scripts
3. Set proper ownership before building
4. Consider using Docker for consistent environments

## Docker Build (Alternative)

If permission issues persist, consider building in Docker:

```bash
# Build in Docker container
docker run --rm -v $(pwd):/app -w /app node:20 npm run build
```

This ensures consistent permissions.

## Troubleshooting

### Check Current Permissions
```bash
ls -la build/
whoami
```

### Check Ownership
```bash
ls -ld build/
```

### Fix Ownership
```bash
sudo chown -R $(whoami):$(whoami) build/
```

### Remove and Recreate
```bash
sudo rm -rf build/
mkdir -p build/
chmod 755 build/
```

