import { Contact } from "../components/Contact";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Toaster } from "../components/ui/sonner";
import { StructuredData, SEO, BreadcrumbStructuredData } from "../components/SEO";
import { CookieConsent } from "../components/CookieConsent";

export function ContactPage() {

  return (
    <div className="min-h-screen">
      {/* Page-specific SEO */}
      <SEO
        title="Contact Us - JSR Spaces | Book a Tour or Get in Touch"
        description="Contact JSR Spaces in Nasr City, Cairo. Book a free tour, inquire about memberships, or get in touch via phone, email, or WhatsApp. We're here to help you find the perfect workspace."
        keywords="contact JSR Spaces, book tour Cairo, coworking space inquiry, JSR Spaces phone number, coworking space Nasr City contact"
        url="https://www.jsrspaces.com/contact"
        image="https://www.jsrspaces.com/images/contact-og-image.jpg"
      />
      
      <Navigation />
      <div className="pt-20">
        <Contact />
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
          { name: "Contact", url: "https://www.jsrspaces.com/contact" }
        ]}
      />
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

