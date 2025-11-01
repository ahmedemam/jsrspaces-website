import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const location = {
  name: "Nasr City",
  address: "30B Asmaa Fahmi, Al Golf, Nasr City, Cairo Governorate 4451422",
  phone: "+20 10 40806692",
  email: "hi@jsrspaces.com",
  hours: "Sun-Thu: 9am-8pm, Sat: 9am-5pm",
  mapLink: "https://maps.app.goo.gl/vWGqsQhxdpb2L9gV7",
  features: ["Modern Space", "Hot Desks", "Dedicated Desks", "Meeting Rooms", "High-Speed WiFi", "Premium Amenities"]
};

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
            Our Location
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Visit <span className="text-[#00009f]">JSR Spaces</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Located in Al Golf, Nasr City - Cairo's premier coworking destination
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Location Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-none shadow-xl">
              <CardContent className="p-8">
                <div className="inline-flex p-4 rounded-2xl bg-[#00009f]/10 mb-6">
                  <MapPin className="h-8 w-8 text-[#00009f]" />
                </div>
                
                <h3 className="text-3xl mb-6">JSR Spaces - {location.name}</h3>
                
                <div className="space-y-4 text-gray-600 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-1 text-[#00009f] flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Address</p>
                      <a 
                        href={location.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#00009f] transition-colors"
                      >
                        {location.address}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 mt-1 text-[#00009f] flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone & WhatsApp</p>
                      <a href={`tel:${location.phone}`} className="hover:text-[#00009f] transition-colors block">
                        {location.phone}
                      </a>
                      <a 
                        href={`https://wa.me/2001040806692`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:text-green-700 transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-1 text-[#00009f] flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a href={`mailto:${location.email}`} className="hover:text-[#00009f] transition-colors">
                        {location.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 mt-1 text-[#00009f] flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Hours</p>
                      <span>{location.hours}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-3">Our Facilities</p>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-[#00009f]/10 text-[#00009f] rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="border-none shadow-xl bg-gradient-to-br from-[#00009f] to-[#000080] text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Get Directions</h3>
                <p className="text-blue-100 mb-6">
                  Located in Al Golf, Nasr City - easily accessible with parking available.
                </p>
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#00009f] px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors mb-6"
                >
                  <MapPin className="h-5 w-5" />
                  Open in Google Maps
                </a>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Prime Nasr City location</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Parking available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span>Easy access from main roads</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Visit Us Today</h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free tour and experience JSR Spaces firsthand. Our team is ready to welcome you!
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl text-[#00009f] mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Access</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl text-[#00009f] mb-1">200+</div>
                    <div className="text-xs text-gray-600">Workspaces</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-gray-200 to-gray-300 relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-[#00009f] mx-auto mb-4" />
              <p className="text-xl text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500 mt-2">Al Golf, Nasr City, Cairo</p>
            </div>
          </div>
          
          {/* Map marker */}
          <motion.div
            className="absolute w-12 h-12 bg-[#00009f] rounded-full shadow-xl flex items-center justify-center"
            style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <MapPin className="h-6 w-6 text-white" />
          </motion.div>
          
          {/* Pulsing ring */}
          <motion.div
            className="absolute rounded-full border-4 border-[#00009f]"
            style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="w-12 h-12" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
