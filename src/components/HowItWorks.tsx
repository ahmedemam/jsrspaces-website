import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Search, Calendar, Key, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Explore Our Spaces",
    description: "Browse our workspace options online or schedule a tour to experience JSR Spaces firsthand.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Calendar,
    title: "Book Your Visit",
    description: "Choose a date and time that works for you. Meet our team and see our facilities in action.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Key,
    title: "Select Your Plan",
    description: "Pick the membership that fits your needs. Flexible terms from day passes to dedicated offices.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Rocket,
    title: "Start Working",
    description: "Get instant access to all amenities, community events, and begin your productive journey.",
    color: "from-[#00009f] to-[#000080]"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Your Journey to <span className="text-[#00009f]">Success</span> Starts Here
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Getting started with JSR Spaces is simple. Follow these four easy steps to transform your work life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200" style={{ top: '80px' }} />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all h-full bg-white relative overflow-hidden group">
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                  {index + 1}
                </div>

                <CardContent className="p-8 relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              </Card>

              {/* Arrow for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 z-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to get started? <span className="text-[#00009f]">We're here to help every step of the way.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
