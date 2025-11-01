import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Calendar, Users, Award, TrendingUp } from "lucide-react";

const upcomingEvents = [
  {
    date: "Nov 5",
    title: "Tech Innovation Summit",
    type: "Workshop",
    attendees: 45
  },
  {
    date: "Nov 8",
    title: "Startup Pitch Night",
    type: "Networking",
    attendees: 60
  },
  {
    date: "Nov 12",
    title: "Design Thinking Workshop",
    type: "Learning",
    attendees: 30
  },
  {
    date: "Nov 15",
    title: "Wellness Wednesday Yoga",
    type: "Wellness",
    attendees: 25
  }
];

const communityStats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Members",
    description: "From 30+ industries"
  },
  {
    icon: Award,
    value: "50+",
    label: "Events Monthly",
    description: "Workshops & networking"
  },
  {
    icon: TrendingUp,
    value: "200+",
    label: "Startups Launched",
    description: "In the past 2 years"
  }
];

export function Community() {
  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">Vibrant Community</Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            More Than a Workspace, <span className="text-orange-600">It's a Movement</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Connect with innovators, entrepreneurs, and creative minds shaping Cairo's future
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-orange-100 mb-4">
                    <stat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-4xl mb-2 text-orange-600">{stat.value}</div>
                  <h3 className="text-xl mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Events */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl mb-6">
              Upcoming <span className="text-orange-600">Events</span>
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-orange-600">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="text-center min-w-[60px]">
                      <div className="text-2xl text-orange-600">{event.date.split(' ')[1]}</div>
                      <div className="text-sm text-gray-500">{event.date.split(' ')[0]}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{event.title}</h4>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Badge variant="outline" className="text-xs">{event.type}</Badge>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {event.attendees} attending
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button className="mt-6 w-full bg-orange-600 hover:bg-orange-700">
              <Calendar className="mr-2 h-4 w-4" />
              View All Events
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759873066311-ce4966c249ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuZXR3b3JraW5nJTIwZXZlbnR8ZW58MXx8fHwxNzYxOTc4Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Community Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h4 className="text-2xl mb-2">Join Our Next Mixer</h4>
              <p className="text-gray-200">
                Meet fellow innovators, share ideas, and build lasting connections
              </p>
            </div>
          </motion.div>
        </div>

        {/* Community Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-12 text-white text-center"
        >
          <h3 className="text-3xl mb-4">Become Part of Something Bigger</h3>
          <p className="text-orange-100 max-w-2xl mx-auto mb-8 text-lg">
            Access exclusive perks, mentorship programs, investor connections, and a support system that helps you thrive
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              Join the Community
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
