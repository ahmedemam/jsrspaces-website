import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Target, Lightbulb, HeartHandshake, Leaf } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing new ideas and cutting-edge solutions"
  },
  {
    icon: HeartHandshake,
    title: "Community",
    description: "Building meaningful connections and collaborations"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to eco-friendly practices and green operations"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">Our Story</Badge>
            <h2 className="text-4xl md:text-5xl mb-6">
              Redefining the Future of <span className="text-[#00009f]">Work</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              JSR Spaces emerged from a simple vision: to create a workspace that transcends 
              traditional office boundaries. We're not just providing desks and WiFi—we're 
              cultivating an ecosystem where innovation thrives.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              In the heart of Cairo, we've built a sanctuary for forward-thinking professionals. 
              Our meticulously designed spaces combine luxury with functionality, creating an 
              environment where creativity flows and productivity soars.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From solo entrepreneurs to scaling startups, JSR Spaces is home to those who 
              dare to dream bigger and work smarter.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1634154955201-e7c93fd2a180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWlybyUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc2MjAwMTc3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cairo Skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6"
            >
              <div className="text-3xl text-[#00009f] mb-1">2020</div>
              <div className="text-gray-600">Established</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-8 -right-8 bg-[#00009f] text-white rounded-xl shadow-xl p-6"
            >
              <div className="text-3xl mb-1">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">Our Values</Badge>
            <h3 className="text-3xl md:text-4xl">
              What Drives <span className="text-[#00009f]">Us</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-full bg-[#00009f]/10 mb-4">
                      <value.icon className="h-8 w-8 text-[#00009f]" />
                    </div>
                    <h4 className="text-xl mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
