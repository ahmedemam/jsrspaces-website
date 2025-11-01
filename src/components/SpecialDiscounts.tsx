import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  GraduationCap,
  Rocket,
  Tag,
  CheckCircle2,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  Clock,
  Shield,
} from "lucide-react";

export function SpecialDiscounts() {
  const studentBenefits = [
    "25% off all workspace plans",
    "Free access to networking events",
    "Mentorship program access",
    "Extended hours during exam periods",
    "Free printing (500 pages/month)",
    "Career development workshops",
  ];

  const startupBenefits = [
    "30% off for first 6 months",
    "Free business consultation sessions",
    "Investor pitch room access",
    "Startup community networking",
    "Legal & accounting workshops",
    "Discounted virtual address services",
  ];

  const discountPackages = [
    {
      type: "Student",
      icon: GraduationCap,
      badge: "25% OFF",
      color: "from-purple-500 to-indigo-600",
      description: "Exclusive discounts for university students and recent graduates",
      requirements: [
        "Valid student ID or university email",
        "Full-time enrollment verification",
        "Available for all workspace types",
        "Renewable each semester",
      ],
      cta: "Claim Student Discount",
    },
    {
      type: "Startup Founder",
      icon: Rocket,
      badge: "30% OFF",
      color: "from-orange-500 to-red-600",
      description: "Special rates for early-stage startups and entrepreneurs",
      requirements: [
        "Company less than 2 years old",
        "Valid business registration",
        "Team of 5 members or less",
        "6-month minimum commitment",
      ],
      cta: "Apply for Startup Discount",
    },
  ];

  const successMetrics = [
    { icon: Users, value: "500+", label: "Students Supported" },
    { icon: Rocket, value: "120+", label: "Startups Launched" },
    { icon: TrendingUp, value: "85%", label: "Success Rate" },
    { icon: Award, value: "50+", label: "Funding Secured" },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            <Tag className="w-3 h-3 mr-1" />
            Special Offers
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
            <span className="text-[#00009f]">Exclusive Discounts</span> for Students & Startups
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            We believe in supporting the next generation of innovators and entrepreneurs.
            Get special pricing and benefits designed for your journey.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md border-2 border-gray-100 hover:border-[#00009f] transition-all"
            >
              <metric.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#00009f] mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl text-[#00009f] mb-1">{metric.value}</div>
              <div className="text-xs sm:text-sm text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Discount Packages */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {discountPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#00009f] transition-all hover:shadow-xl overflow-hidden">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <pkg.icon className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <pkg.icon className="w-10 h-10 sm:w-12 sm:h-12" />
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-sm sm:text-base px-3 py-1">
                        {pkg.badge}
                      </Badge>
                    </div>
                    <h3 className="text-2xl sm:text-3xl mb-2">{pkg.type}</h3>
                    <p className="text-white/90 text-sm sm:text-base">{pkg.description}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="text-base sm:text-lg mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#00009f]" />
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {pkg.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm sm:text-base">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00009f] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-[#00009f] hover:bg-[#000080] h-11 sm:h-12"
                    onClick={() => {
                      const message = `Hi! I'm interested in the ${pkg.type} discount program. Can you provide more information?`;
                      window.open(
                        `https://wa.me/201040806692?text=${encodeURIComponent(message)}`,
                        "_blank"
                      );
                    }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {pkg.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {/* Student Benefits */}
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-xl sm:text-2xl">Student Benefits</h3>
              </div>
              <ul className="space-y-3">
                {studentBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Startup Benefits */}
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                </div>
                <h3 className="text-xl sm:text-2xl">Startup Benefits</h3>
              </div>
              <ul className="space-y-3">
                {startupBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#00009f] to-[#000080] rounded-2xl p-6 sm:p-10 lg:p-12 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Clock className="w-4 h-4 inline mr-2" />
              <span className="text-sm sm:text-base">Limited Time Offer</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Ready to Join Our Community?
            </h3>
            <p className="text-blue-100 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              Apply for your discount today and start your journey in Cairo's most supportive
              coworking environment. No hidden fees, no long-term commitments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  const message = "Hi! I'd like to apply for a special discount at JSR Spaces.";
                  window.open(
                    `https://wa.me/201040806692?text=${encodeURIComponent(message)}`,
                    "_blank"
                  );
                }}
                className="bg-white text-[#00009f] hover:bg-gray-100 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg"
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg"
                onClick={() => {
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View All Pricing
              </Button>
            </div>
            <p className="text-blue-200 text-xs sm:text-sm mt-6">
              * Discounts subject to verification and approval. Terms and conditions apply.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
