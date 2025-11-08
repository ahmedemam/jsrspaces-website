import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { WorkspaceTypes } from "./components/WorkspaceTypes";
import { Amenities } from "./components/Amenities";
import { HowItWorks } from "./components/HowItWorks";
import { QuickBooking } from "./components/QuickBooking";
import { LiveAvailability } from "./components/LiveAvailability";
import { VideoSection } from "./components/VideoSection";
import { Community } from "./components/Community";
import { SuccessStories } from "./components/SuccessStories";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { VirtualAddress } from "./components/VirtualAddress";
import { SpecialDiscounts } from "./components/SpecialDiscounts";
import { MemberPerks } from "./components/MemberPerks";
import { Partners } from "./components/Partners";
import { Awards } from "./components/Awards";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { LocationMap } from "./components/LocationMap";
import { CTASection } from "./components/CTASection";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Toaster } from "./components/ui/sonner";
import { trackVisitor, incrementUniqueVisitorCount, sendVisitorDataToBackend } from "./utils/visitorTracking";
import { StructuredData } from "./components/SEO";
import { CookieConsent, hasCookieConsent } from "./components/CookieConsent";
import { initGoogleAnalytics, trackPageView } from "./utils/analytics";

export default function App() {
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

  // Initialize Google Analytics if consent given
  useEffect(() => {
    if (hasCookieConsent()) {
      initGoogleAnalytics();
      trackPageView(window.location.pathname, document.title);
    }
  }, []);

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
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <WhyChooseUs />
      <WorkspaceTypes />
      <Amenities />
      <HowItWorks />
      <QuickBooking />
      <LiveAvailability />
      <VideoSection />
      <Community />
      <SuccessStories />
      <Testimonials />
      <Pricing />
      <VirtualAddress />
      <SpecialDiscounts />
      <MemberPerks />
      <Partners />
      <Awards />
      <Gallery />
      <FAQ />
      <LocationMap />
      <CTASection />
      <Contact />
      <Newsletter />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
      
      {/* Toast Notifications */}
      <Toaster />
      
      {/* Structured Data for SEO */}
      <StructuredData />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
