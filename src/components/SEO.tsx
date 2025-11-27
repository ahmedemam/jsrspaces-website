import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

/**
 * SEO Component for dynamic meta tag management
 * Updates meta tags based on current page/section
 */
export function SEO({
  title = "JSR Spaces - Premium Coworking Space in Nasr City, Cairo",
  description = "JSR Spaces is Cairo's premier coworking space in Nasr City. Offering hot desks, dedicated desks, private offices, and event spaces. 24/7 access, modern amenities, and a vibrant community.",
  keywords = "coworking space Cairo, coworking space Nasr City, hot desk Cairo, private office Cairo, event space Cairo, shared office space",
  image = "https://www.jsrspaces.com/images/og-image.jpg",
  url = "https://www.jsrspaces.com",
  type = "website",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('title', title);

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', type, 'property');

    // Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:url', url);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
}

/**
 * Structured Data (JSON-LD) for Local Business
 * This helps search engines understand your business
 */
export function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JSR Spaces",
      "image": "https://www.jsrspaces.com/images/logo.jpg",
      "@id": "https://www.jsrspaces.com",
      "url": "https://www.jsrspaces.com",
      "telephone": "+201040806692",
      "email": "hi@jsrspaces.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30B Asmaa Fahmi, Al Golf, Nasr City",
        "addressLocality": "Nasr City",
        "addressRegion": "Cairo",
        "postalCode": "4451422",
        "addressCountry": "EG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.0444,
        "longitude": 31.2357
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "16:00"
        }
      ],
      "priceRange": "$$",
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "High-Speed WiFi"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Meeting Rooms"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "24/7 Access"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Parking"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Kitchen Facilities"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/jsrspaces",
        "https://www.instagram.com/jsrspaces",
        "https://www.linkedin.com/company/jsrspaces"
      ]
    };

    // Remove existing structured data script
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add structured data script
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}

/**
 * FAQPage Structured Data (JSON-LD)
 * Adds FAQ schema for rich snippets in search results
 */
export function FAQStructuredData() {
  useEffect(() => {
    const faqs = [
      {
        "@type": "Question",
        "name": "What's included in the membership?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All memberships include high-speed WiFi, access to common areas, printing services, complimentary coffee and tea, community events, and mail handling. Higher-tier plans include dedicated desks, meeting rooms, and 24/7 access."
        }
      },
      {
        "@type": "Question",
        "name": "Can I visit before committing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer free tours every weekday. You can also purchase a day pass to experience our space before choosing a membership plan. Book your tour online or call us directly."
        }
      },
      {
        "@type": "Question",
        "name": "Are there long-term contracts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible terms to suit your needs. Our plans range from daily passes to monthly memberships with no long-term commitment required. Enterprise clients can opt for custom contracts with preferred rates."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer meeting room access?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All members can book meeting rooms. Hot Desk members get 5 hours/month, Dedicated Desk members get 10 hours/month, and Private Office members enjoy unlimited access. Additional hours can be purchased."
        }
      },
      {
        "@type": "Question",
        "name": "Is parking available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide complimentary parking for Private Office members and valet parking services. Other members can use nearby public parking facilities. We also have secure bike storage and EV charging stations."
        }
      },
      {
        "@type": "Question",
        "name": "What are your operating hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our spaces are open Monday-Friday 8am-8pm and Saturday 9am-5pm. Dedicated Desk and Private Office members enjoy 24/7 access with their keycard. Reception services are available during business hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can I upgrade or downgrade my plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we understand your needs may change. You can upgrade immediately or downgrade at the end of your current billing cycle. Our team will help you transition smoothly to your new plan."
        }
      },
      {
        "@type": "Question",
        "name": "Do you host networking events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We host 50+ events monthly including workshops, networking mixers, expert talks, wellness sessions, and social gatherings. All events are free for members and many are open to guests."
        }
      }
    ];

    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs
    };

    // Remove existing FAQ structured data script
    const existingScript = document.getElementById('faq-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add FAQ structured data script
    const script = document.createElement('script');
    script.id = 'faq-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('faq-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}

/**
 * Review/AggregateRating Structured Data (JSON-LD)
 * Adds review schema for rich snippets with star ratings
 */
export function ReviewStructuredData() {
  useEffect(() => {
    const reviews = [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Ahmed"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "JSR Spaces transformed how we work. The community here is unmatched—I've found clients, partners, and mentors all under one roof."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mohamed Hassan"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The facilities are world-class. From the podcast studio to the rooftop terrace, every detail is carefully curated for creative professionals."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Layla Ibrahim"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "As someone who travels constantly, JSR's global network is invaluable. Plus, the Cairo location is stunning and incredibly productive."
      }
    ];

    const reviewStructuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "JSR Spaces",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "50",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviews
    };

    // Remove existing review structured data script
    const existingScript = document.getElementById('review-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add review structured data script
    const script = document.createElement('script');
    script.id = 'review-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(reviewStructuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('review-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}

/**
 * BreadcrumbList Structured Data (JSON-LD)
 * Helps search engines understand site navigation
 */
export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  useEffect(() => {
    const breadcrumbItems = items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }));

    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    // Remove existing breadcrumb structured data script
    const existingScript = document.getElementById('breadcrumb-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Add breadcrumb structured data script
    const script = document.createElement('script');
    script.id = 'breadcrumb-structured-data';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [items]);

  return null;
}

