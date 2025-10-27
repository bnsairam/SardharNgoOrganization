import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SVP Academy" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">Sardar Vallabhbhai Patel Academy</h3>
                <p className="text-sm opacity-80">Shaping Champions</p>
              </div>
            </div>
            <p className="opacity-80 mb-4">
              India's premier martial arts training institute dedicated to developing Olympic and 
              Paralympic champions in Judo, Karate, and Taekwondo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#achievements" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#gallery" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li className="opacity-80">Judo Training</li>
              <li className="opacity-80">Karate Classes</li>
              <li className="opacity-80">Taekwondo Academy</li>
              <li className="opacity-80">Para-Sports Program</li>
              <li className="opacity-80">Olympic Preparation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="opacity-80">
            © {currentYear} Sardar Vallabhbhai Patel Academy. All rights reserved.
          </p>
          <p className="opacity-60 text-sm mt-2">
            Winner of Rashtriya Khel Protsahan Puruskar 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
