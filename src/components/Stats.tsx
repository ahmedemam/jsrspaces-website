import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Building2, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Happy Members",
    description: "Professionals trust us"
  },
  {
    icon: Building2,
    value: 15000,
    suffix: "+",
    label: "Square Meters",
    description: "Premium workspace"
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Member retention"
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Events Monthly",
    description: "Networking opportunities"
  }
];

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00009f] to-[#000080] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Numbers That Speak for <span className="text-blue-200">Themselves</span>
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Join a thriving community of professionals who've made JSR Spaces their home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
                <stat.icon className="h-10 w-10 text-blue-200" />
              </div>
              <div className="text-5xl md:text-6xl mb-2">
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-xl mb-2">{stat.label}</div>
              <div className="text-blue-200 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
