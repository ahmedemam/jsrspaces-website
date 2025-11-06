import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { X, Cookie } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'jsrspaces_cookie_consent';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    localStorage.setItem(`${COOKIE_CONSENT_KEY}_timestamp`, new Date().toISOString());
    setShowBanner(false);
    
    // Initialize analytics after consent
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
      import('../utils/analytics').then(({ initGoogleAnalytics }) => {
        initGoogleAnalytics();
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    localStorage.setItem(`${COOKIE_CONSENT_KEY}_timestamp`, new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-[#00009f] mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  We Use Cookies
                </h3>
                <p className="text-sm text-gray-600">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies. You can also manage your preferences.
                  <a 
                    href="/privacy-policy" 
                    className="text-[#00009f] hover:underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                onClick={handleDecline}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Decline
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-[#00009f] hover:bg-[#000080] text-white"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Check if user has consented to cookies
 */
export function hasCookieConsent(): boolean {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  return consent === 'accepted';
}

