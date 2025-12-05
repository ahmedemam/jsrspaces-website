import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { WorkspaceTypes } from "../components/WorkspaceTypes";
import { Amenities } from "../components/Amenities";
import { HowItWorks } from "../components/HowItWorks";
import { Pricing } from "../components/Pricing";
import { CTASection } from "../components/CTASection";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Toaster } from "../components/ui/sonner";
import { StructuredData, SEO, BreadcrumbStructuredData } from "../components/SEO";
import { CookieConsent } from "../components/CookieConsent";

export function ServicePage() {
  return (
    <div className="min-h-screen">
      {/* Page-specific SEO */}
      <SEO
        title="Our Services - JSR Spaces | Workspace Solutions in Cairo"
        description="Explore JSR Spaces' comprehensive workspace services in Nasr City, Cairo. Hot desks, private offices, meeting rooms, podcast studios, and event spaces. Flexible solutions for every business need."
        keywords="coworking services Cairo, workspace solutions Nasr City, hot desk service, private office rental, meeting room booking, podcast studio Cairo, event space rental"
        url="https://www.jsrspaces.com/service"
        image="https://www.jsrspaces.com/images/services-og-image.jpg"
      />
      
      <Navigation />
      <div className="pt-20">
        <WorkspaceTypes />
        <Amenities />
        <HowItWorks />
        <Pricing />
        <CTASection />
      </div>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
      
      {/* Toast Notifications */}
      <Toaster />
      
      {/* Structured Data for SEO */}
      <StructuredData />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "https://www.jsrspaces.com/" },
          { name: "Services", url: "https://www.jsrspaces.com/service" }
        ]}
      />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

