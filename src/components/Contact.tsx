import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, Loader2, User, MessageSquare, Calendar } from "lucide-react";
import { useState } from "react";
import { submitContactFormToERPNext } from "../services/erpnextApi";
import { getVisitorData } from "../utils/visitorTracking";
import { toast } from "sonner";
import { trackConversionAll } from "../utils/analytics";

type InterestOption = 'tour' | 'hotdesk' | 'dedicated' | 'office' | 'enterprise' | 'event';

const interestOptions: { value: InterestOption; label: string; description: string }[] = [
  { value: 'tour', label: 'Book a Tour', description: 'Visit our space' },
  { value: 'hotdesk', label: 'Hot Desk', description: 'Flexible workspace' },
  { value: 'dedicated', label: 'Dedicated Desk', description: 'Your own space' },
  { value: 'office', label: 'Private Office', description: 'Team workspace' },
  { value: 'enterprise', label: 'Enterprise', description: 'Custom solutions' },
  { value: 'event', label: 'Event Space', description: 'Host your event' }
];

export function Contact() {
  const [interest, setInterest] = useState<InterestOption | "">("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!firstName || !email) {
      toast.error('Please fill in your name and email');
      return;
    }

    setIsSubmitting(true);

    // Get visitor data if available
    const visitorData = getVisitorData();
    const visitorId = visitorData?.visitorId;

    const finalMessage = message || `Hi, I'm interested in ${interest ? interestOptions.find(opt => opt.value === interest)?.label : 'JSR Spaces'}!`;

    try {
      // Submit to ERPNext API
      const result = await submitContactFormToERPNext({
        firstName,
        lastName,
        email,
        phone,
        interest: interest || undefined,
        message: finalMessage,
        visitorId,
      }, true); // Send WhatsApp message

      if (result.success) {
        // Track conversion
        trackConversionAll.contactFormSubmit();
        toast.success(result.message || 'Thank you! Your message has been sent.');
        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setInterest("");
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('An error occurred. Please try again or contact us directly via WhatsApp.');
      
      // Fallback: Open WhatsApp directly if ERPNext fails
      const whatsappMessage = `Hi! I'm ${firstName}${lastName ? ' ' + lastName : ''} and I'm interested in JSR Spaces. ${finalMessage}`;
      const whatsappUrl = `https://wa.me/201040806692?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form - Booking Style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#00009f] to-[#000080] p-5 sm:p-6 text-white">
                <h3 className="text-xl sm:text-2xl mb-2">Get in Touch</h3>
                <p className="text-blue-100 text-sm sm:text-base">Tell us what you need and we'll help you find the perfect solution</p>
              </div>

              <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-5">
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name Fields */}
                  <div>
                    <label className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Your Name
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="border-2 border-gray-200 hover:border-[#00009f]/50 focus:border-[#00009f]"
                      />
                      <Input
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border-2 border-gray-200 hover:border-[#00009f]/50 focus:border-[#00009f]"
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <label className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-2 border-gray-200 hover:border-[#00009f]/50 focus:border-[#00009f]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+20 123 456 7890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border-2 border-gray-200 hover:border-[#00009f]/50 focus:border-[#00009f]"
                    />
                  </div>

                  {/* Interest Selection */}
                  <div>
                    <label className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      I'm interested in
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {interestOptions.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => setInterest(option.value)}
                          className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                            interest === option.value
                              ? 'border-[#00009f] bg-[#00009f]/5' 
                              : 'border-gray-200 hover:border-[#00009f]/50'
                          }`}
                        >
                          <div className="text-sm font-medium">{option.label}</div>
                          <div className="text-xs text-gray-500">{option.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message (Optional)
                    </label>
                    <Textarea
                      placeholder="Tell us about your workspace needs and how we can help..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="border-2 border-gray-200 hover:border-[#00009f]/50 focus:border-[#00009f] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#00009f] hover:bg-[#000080] h-12 sm:h-14 text-base sm:text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-gray-500">
                    We'll respond within 24 hours • Secure & Private • WhatsApp integration available
                  </p>
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
                    <h3 className="text-xl mb-4">Our Location</h3>
                    <div className="space-y-4 text-gray-600">
                      <div>
                        <div className="font-semibold text-gray-900">JSR Spaces - Nasr City</div>
                        <div className="text-sm">30B Asmaa Fahmi, Al Golf, Nasr City, Cairo 4451422</div>
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
                    <h3 className="text-xl mb-2">Phone & WhatsApp</h3>
                    <a href="tel:+201040806692" className="text-gray-600 hover:text-[#00009f] transition-colors">
                      010 40806692
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
                    <a href="mailto:hi@jsrspaces.com" className="text-gray-600 hover:text-[#00009f] transition-colors">
                      hi@jsrspaces.com
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
