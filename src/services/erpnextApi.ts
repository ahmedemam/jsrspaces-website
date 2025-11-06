/**
 * ERPNext API Service
 * Handles integration with ERPNext for contact form submissions and WhatsApp messages
 */

export interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  interest?: string;
  message?: string;
  visitorId?: string;
}

export interface ERPNextLead {
  lead_name: string;
  email_id: string;
  phone?: string;
  mobile_no?: string;
  source: string;
  company_name?: string;
  notes?: string;
  custom_interest?: string;
  status?: string;
  type?: string;
  lead_owner?: string;
}

export interface ERPNextContact {
  first_name: string;
  last_name?: string;
  email_id: string;
  mobile_no?: string;
  phone?: string;
  status?: string;
  salutation?: string;
}

export interface ERPNextCustomer {
  customer_name: string;
  customer_type?: string;
  customer_group?: string;
  territory?: string;
  email_id?: string;
  mobile_no?: string;
  phone?: string;
}

/**
 * ERPNext API Configuration
 * These should be set via environment variables in production
 */
const ERP_API_BASE_URL = import.meta.env.VITE_ERP_API_URL || 'https://erp.jsrspaces.com';
const ERP_API_KEY = import.meta.env.VITE_ERP_API_KEY || '';
const ERP_API_SECRET = import.meta.env.VITE_ERP_API_SECRET || '';

/**
 * Get ERPNext API authentication headers
 */
function getAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  // ERPNext API authentication using API Key and Secret
  if (ERP_API_KEY && ERP_API_SECRET) {
    headers['Authorization'] = `token ${ERP_API_KEY}:${ERP_API_SECRET}`;
  }

  return headers;
}

/**
 * Create a Lead in ERPNext CRM from contact form data
 */
export async function createLeadInERPNext(data: ContactFormData): Promise<ERPNextLead | null> {
  try {
    // Map interest to CRM status/type
    const interestMap: Record<string, { type?: string; status?: string }> = {
      tour: { type: 'Client', status: 'Open' },
      hotdesk: { type: 'Client', status: 'Open' },
      dedicated: { type: 'Client', status: 'Open' },
      office: { type: 'Client', status: 'Open' },
      enterprise: { type: 'Client', status: 'Open' },
      event: { type: 'Client', status: 'Open' },
    };

    const interestInfo = data.interest ? interestMap[data.interest] : {};

    const leadData: ERPNextLead = {
      lead_name: `${data.firstName} ${data.lastName || ''}`.trim(),
      email_id: data.email,
      phone: data.phone || '',
      mobile_no: data.phone || '',
      source: 'Website Contact Form',
      notes: data.message || '',
      status: interestInfo.status || 'Open',
      type: interestInfo.type || 'Client',
      // Store interest in a custom field or notes
      custom_interest: data.interest || '',
    };

    const response = await fetch(`${ERP_API_BASE_URL}/api/resource/Lead`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('ERPNext API Error:', errorText);
      throw new Error(`Failed to create lead: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error creating lead in ERPNext:', error);
    throw error;
  }
}

/**
 * Create a Contact in ERPNext CRM
 */
export async function createContactInERPNext(data: ContactFormData): Promise<ERPNextContact | null> {
  try {
    const contactData: ERPNextContact = {
      first_name: data.firstName,
      last_name: data.lastName || '',
      email_id: data.email,
      mobile_no: data.phone || '',
      phone: data.phone || '',
      status: 'Open',
    };

    const response = await fetch(`${ERP_API_BASE_URL}/api/resource/Contact`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('ERPNext API Error:', errorText);
      throw new Error(`Failed to create contact: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error creating contact in ERPNext:', error);
    throw error;
  }
}

/**
 * Link Contact to Lead in ERPNext CRM
 */
export async function linkContactToLead(contactName: string, leadName: string): Promise<boolean> {
  try {
    // Update the Lead to link it to the Contact
    const response = await fetch(`${ERP_API_BASE_URL}/api/resource/Lead/${leadName}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify({
        contact_person: contactName,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Error linking contact to lead:', error);
    return false;
  }
}

/**
 * Send WhatsApp message via ERPNext
 * This assumes ERPNext has WhatsApp integration configured
 * 
 * Note: You may need to create a custom API endpoint in ERPNext for WhatsApp integration.
 * See ERPNext-INTEGRATION.md for details.
 */
export async function sendWhatsAppViaERPNext(
  phone: string,
  message: string,
  leadData?: ContactFormData
): Promise<boolean> {
  try {
    // First, create the lead if provided
    let leadName = '';
    if (leadData) {
      const lead = await createLeadInERPNext(leadData);
      if (lead) {
        leadName = lead.lead_name;
      }
    }

    // Try multiple possible WhatsApp API endpoints
    const possibleEndpoints = [
      // Custom API endpoint (create this in your ERPNext custom app)
      `${ERP_API_BASE_URL}/api/method/website.api.send_whatsapp_message`,
      // Frappe WhatsApp integration (if installed)
      `${ERP_API_BASE_URL}/api/method/frappe.integrations.doctype.whatsapp_webhook.whatsapp_webhook.send_message`,
      // Alternative WhatsApp integration
      `${ERP_API_BASE_URL}/api/method/frappe.integrations.doctype.whatsapp_settings.whatsapp_settings.send_message`,
    ];

    const whatsappData = {
      phone: phone,
      message: message,
      lead_name: leadName,
    };

    let lastError: Error | null = null;

    // Try each endpoint until one works
    for (const endpoint of possibleEndpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify(whatsappData),
        });

        if (response.ok) {
          return true;
        }
      } catch (error) {
        lastError = error as Error;
        // Continue to next endpoint
      }
    }

    // If all endpoints fail, log warning but don't throw error
    // The lead was already created, which is the main goal
    console.warn('WhatsApp API endpoint not available. Lead was created in ERPNext.');
    console.warn('To enable WhatsApp integration, create a custom API endpoint in ERPNext.');
    console.warn('See ERPNext-INTEGRATION.md for instructions.');
    
    return false; // WhatsApp failed but lead was created
  } catch (error) {
    console.error('Error in WhatsApp integration:', error);
    
    // Don't throw error - lead creation is more important
    // The lead was already created earlier
    return false;
  }
}

/**
 * Submit contact form to ERPNext CRM
 * Creates a Lead and optionally a Contact, then sends WhatsApp message
 */
export async function submitContactFormToERPNext(
  data: ContactFormData,
  sendWhatsApp: boolean = true,
  createContact: boolean = true
): Promise<{ success: boolean; lead?: ERPNextLead; contact?: ERPNextContact; message?: string; whatsappSent?: boolean }> {
  try {
    // Create lead in ERPNext CRM
    const lead = await createLeadInERPNext(data);

    let contact: ERPNextContact | undefined;
    
    // Optionally create a Contact and link it to the Lead
    if (createContact && lead) {
      try {
        contact = await createContactInERPNext(data);
        // Link contact to lead using the lead name from the response
        if (contact && lead.lead_name) {
          // Use the lead name from the created lead
          const leadName = (lead as any).name || lead.lead_name;
          await linkContactToLead((contact as any).name || contact.email_id, leadName);
        }
      } catch (contactError) {
        console.warn('Failed to create contact, but lead was created:', contactError);
        // Continue even if contact creation fails
      }
    }

    let whatsappSent = false;
    
    // Send WhatsApp message if requested and phone number is provided
    if (sendWhatsApp && data.phone) {
      const whatsappMessage = `Hi! I'm ${data.firstName}${data.lastName ? ' ' + data.lastName : ''} and I'm interested in JSR Spaces. ${data.message || 'Hi, I\'m interested in JSR Spaces!'}`;
      
      // Note: We don't pass leadData again since lead is already created
      // The WhatsApp function will handle this gracefully
      whatsappSent = await sendWhatsAppViaERPNext(data.phone, whatsappMessage);
    }

    // Determine success message based on WhatsApp status
    let successMessage = 'Thank you! Your information has been received. We will contact you soon.';
    if (sendWhatsApp && data.phone) {
      if (whatsappSent) {
        successMessage = 'Your message has been sent! We will contact you soon via WhatsApp.';
      } else {
        successMessage = 'Thank you! Your information has been saved. We will contact you soon (WhatsApp integration may need configuration).';
      }
    }

    return {
      success: true,
      lead,
      contact,
      whatsappSent,
      message: successMessage,
    };
  } catch (error) {
    console.error('Error submitting contact form to ERPNext:', error);
    return {
      success: false,
      message: 'Sorry, there was an error submitting your form. Please try again or contact us directly.',
    };
  }
}

/**
 * Test ERPNext API connection
 */
export async function testERPNextConnection(): Promise<boolean> {
  try {
    const response = await fetch(`${ERP_API_BASE_URL}/api/method/ping`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    
    return response.ok;
  } catch (error) {
    console.error('ERPNext connection test failed:', error);
    return false;
  }
}

