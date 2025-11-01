import { motion } from "motion/react";
import { Badge } from "./ui/badge";

// Simulating partner logos with styled text placeholders
const partners = [
  { name: "TechStart", industry: "Technology" },
  { name: "CreativeHub", industry: "Design" },
  { name: "FinanceFlow", industry: "Finance" },
  { name: "MediaMakers", industry: "Media" },
  { name: "LegalEase", industry: "Legal" },
  { name: "ConsultPro", industry: "Consulting" },
  { name: "HealthTech", industry: "Healthcare" },
  { name: "EduSphere", industry: "Education" },
  { name: "GreenVentures", industry: "Sustainability" },
  { name: "DataDrive", industry: "Analytics" },
  { name: "CloudSync", industry: "Software" },
  { name: "BrandForge", industry: "Marketing" }
];

export function Partners() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            Trusted Partners
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Join <span className="text-[#00009f]">Industry Leaders</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Companies from diverse industries trust JSR Spaces for their workspace needs
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* Scrolling Animation */}
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -1400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate partners for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center border border-gray-100 group-hover:border-[#00009f]/30">
                  <div className="text-2xl text-gray-700 group-hover:text-[#00009f] transition-colors">
                    {partner.name}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{partner.industry}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg">
            <span className="text-[#00009f]">500+ companies</span> have made JSR Spaces their workspace of choice
          </p>
        </motion.div>
      </div>
    </section>
  );
}
