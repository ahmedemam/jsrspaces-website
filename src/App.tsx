import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { WorkspaceTypes } from "./components/WorkspaceTypes";
import { Amenities } from "./components/Amenities";
import { HowItWorks } from "./components/HowItWorks";
import { QuickBooking } from "./components/QuickBooking";
import { Community } from "./components/Community";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Partners } from "./components/Partners";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { LocationMap } from "./components/LocationMap";
import { CTASection } from "./components/CTASection";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

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
      <Community />
      <Testimonials />
      <Pricing />
      <Partners />
      <Gallery />
      <FAQ />
      <LocationMap />
      <CTASection />
      <Contact />
      <Newsletter />
      <Footer />
      <Toaster />
    </div>
  );
}
