import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { 
  Users, 
  Briefcase, 
  Video, 
  Mic, 
  TreePine, 
  Presentation,
  Phone,
  Armchair
} from "lucide-react";

const spaces = [
  {
    icon: Users,
    title: "Open Workspace",
    description: "Dynamic environment with hot desks and collaborative zones",
    capacity: "Up to 100 members",
    image: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjE5MDQyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Ergonomic seating", "Natural lighting", "Power outlets"]
  },
  {
    icon: Briefcase,
    title: "Private Offices",
    description: "Soundproof offices for teams from 2-20 people",
    capacity: "2-20 people",
    image: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MTk3OTIwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Lockable doors", "Custom branding", "Furniture included"]
  },
  {
    icon: Presentation,
    title: "Meeting Rooms",
    description: "State-of-the-art conference rooms with premium tech",
    capacity: "4-30 people",
    image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjE4OTU4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["4K displays", "Video conferencing", "Whiteboard walls"]
  },
  {
    icon: Mic,
    title: "Podcast Studio",
    description: "Professional recording studio with top-tier equipment",
    capacity: "Up to 6 hosts",
    image: "https://images.unsplash.com/photo-1761543262131-9d464d0d7426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb2RjYXN0JTIwc3R1ZGlvfGVufDF8fHx8MTc2MjAwMzA2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Soundproofing", "Pro microphones", "Recording software"]
  },
  {
    icon: Video,
    title: "Content Creation Lab",
    description: "Equipped space for video production and photography",
    capacity: "Creative teams",
    image: "https://images.unsplash.com/photo-1622141886977-9c74a99768c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYWluc3Rvcm0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MjAwMzA3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Green screen", "Studio lighting", "Camera equipment"]
  },
  {
    icon: TreePine,
    title: "Rooftop Terrace",
    description: "Open-air workspace with panoramic Cairo views",
    capacity: "30 people",
    image: "https://images.unsplash.com/photo-1749566323483-485539a09cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwdGVycmFjZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIwMDMwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Outdoor seating", "WiFi coverage", "Event ready"]
  },
  {
    icon: Phone,
    title: "Phone Booths",
    description: "Acoustic pods for private calls and focused work",
    capacity: "1 person",
    features: ["Soundproof", "Ventilated", "USB charging"]
  },
  {
    icon: Armchair,
    title: "Lounge Areas",
    description: "Relaxed spaces for informal meetings and breaks",
    capacity: "Flexible",
    image: "https://images.unsplash.com/photo-1758194190679-198a77cba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBsb3VuZ2V8ZW58MXx8fHwxNzYyMDAzMDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: ["Comfortable seating", "Coffee station", "Magazines"]
  }
];

export function WorkspaceTypes() {
  return (
    <section id="spaces" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">Premium Spaces</Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Diverse <span className="text-orange-600">Workspaces</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From collaborative zones to private sanctuaries, discover the perfect space for every work style
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {spaces.map((space, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full group">
                {space.image && (
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={space.image}
                      alt={space.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <space.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}
                {!space.image && (
                  <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <space.icon className="h-16 w-16 text-white" />
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">{space.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{space.description}</p>
                  <div className="text-sm text-orange-600 mb-3">{space.capacity}</div>
                  <ul className="space-y-1">
                    {space.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
