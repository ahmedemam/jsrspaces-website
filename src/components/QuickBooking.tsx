import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Clock, Users, MapPin, CheckCircle2 } from "lucide-react";

export function QuickBooking() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
              Book in Seconds
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-6">
              Reserve Your <span className="text-[#00009f]">Perfect Space</span> Instantly
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our smart booking system makes it effortless to find and reserve the ideal 
              workspace. Real-time availability, instant confirmation, and seamless payment.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Real-time space availability",
                "Instant booking confirmation",
                "Flexible cancellation policy",
                "Secure payment processing",
                "Mobile app integration"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#00009f] flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Booking Interface Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#00009f] to-[#000080] p-6 text-white">
                <h3 className="text-2xl mb-2">Quick Booking</h3>
                <p className="text-blue-100">Find your perfect workspace in 3 steps</p>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Location Select */}
                <div>
                  <label className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </label>
                  <div className="border-2 border-gray-200 rounded-lg p-3 hover:border-[#00009f] transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900">Downtown Cairo</span>
                      <span className="text-xs text-gray-500">3 floors available</span>
                    </div>
                  </div>
                </div>

                {/* Date Select */}
                <div>
                  <label className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Today', 'Tomorrow', 'This Week'].map((option, i) => (
                      <div
                        key={i}
                        className={`border-2 rounded-lg p-3 text-center cursor-pointer transition-all ${
                          i === 0 
                            ? 'border-[#00009f] bg-[#00009f]/5' 
                            : 'border-gray-200 hover:border-[#00009f]/50'
                        }`}
                      >
                        <div className="text-sm">{option}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Select */}
                <div>
                  <label className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Duration
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['1 Day', '1 Week', '1 Month', 'Custom'].map((option, i) => (
                      <div
                        key={i}
                        className={`border-2 rounded-lg p-2 text-center text-sm cursor-pointer transition-all ${
                          i === 0 
                            ? 'border-[#00009f] bg-[#00009f]/5' 
                            : 'border-gray-200 hover:border-[#00009f]/50'
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workspace Type */}
                <div>
                  <label className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Workspace Type
                  </label>
                  <div className="space-y-2">
                    {[
                      { name: 'Hot Desk', price: '350 EGP/day', available: 12 },
                      { name: 'Dedicated Desk', price: '5,200 EGP/mo', available: 5 },
                      { name: 'Private Office', price: '14,500 EGP/mo', available: 2 }
                    ].map((type, i) => (
                      <div
                        key={i}
                        className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                          i === 0 
                            ? 'border-[#00009f] bg-[#00009f]/5' 
                            : 'border-gray-200 hover:border-[#00009f]/50'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm">{type.name}</div>
                            <div className="text-xs text-gray-500">{type.price}</div>
                          </div>
                          <div className="text-xs text-gray-500">{type.available} available</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-[#00009f] hover:bg-[#000080] h-12">
                  Continue to Payment
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Secure payment • Instant confirmation • Free cancellation within 24h
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
