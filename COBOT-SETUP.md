# Cobot Integration Setup Guide

This guide explains how to set up Cobot integration with your JSRSpaces infrastructure.

## Overview

Cobot is primarily a **SaaS (Software as a Service)** platform and does not offer an official self-hosted version. However, we've configured your infrastructure to integrate with Cobot's hosted service using your own custom domain.

## Setup Options

### Option 1: Custom Domain with Cobot SaaS (Recommended)

This allows you to use `cobot.jsrspaces.com` while using Cobot's hosted infrastructure.

#### Prerequisites

1. **Cobot Account**: You need an active Cobot subscription
2. **DNS Access**: Ability to create DNS records for `jsrspaces.com`

#### Setup Steps

1. **Configure DNS**
   - Add a CNAME record:
     - **Name**: `cobot`
     - **Value**: `domains.cobot.me`
     - **TTL**: 3600 (or default)

2. **Configure Cobot**
   - Log into your Cobot admin panel
   - Navigate to: **Customize » Domain**
   - Enter your custom domain: `cobot.jsrspaces.com`
   - Save the settings
   - Wait for DNS propagation (may take a few minutes to hours)

3. **Start Services**
   ```bash
   ./manage.sh start
   ```

4. **Verify**
   - Visit `https://cobot.jsrspaces.com`
   - You should see your Cobot interface

#### Current Configuration

- **Domain**: `cobot.jsrspaces.com`
- **Proxy**: Handled by main Caddy proxy (see `proxy/conf/Caddyfile`)
- **Routing**: Proxies to `domains.cobot.me:443`

### Option 2: Self-Hosted Cobot (Future)

If a self-hosted version becomes available in the future:

1. **Update Docker Image**
   - Edit `docker-compose.cobot.yml`
   - Uncomment the `cobot_db` and `cobot` services
   - Update the image reference with the actual self-hosted image
   - Set environment variables (database password, secret keys, etc.)

2. **Update Proxy Configuration**
   - Edit `proxy/conf/Caddyfile`
   - Comment out the SaaS proxy configuration
   - Uncomment the self-hosted configuration
   - Update the port if needed (currently configured for port 3000)

3. **Set Environment Variables**
   - Create a `.env` file or export:
     ```bash
     export COBOT_DB_PASSWORD=your_secure_password
     export COBOT_SECRET_KEY=your_secret_key
     ```

4. **Start Services**
   ```bash
   ./manage.sh start
   ```

## Alternative Solutions

If you prefer a fully self-hosted solution, your infrastructure already includes:

### Recommended Self-Hosted Stack

1. **ERPNext** (`erp.jsrspaces.com`)
   - Member management & CRM
   - Billing & invoicing
   - Subscription management

2. **Booked Scheduler** (if configured)
   - Resource booking (desks, rooms, equipment)
   - Member self-service portal
   - Calendar integration

3. **Custom Integration**
   - Use n8n (if available) to automate workflows
   - Connect ERPNext with booking systems
   - Build custom member portal using your website

## Troubleshooting

### DNS Issues

- **Problem**: Domain not resolving
  - **Solution**: Wait 24-48 hours for DNS propagation, verify CNAME record is correct

### SSL Certificate Issues

- **Problem**: SSL errors when accessing Cobot
  - **Solution**: Ensure DNS is properly configured before accessing. Caddy will auto-generate certificates once DNS resolves.

### Proxy Errors

- **Problem**: 502 Bad Gateway or connection errors
  - **Solution**: 
    1. Check if proxy service is running: `docker ps | grep proxy`
    2. Verify DNS CNAME is pointing to `domains.cobot.me`
    3. Check Cobot admin panel to ensure custom domain is configured
    4. Review proxy logs: `docker logs jsrspaces_proxy`

## Configuration Files

- **Docker Compose**: `docker-compose.cobot.yml`
- **Proxy Config**: `proxy/conf/Caddyfile`
- **Base Volumes**: `docker-compose.base.yml`

## Support

For Cobot-specific issues:
- Cobot Help Center: https://helpcenter.cobot.me
- Cobot Support: support@cobot.me

For infrastructure issues:
- Check service logs: `docker logs <container_name>`
- Review configuration files
- Verify network connectivity

## Next Steps

1. ✅ Configure DNS CNAME record
2. ✅ Set custom domain in Cobot admin
3. ✅ Start services: `./manage.sh start`
4. ✅ Test access: `https://cobot.jsrspaces.com`
5. ✅ Configure Cobot workspace settings
6. ✅ Integrate with your website if needed

