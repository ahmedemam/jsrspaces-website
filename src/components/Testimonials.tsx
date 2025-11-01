import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Founder, TechVenture",
    industry: "Tech Startup",
    content: "JSR Spaces transformed how we work. The community here is unmatched—I've found clients, partners, and mentors all under one roof.",
    rating: 5,
    initials: "SA"
  },
  {
    name: "Mohamed Hassan",
    role: "Creative Director",
    industry: "Design Agency",
    content: "The facilities are world-class. From the podcast studio to the rooftop terrace, every detail is carefully curated for creative professionals.",
    rating: 5,
    initials: "MH"
  },
  {
    name: "Layla Ibrahim",
    role: "Digital Nomad",
    industry: "Marketing Consultant",
    content: "As someone who travels constantly, JSR's global network is invaluable. Plus, the Cairo location is stunning and incredibly productive.",
    rating: 5,
    initials: "LI"
  },
  {
    name: "Omar Khalil",
    role: "CEO, FinanceFlow",
    industry: "Fintech",
    content: "Moving from a traditional office to JSR was the best decision. Our team is more engaged, and we've cut overhead costs significantly.",
    rating: 5,
    initials: "OK"
  },
  {
    name: "Nour El-Din",
    role: "Content Creator",
    industry: "Media Production",
    content: "The content creation lab and podcast studio are game-changers. I produce all my content here with professional-grade equipment.",
    rating: 5,
    initials: "NE"
  },
  {
    name: "Yasmine Fathy",
    role: "Product Manager",
    industry: "E-commerce",
    content: "The wellness initiatives and work-life balance culture here are exceptional. I'm more productive and healthier than ever.",
    rating: 5,
    initials: "YF"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">Member Stories</Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Loved by <span className="text-orange-600">Innovators</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Don't just take our word for it—hear from the community that calls JSR home
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-none bg-white">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-orange-200 mb-4" />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 bg-gradient-to-br from-orange-400 to-orange-600">
                      <AvatarFallback className="text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {testimonial.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-orange-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
