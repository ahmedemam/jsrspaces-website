import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { PricingCalculator } from "../components/PricingCalculator";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Toaster } from "../components/ui/sonner";
import { StructuredData, SEO, BreadcrumbStructuredData } from "../components/SEO";
import { CookieConsent } from "../components/CookieConsent";

export function CalculatorPage() {
  return (
    <div className="min-h-screen">
      {/* Page-specific SEO */}
      <SEO
        title="Pricing Calculator - JSR Spaces | Calculate Your Workspace Cost"
        description="Calculate your workspace pricing instantly. Get quotes for shared spaces, private cabins, and virtual office solutions. Student and freelancer discounts available."
        keywords="workspace calculator, pricing calculator, coworking price calculator, virtual office calculator, workspace cost calculator Cairo"
        url="https://www.jsrspaces.com/calculator"
        image="https://www.jsrspaces.com/images/calculator-og-image.jpg"
      />
      
      <Navigation />
      <div className="pt-20">
        <PricingCalculator />
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
          { name: "Calculator", url: "https://www.jsrspaces.com/calculator" }
        ]}
      />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

