import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Video } from "lucide-react";
import { Separator } from "./ui/separator";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl mb-4">
              <span className="text-blue-200">JSR</span> Spaces
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Cairo's premier coworking ecosystem for innovators, entrepreneurs,
              and visionaries building tomorrow's success stories.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/jsrspaces/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/jsrspaces/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/jsrspaces/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@jsrspaces"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
                aria-label="TikTok"
              >
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Explore</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-blue-200 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('spaces')} className="hover:text-blue-200 transition-colors">
                  Workspace Types
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('amenities')} className="hover:text-blue-200 transition-colors">
                  Amenities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-blue-200 transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('community')} className="hover:text-blue-200 transition-colors">
                  Community
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-200 transition-colors">Blog & Insights</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Events Calendar</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Member Portal</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-200 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/vWGqsQhxdpb2L9gV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  30B Asmaa Fahmi, Al Golf<br />Nasr City, Cairo 4451422
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="tel:+201040806692" className="hover:text-orange-500 transition-colors">
                  010 40806692
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:hi@jsrspaces.com" className="hover:text-orange-500 transition-colors">
                  hi@jsrspaces.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2026 JSR Spaces. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
