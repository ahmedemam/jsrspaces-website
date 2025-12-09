import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { WorkspaceTypes } from "../components/WorkspaceTypes";
import { Amenities } from "../components/Amenities";
import { HowItWorks } from "../components/HowItWorks";
import { QuickBooking } from "../components/QuickBooking";
import { LiveAvailability } from "../components/LiveAvailability";
import { VideoSection } from "../components/VideoSection";
import { Community } from "../components/Community";
import { SuccessStories } from "../components/SuccessStories";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { VirtualAddress } from "../components/VirtualAddress";
import { SpecialDiscounts } from "../components/SpecialDiscounts";
import { MemberPerks } from "../components/MemberPerks";
import { Partners } from "../components/Partners";
import { Awards } from "../components/Awards";
import { Gallery } from "../components/Gallery";
import { FAQ } from "../components/FAQ";
import { LocationMap } from "../components/LocationMap";
import { CTASection } from "../components/CTASection";
import { Contact } from "../components/Contact";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Toaster } from "../components/ui/sonner";
import { StructuredData, FAQStructuredData, BreadcrumbStructuredData, ReviewStructuredData } from "../components/SEO";
import { CookieConsent } from "../components/CookieConsent";

export function HomePage() {

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      {/* Priority Top Sections */}
      <QuickBooking />
      <Pricing />
      <VirtualAddress />
      {/* <Stats /> */}
      <About />
      <WhyChooseUs />
      <WorkspaceTypes />
      <Amenities />
      <HowItWorks />
      {/* <LiveAvailability /> */}
      {/* Hidden sections - can be uncommented to show */}
      {/* <VideoSection /> */}
      {/* <Community /> */}
      {/* <SuccessStories /> */}
      {/* <Testimonials /> */}
      <SpecialDiscounts />
      {/* <MemberPerks /> */}
      {/* <Partners /> */}
      <Awards />
      {/* <Gallery /> */}
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
      <FAQStructuredData />
      <ReviewStructuredData />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", url: "https://www.jsrspaces.com/" }
        ]}
      />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

