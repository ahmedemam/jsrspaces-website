import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const locations = [
  {
    name: "Downtown Cairo",
    address: "123 Tahrir Square, Downtown, Cairo",
    phone: "+20 2 1234 5678",
    email: "downtown@jsrspaces.com",
    hours: "Mon-Fri: 8am-8pm, Sat: 9am-5pm",
    features: ["3 Floors", "150 Desks", "10 Meeting Rooms", "Rooftop Terrace"]
  },
  {
    name: "New Cairo",
    address: "456 Fifth Settlement, New Cairo",
    phone: "+20 2 2345 6789",
    email: "newcairo@jsrspaces.com",
    hours: "Mon-Fri: 8am-8pm, Sat: 9am-5pm",
    features: ["2 Floors", "120 Desks", "8 Meeting Rooms", "Podcast Studio"]
  },
  {
    name: "Zamalek",
    address: "789 26th of July St, Zamalek, Cairo",
    phone: "+20 2 3456 7890",
    email: "zamalek@jsrspaces.com",
    hours: "Mon-Fri: 8am-8pm, Sat: 9am-5pm",
    features: ["Boutique Space", "80 Desks", "6 Meeting Rooms", "Nile View"]
  }
];

export function LocationMap() {
  return (
    <section id="locations" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            Our Locations
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Find JSR Spaces <span className="text-[#00009f]">Near You</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Three premium locations across Cairo, strategically positioned for your convenience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-xl bg-[#00009f]/10 mb-4">
                    <MapPin className="h-6 w-6 text-[#00009f]" />
                  </div>
                  
                  <h3 className="text-2xl mb-4">{location.name}</h3>
                  
                  <div className="space-y-3 text-gray-600 mb-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-gray-400 flex-shrink-0" />
                      <span className="text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-sm hover:text-[#00009f] transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-sm hover:text-[#00009f] transition-colors">
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 mt-1 text-gray-400 flex-shrink-0" />
                      <span className="text-sm">{location.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-gray-200 to-gray-300 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-[#00009f] mx-auto mb-4" />
              <p className="text-xl text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500 mt-2">View all JSR Spaces locations</p>
            </div>
          </div>
          
          {/* Map markers */}
          {[
            { top: '40%', left: '45%' },
            { top: '55%', left: '60%' },
            { top: '35%', left: '52%' }
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 bg-[#00009f] rounded-full shadow-lg flex items-center justify-center"
              style={{ top: pos.top, left: pos.left }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            >
              <MapPin className="h-4 w-4 text-white" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
