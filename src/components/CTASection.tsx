import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTkwNDIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="JSR Spaces Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00009f]/95 via-[#00009f]/90 to-[#000080]/95" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
              Ready to Transform Your Work Life?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Join Cairo's most innovative workspace community. Experience productivity, 
              collaboration, and growth like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button 
                size="lg" 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-[#00009f] hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl"
              >
                <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Book a Free Tour
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('tel:+201040806692', '_self')}
                className="border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call Us Now
              </Button>
            </div>

            <div className="flex items-center gap-4 sm:gap-8 text-blue-100">
              <div>
                <div className="text-2xl sm:text-3xl mb-1">4.9/5</div>
                <div className="text-xs sm:text-sm">Average Rating</div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-blue-300/30" />
              <div>
                <div className="text-2xl sm:text-3xl mb-1">2,500+</div>
                <div className="text-xs sm:text-sm">Happy Members</div>
              </div>
              <div className="h-10 sm:h-12 w-px bg-blue-300/30" />
              <div>
                <div className="text-2xl sm:text-3xl mb-1">500+</div>
                <div className="text-xs sm:text-sm">Companies</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:flex justify-end hidden"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl text-white mb-6">What You'll Get</h3>
              <ul className="space-y-4 text-blue-100">
                {[
                  "Instant access to our premium Nasr City location",
                  "Premium amenities and services",
                  "Networking with 2,500+ professionals",
                  "50+ monthly community events",
                  "24/7 support and concierge service",
                  "Flexible plans with no long-term commitment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 mt-0.5 text-white flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
}
