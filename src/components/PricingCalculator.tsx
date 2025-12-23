import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calculator, Users, Clock, Building2, CheckCircle2, GraduationCap, Briefcase, User, Calendar, Percent } from "lucide-react";

type UserType = "student" | "freelancer" | "regular";
type WorkspaceType = "shared" | "private" | "none";
type SubscriptionType = "hourly" | "monthly";

interface CalculationResult {
  basePrice: number;
  discountAmount: number;
  finalPrice: number;
  breakdown: string[];
}

export function PricingCalculator() {
  const [userType, setUserType] = useState<UserType>("regular");
  const [workspaceType, setWorkspaceType] = useState<WorkspaceType>("shared");
  const [subscriptionType, setSubscriptionType] = useState<SubscriptionType>("hourly");
  const [hours, setHours] = useState<number>(1);
  const [people, setPeople] = useState<number>(1);
  const [virtualPackage, setVirtualPackage] = useState<"basic" | "basic-2h" | "basic-5h" | "none">("none");

  // Calculate workspace pricing
  const calculateWorkspacePrice = (): CalculationResult => {
    if (workspaceType === "none") {
      return { basePrice: 0, discountAmount: 0, finalPrice: 0, breakdown: [] };
    }

    let basePrice = 0;
    const breakdown: string[] = [];

    // Monthly subscription pricing
    if (subscriptionType === "monthly") {
      if (workspaceType === "shared") {
        const monthlyPrice = 2800; // Hot Desk monthly price
        basePrice = monthlyPrice * people;
        breakdown.push(`Monthly subscription × ${people} person(s) = ${basePrice.toLocaleString()} EGP/month`);
      } else if (workspaceType === "private") {
        const monthlyPrice = 6000; // Private Office monthly price
        basePrice = monthlyPrice * people;
        breakdown.push(`Monthly subscription × ${people} person(s) = ${basePrice.toLocaleString()} EGP/month`);
      }
    } else if (workspaceType === "shared") {
      // Hourly/daily pricing for shared spaces
      if (hours <= 7) {
        basePrice = hours * 30 * people;
        breakdown.push(`${hours} hour(s) × 30 EGP × ${people} person(s) = ${hours * 30 * people} EGP`);
      } else {
        basePrice = 200 * people;
        breakdown.push(`Full day (8+ hours) × ${people} person(s) = ${200 * people} EGP`);
      }
    } else {
      // Private cabin hourly/daily pricing
      if (hours <= 7) {
        basePrice = hours * 60 * people;
        breakdown.push(`${hours} hour(s) × 60 EGP × ${people} person(s) = ${hours * 60 * people} EGP`);
      } else {
        basePrice = 400 * people;
        breakdown.push(`Full day (8+ hours) × ${people} person(s) = ${400 * people} EGP`);
      }
    }

    // Apply discount based on user type
    let discountAmount = 0;
    if (userType === "freelancer") {
      discountAmount = basePrice * 0.15;
      breakdown.push(`Freelancer discount (15%): -${discountAmount.toFixed(2)} EGP`);
    } else if (userType === "student") {
      discountAmount = basePrice * 0.20;
      breakdown.push(`Student discount (20%): -${discountAmount.toFixed(2)} EGP`);
    }

    const finalPrice = basePrice - discountAmount;

    return {
      basePrice,
      discountAmount,
      finalPrice: Math.max(0, finalPrice),
      breakdown,
    };
  };

  const getVirtualAddressPrice = (): number => {
    switch (virtualPackage) {
      case "basic":
        return 4000;
      case "basic-2h":
        return 6000;
      case "basic-5h":
        return 9000;
      default:
        return 0;
    }
  };

  const workspaceResult = calculateWorkspacePrice();
  const virtualPrice = getVirtualAddressPrice();
  const totalPrice = workspaceResult.finalPrice + virtualPrice;

  const handleWhatsApp = () => {
    let message = "Hi! I'd like to get a quote for:\n\n";
    
    if (userType === "student") {
      message += `👨‍🎓 I am a Student\n`;
    } else if (userType === "freelancer") {
      message += `💼 I am a Freelancer\n`;
    }
    
    if (workspaceType !== "none") {
      if (workspaceType === "shared") {
        message += `📌 Shared Space\n`;
      } else {
        message += `📌 Private Cabin/Room\n`;
      }
      if (subscriptionType === "monthly") {
        message += `📅 Monthly Subscription\n`;
      } else {
        message += `⏰ Duration: ${hours} hour(s)\n`;
      }
      message += `👥 People: ${people}\n`;
    }
    
    if (virtualPackage !== "none") {
      const packageNames = {
        basic: "Basic Virtual Address (4,000 EGP/year)",
        "basic-2h": "Basic + 2h/month (6,000 EGP/year)",
        "basic-5h": "Basic + 5h/month + Services (9,000 EGP/year)",
      };
      message += `🏢 Virtual Address: ${packageNames[virtualPackage]}\n`;
    }
    
    message += `\n💰 Total: ${totalPrice.toLocaleString()} EGP${subscriptionType === "monthly" ? "/month" : ""}\n\n`;
    message += "Can you help me complete the booking?";

    const whatsappUrl = `https://wa.me/201040806692?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleAskForDiscount = () => {
    let message = "Hi! I'd like to ask about special discounts or custom pricing.\n\n";
    
    if (userType === "student") {
      message += `👨‍🎓 I am a Student\n`;
    } else if (userType === "freelancer") {
      message += `💼 I am a Freelancer\n`;
    } else {
      message += `👤 Regular User\n`;
    }
    
    if (workspaceType !== "none") {
      if (workspaceType === "shared") {
        message += `📌 Interested in: Shared Space\n`;
        if (subscriptionType === "monthly") {
          message += `📅 Monthly Subscription\n`;
        } else {
          message += `⏰ Duration: ${hours} hour(s)\n`;
        }
      } else {
        message += `📌 Interested in: Private Cabin/Room\n`;
        message += `⏰ Duration: ${hours} hour(s)\n`;
      }
      message += `👥 People: ${people}\n`;
    }
    
    message += `\n💬 I'm looking for the best deal. Can you offer me a special discount?`;

    const whatsappUrl = `https://wa.me/201040806692?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            <Calculator className="h-3 w-3 mr-1" />
            Pricing Calculator
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            Calculate Your <span className="text-[#00009f]">Perfect Price</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get an instant quote for your workspace needs. Simple, transparent, and accurate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
              Calculate in Seconds
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
              Get Your <span className="text-[#00009f]">Instant Quote</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Our pricing calculator makes it effortless to find the perfect workspace solution. 
              Select your profile, choose your workspace, and get an instant quote with all discounts applied.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                "Real-time pricing calculation",
                "Automatic discount application",
                "Transparent price breakdown",
                "Instant WhatsApp booking",
                "Student & freelancer discounts"
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
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#00009f] to-[#000080] p-5 sm:p-6 text-white">
                <h3 className="text-xl sm:text-2xl mb-2">Pricing Calculator</h3>
                <p className="text-blue-100 text-sm sm:text-base">Get your instant quote in one form</p>
              </div>

              <CardContent className="p-4 sm:p-6 space-y-5">
                <Tabs defaultValue="workspace" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-5">
                    <TabsTrigger value="workspace">Workspace Rental</TabsTrigger>
                    <TabsTrigger value="virtual">Virtual Address</TabsTrigger>
                  </TabsList>

                  <TabsContent value="workspace" className="space-y-5">
                    {/* User Type */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">
                        I am a
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setUserType("student")}
                          className={`p-3 rounded-lg border-2 transition-all text-center ${
                            userType === "student"
                              ? "border-[#00009f] bg-[#00009f]/5"
                              : "border-gray-200 hover:border-[#00009f]/50"
                          }`}
                        >
                          <GraduationCap className={`h-5 w-5 mx-auto mb-1 ${userType === "student" ? "text-[#00009f]" : "text-gray-400"}`} />
                          <div className="text-xs font-medium">Student</div>
                          <div className="text-xs text-gray-500">20% off</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setUserType("freelancer")}
                          className={`p-3 rounded-lg border-2 transition-all text-center ${
                            userType === "freelancer"
                              ? "border-[#00009f] bg-[#00009f]/5"
                              : "border-gray-200 hover:border-[#00009f]/50"
                          }`}
                        >
                          <Briefcase className={`h-5 w-5 mx-auto mb-1 ${userType === "freelancer" ? "text-[#00009f]" : "text-gray-400"}`} />
                          <div className="text-xs font-medium">Freelancer</div>
                          <div className="text-xs text-gray-500">15% off</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setUserType("regular")}
                          className={`p-3 rounded-lg border-2 transition-all text-center ${
                            userType === "regular"
                              ? "border-[#00009f] bg-[#00009f]/5"
                              : "border-gray-200 hover:border-[#00009f]/50"
                          }`}
                        >
                          <User className={`h-5 w-5 mx-auto mb-1 ${userType === "regular" ? "text-[#00009f]" : "text-gray-400"}`} />
                          <div className="text-xs font-medium">Regular</div>
                          <div className="text-xs text-gray-500">Standard</div>
                        </button>
                      </div>
                    </div>

                    {/* Workspace Type */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        Workspace Type
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setWorkspaceType("shared")}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            workspaceType === "shared"
                              ? "border-[#00009f] bg-[#00009f]/5"
                              : "border-gray-200 hover:border-[#00009f]/50"
                          }`}
                        >
                          <div className="font-semibold mb-1">Shared Space</div>
                          <div className="text-sm text-gray-600">30 EGP/hour</div>
                          <div className="text-xs text-gray-500 mt-1">Full day: 200 EGP</div>
                          <div className="text-xs text-[#00009f] font-medium mt-1">Monthly: 2,800 EGP</div>
                          {workspaceType === "shared" && (
                            <CheckCircle2 className="h-4 w-4 text-[#00009f] mt-2" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => setWorkspaceType("private")}
                          className={`p-4 rounded-lg border-2 transition-all text-left ${
                            workspaceType === "private"
                              ? "border-[#00009f] bg-[#00009f]/5"
                              : "border-gray-200 hover:border-[#00009f]/50"
                          }`}
                        >
                          <div className="font-semibold mb-1">Private Cabin</div>
                          <div className="text-sm text-gray-600">60 EGP/hour</div>
                          <div className="text-xs text-gray-500 mt-1">Full day: 400 EGP</div>
                          <div className="text-xs text-[#00009f] font-medium mt-1">Monthly: 6,000 EGP</div>
                          {workspaceType === "private" && (
                            <CheckCircle2 className="h-4 w-4 text-[#00009f] mt-2" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Subscription Type */}
                    {workspaceType !== "none" && (
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-3 block flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Subscription Type
                        </Label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setSubscriptionType("hourly")}
                            className={`p-3 rounded-lg border-2 transition-all text-center ${
                              subscriptionType === "hourly"
                                ? "border-[#00009f] bg-[#00009f]/5"
                                : "border-gray-200 hover:border-[#00009f]/50"
                            }`}
                          >
                            <Clock className={`h-5 w-5 mx-auto mb-1 ${subscriptionType === "hourly" ? "text-[#00009f]" : "text-gray-400"}`} />
                            <div className="text-xs font-medium">Hourly/Daily</div>
                          </button>
                          <button
                            type="button"
                            onClick={() => setSubscriptionType("monthly")}
                            className={`p-3 rounded-lg border-2 transition-all text-center ${
                              subscriptionType === "monthly"
                                ? "border-[#00009f] bg-[#00009f]/5"
                                : "border-gray-200 hover:border-[#00009f]/50"
                            }`}
                          >
                            <Calendar className={`h-5 w-5 mx-auto mb-1 ${subscriptionType === "monthly" ? "text-[#00009f]" : "text-gray-400"}`} />
                            <div className="text-xs font-medium">Monthly</div>
                            <div className="text-xs text-[#00009f] mt-0.5">
                              {workspaceType === "shared" ? "2,800" : "6,000"} EGP/mo
                            </div>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Hours (only for hourly/daily or private) */}
                    {subscriptionType === "hourly" && (
                      <div>
                        <Label htmlFor="hours" className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Hours
                        </Label>
                        <Input
                          id="hours"
                          type="number"
                          min="1"
                          max="24"
                          value={hours}
                          onChange={(e) => setHours(Math.max(1, parseInt(e.target.value) || 1))}
                          className="border-2 border-gray-200 hover:border-[#00009f]/50 focus:border-[#00009f]"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          {hours <= 7
                            ? `Hourly rate: ${workspaceType === "shared" ? "30" : "60"} EGP/hour per person`
                            : "Full day rate applies (8+ hours)"}
                        </p>
                      </div>
                    )}

                    {/* People */}
                    <div>
                      <Label htmlFor="people" className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Number of People
                      </Label>
                      <Input
                        id="people"
                        type="number"
                        min="1"
                        value={people}
                        onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value) || 1))}
                        className="border-2 border-gray-200 hover:border-[#00009f]/50 focus:border-[#00009f]"
                      />
                    </div>

                    {/* Price Summary */}
                    {workspaceType !== "none" && workspaceResult.basePrice > 0 && (
                      <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                        <div className="font-semibold text-gray-900 mb-2">Price Breakdown</div>
                        {workspaceResult.breakdown.map((item, index) => (
                          <div key={index} className="text-sm text-gray-600">{item}</div>
                        ))}
                        <div className="border-t pt-2 mt-2 flex justify-between items-center">
                          <span className="font-semibold">Total:</span>
                          <span className="text-lg font-bold text-[#00009f]">
                            {workspaceResult.finalPrice.toLocaleString()} EGP{subscriptionType === "monthly" ? "/month" : ""}
                          </span>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="virtual" className="space-y-5">
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-3 block">
                        Virtual Address Package
                      </Label>
                      <div className="space-y-3">
                        {[
                          {
                            id: "none" as const,
                            name: "No Virtual Address",
                            price: 0,
                            features: [],
                          },
                          {
                            id: "basic" as const,
                            name: "Basic Package",
                            price: 4000,
                            features: ["Virtual address", "Business contract"],
                          },
                          {
                            id: "basic-2h" as const,
                            name: "Basic + 2h/month",
                            price: 6000,
                            features: ["Virtual address", "Business contract", "2 hours workspace/month"],
                          },
                          {
                            id: "basic-5h" as const,
                            name: "Premium Package",
                            price: 9000,
                            features: [
                              "Virtual address",
                              "Business contract",
                              "5 hours workspace/month",
                              "Logo display",
                              "Reception service",
                              "Mail service",
                            ],
                          },
                        ].map((pkg) => (
                          <button
                            key={pkg.id}
                            type="button"
                            onClick={() => setVirtualPackage(pkg.id)}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                              virtualPackage === pkg.id
                                ? "border-[#00009f] bg-[#00009f]/5"
                                : "border-gray-200 hover:border-[#00009f]/50"
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900">{pkg.name}</div>
                                {pkg.price > 0 && (
                                  <div className="text-xl font-bold text-[#00009f] mt-1">
                                    {pkg.price.toLocaleString()} EGP
                                    <span className="text-sm text-gray-500 font-normal">/year</span>
                                  </div>
                                )}
                              </div>
                              {virtualPackage === pkg.id && (
                                <CheckCircle2 className="h-5 w-5 text-[#00009f] flex-shrink-0" />
                              )}
                            </div>
                            {pkg.features.length > 0 && (
                              <ul className="space-y-1 mt-3">
                                {pkg.features.map((feature, idx) => (
                                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="h-3 w-3 text-[#00009f] flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </button>
                        ))}
                      </div>
                      {virtualPrice > 0 && (
                        <div className="p-4 bg-gray-50 rounded-lg mt-4">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Total:</span>
                            <span className="text-lg font-bold text-[#00009f]">
                              {virtualPrice.toLocaleString()} EGP/year
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Total Price & CTA */}
                {totalPrice > 0 && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-gray-900">Grand Total:</span>
                      <span className="text-2xl font-bold text-[#00009f]">
                        {totalPrice.toLocaleString()} EGP{subscriptionType === "monthly" ? "/month" : ""}
                      </span>
                    </div>
                    {workspaceResult.discountAmount > 0 && (
                      <div className="text-sm text-green-600">
                        You saved {workspaceResult.discountAmount.toFixed(2)} EGP{subscriptionType === "monthly" ? "/month" : ""} with your discount!
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-3">
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-[#00009f] hover:bg-[#000080]"
                    size="lg"
                    disabled={totalPrice === 0}
                  >
                    Book via WhatsApp
                  </Button>
                  <Button
                    onClick={handleAskForDiscount}
                    variant="outline"
                    className="w-full border-2 border-[#00009f] text-[#00009f] hover:bg-[#00009f]/5"
                    size="lg"
                  >
                    <Percent className="h-4 w-4 mr-2" />
                    Ask for Discount
                  </Button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Secure booking • Instant confirmation • Free cancellation within 24h
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
