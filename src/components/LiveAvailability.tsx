import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { MapPin, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

interface AvailabilityData {
  hotDesk: number;
  dedicatedDesk: number;
  privateOffice: number;
  meetingRooms: number;
  trend: "low" | "medium" | "high";
}

export function LiveAvailability() {
  const [availability, setAvailability] = useState<AvailabilityData>({
    hotDesk: 45,
    dedicatedDesk: 18,
    privateOffice: 6,
    meetingRooms: 4,
    trend: "low"
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Simulate availability changes every 15 seconds
    const availabilityInterval = setInterval(() => {
      setAvailability(prev => ({
        ...prev,
        hotDesk: Math.max(0, Math.min(60, prev.hotDesk + Math.floor(Math.random() * 7) - 3)),
        dedicatedDesk: Math.max(0, Math.min(30, prev.dedicatedDesk + Math.floor(Math.random() * 5) - 2)),
        privateOffice: Math.max(0, Math.min(10, prev.privateOffice + Math.floor(Math.random() * 3) - 1)),
        meetingRooms: Math.max(0, Math.min(8, prev.meetingRooms + Math.floor(Math.random() * 3) - 1)),
      }));
    }, 15000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(availabilityInterval);
    };
  }, []);

  const getTrendColor = (trend: string) => {
    switch(trend) {
      case "low": return "text-green-600 bg-green-50";
      case "medium": return "text-yellow-600 bg-yellow-50";
      case "high": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getTrendText = (trend: string) => {
    switch(trend) {
      case "low": return "Low Traffic";
      case "medium": return "Moderate";
      case "high": return "Busy";
      default: return "Unknown";
    }
  };

  const getAvailabilityStatus = (available: number, type: string) => {
    if (type === "meetingRooms") {
      return available > 2 ? "high" : available > 0 ? "medium" : "low";
    }
    if (available > 15) return "high";
    if (available > 5) return "medium";
    return "low";
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "high": return "bg-green-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#00009f]/10 text-[#00009f] hover:bg-[#00009f]/10">
            Real-Time Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">
            Live <span className="text-[#00009f]">Availability</span> Dashboard
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See real-time space availability at our Nasr City location. Updated every 5 minutes.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              Last updated: {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-2xl">
              <div className="bg-gradient-to-r from-[#00009f] to-[#000080] p-8 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6" />
                    <h3 className="text-2xl">JSR Spaces - Nasr City</h3>
                  </div>
                  <Badge className={`${getTrendColor(availability.trend)} border-none`}>
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {getTrendText(availability.trend)}
                  </Badge>
                </div>
                <p className="text-blue-100">30B Asmaa Fahmi, Al Golf, Nasr City</p>
              </div>

              <CardContent className="p-8 space-y-6">
                {/* Hot Desks */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(getAvailabilityStatus(availability.hotDesk, "hotDesk"))}`} />
                    <span className="text-gray-700 text-lg">Hot Desks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl text-[#00009f]">{availability.hotDesk}</span>
                    <span className="text-gray-500">available</span>
                  </div>
                </div>

                {/* Dedicated Desks */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(getAvailabilityStatus(availability.dedicatedDesk, "dedicatedDesk"))}`} />
                    <span className="text-gray-700 text-lg">Dedicated Desks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl text-[#00009f]">{availability.dedicatedDesk}</span>
                    <span className="text-gray-500">available</span>
                  </div>
                </div>

                {/* Private Offices */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(getAvailabilityStatus(availability.privateOffice, "privateOffice"))}`} />
                    <span className="text-gray-700 text-lg">Private Offices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl text-[#00009f]">{availability.privateOffice}</span>
                    <span className="text-gray-500">available</span>
                  </div>
                </div>

                {/* Meeting Rooms */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(getAvailabilityStatus(availability.meetingRooms, "meetingRooms"))}`} />
                    <span className="text-gray-700 text-lg">Meeting Rooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl text-[#00009f]">{availability.meetingRooms}</span>
                    <span className="text-gray-500">available</span>
                  </div>
                </div>

                <div className="pt-6 border-t mt-6">
                  <div className="flex items-center justify-between text-gray-600">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="text-lg">Open Now</span>
                    </span>
                    <span className="text-lg">Closes at 8:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gray-50 rounded-xl p-6"
        >
          <h4 className="text-sm text-gray-600 mb-4">Availability Indicators:</h4>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-700">High Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-gray-700">Limited Spaces</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-gray-700">Low Availability</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
