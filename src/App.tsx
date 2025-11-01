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

export default function App() {
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
    </div>
  );
}
