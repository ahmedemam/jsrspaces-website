import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) return;
    
    // Send via WhatsApp
    const message = `Hi! I'd like to subscribe to the JSR Spaces newsletter. My email is: ${email}`;
    const whatsappUrl = `https://wa.me/201040806692?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear the form
    setEmail("");
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00009f] via-[#000080] to-[#00009f]">
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
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive updates on events, member spotlights, workspace tips, and special offers 
            delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/60 h-12 sm:h-14 text-base sm:text-lg"
            />
            <Button 
              type="submit"
              size="lg" 
              className="bg-white text-[#00009f] hover:bg-blue-50 h-12 sm:h-14 px-6 sm:px-8 cursor-pointer w-full sm:w-auto"
            >
              <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Subscribe
            </Button>
          </form>

          <p className="text-blue-200 text-sm mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
