import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight, Award, Users, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen min-h-[600px] sm:min-h-[700px]">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjE5MDQyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="JSR Spaces Coworking"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#00009f]/40" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-32 sm:py-20">
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
            Premium coworking spaces designed for entrepreneurs, creatives, and visionaries 
            shaping the future of Cairo's business landscape.
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
                <span className="text-xl sm:text-2xl md:text-3xl">#1</span>
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">Rated Workspace</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex"
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
