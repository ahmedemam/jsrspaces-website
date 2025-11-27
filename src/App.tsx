import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { trackVisitor, incrementUniqueVisitorCount } from "./utils/visitorTracking";
import { hasCookieConsent } from "./components/CookieConsent";
import { initAllAnalytics, trackPageViewAll } from "./utils/analytics";

function AppContent() {
  const location = useLocation();

  // Track visitor on app load
  useEffect(() => {
    const visitorData = trackVisitor();
    
    // Increment unique visitor count if this is a new visitor
    if (visitorData.isNewVisitor) {
      incrementUniqueVisitorCount();
    }
    
    // Optionally send visitor data to backend/ERPNext
    // This is commented out by default - uncomment if you want to sync with ERPNext
    // sendVisitorDataToBackend(visitorData).catch(console.error);
    
    // Log visitor data (can be removed in production)
    if (import.meta.env.DEV) {
      console.log('Visitor tracked:', visitorData);
    }
  }, []);

  // Initialize all analytics (GA4 + Umami) if consent given
  useEffect(() => {
    if (hasCookieConsent()) {
      initAllAnalytics();
    }
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (hasCookieConsent()) {
      const pageTitle = location.pathname === '/contact' 
        ? 'Contact Us - JSR Spaces' 
        : 'JSR Spaces - Coworking Space in Cairo';
      trackPageViewAll(location.pathname, pageTitle);
    }
  }, [location]);

  // Handle anchor links on page load and hash changes
  useEffect(() => {
    const scrollToAnchor = (hash: string) => {
      if (!hash) return;
      
      // Remove the # symbol
      const id = hash.substring(1);
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Scroll to the element with offset for fixed header
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    };

    // Handle initial hash on page load
    if (window.location.hash) {
      scrollToAnchor(window.location.hash);
    }

    // Handle hash changes (when user clicks anchor links)
    const handleHashChange = () => {
      if (window.location.hash) {
        scrollToAnchor(window.location.hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default function App() {
  return <AppContent />;
}
