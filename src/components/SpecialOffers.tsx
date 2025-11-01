import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { GraduationCap, Rocket, Percent, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

export function SpecialOffers() {
  const handleWhatsAppContact = (offerType: string) => {
    const message = `Hi! I'm interested in the ${offerType} offer at JSR Spaces. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/201040806692?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const studentBenefits = [
    "25% off all hot desk plans",
    "20% off dedicated desk plans",
    "Free meeting room (2 hours/month)",
    "Access to all amenities",
    "Networking events included",
    "No setup fees"
  ];

  const startupBenefits = [
    "30% off first 3 months",
    "Free business address service",
    "Priority meeting room booking",
    "Mentorship program access",
    "Investor pitch room access",
    "Startup community events"
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            <Sparkles className="h-3 w-3 inline mr-1" />
            Special Offers
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Exclusive <span className="text-[#00009f]">Discounts</span> for Our Community
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We believe in supporting students and early-stage startups. Take advantage of our special 
            pricing to grow your career or business in a premium coworking environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Student Discount Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2 border-[#00009f]/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white/20 rounded-full w-32 h-32 blur-2xl"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl mb-2">Student Discount</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl">25%</span>
                    <span className="text-xl sm:text-2xl">OFF</span>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base">All services with valid student ID</p>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 mb-6">
                  {studentBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#00009f] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Percent className="h-5 w-5 text-[#00009f] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm mb-2">
                        <strong>Example Pricing:</strong>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Hot Desk: <span className="line-through">200 EGP/day</span> → <strong className="text-[#00009f]">150 EGP/day</strong>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Dedicated Desk: <span className="line-through">5,200 EGP/mo</span> → <strong className="text-[#00009f]">4,160 EGP/mo</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleWhatsAppContact("Student Discount")}
                  className="w-full bg-[#00009f] hover:bg-[#000080]"
                >
                  Claim Student Discount
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Valid university or college ID required
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Startup Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2 border-[#00009f]/20 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-[#00009f] to-[#000080] p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white/20 rounded-full w-32 h-32 blur-2xl"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl mb-2">Startup Founder</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl">30%</span>
                    <span className="text-xl sm:text-2xl">OFF</span>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base">Early-stage startups (0-2 years)</p>
                </div>
              </div>
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 mb-6">
                  {startupBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#00009f] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-[#00009f] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm mb-2">
                        <strong>Example Savings:</strong>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Private Office: <span className="line-through">14,500 EGP/mo</span> → <strong className="text-[#00009f]">10,150 EGP/mo</strong>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        <strong className="text-[#00009f]">Save 13,050 EGP</strong> in first 3 months!
                      </p>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleWhatsAppContact("Startup Founder")}
                  className="w-full bg-[#00009f] hover:bg-[#000080]"
                >
                  Claim Startup Discount
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Proof of incorporation within last 2 years required
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#00009f] to-[#000080] rounded-2xl p-6 sm:p-8 text-white text-center"
        >
          <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-xl sm:text-2xl mb-3">Can't Decide? Let's Talk!</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Our team is here to help you find the perfect workspace solution for your needs and budget. 
            Contact us today to discuss eligibility and learn more about our special programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleWhatsAppContact("Special Offers Inquiry")}
              className="bg-white text-[#00009f] hover:bg-gray-100 w-full sm:w-auto"
            >
              Chat on WhatsApp
            </Button>
            <a href="mailto:hi@jsrspaces.com">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Email Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
