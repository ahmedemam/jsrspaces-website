# Cobot Integration Setup - Fresh Install

## Overview

Cobot integration is now configured from scratch. Cobot uses SaaS (hosted service) and is accessed via reverse proxy.

## Configuration Status

✅ **docker-compose.cobot.yml** - Clean configuration  
✅ **proxy/conf/Caddyfile** - Proxy route configured  
✅ **docker-compose.yml** - Includes Cobot config

## Quick Setup Steps

### 1. Start Services

```bash
./manage.sh start
```

This will:
- Load Cobot configuration
- Start proxy with Cobot route
- Reload proxy to pick up new configuration

### 2. Configure DNS

Add a CNAME record in your DNS provider:

```
Type: CNAME
Name: cobot
Value: domains.cobot.me
TTL: 3600 (or default)
```

This creates: `cobot.jsrspaces.com` → `domains.cobot.me`

### 3. Configure Cobot Admin

1. Log into your Cobot account
2. Go to: **Customize » Domain**
3. Enter your custom domain: `cobot.jsrspaces.com`
4. Save the settings

### 4. Wait for DNS Propagation

DNS changes can take:
- 5-15 minutes (usually)
- Up to 48 hours (worst case)

### 5. Verify

Visit: `https://cobot.jsrspaces.com`

You should see your Cobot interface.

## Troubleshooting

### Proxy Not Picking Up Configuration

If the proxy hasn't reloaded:

```bash
./manage.sh proxy-reload
```

Or restart the proxy:

```bash
docker restart jsrspaces_proxy
```

### Check Proxy Configuration

Verify the Caddyfile is loaded:

```bash
docker exec jsrspaces_proxy cat /etc/caddy/Caddyfile | grep -A 10 "cobot"
```

### Check Proxy Logs

```bash
docker logs jsrspaces_proxy | grep -i cobot
```

Or view all recent logs:

```bash
docker logs jsrspaces_proxy --tail 50
```

### DNS Issues

Verify DNS is resolving:

```bash
dig cobot.jsrspaces.com
# or
nslookup cobot.jsrspaces.com
```

Should show: `domains.cobot.me`

### SSL Certificate Issues

Caddy automatically gets SSL certificates. If there are issues:

1. Check DNS is configured correctly
2. Ensure port 80 and 443 are open
3. Wait for certificate generation (30-60 seconds)

Check certificate logs:

```bash
docker logs jsrspaces_proxy | grep -i certificate
```

## Architecture

```
User → cobot.jsrspaces.com → Caddy Proxy → domains.cobot.me:443 → Cobot SaaS
```

- **No Docker container needed** for Cobot (it's SaaS)
- **Routing handled by** `jsrspaces_proxy` (Caddy)
- **SSL/TLS** automatically managed by Caddy

## Files

- `docker-compose.cobot.yml` - Docker Compose configuration
- `proxy/conf/Caddyfile` - Proxy routing configuration
- `COBOT-SETUP.md` - This file

## Support

- **Cobot Support**: https://helpcenter.cobot.me
- **Cobot Custom Domains**: https://helpcenter.cobot.me/en/articles/4917968-custom-domains
