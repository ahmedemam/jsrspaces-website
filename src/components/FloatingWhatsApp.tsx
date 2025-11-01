import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in JSR Spaces. Can you tell me more?";
    window.open(`https://wa.me/201040806692?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  const handleCall = () => {
    window.open('tel:+201040806692', '_self');
    setIsOpen(false);
  };

  const handleBooking = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl cursor-pointer"
          aria-label="Contact us"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                exit={{ rotate: 0 }}
              >
                <X className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>

      {/* Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-40"
            />
            
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-[calc(100vw-2rem)] sm:w-80 max-w-sm border-2 border-gray-100"
            >
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl mb-1 sm:mb-2 text-gray-900">How can we help?</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Choose your preferred way to reach us
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] h-12 sm:h-14 text-base sm:text-lg justify-start gap-2 sm:gap-3 cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-sm sm:text-base">Chat on WhatsApp</div>
                  <div className="text-xs opacity-90">We reply instantly</div>
                </div>
              </Button>

              <Button
                onClick={handleCall}
                className="w-full bg-[#00009f] hover:bg-[#000080] h-12 sm:h-14 text-base sm:text-lg justify-start gap-2 sm:gap-3 cursor-pointer"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-sm sm:text-base">Call Us Now</div>
                  <div className="text-xs opacity-90">010 40806692</div>
                </div>
              </Button>

              <Button
                onClick={handleBooking}
                className="w-full bg-orange-600 hover:bg-orange-700 h-12 sm:h-14 text-base sm:text-lg justify-start gap-2 sm:gap-3 cursor-pointer"
              >
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-sm sm:text-base">Book a Tour</div>
                  <div className="text-xs opacity-90">Visit our space</div>
                </div>
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-3 sm:mt-4 text-center">
              Available: Sun-Thu, 9 AM - 8 PM
            </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
