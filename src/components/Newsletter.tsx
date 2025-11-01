import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Stay in the Loop
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive updates on events, member spotlights, workspace tips, and special offers 
            delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/60 h-14 text-lg"
            />
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 h-14 px-8">
              <Send className="mr-2 h-5 w-5" />
              Subscribe
            </Button>
          </div>

          <p className="text-orange-200 text-sm mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
