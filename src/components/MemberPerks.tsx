import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { 
  Coffee, 
  Dumbbell, 
  Utensils, 
  GraduationCap, 
  Briefcase,
  Heart,
  Shirt,
  Plane,
  ShoppingBag,
  Headphones,
  Book,
  Sparkles
} from "lucide-react";

const perks = [
  {
    icon: Coffee,
    title: "Premium Cafés",
    discount: "20% OFF",
    partner: "Beano's & Cilantro",
    description: "Daily coffee and food discounts",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Dumbbell,
    title: "Fitness Centers",
    discount: "30% OFF",
    partner: "Gold's Gym & Fitness First",
    description: "Exclusive gym membership rates",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Utensils,
    title: "Restaurant Deals",
    discount: "15% OFF",
    partner: "30+ Partner Restaurants",
    description: "Lunch and dinner discounts",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: GraduationCap,
    title: "Online Courses",
    discount: "40% OFF",
    partner: "Udemy & Coursera",
    description: "Professional development courses",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "Business Services",
    discount: "25% OFF",
    partner: "Legal & Accounting",
    description: "Professional business support",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Heart,
    title: "Wellness Programs",
    discount: "Free Access",
    partner: "Meditation & Yoga",
    description: "Mental health and wellness",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Shirt,
    title: "Fashion Brands",
    discount: "20% OFF",
    partner: "Selected Retailers",
    description: "Workwear and casual fashion",
    color: "from-purple-500 to-fuchsia-500"
  },
  {
    icon: Plane,
    title: "Travel Perks",
    discount: "10% OFF",
    partner: "Airlines & Hotels",
    description: "Business travel discounts",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    discount: "15% OFF",
    partner: "Amazon & Noon",
    description: "Online shopping benefits",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Headphones,
    title: "Tech Products",
    discount: "20% OFF",
    partner: "Apple & Microsoft",
    description: "Software and hardware deals",
    color: "from-gray-500 to-slate-600"
  },
  {
    icon: Book,
    title: "Books & Media",
    discount: "25% OFF",
    partner: "Audible & Kindle",
    description: "Digital content subscriptions",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Sparkles,
    title: "VIP Events",
    discount: "Free Access",
    partner: "Exclusive Networking",
    description: "Members-only gatherings",
    color: "from-yellow-500 to-amber-500"
  }
];

export function MemberPerks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            Exclusive Benefits
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Premium <span className="text-[#00009f]">Member Perks</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Enjoy exclusive discounts and benefits from our premium partners. 
            Save thousands of EGP every month on the services you love.
          </p>
        </motion.div>

        {/* Featured Perk Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-gradient-to-r from-[#00009f] to-[#000080] rounded-2xl p-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl mb-4">Save Over EGP 5,000 Monthly</h3>
              <p className="text-blue-100 text-lg mb-6">
                Access to 100+ partner benefits valued at over EGP 60,000 annually. 
                Your membership pays for itself!
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  ✨ New perks added monthly
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  🎁 Members-only offers
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-4xl mb-1">100+</div>
                <div className="text-blue-100 text-sm">Partners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-4xl mb-1">40%</div>
                <div className="text-blue-100 text-sm">Avg. Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-4xl mb-1">12</div>
                <div className="text-blue-100 text-sm">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-4xl mb-1">24/7</div>
                <div className="text-blue-100 text-sm">Access</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Perks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all group overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`bg-gradient-to-r ${perk.color} text-white border-none shadow-md`}>
                      {perk.discount}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${perk.color} mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <perk.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg mb-2 group-hover:text-[#00009f] transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{perk.partner}</p>
                  <p className="text-xs text-gray-500">{perk.description}</p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${perk.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 bg-blue-50 rounded-2xl p-8"
        >
          <p className="text-gray-700 text-lg mb-4">
            🎉 <span className="text-[#00009f]">New members</span> get instant access to all perks from day one
          </p>
          <p className="text-sm text-gray-600">
            Perks are updated regularly. Check your member portal for the latest offers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
