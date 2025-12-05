/**
 * Analytics Integration
 * Supports both Google Analytics 4 and Umami Analytics
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
 * Track conversion events (GA4 only)
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
 * Track conversion events in all analytics (GA4 + Umami)
 */
export const trackConversionAll = {
  contactFormSubmit: () => {
    trackConversion.contactFormSubmit();
    if (import.meta.env.VITE_UMAMI_WEBSITE_ID) {
      import('./umami').then(({ trackUmamiConversion }) => {
        trackUmamiConversion.contactFormSubmit();
      });
    }
  },

  whatsappClick: () => {
    trackConversion.whatsappClick();
    if (import.meta.env.VITE_UMAMI_WEBSITE_ID) {
      import('./umami').then(({ trackUmamiConversion }) => {
        trackUmamiConversion.whatsappClick();
      });
    }
  },

  newsletterSignup: () => {
    trackConversion.newsletterSignup();
    if (import.meta.env.VITE_UMAMI_WEBSITE_ID) {
      import('./umami').then(({ trackUmamiConversion }) => {
        trackUmamiConversion.newsletterSignup();
      });
    }
  },

  tourBooking: () => {
    trackConversion.tourBooking();
    if (import.meta.env.VITE_UMAMI_WEBSITE_ID) {
      import('./umami').then(({ trackUmamiConversion }) => {
        trackUmamiConversion.tourBooking();
      });
    }
  },

  pricingView: (planName: string) => {
    trackConversion.pricingView(planName);
    if (import.meta.env.VITE_UMAMI_WEBSITE_ID) {
      import('./umami').then(({ trackUmamiConversion }) => {
        trackUmamiConversion.pricingView(planName);
      });
    }
  },

  buttonClick: (buttonName: string, location?: string) => {
    trackEngagement.buttonClick(buttonName, location);
    if (import.meta.env.VITE_UMAMI_WEBSITE_ID) {
      import('./umami').then(({ trackUmamiConversion }) => {
        trackUmamiConversion.buttonClick(buttonName, location);
      });
    }
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

/**
 * Initialize all analytics (GA4 + Umami)
 */
export function initAllAnalytics(): void {
  // Initialize Google Analytics if configured
  if (GA_MEASUREMENT_ID) {
    initGoogleAnalytics();
  }

  // Initialize Umami if configured
  if (import.meta.env.VITE_UMAMI_WEBSITE_ID) {
    import('./umami').then(({ initUmami }) => {
      initUmami();
    });
  }
}

/**
 * Track page view in all analytics
 */
export function trackPageViewAll(path: string, title?: string): void {
  // Track in Google Analytics
  trackPageView(path, title);

  // Track in Umami
  if (import.meta.env.VITE_UMAMI_WEBSITE_ID) {
    import('./umami').then(({ trackUmamiPageView }) => {
      trackUmamiPageView(path, title);
    });
  }
}

/**
 * Track event in all analytics
 */
export function trackEventAll(
  eventName: string,
  eventParams?: {
    category?: string;
    action?: string;
    label?: string;
    value?: number;
    [key: string]: any;
  }
): void {
  // Track in Google Analytics
  trackEvent(eventName, eventParams);

  // Track in Umami
  if (import.meta.env.VITE_UMAMI_WEBSITE_ID) {
    import('./umami').then(({ trackUmamiEvent }) => {
      trackUmamiEvent(eventName, {
        category: eventParams?.category,
        action: eventParams?.action,
        label: eventParams?.label,
        value: eventParams?.value,
      });
    });
  }
}

