import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Award, Star, Trophy, Medal, Crown, Target } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Best Coworking Space",
    year: "2024",
    organization: "Cairo Business Awards",
    description: "Recognized for excellence in workspace innovation",
    color: "from-yellow-400 to-amber-500"
  },
  {
    icon: Star,
    title: "Top Rated Workspace",
    year: "2024",
    organization: "Google Reviews",
    description: "4.9/5 stars from 1,200+ verified reviews",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Crown,
    title: "Premium Member Experience",
    year: "2023",
    organization: "Egypt Enterprise Excellence",
    description: "Outstanding customer satisfaction and service quality",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Medal,
    title: "Innovation in Design",
    year: "2023",
    organization: "Design & Architecture Egypt",
    description: "Award-winning workspace design and aesthetics",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Target,
    title: "Fastest Growing",
    year: "2023",
    organization: "Startup Egypt",
    description: "500% growth in member base year-over-year",
    color: "from-red-400 to-pink-500"
  },
  {
    icon: Award,
    title: "Community Excellence",
    year: "2022",
    organization: "Professional Networks Egypt",
    description: "Best networking and community building programs",
    color: "from-indigo-400 to-indigo-600"
  }
];

const press = [
  { outlet: "Business Today Egypt", quote: "Cairo's most innovative workspace" },
  { outlet: "Forbes Middle East", quote: "Setting new standards in coworking" },
  { outlet: "Enterprise Egypt", quote: "A game-changer for entrepreneurs" },
  { outlet: "Startup Scene MENA", quote: "The future of work, today" }
];

export function Awards() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            Awards & Recognition
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Recognized for <span className="text-[#00009f]">Excellence</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Industry-leading workspace solutions trusted by thousands of professionals
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${award.color} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <award.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <Badge className="mb-3 bg-gray-100 text-gray-700 hover:bg-gray-100">
                    {award.year}
                  </Badge>
                  
                  <h3 className="text-xl mb-2 group-hover:text-[#00009f] transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{award.organization}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Press Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#00009f] to-[#000080] rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-3">Featured in Leading Publications</h3>
            <p className="text-blue-100">What the media says about JSR Spaces</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {press.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl opacity-50">"</div>
                  <div className="flex-1">
                    <p className="text-lg mb-3 italic">{item.quote}</p>
                    <p className="text-sm text-blue-200">— {item.outlet}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "15+", label: "Industry Awards" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Customer Satisfaction" },
            { value: "20+", label: "Media Features" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-[#00009f] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
