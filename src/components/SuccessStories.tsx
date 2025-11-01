import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Quote, TrendingUp, Users, Rocket, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stories = [
  {
    company: "TechStart Egypt",
    industry: "Technology",
    founder: "Ahmed Hassan",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stats: {
      growth: "300%",
      team: "5 → 25",
      funding: "$2M"
    },
    quote: "JSR Spaces provided the perfect environment for us to grow from a 2-person startup to a 25-member team. The community connections led to our seed funding.",
    color: "from-blue-500 to-blue-600"
  },
  {
    company: "Creative Studio Plus",
    industry: "Design & Media",
    founder: "Sara Mahmoud",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stats: {
      growth: "450%",
      team: "3 → 18",
      revenue: "+250%"
    },
    quote: "The podcast studio and content creation facilities at JSR transformed our business. We now serve Fortune 500 clients from right here in Cairo.",
    color: "from-purple-500 to-purple-600"
  },
  {
    company: "Legal Innovations",
    industry: "Legal Tech",
    founder: "Omar Khalil",
    role: "Managing Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    stats: {
      growth: "200%",
      team: "8 → 20",
      clients: "500+"
    },
    quote: "Moving to JSR Spaces was the best decision we made. The professional environment and meeting rooms helped us win major corporate clients.",
    color: "from-indigo-500 to-indigo-600"
  }
];

export function SuccessStories() {
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
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Where <span className="text-[#00009f]">Dreams</span> Become Reality
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Real stories from real entrepreneurs who've built thriving businesses at JSR Spaces
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all group">
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${story.color}`} />

                <CardContent className="p-0">
                  {/* Image and Founder Info */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <ImageWithFallback
                          src={story.image}
                          alt={story.founder}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center`}>
                          <Rocket className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg">{story.founder}</h3>
                        <p className="text-sm text-gray-600">{story.role}</p>
                      </div>
                    </div>

                    <h4 className="text-xl mb-1 group-hover:text-[#00009f] transition-colors">
                      {story.company}
                    </h4>
                    <p className="text-sm text-gray-500 mb-4">{story.industry}</p>

                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="h-8 w-8 text-gray-200 absolute -top-2 -left-2" />
                      <p className="text-gray-700 italic pl-6 text-sm leading-relaxed">
                        "{story.quote}"
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span className="text-lg text-[#00009f]">{story.stats.growth}</span>
                        </div>
                        <div className="text-xs text-gray-600">Growth</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span className="text-lg text-[#00009f]">{story.stats.team}</span>
                        </div>
                        <div className="text-xs text-gray-600">Team</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg text-[#00009f] mb-1">
                          {story.stats.funding || story.stats.revenue || story.stats.clients}
                        </div>
                        <div className="text-xs text-gray-600">
                          {story.stats.funding ? "Raised" : story.stats.revenue ? "Revenue" : "Clients"}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#00009f] to-[#000080] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who've transformed their businesses at JSR Spaces. 
            Your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#00009f] hover:bg-blue-50">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              View All Stories
            </Button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "200+", label: "Companies Launched" },
            { value: "$50M+", label: "Total Funding Raised" },
            { value: "1,500+", label: "Jobs Created" },
            { value: "85%", label: "Still Active" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl text-[#00009f] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
