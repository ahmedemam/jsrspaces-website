import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  Zap,
  Shield,
  Users,
  Clock,
  Award,
  Sparkles,
  Heart,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Prime Locations",
    description: "Strategic locations across Cairo with easy access to transportation, restaurants, and business districts.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "On-site security, biometric access, CCTV surveillance, and secure data infrastructure to protect your business.",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Network with 2,500+ professionals from diverse industries. Collaborate, learn, and grow together.",
    gradient: "from-purple-400 to-purple-600"
  },
  {
    icon: Clock,
    title: "Flexible Access",
    description: "Extended access hours. Work on your schedule, not ours. Weekend access included.",
    gradient: "from-green-400 to-green-600"
  },
  {
    icon: Award,
    title: "Premium Amenities",
    description: "From podcast studios to rooftop terraces, we provide everything modern professionals need to thrive.",
    gradient: "from-indigo-400 to-indigo-600"
  },
  {
    icon: Sparkles,
    title: "Exceptional Design",
    description: "Thoughtfully designed spaces that inspire creativity and boost productivity. Every detail matters.",
    gradient: "from-pink-400 to-pink-600"
  },
  {
    icon: Heart,
    title: "Wellness First",
    description: "Yoga studios, meditation rooms, wellness programs, and ergonomic furniture for your well-being.",
    gradient: "from-red-400 to-red-600"
  },
  {
    icon: TrendingUp,
    title: "Growth Support",
    description: "Mentorship programs, investor connections, and resources to help scale your business from startup to enterprise.",
    gradient: "from-cyan-400 to-cyan-600"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            Why JSR Spaces
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            More Than Just a <span className="text-[#00009f]">Workspace</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We've reimagined coworking to create an ecosystem where professionals thrive,
            businesses grow, and communities flourish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
                {/* Gradient Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                <CardContent className="p-6 relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-md`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-[#00009f] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#00009f]/10 to-blue-100/50 rounded-2xl p-8 max-w-3xl">
            <p className="text-xl text-gray-700 leading-relaxed">
              "JSR Spaces isn't just about providing desks and WiFi. We're building a community
              where <span className="text-[#00009f]">innovation happens</span>,
              connections are made, and <span className="text-[#00009f]">dreams become reality</span>."
            </p>
            <div className="mt-4 text-gray-600">— JSR Spaces Team</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
