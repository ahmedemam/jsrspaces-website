import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What's included in the membership?",
    answer: "All memberships include high-speed WiFi, access to common areas, printing services, complimentary coffee and tea, community events, and mail handling. Higher-tier plans include dedicated desks, meeting rooms, and 24/7 access."
  },
  {
    question: "Can I visit before committing?",
    answer: "Absolutely! We offer free tours every weekday. You can also purchase a day pass to experience our space before choosing a membership plan. Book your tour online or call us directly."
  },
  {
    question: "Are there long-term contracts?",
    answer: "We offer flexible terms to suit your needs. Our plans range from daily passes to monthly memberships with no long-term commitment required. Enterprise clients can opt for custom contracts with preferred rates."
  },
  {
    question: "Do you offer meeting room access?",
    answer: "Yes! All members can book meeting rooms. Hot Desk members get 5 hours/month, Dedicated Desk members get 10 hours/month, and Private Office members enjoy unlimited access. Additional hours can be purchased."
  },
  {
    question: "Is parking available?",
    answer: "We provide complimentary parking for Private Office members and valet parking services. Other members can use nearby public parking facilities. We also have secure bike storage and EV charging stations."
  },
  {
    question: "What are your operating hours?",
    answer: "Our spaces are open Monday-Friday 8am-8pm and Saturday 9am-5pm. Dedicated Desk and Private Office members enjoy 24/7 access with their keycard. Reception services are available during business hours."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, we understand your needs may change. You can upgrade immediately or downgrade at the end of your current billing cycle. Our team will help you transition smoothly to your new plan."
  },
  {
    question: "Do you host networking events?",
    answer: "We host 50+ events monthly including workshops, networking mixers, expert talks, wellness sessions, and social gatherings. All events are free for members and many are open to guests."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Got <span className="text-[#00009f]">Questions?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about JSR Spaces membership, amenities, and services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:border-[#00009f]/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the perfect workspace solution.
          </p>
          <Button className="bg-[#00009f] hover:bg-[#000080]">
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat with Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
