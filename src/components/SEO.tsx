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

