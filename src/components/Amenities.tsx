import { 
  Wifi, 
  Coffee, 
  Printer, 
  Shield, 
  Utensils, 
  Headphones,
  Dumbbell,
  Sparkles,
  Car,
  Wind,
  Laptop,
  Monitor,
  Users,
  Calendar,
  Mail,
  Heart,
  Leaf,
  Zap,
  BookOpen,
  Globe
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const amenitiesCategories = {
  workspace: [
    {
      icon: Wifi,
      title: "Gigabit Internet",
      description: "Enterprise-grade fiber with 1Gbps speed + backup lines"
    },
    {
      icon: Monitor,
      title: "Dual Monitors",
      description: "4K displays available for all dedicated desk members"
    },
    {
      icon: Printer,
      title: "Business Services",
      description: "Printing, scanning, laminating, and binding services"
    },
    {
      icon: Headphones,
      title: "Focus Pods",
      description: "Acoustic phone booths with ventilation and lighting"
    },
    {
      icon: Laptop,
      title: "Tech Support",
      description: "On-site IT support for hardware and software issues"
    },
    {
      icon: Zap,
      title: "Smart Lockers",
      description: "Secure digital lockers with mobile app access"
    }
  ],
  lifestyle: [
    {
      icon: Coffee,
      title: "Artisan Café",
      description: "Premium espresso bar with specialty coffee and healthy snacks"
    },
    {
      icon: Utensils,
      title: "Gourmet Kitchen",
      description: "Chef-quality appliances and communal dining area"
    },
    {
      icon: Dumbbell,
      title: "Wellness Studio",
      description: "Yoga room with morning classes and meditation sessions"
    },
    {
      icon: Heart,
      title: "Relaxation Zone",
      description: "Massage chairs and quiet spaces for mental wellbeing"
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary parking with EV charging stations"
    },
    {
      icon: Wind,
      title: "Air Purification",
      description: "HEPA filtration and climate control throughout"
    }
  ],
  community: [
    {
      icon: Users,
      title: "Networking Events",
      description: "Weekly mixers, workshops, and industry meetups"
    },
    {
      icon: Calendar,
      title: "Event Spaces",
      description: "Host your own events with our premium venues"
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Business books, magazines, and digital subscriptions"
    },
    {
      icon: Sparkles,
      title: "Concierge Service",
      description: "Personal assistance for reservations and requests"
    },
    {
      icon: Mail,
      title: "Mail & Packages",
      description: "Professional business address with mail handling"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access to partner coworking spaces worldwide"
    }
  ],
  innovation: [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Biometric access, CCTV, and 24/7 security personnel"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Solar power, recycling programs, and eco-friendly design"
    },
    {
      icon: Monitor,
      title: "Smart Rooms",
      description: "IoT-enabled spaces with automated booking and controls"
    },
    {
      icon: Zap,
      title: "Fast Track",
      description: "Priority booking and exclusive member benefits"
    }
  ]
};

export function Amenities() {
  return (
    <section id="amenities" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">Premium Amenities</Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Everything You Need, <span className="text-[#00009f]">Nothing You Don't</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Experience a workspace designed for the modern professional—where luxury meets productivity
          </p>
        </motion.div>
        
        <Tabs defaultValue="workspace" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
            <TabsTrigger value="workspace" className="py-3">Workspace Tech</TabsTrigger>
            <TabsTrigger value="lifestyle" className="py-3">Lifestyle & Wellness</TabsTrigger>
            <TabsTrigger value="community" className="py-3">Community</TabsTrigger>
            <TabsTrigger value="innovation" className="py-3">Innovation</TabsTrigger>
          </TabsList>
          
          {Object.entries(amenitiesCategories).map(([category, amenities]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className="border-none shadow-sm hover:shadow-lg transition-all group h-full bg-gradient-to-br from-white to-gray-50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-[#00009f]/10 group-hover:bg-[#00009f]/20 transition-colors">
                            <amenity.icon className="h-6 w-6 text-[#00009f]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg mb-2">{amenity.title}</h3>
                            <p className="text-gray-600 text-sm">{amenity.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
