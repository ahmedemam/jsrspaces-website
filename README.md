
  # JSR Spaces Website

  This is the official website for JSR Spaces coworking space. The original project is available at https://www.figma.com/design/D8Q9HcernZjTDoon3CBlyB/Coworking-Space-Details.

  ## Features

  - **Unique Visitor Tracking**: Automatically tracks unique website visitors using localStorage and browser fingerprinting
  - **ERPNext Integration**: Contact form submissions are automatically sent to ERPNext as Leads
  - **WhatsApp Integration**: Contact form submissions trigger WhatsApp messages via ERPNext

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Configuration

  ### Environment Variables

  For ERPNext integration, create a `.env` file in the root directory:

  ```env
  VITE_ERP_API_URL=https://erp.jsrspaces.com
  VITE_ERP_API_KEY=your_api_key_here
  VITE_ERP_API_SECRET=your_api_secret_here
  ```

  See [ERPNext-INTEGRATION.md](./ERPNext-INTEGRATION.md) for detailed setup instructions.

## Deploy (static site on MasteryHub website VPS)

Production marketing site runs **without** ERPNext or Caddy on `masteryhub-website-machine`. Host nginx owns 80/443 and proxies to the container on `127.0.0.1:8088`.

```bash
git pull
./manage.sh deploy-static
# first time only on the VPS:
sudo cp deploy/nginx/jsrspaces.conf /etc/nginx/sites-available/jsrspaces
sudo ln -sf /etc/nginx/sites-available/jsrspaces /etc/nginx/sites-enabled/jsrspaces
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d www.jsrspaces.com -d jsrspaces.com
```

Compose file: `docker-compose.website-only.yml` (website nginx only). Leave `erp.jsrspaces.com` DNS on the ERP host.

Build-time ERP keys stay in a local `.env` on the VPS (never commit). See Configuration above.

## Documentation

- [ERPNext Integration Guide](./ERPNext-INTEGRATION.md) - Complete guide for ERPNext integration and visitor tracking
