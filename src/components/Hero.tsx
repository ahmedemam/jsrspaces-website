import { Button } from "./ui/button";
import { ArrowRight, Award, Users, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero-main.jpg",
  "/images/herou-main-2.jpg",
  "/images/hero-main-3.png",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[600px] sm:min-h-[700px] overflow-hidden">
      {/* Background Images with Fade Effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
            style={{
              zIndex: index === currentIndex ? 1 : 0,
              pointerEvents: index === currentIndex ? 'auto' : 'none'
            }}
          >
            <img
              src={image}
              alt={index === 0
                ? "Modern premium coworking space in Nasr City Cairo with contemporary design and natural lighting"
                : index === 1
                  ? "Professional workspace environment at JSR Spaces coworking space in Cairo Egypt"
                  : "Innovative coworking space interior at JSR Spaces Nasr City with modern amenities and collaborative areas"}
              className="w-full h-full min-h-[600px] sm:min-h-[700px] object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#00009f]/40" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-32 sm:py-20">
        <div className="text-white max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-[#00009f]/30 backdrop-blur-sm border border-[#00009f]/50 rounded-full text-sm mb-6">
              ✨ Cairo's Most Innovative Workspace
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight"
          >
            Where Ambition Meets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-gray-200 leading-relaxed"
          >
            Premium coworking spaces tailored for <span className="text-white font-medium">Students, Freelancers, Startups, and SMEs</span>.
            Enjoy exclusive discounts and a community shaping the future of Cairo's business landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-[#00009f] hover:bg-[#000080] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
            >
              Book a Tour <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              onClick={() => scrollToSection('pricing')}
            >
              View Plans
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-white/20"
          >
            <div>
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-200 flex-shrink-0" />
                <span className="text-xl sm:text-2xl md:text-3xl">500+</span>
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">Active Members</div>
            </div>
            <div>
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-200 flex-shrink-0" />
                <span className="text-xl sm:text-2xl md:text-3xl">1</span>
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">Premium Location</div>
            </div>
            <div>
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-200 flex-shrink-0" />
                <span className="text-xl sm:text-2xl md:text-3xl">20%</span>
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">Student Discount</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute z-10 bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex"
      >
        <div className="flex flex-col items-center gap-2 text-white/70 cursor-pointer hover:text-white transition-colors"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
