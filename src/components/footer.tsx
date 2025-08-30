import { Bot, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, X } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { label: "About Us", action: () => scrollToSection("about") },
    { label: "Our Services", action: () => scrollToSection("services") },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ];

  const followUsLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b z-50 from-teal-50 to-teal-100 text-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1" data-aos="fade-up">
           <img src="/Footer_logo.png" alt="Footer logo" className="h-64 w-64"/>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-6 font-title">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="opacity-90 hover:opacity-100 transition-opacity text-left font-content"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="opacity-90 hover:opacity-100 transition-opacity font-content"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-6 font-title">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 opacity-90" size={16} />
                <div>
                  <p className="opacity-90 font-content">Address:</p>
                  <p className="text-sm opacity-75 font-content">
                    123 Business Ave, Suite 100<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="opacity-90" size={16} />
                <div>
                  <p className="opacity-90 font-content">
                    Phone No: <span className="text-sm opacity-75">+1-800-123-4567</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="opacity-90" size={16} />
                <div>
                  <p className="opacity-90 font-content">
                    Email: <span className="text-sm opacity-75">info@aiecommerce.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-semibold mb-6 font-title">Follow Us</h3>
            <div className="space-y-3">
              {followUsLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-3 opacity-90 hover:opacity-100 transition-opacity"
                  >
                    <IconComponent size={20} />
                    <span className="font-content">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="opacity-75 text-sm font-content">
            © 2025 AI E-commerce Expert. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
