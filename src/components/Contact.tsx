import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">Get Started</Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Let's Make It <span className="text-[#00009f]">Happen</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Ready to elevate your work experience? Reach out and join Cairo's most innovative community
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+20 123 456 7890" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interest">I'm interested in</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tour">Booking a Tour</SelectItem>
                        <SelectItem value="hotdesk">Hot Desk Membership</SelectItem>
                        <SelectItem value="dedicated">Dedicated Desk</SelectItem>
                        <SelectItem value="office">Private Office</SelectItem>
                        <SelectItem value="enterprise">Enterprise Solution</SelectItem>
                        <SelectItem value="event">Event Space Rental</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your workspace needs and how we can help..." 
                      rows={5} 
                    />
                  </div>
                  
                  <Button className="w-full bg-[#00009f] hover:bg-[#000080] h-12">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Locations */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#00009f]/10">
                    <MapPin className="h-6 w-6 text-[#00009f]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-4">Our Locations</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <div className="font-semibold text-gray-900">Downtown Cairo</div>
                        <div className="text-sm">123 Tahrir Square, Cairo</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Zamalek</div>
                        <div className="text-sm">45 26th of July Street, Zamalek</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">New Cairo</div>
                        <div className="text-sm">The District, 5th Settlement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Details */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#00009f]/10">
                    <Phone className="h-6 w-6 text-[#00009f]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Phone</h3>
                    <a href="tel:+20212345678" className="text-gray-600 hover:text-[#00009f] transition-colors">
                      +20 2 1234 5678
                    </a>
                    <div className="text-sm text-gray-500 mt-1">Sales & Inquiries</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#00009f]/10">
                    <Mail className="h-6 w-6 text-[#00009f]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Email</h3>
                    <a href="mailto:hello@jsrspaces.com" className="text-gray-600 hover:text-[#00009f] transition-colors">
                      hello@jsrspaces.com
                    </a>
                    <div className="text-sm text-gray-500 mt-1">We reply within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Hours */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#00009f]/10">
                    <Clock className="h-6 w-6 text-[#00009f]" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-4">Office Hours</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-semibold">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-semibold">10:00 AM - 4:00 PM</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                      <Badge variant="outline" className="text-[#00009f] border-[#00009f]">
                        24/7 Access for Members
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
