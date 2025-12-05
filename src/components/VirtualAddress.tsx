import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Building2,
  Mail,
  Phone,
  FileText,
  Shield,
  Briefcase,
  CheckCircle2,
  MapPin,
  Package,
  Globe,
} from "lucide-react";

export function VirtualAddress() {
  const features = [
    {
      icon: Building2,
      title: "Premium Business Address",
      description: "Use our prestigious Nasr City address for your business registration and correspondence",
    },
    {
      icon: Mail,
      title: "Mail Handling",
      description: "Professional mail receiving, sorting, and forwarding services with instant notifications",
    },
    {
      icon: Phone,
      title: "Call Forwarding",
      description: "Dedicated phone line with professional call answering and forwarding to your number",
    },
    {
      icon: FileText,
      title: "Company Registration",
      description: "Support with legal documentation and company registration requirements",
    },
    {
      icon: Package,
      title: "Package Management",
      description: "Secure storage and handling of all your business packages and deliveries",
    },
    {
      icon: Shield,
      title: "Business Privacy",
      description: "Keep your home address private while maintaining a professional business presence",
    },
  ];

  const packages = [
    {
      name: "Basic Virtual Office",
      price: "3,000",
      period: "year",
      features: [
        "Premium business address",
        "Mail receiving & scanning",
        "5 hours meeting room access",
        "Call forwarding service",
        "Business registration support",
      ],
    },
    {
      name: "Professional Virtual Office",
      price: "6,000",
      period: "year",
      popular: true,
      features: [
        "Everything in Basic",
        "Dedicated phone line",
        "Professional call answering",
        "15 hours meeting room access",
        "Mail forwarding (local)",
        "Package handling",
      ],
    },
    {
      name: "Enterprise Virtual Office",
      price: "9,000",
      period: "year",
      features: [
        "Everything in Professional",
        "Unlimited meeting room access",
        "International mail forwarding",
        "Dedicated office hours (20hrs/mo)",
        "Personal assistant service",
        "Priority support",
      ],
    },
  ];

  const benefits = [
    "Establish credibility with a premium Cairo address",
    "No long-term lease commitments",
    "Access to meeting rooms when needed",
    "Professional image for startups and freelancers",
    "Flexible plans that grow with your business",
    "Local presence without physical office costs",
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            <Globe className="w-3 h-3 mr-1" />
            Virtual Office Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
            Professional <span className="text-[#00009f]">Virtual Address</span> Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Establish your business presence in Cairo without the overhead of a physical office.
            Get a prestigious address, mail handling, and professional services.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-[#00009f] transition-all hover:shadow-lg">
                <CardContent className="p-5 sm:p-6">
                  <div className="bg-[#00009f]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#00009f]" />
                  </div>
                  <h3 className="text-lg sm:text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12">
            Choose Your <span className="text-[#00009f]">Virtual Office Plan</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`relative h-full border-2 transition-all ${
                    pkg.popular
                      ? "border-[#00009f] shadow-xl scale-105"
                      : "border-gray-200 hover:border-[#00009f] hover:shadow-lg"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#00009f] hover:bg-[#00009f] text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6 sm:p-8">
                    <h4 className="text-xl sm:text-2xl mb-2">{pkg.name}</h4>
                    <div className="mb-6">
                      <span className="text-3xl sm:text-4xl text-[#00009f]">{pkg.price}</span>
                      <span className="text-gray-600"> EGP/{pkg.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#00009f] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full h-11 sm:h-12 ${
                        pkg.popular
                          ? "bg-[#00009f] hover:bg-[#000080]"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                      onClick={() => {
                        const message = `Hi! I'm interested in the ${pkg.name} package (${pkg.price} EGP/${pkg.period}). Can you provide more details?`;
                        window.open(
                          `https://wa.me/201040806692?text=${encodeURIComponent(message)}`,
                          "_blank"
                        );
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#00009f] to-[#000080] rounded-2xl p-6 sm:p-10 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6">
                Why Choose Our Virtual Address?
              </h3>
              <p className="text-blue-100 mb-6 sm:mb-8 text-sm sm:text-base">
                Perfect for startups, freelancers, and remote teams who need a professional
                business presence without the cost of a physical office.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    const message = "Hi! I'd like to learn more about your Virtual Address services.";
                    window.open(
                      `https://wa.me/201040806692?text=${encodeURIComponent(message)}`,
                      "_blank"
                    );
                  }}
                  className="bg-white text-[#00009f] hover:bg-gray-100 h-11 sm:h-12"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 h-11 sm:h-12"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-50 text-sm sm:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
