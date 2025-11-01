import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Play } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBzcGFjZXxlbnwxfHx8fDE3NjE5MDQyMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Open Workspace",
    span: "col-span-2 row-span-2",
    label: "Open Workspace"
  },
  {
    url: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjE4OTU4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Meeting Room",
    span: "col-span-1 row-span-1",
    label: "Meeting Rooms"
  },
  {
    url: "https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2MTk3OTIwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Private Office",
    span: "col-span-1 row-span-1",
    label: "Private Offices"
  },
  {
    url: "https://images.unsplash.com/photo-1761543262131-9d464d0d7426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb2RjYXN0JTIwc3R1ZGlvfGVufDF8fHx8MTc2MjAwMzA2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Podcast Studio",
    span: "col-span-1 row-span-1",
    label: "Podcast Studio"
  },
  {
    url: "https://images.unsplash.com/photo-1758194190679-198a77cba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBsb3VuZ2V8ZW58MXx8fHwxNzYyMDAzMDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Lounge Area",
    span: "col-span-1 row-span-1",
    label: "Lounge Areas"
  },
  {
    url: "https://images.unsplash.com/photo-1749566323483-485539a09cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwdGVycmFjZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIwMDMwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Rooftop Terrace",
    span: "col-span-2 row-span-1",
    label: "Rooftop Terrace"
  }
];

export function Gallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#00009f] text-white hover:bg-[#000080]">Virtual Tour</Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Experience <span className="text-blue-200">JSR Spaces</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Step inside our meticulously designed spaces where innovation meets inspiration
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] mb-12"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`${image.span} relative group overflow-hidden rounded-xl cursor-pointer`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white">{image.label}</h4>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button size="lg" className="bg-[#00009f] hover:bg-[#000080]">
            Schedule a Physical Tour
          </Button>
          <p className="text-gray-400 mt-4">
            See our spaces in person and meet our community
          </p>
        </motion.div>
      </div>
    </section>
  );
}
