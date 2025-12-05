import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { VirtualAddress } from "../components/VirtualAddress";
import { CTASection } from "../components/CTASection";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Toaster } from "../components/ui/sonner";
import { StructuredData, SEO, BreadcrumbStructuredData } from "../components/SEO";
import { CookieConsent } from "../components/CookieConsent";

export function VirtualPage() {
  return (
    <div className="min-h-screen">
      {/* Page-specific SEO */}
      <SEO
        title="Virtual Office Solutions - JSR Spaces | Professional Business Address in Cairo"
        description="Get a prestigious virtual office address in Nasr City, Cairo. Professional mail handling, call forwarding, and business registration support. Establish your business presence without physical office costs."
        keywords="virtual office Cairo, virtual address Nasr City, business address service, mail handling Cairo, call forwarding service, company registration support"
        url="https://www.jsrspaces.com/virtual"
        image="https://www.jsrspaces.com/images/virtual-office-og-image.jpg"
      />
      
      <Navigation />
      <div className="pt-20">
        <VirtualAddress />
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
          { name: "Virtual Office", url: "https://www.jsrspaces.com/virtual" }
        ]}
      />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

