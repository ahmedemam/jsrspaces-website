import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in JSR Spaces and would like to learn more.";
    const whatsappUrl = `https://wa.me/201040806692?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 cursor-pointer"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      </motion.div>

      {/* WhatsApp Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#00009f] p-4 text-white relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">JSR Spaces</h3>
                  <p className="text-sm text-blue-100">Online now</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  👋 Hi there! Welcome to JSR Spaces!
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  How can we help you today? Click below to chat with us on WhatsApp!
                </p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="h-5 w-5" />
                Start WhatsApp Chat
              </button>

              <div className="mt-4 text-center text-xs text-gray-500">
                Or call us: <a href="tel:+201040806692" className="text-[#00009f] hover:underline cursor-pointer">010 40806692</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
