import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleNavigation = (item: (typeof navItems)[0]) => {
    if (item.isPage) {
      window.location.href = item.href
    } else {
      window.location.href = `/#${item.href}`;
    }

    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/", isPage: true },
    { label: "Services", href: "/services", isPage: true },
    { label: "Plans", href: "/plans", isPage: true },
    { label: "Contact", href: "/contact", isPage: true },
    { label: "About us", href: "/about", isPage: true },
  ];

  return (
    <nav className={`bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center sm:h-16 h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity"
            >
              <img src="/Logo.png" alt="Logo" className="h-14 w-auto bg-transparent" />
              <div className="flex sm:flex-col space-x-1 sm:space-x-0 sm:-space-y-2   ">
              <span className="text-lg font-bold text-gray-900 font-logo">
                A1 E-commerce
              </span>
              <span className="text-lg font-bold text-gray-900 font-logo">
                Expert
              </span>

              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ">
            <div className=" flex items-baseline space-x-2">
              {navItems.map((item, index) =>
                item.isPage ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors font-content ${location === item.href
                        ? "text-primary border-b-2 border-primary"
                        : "text-secondary hover:text-primary"
                      }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item)}
                    className={`px-3 py-2 text-sm font-medium transition-colors font-content ${index === 0 && location === "/"
                        ? "text-gray-900 hover:text-primary"
                        : "text-secondary hover:text-primary"
                      }`}
                  >
                    {item.label}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors font-button">
                Inquiry
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Sidebar */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed h-screen inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-screen w-72 sm:w-80 bg-teal-50 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden">
            <div className="flex flex-col h-screen">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
               
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-900 hover:text-primary"
                >
                  <X size={28} />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-4">
                <nav className="space-y-2">
                  {navItems.map((item, index) =>
                    item.isPage ? (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors font-content ${location === item.href
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                          }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item)}
                        className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors font-content ${index === 0 && location === "/"
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                          }`}
                      >
                        {item.label}
                      </button>
                    ),
                  )}
                </nav>
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gray-900 text-white py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors font-button">
                    Inquiry
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
