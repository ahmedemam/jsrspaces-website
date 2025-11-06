/**
 * Google Analytics 4 Integration
 * Tracks page views, events, and conversions
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'set' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

/**
 * Initialize Google Analytics
 */
export function initGoogleAnalytics(): void {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  // Create dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];

  // Define gtag function
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  // Set current date
  window.gtag('js', new Date());

  // Configure GA
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: true,
  });

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/**
 * Track page view
 */
export function trackPageView(path: string, title?: string): void {
  if (!window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
  });
}

/**
 * Track custom event
 */
export function trackEvent(
  eventName: string,
  eventParams?: {
    category?: string;
    action?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
): void {
  if (!window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('event', eventName, {
    event_category: eventParams?.category,
    event_label: eventParams?.label,
    value: eventParams?.value,
    ...eventParams,
  });
}

/**
 * Track conversion events
 */
export const trackConversion = {
  contactFormSubmit: () => {
    trackEvent('contact_form_submit', {
      category: 'conversion',
      action: 'submit',
      label: 'Contact Form',
    });
  },

  whatsappClick: () => {
    trackEvent('whatsapp_click', {
      category: 'conversion',
      action: 'click',
      label: 'WhatsApp Button',
    });
  },

  newsletterSignup: () => {
    trackEvent('newsletter_signup', {
      category: 'conversion',
      action: 'signup',
      label: 'Newsletter',
    });
  },

  tourBooking: () => {
    trackEvent('tour_booking', {
      category: 'conversion',
      action: 'book',
      label: 'Tour Booking',
    });
  },

  pricingView: (planName: string) => {
    trackEvent('pricing_view', {
      category: 'engagement',
      action: 'view',
      label: planName,
    });
  },

  scrollDepth: (depth: number) => {
    trackEvent('scroll_depth', {
      category: 'engagement',
      action: 'scroll',
      label: `${depth}%`,
      value: depth,
    });
  },
};

/**
 * Track user engagement
 */
export const trackEngagement = {
  buttonClick: (buttonName: string, location?: string) => {
    trackEvent('button_click', {
      category: 'engagement',
      action: 'click',
      label: buttonName,
      location: location || 'unknown',
    });
  },

  sectionView: (sectionName: string) => {
    trackEvent('section_view', {
      category: 'engagement',
      action: 'view',
      label: sectionName,
    });
  },

  timeOnPage: (seconds: number) => {
    trackEvent('time_on_page', {
      category: 'engagement',
      action: 'time',
      value: seconds,
    });
  },

  videoPlay: (videoName: string) => {
    trackEvent('video_play', {
      category: 'engagement',
      action: 'play',
      label: videoName,
    });
  },
};

/**
 * Track errors
 */
export function trackError(error: Error, errorInfo?: string): void {
  trackEvent('error', {
    category: 'error',
    action: 'error',
    label: error.message,
    error_info: errorInfo,
    error_name: error.name,
  });
}

/**
 * Set user properties (after login/identification)
 */
export function setUserProperties(userId: string, properties?: Record<string, any>): void {
  if (!window.gtag || !GA_MEASUREMENT_ID) return;

  window.gtag('set', 'user_properties', {
    user_id: userId,
    ...properties,
  });
}

