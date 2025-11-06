# ERPNext Integration Guide

This document describes how the JSR Spaces website integrates with ERPNext for contact form submissions and visitor tracking.

## Features

1. **Unique Visitor Tracking**: Tracks unique website visitors using localStorage and browser fingerprinting
2. **ERPNext Contact Form Integration**: Contact form submissions are automatically sent to ERPNext as Leads
3. **WhatsApp Integration**: Contact form submissions trigger WhatsApp messages via ERPNext

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# ERPNext API Configuration
VITE_ERP_API_URL=https://erp.jsrspaces.com
VITE_ERP_API_KEY=your_api_key_here
VITE_ERP_API_SECRET=your_api_secret_here
```

### Getting ERPNext API Credentials

1. Log in to your ERPNext instance at `https://erp.jsrspaces.com`
2. Go to **Settings** > **Users** > **API Access**
3. Generate a new API Key and API Secret
4. Copy the credentials to your `.env` file

## How It Works

### Visitor Tracking

- **Location**: `src/utils/visitorTracking.ts`
- **Implementation**: Uses localStorage and browser fingerprinting to identify unique visitors
- **Tracking**: Automatically tracks visitors when the app loads (see `src/App.tsx`)
- **Storage**: Visitor data is stored in localStorage with keys:
  - `jsrspaces_visitor_id`: Unique visitor identifier
  - `jsrspaces_first_visit`: Timestamp of first visit
  - `jsrspaces_last_visit`: Timestamp of last visit
  - `jsrspaces_visit_count`: Total number of visits

### Contact Form Integration

- **Location**: `src/components/Contact.tsx`
- **Service**: `src/services/erpnextApi.ts`
- **Flow**:
  1. User submits contact form
  2. Form data is sent to ERPNext API
  3. A Lead is created in ERPNext with the contact information
  4. If phone number is provided, a WhatsApp message is sent via ERPNext
  5. User receives confirmation via toast notification

### ERPNext API Service

The `erpnextApi.ts` service provides the following functions:

- `createLeadInERPNext(data)`: Creates a Lead in ERPNext
- `sendWhatsAppViaERPNext(phone, message, leadData)`: Sends WhatsApp message via ERPNext
- `submitContactFormToERPNext(data, sendWhatsApp)`: Main function that creates Lead and optionally sends WhatsApp

## ERPNext Setup

### Required ERPNext Configuration

1. **API Access**: Ensure API access is enabled in ERPNext
2. **Lead Doctype**: The Lead doctype should be available (default in ERPNext)
3. **WhatsApp Integration**: 
   - Install WhatsApp Business API integration in ERPNext
   - Or configure a custom API endpoint for sending WhatsApp messages
   - The current implementation includes a fallback that still creates the Lead even if WhatsApp fails

### Custom ERPNext API Endpoint (Optional)

If you want to create a custom API endpoint in ERPNext for handling contact form submissions:

1. Create a new API endpoint in ERPNext:
   ```python
   # In your ERPNext custom app
   import frappe
   
   @frappe.whitelist(allow_guest=True)
   def submit_contact_form(first_name, last_name, email, phone, interest, message):
       # Create Lead
       lead = frappe.get_doc({
           "doctype": "Lead",
           "lead_name": f"{first_name} {last_name}",
           "email_id": email,
           "phone": phone,
           "mobile_no": phone,
           "source": "Website Contact Form",
           "notes": message,
       })
       lead.insert()
       
       # Send WhatsApp if configured
       # ... WhatsApp sending logic ...
       
       return {"success": True, "lead_name": lead.name}
   ```

2. Update the `submitContactFormToERPNext` function in `src/services/erpnextApi.ts` to use your custom endpoint.

## Testing

### Test Visitor Tracking

1. Open the website in your browser
2. Open browser console
3. You should see a log message: `Visitor tracked: {visitorId, firstVisit, ...}`
4. Check localStorage for visitor data

### Test Contact Form

1. Fill out the contact form
2. Submit the form
3. Check ERPNext for the new Lead
4. Verify WhatsApp message was sent (if configured)

### Test ERPNext Connection

You can test the ERPNext API connection by calling:

```typescript
import { testERPNextConnection } from './services/erpnextApi';

testERPNextConnection().then(connected => {
  console.log('ERPNext connected:', connected);
});
```

## Troubleshooting

### Contact Form Not Submitting

1. Check browser console for errors
2. Verify ERPNext API credentials in `.env` file
3. Check ERPNext API access is enabled
4. Verify CORS settings in ERPNext allow requests from your website domain

### WhatsApp Not Sending

- The current implementation includes a fallback that creates the Lead even if WhatsApp fails
- Check ERPNext WhatsApp integration configuration
- Verify the WhatsApp API endpoint in ERPNext
- Check ERPNext logs for WhatsApp-related errors

### Visitor Tracking Not Working

- Check browser console for errors
- Verify localStorage is enabled in the browser
- Check if browser blocks localStorage (some privacy modes do)

## Future Enhancements

- Sync visitor data to ERPNext backend
- Add analytics dashboard for visitor statistics
- Implement server-side visitor tracking for more accurate counts
- Add visitor behavior tracking (pages viewed, time spent, etc.)

