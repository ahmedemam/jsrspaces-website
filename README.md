
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

  ## Documentation

  - [ERPNext Integration Guide](./ERPNext-INTEGRATION.md) - Complete guide for ERPNext integration and visitor tracking
  