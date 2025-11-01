# Cobot - Coworking Space Management

## About Cobot

Cobot is a popular coworking space management platform, but it is **primarily a SaaS (Software as a Service) solution** and does not have an official self-hosted version available.

## ✅ Cobot Integration Configured

**Cobot integration is now set up!** You can use Cobot's SaaS service with your custom domain.

- ✅ Configuration files ready
- ✅ Proxy routing configured for `cobot.jsrspaces.com`
- ✅ See `COBOT-SETUP.md` for complete setup instructions

### Quick Setup

1. Add DNS CNAME: `cobot.jsrspaces.com` → `domains.cobot.me`
2. Configure custom domain in Cobot admin panel
3. Start services: `./manage.sh start`

For detailed instructions, see **[COBOT-SETUP.md](./COBOT-SETUP.md)**.

## Self-Hosted Alternatives

Since Cobot doesn't offer self-hosted deployment, we recommend using a combination of the tools already in this infrastructure:

### Recommended Stack:

1. **ERPNext** (Already Added ✅)
   - Member management & CRM
   - Billing & invoicing
   - Subscription management
   - Access at: `https://erp.jsrspaces.com`

2. **Booked Scheduler** (Just Added ✅)
   - Resource booking (desks, rooms, equipment)
   - Member self-service portal
   - Calendar integration
   - Access at: `https://booked.jsrspaces.com`

3. **Cal.com** (Available in main infrastructure)
   - Meeting room scheduling
   - Member calendars
   - Booking system

4. **Formbricks** (Available in main infrastructure)
   - Member onboarding forms
   - Feedback collection
   - Surveys

## What Cobot Offers vs. Our Stack

| Cobot Feature | Our Solution |
|---------------|--------------|
| Member Management | ERPNext (Members, Contacts) |
| Billing & Invoicing | ERPNext (Invoicing, Subscriptions) |
| Resource Booking | Booked Scheduler |
| Access Control | Can integrate with IoT/Home Assistant |
| Member Portal | ERPNext + Custom Website |
| Reporting | ERPNext Reports + Analytics |

## Integration Options

You can connect these tools using:

- **n8n** (Already in main infrastructure) - Automate workflows between services
- **ERPNext APIs** - Integrate with booking systems
- **Webhooks** - Connect services together

## Future: If Cobot Self-Hosted Becomes Available

If Cobot releases a self-hosted version in the future:

1. Uncomment `docker-compose.cobot.yml` in `docker-compose.yml`
2. Update the image in `docker-compose.cobot.yml`
3. Add proxy route in `proxy/conf/Caddyfile`
4. Add volumes to `docker-compose.base.yml`
5. Run `./manage.sh start`

## Alternative: Cobot-API Integration

If you want to use Cobot's SaaS service but integrate it with your infrastructure:

- Use n8n to create workflows
- Use ERPNext APIs to sync data
- Use webhooks for real-time updates

## Current Coworking Stack Summary

Your infrastructure now includes:

✅ **ERPNext** - Full ERP for coworking space management  
✅ **Booked Scheduler** - Resource booking system  
✅ **Website** - Public-facing website  
✅ **Proxy (Caddy)** - SSL & routing  

This combination provides similar functionality to Cobot but with full self-hosted control!

