import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Play, Volume2, Maximize } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VideoSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            Virtual Tour
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            See JSR Spaces <span className="text-[#00009f]">in Action</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Take a virtual tour and discover why Cairo's leading professionals choose JSR Spaces
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer aspect-video">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2UlMjBzcGFjZXxlbnwwfHx8fDE3MzA5MDQyMjR8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="JSR Spaces Virtual Tour"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-full p-6 shadow-2xl group-hover:bg-[#00009f] transition-all"
                >
                  <Play className="h-12 w-12 text-[#00009f] group-hover:text-white transition-colors" fill="currentColor" />
                </motion.div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl mb-2">Full Virtual Tour - 3:45</h3>
                <p className="text-blue-100">Explore our premium Nasr City location and amenities</p>
              </div>

              {/* Video Controls Mockup */}
              <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                  <Volume2 className="h-5 w-5 text-white" />
                </button>
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                  <Maximize className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl text-[#00009f] mb-1">50K+</div>
                <div className="text-sm text-gray-600">Views</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl text-[#00009f] mb-1">4.9/5</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl text-[#00009f] mb-1">1.2K</div>
                <div className="text-sm text-gray-600">Comments</div>
              </div>
            </div>
          </motion.div>

          {/* Side Videos */}
          <div className="space-y-6">
            {[
              {
                title: "Member Testimonials",
                duration: "2:15",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
              },
              {
                title: "Workspace Features",
                duration: "1:45",
                image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
              },
              {
                title: "Community Events",
                duration: "3:20",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer aspect-video"
              >
                <ImageWithFallback
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 transition-all" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 group-hover:bg-[#00009f] transition-all">
                    <Play className="h-6 w-6 text-[#00009f] group-hover:text-white transition-colors" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-sm mb-1">{video.title}</h4>
                  <p className="text-xs text-blue-200">{video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-[#00009f] hover:bg-[#000080]">
            <Play className="mr-2 h-5 w-5" />
            Watch All Videos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
