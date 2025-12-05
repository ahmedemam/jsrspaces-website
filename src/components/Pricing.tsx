import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Check, Sparkles, Crown, Rocket } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const monthlyPlans = [
  {
    name: "Daily Shared Access",
    icon: Sparkles,
    price: "200",
    period: "day",
    description: "Try us out with flexible daily access",
    features: [
      "Access to open workspace",
      "High-speed WiFi",
      "Free coffee & tea",
      "Community events access",
      "Printing credits (50 pages)"
    ],
    badge: "Flexible"
  },
  {
    name: "Hot Desk",
    icon: Rocket,
    price: "2,800",
    period: "month",
    description: "Perfect for freelancers and digital nomads",
    features: [
      "Access to open workspace",
      "High-speed gigabit WiFi",
      "Unlimited coffee & tea",
      "Printing credits (200 pages)",
      "Community events & workshops",
      "Business lounge access",
      "App-based booking"
    ],
    badge: "Popular"
  },
  {
    name: "Dedicated Desk",
    icon: Crown,
    price: "3,200",
    period: "month",
    description: "Your own space in our vibrant community",
    features: [
      "Your own dedicated desk",
      "24/7 access to workspace",
      "Lockable storage cabinet",
      "All Hot Desk benefits",
      "Mail handling & forwarding",
      "10 meeting room hours/month",
      "Dual 4K monitors",
      "Priority event registration"
    ],
    popular: true,
    badge: "Best Value"
  },
  {
    name: "Private Office",
    icon: Crown,
    price: "6,000",
    period: "month",
    description: "Premium office space for growing teams",
    features: [
      "Private lockable office (2-6 people)",
      "24/7 access with keycard",
      "Customizable branding",
      "All Dedicated Desk benefits",
      "Unlimited meeting rooms",
      "Priority concierge service",
      "Complimentary parking (2 spots)",
      "Virtual office address"
    ],
    badge: "Premium"
  }
];

const enterprisePlans = [
  {
    name: "Studio",
    price: "22,000",
    period: "month",
    description: "Premium suite for teams of 6-12",
    features: [
      "Private floor space (6-12 people)",
      "Custom interior design",
      "Dedicated phone booth",
      "Unlimited meeting rooms",
      "Executive concierge",
      "Complimentary parking (4 spots)",
      "Catering services available",
      "Global network access"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "—",
    description: "Tailored solutions for established companies",
    features: [
      "Full floor or custom build-out",
      "Dedicated account manager",
      "Custom IT infrastructure",
      "White-glove concierge",
      "Branded reception area",
      "Priority event hosting",
      "Flexible terms & contracts",
      "24/7 support hotline"
    ],
    badge: "Contact Us"
  }
];

const addOns = [
  { name: "Meeting Room Hour", price: "200" },
  { name: "Podcast Studio Hour", price: "500" },
  { name: "Event Space Rental", price: "2,500" },
  { name: "Additional Parking", price: "800/month" },
  { name: "Virtual Office Address", price: "1,200/month" },
  { name: "Dedicated Phone Line", price: "600/month" }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">Transparent Pricing</Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Invest in Your <span className="text-[#00009f]">Success</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Flexible plans designed to scale with your ambitions. All prices in EGP.
          </p>
        </motion.div>

        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="monthly">Monthly Plans</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
              {monthlyPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className={`relative h-full flex flex-col ${
                      plan.popular 
                        ? 'border-[#00009f] border-2 shadow-2xl scale-105' 
                        : 'border-gray-200 shadow-lg'
                    }`}
                  >
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className={plan.popular ? "bg-[#00009f]" : "bg-gray-900"}>
                          {plan.badge}
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className={`inline-flex p-3 rounded-xl mb-4 ${
                        plan.popular ? 'bg-[#00009f]/10' : 'bg-gray-100'
                      }`}>
                        <plan.icon className={`h-6 w-6 ${
                          plan.popular ? 'text-[#00009f]' : 'text-gray-700'
                        }`} />
                      </div>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4">
                        {plan.price === "Custom" ? (
                          <span className="text-4xl">Custom</span>
                        ) : (
                          <>
                            <span className="text-4xl">EGP {plan.price}</span>
                            <span className="text-gray-600">/{plan.period}</span>
                          </>
                        )}
                      </div>
                      <p className="text-gray-600 mt-2 text-sm">{plan.description}</p>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-6 flex-1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-4 w-4 text-[#00009f] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-[#00009f] hover:bg-[#000080]' 
                            : ''
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enterprise">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12">
              {enterprisePlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col border-2 shadow-xl bg-gradient-to-br from-white to-gray-50">
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-[#00009f]">{plan.badge}</Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="mt-4">
                        {plan.price === "Custom" ? (
                          <span className="text-4xl text-[#00009f]">Custom Quote</span>
                        ) : (
                          <>
                            <span className="text-4xl">EGP {plan.price}</span>
                            <span className="text-gray-600">/{plan.period}</span>
                          </>
                        )}
                      </div>
                      <p className="text-gray-600 mt-2">{plan.description}</p>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-6 flex-1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-[#00009f] mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) element.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full bg-[#00009f] hover:bg-[#000080]"
                      >
                        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl sm:text-2xl text-center mb-6 sm:mb-8">
            Add-On <span className="text-[#00009f]">Services</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-3 sm:p-4">
                  <div className="text-xs sm:text-sm mb-1">{addon.name}</div>
                  <div className="text-[#00009f] text-sm sm:text-base">EGP {addon.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-[#00009f]/5 rounded-2xl p-8"
        >
          <h3 className="text-2xl mb-3">30-Day Money-Back Guarantee</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not satisfied? Get a full refund within your first 30 days. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
