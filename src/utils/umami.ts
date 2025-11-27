/**
 * Umami Analytics Integration
 * Privacy-focused, self-hosted web analytics
 * Instance: https://analytics.masteryhub-its.com
 */

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
      identify: (userId: string, userData?: Record<string, any>) => void;
    };
  }
}

// Get Umami configuration from environment variables
const UMAMI_SCRIPT_URL = import.meta.env.VITE_UMAMI_SCRIPT_URL || 'https://analytics.masteryhub-its.com/script.js';
const UMAMI_WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID || '';

/**
 * Initialize Umami Analytics
 */
export function initUmami(): void {
  if (!UMAMI_WEBSITE_ID || typeof window === 'undefined') {
    if (import.meta.env.DEV) {
      console.warn('Umami: Website ID not configured. Set VITE_UMAMI_WEBSITE_ID in .env');
    }
    return;
  }

  // Check if Umami is already loaded
  if (document.querySelector('script[data-website-id]')) {
    return;
  }

  // Create and load Umami script
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = UMAMI_SCRIPT_URL;
  script.setAttribute('data-website-id', UMAMI_WEBSITE_ID);
  
  // Optional: Configure data attributes
  // script.setAttribute('data-domains', 'jsrspaces.com');
  // script.setAttribute('data-auto-track', 'true');
  
  document.head.appendChild(script);

  // Wait for script to load
  script.onload = () => {
    if (import.meta.env.DEV) {
      console.log('Umami analytics loaded successfully');
    }
  };

  script.onerror = () => {
    if (import.meta.env.DEV) {
      console.error('Failed to load Umami analytics script');
    }
  };
}

/**
 * Track page view (automatic with Umami, but can be called manually)
 */
export function trackUmamiPageView(path?: string, title?: string): void {
  if (!window.umami) return;

  // Umami automatically tracks page views, but we can track custom events
  const eventData: Record<string, any> = {};
  
  if (path) {
    eventData.path = path;
  }
  
  if (title) {
    eventData.title = title;
  }

  // Track as custom event if needed
  if (Object.keys(eventData).length > 0) {
    window.umami.track('pageview', eventData);
  }
}

/**
 * Track custom event
 */
export function trackUmamiEvent(
  eventName: string,
  eventData?: Record<string, string | number>
): void {
  if (!window.umami) return;

  window.umami.track(eventName, eventData);
}

/**
 * Track conversion events (aligned with GA4 events)
 */
export const trackUmamiConversion = {
  contactFormSubmit: () => {
    trackUmamiEvent('contact_form_submit', {
      type: 'conversion',
      category: 'form',
    });
  },

  whatsappClick: () => {
    trackUmamiEvent('whatsapp_click', {
      type: 'conversion',
      category: 'social',
    });
  },

  newsletterSignup: () => {
    trackUmamiEvent('newsletter_signup', {
      type: 'conversion',
      category: 'form',
    });
  },

  tourBooking: () => {
    trackUmamiEvent('tour_booking', {
      type: 'conversion',
      category: 'booking',
    });
  },

  pricingView: (planName: string) => {
    trackUmamiEvent('pricing_view', {
      type: 'engagement',
      category: 'pricing',
      plan: planName,
    });
  },

  buttonClick: (buttonName: string, location?: string) => {
    trackUmamiEvent('button_click', {
      type: 'engagement',
      category: 'interaction',
      button: buttonName,
      location: location || 'unknown',
    });
  },
};

/**
 * Identify user (if you have user IDs)
 */
export function identifyUmamiUser(userId: string, userData?: Record<string, any>): void {
  if (!window.umami) return;

  window.umami.identify(userId, userData);
}

