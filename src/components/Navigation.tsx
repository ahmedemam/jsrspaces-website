import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // On non-home pages, always show background
    if (location.pathname !== '/') {
      setIsScrolled(true);
      return;
    }

    // On home page, check scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };


  const navItems = [
    { label: "About", id: "about", route: null },
    { label: "Services", id: "services", route: "/service" },
    { label: "Virtual Office", id: "virtual", route: "/virtual" },
    { label: "Pricing", id: "pricing", route: null },
    { label: "Calculator", id: "calculator", route: "/calculator" },
    { label: "Location", id: "locations", route: null },
    { label: "Contact", id: "contact", route: "/contact" }
  ];

  // Always show background on non-home pages, or when scrolled on home page
  const shouldShowBackground = location.pathname !== '/' || isScrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowBackground ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="text-xl sm:text-2xl cursor-pointer flex-shrink-0">
            <span className={shouldShowBackground ? "text-[#00009f]" : "text-white"}>JSR</span>
            <span className={shouldShowBackground ? "text-gray-900" : "text-white"}> Spaces</span>
          </Link>

          {/* Desktop Menu - Show all items on large screens */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              if (item.route) {
                return (
                  <Link
                    key={item.id}
                    to={item.route}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base xl:text-lg font-medium transition-colors hover:text-[#00009f] whitespace-nowrap ${
                      shouldShowBackground ? "text-gray-700" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base xl:text-lg font-medium transition-colors hover:text-[#00009f] whitespace-nowrap ${
                  shouldShowBackground ? "text-gray-700" : "text-white"
                }`}
              >
                {item.label}
              </button>
              );
            })}
            <Link to="/contact" className="ml-2 xl:ml-4">
            <Button 
              className="bg-[#00009f] hover:bg-[#000080] text-sm xl:text-base px-4 xl:px-6 h-10 xl:h-11 font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Calendar className="h-4 w-4 xl:h-5 xl:w-5" />
              Book a Tour
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Button - Only show on mobile/tablet (< 1024px) */}
          <button
            className="lg:!hidden p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${shouldShowBackground ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${shouldShowBackground ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex-1 px-4 py-4 space-y-1">
                  {navItems.map((item) => {
                    if (item.route) {
                      return (
                        <Link
                          key={item.id}
                          to={item.route}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-[#00009f] hover:bg-gray-50 rounded-lg transition-all touch-manipulation"
                        >
                          {item.label}
                        </Link>
                      );
                    }
                    return (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-[#00009f] hover:bg-gray-50 rounded-lg transition-all touch-manipulation"
                    >
                      {item.label}
                    </button>
                    );
                  })}
                  
                  {/* Book Button */}
                  <div className="pt-4 mt-4">
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button 
                        className="w-full bg-[#00009f] hover:bg-[#000080] h-12 text-base font-semibold touch-manipulation"
                      >
                        Book a Tour
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-16 sm:top-20 left-0 right-0 h-0.5 sm:h-1 bg-[#00009f] origin-left z-40"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
