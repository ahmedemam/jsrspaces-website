# ERPNext CRM Integration Guide

This guide explains how the JSR Spaces website integrates with ERPNext's CRM (Customer Relationship Management) features.

## CRM Features Overview

The integration creates comprehensive CRM records in ERPNext:

1. **Leads**: Created from contact form submissions
2. **Contacts**: Personal contact information linked to leads
3. **Lead Status Tracking**: Automatically sets status based on interest type
4. **Source Tracking**: Marks all leads as coming from "Website Contact Form"

## CRM Data Flow

```
Website Contact Form
    ↓
Create Lead in ERPNext CRM
    ↓
Create Contact (optional)
    ↓
Link Contact to Lead
    ↓
Send WhatsApp Message (optional)
```

## Lead Creation

### Lead Fields Mapped

| Website Field | ERPNext Lead Field | Notes |
|--------------|-------------------|-------|
| First Name + Last Name | `lead_name` | Combined name |
| Email | `email_id` | Primary email |
| Phone | `phone` / `mobile_no` | Both fields populated |
| Interest Type | `custom_interest` | Stored for reference |
| Message | `notes` | Customer message |
| - | `source` | Always "Website Contact Form" |
| - | `status` | Set to "Open" |
| - | `type` | Set to "Client" |

### Interest Type Mapping

The interest selection from the contact form is stored in the `custom_interest` field:

- `tour` → Booking a Tour
- `hotdesk` → Hot Desk Membership
- `dedicated` → Dedicated Desk
- `office` → Private Office
- `enterprise` → Enterprise Solution
- `event` → Event Space Rental

## Contact Creation

When `createContact: true` is passed to `submitContactFormToERPNext()`, the system also creates a Contact record:

### Contact Fields Mapped

| Website Field | ERPNext Contact Field |
|--------------|----------------------|
| First Name | `first_name` |
| Last Name | `last_name` |
| Email | `email_id` |
| Phone | `mobile_no` / `phone` |
| - | `status` | Set to "Open" |

### Linking Contacts to Leads

After creating both Lead and Contact, the system automatically links them:
- The Contact is linked to the Lead via the `contact_person` field in the Lead

## CRM API Functions

### `createLeadInERPNext(data)`
Creates a Lead in ERPNext CRM with all form data.

**Returns**: `ERPNextLead` object with created lead data

### `createContactInERPNext(data)`
Creates a Contact in ERPNext CRM.

**Returns**: `ERPNextContact` object with created contact data

### `linkContactToLead(contactName, leadName)`
Links an existing Contact to a Lead in ERPNext.

**Parameters**:
- `contactName`: Name/ID of the contact
- `leadName`: Name/ID of the lead

**Returns**: `boolean` indicating success

### `submitContactFormToERPNext(data, sendWhatsApp, createContact)`
Main function that orchestrates the CRM workflow.

**Parameters**:
- `data`: Contact form data
- `sendWhatsApp`: Whether to send WhatsApp message (default: `true`)
- `createContact`: Whether to create Contact record (default: `true`)

**Returns**: Object with:
- `success`: Boolean indicating overall success
- `lead`: Created lead data
- `contact`: Created contact data (if `createContact` was true)
- `whatsappSent`: Whether WhatsApp was sent
- `message`: Success/error message

## ERPNext CRM Setup

### 1. Enable CRM Module

In ERPNext:
1. Go to **Settings** > **Modules**
2. Ensure **CRM** module is enabled
3. Verify **Lead** and **Contact** doctypes are available

### 2. Configure Lead Statuses

Default statuses in ERPNext:
- **Open**: New leads (default for website submissions)
- **Contacted**: When sales team contacts the lead
- **Converted**: When lead becomes a customer
- **Lost**: When lead is not interested

You can customize these in **CRM** > **Lead** > **Customize Form**.

### 3. Configure Lead Sources

Ensure "Website Contact Form" appears in your Lead sources:
1. Go to **CRM** > **Lead**
2. Check **Source** field options
3. Add "Website Contact Form" if not present
4. Or customize the source field in the API call

### 4. Custom Fields (Optional)

If you want to track the interest type more prominently:

1. Go to **Lead** doctype customization
2. Add a custom field:
   - Field Name: `interest_type`
   - Field Type: `Select`
   - Options: `Tour\nHot Desk\nDedicated Desk\nPrivate Office\nEnterprise\nEvent`

3. Update the API service to use this field instead of `custom_interest`

## Viewing CRM Data in ERPNext

### Leads Dashboard

1. Go to **CRM** > **Lead** > **List**
2. Filter by source: "Website Contact Form"
3. View all leads from the website

### Contact List

1. Go to **CRM** > **Contact** > **List**
2. View all contacts created from website submissions

### Lead Details

Each lead shows:
- Contact information
- Source (Website Contact Form)
- Status (Open)
- Notes (customer message)
- Linked Contact (if created)

## CRM Workflow Integration

### Lead Conversion

When a lead becomes a customer:

1. In ERPNext, open the Lead
2. Click **Convert** button
3. ERPNext will:
   - Create a Customer record
   - Convert the Lead to Opportunity (if configured)
   - Link existing Contact

### Follow-up Automation

You can set up ERPNext workflows to:
- Send automatic email follow-ups
- Assign leads to sales team members
- Create follow-up tasks
- Send WhatsApp messages (if configured)

### Example Workflow

1. Website submission creates Lead + Contact
2. ERPNext workflow triggers:
   - Assigns lead to sales team
   - Creates follow-up task
   - Sends notification email
3. Sales team contacts lead
4. Lead status updated to "Contacted"
5. When converted, Customer record created

## Testing CRM Integration

### Test Lead Creation

```typescript
import { createLeadInERPNext } from './services/erpnextApi';

const testData = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  phone: '+201234567890',
  interest: 'tour',
  message: 'Test message',
};

const lead = await createLeadInERPNext(testData);
console.log('Lead created:', lead);
```

### Test Contact Creation

```typescript
import { createContactInERPNext } from './services/erpnextApi';

const contact = await createContactInERPNext(testData);
console.log('Contact created:', contact);
```

### Test Full Flow

```typescript
import { submitContactFormToERPNext } from './services/erpnextApi';

const result = await submitContactFormToERPNext(
  testData,
  true, // send WhatsApp
  true  // create Contact
);

console.log('Result:', result);
// Check ERPNext for Lead and Contact
```

## Troubleshooting

### Leads Not Appearing in ERPNext

1. Check API credentials in `.env` file
2. Verify API access is enabled in ERPNext
3. Check browser console for API errors
4. Verify CORS settings in ERPNext allow your website domain

### Contacts Not Being Created

- Check if `createContact` parameter is `true`
- Verify Contact doctype exists in ERPNext
- Check API response for Contact creation errors

### Contact Not Linked to Lead

- Verify both Lead and Contact were created successfully
- Check that Lead name is correct when linking
- Verify Contact name matches

### Lead Status Not Updating

- Check interest mapping in `createLeadInERPNext()`
- Verify status values match ERPNext configuration
- Check if custom statuses are configured in ERPNext

## Best Practices

1. **Regular Cleanup**: Archive or delete old leads that are no longer relevant
2. **Status Updates**: Regularly update lead statuses based on sales progress
3. **Source Tracking**: Use different sources for different marketing channels
4. **Follow-up Automation**: Set up automated workflows for lead nurturing
5. **Data Quality**: Regularly verify contact information is accurate

## Advanced Features

### Custom Lead Scoring

You can enhance the integration to include lead scoring based on:
- Interest type (Enterprise = higher score)
- Message content (specific keywords)
- Visit history (returning visitors)

### Lead Assignment Rules

Configure ERPNext to automatically assign leads:
- By territory
- By interest type
- By lead source
- Round-robin assignment

### Integration with Other Modules

- **Sales**: Link leads to Quotations
- **Projects**: Create projects for enterprise leads
- **Accounts**: Track revenue from converted leads
- **HR**: Assign leads to specific sales team members

