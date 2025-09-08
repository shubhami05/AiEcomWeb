import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  GraduationCap,
  Store,
  Rocket,
  Shield,
  TrendingUp,
  UserCheck,
  Lock,
  Headphones,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Smartphone,
  Monitor,
  Megaphone,
  BarChart3,
  Award,
  Users,
  Clipboard,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Home = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });
    }
  }, []);



  const highlights = [
    {
      icon: GraduationCap,
      title: "Learning",
      description: "Learn New Challenging Techniques",
    },
    {
      icon: Store,
      title: "Sell",
      description: "Start as an Amazon, Shopify & More",
    },
    {
      icon: Rocket,
      title: "Start",
      description: "Start with Zero Inventory or Tech Skills",
    },
    {
      icon: Shield,
      title: "Trust",
      description: "100% Transparent Process & Ongoing Support",
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Practical Strategies",
      description:
        "Learn practical and implementable strategies useful for establishing profitable online stores",
    },
    {
      icon: UserCheck,
      title: "Expert Mentorship",
      description:
        "Get guidance from experienced e-commerce experts with a proven track record in online selling",

    },
    {
      icon: Lock,
      title: "Secure & Simple",
      description:
        "Hassle-free and secure quick setup with easy development and hosting of your store",
    },
    {
      icon: Headphones,
      title: "Fast Support",
      description:
        "Get help anytime! Our 24-hour team will be dedicated to your online store goals",

    },
  ];

  const services = [
    {
      icon: ShoppingCart,
      title: "International E-Comm.",
      description: "Global marketplace expansion and international selling strategies"
    },
    {
      icon: Smartphone,
      title: "Domestic E-Comm.",
      description: "Local market optimization and domestic sales enhancement"
    },
    {
      icon: Monitor,
      title: "Product Cataloging",
      description: "Professional product listing and catalog management"
    },
    {
      icon: Megaphone,
      title: "Marketing",
      description: "Digital marketing strategies and campaign management"
    },
    {
      icon: BarChart3,
      title: "Reporting",
      description: "Comprehensive analytics and performance reporting"
    },
    {
      icon: Award,
      title: "Branding",
      description: "Brand development and identity management"
    },
    {
      icon: Users,
      title: "Business Consulting",
      description: "Strategic business advice and growth consulting"
    },
    {
      icon: Clipboard,
      title: "Logistics",
      description: "Supply chain management and fulfillment solutions"
    },
    {
      icon: Tag,
      title: "Private Label",
      description: "Private label development and brand creation"
    }
  ];

  const faqs = [
    "What exactly is e-commerce?",
    "Is e-commerce still a viable option?",
    "Is my personal info and email+password safe?",
    "Are there any requirements or prerequisites to start?",
    "How do I know which products to sell?",
    "Why are your prices lower than other platforms?",
    "What is the exact procedure?",
    "How do I submit what has already provided?",
    "How can I create a payment after filing the form?",
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white" style={{overflowX:'hidden'}}>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="bg-white min-h-full flex items-center ">
        <div className="max-w-7xl mx-auto min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 gap-12 ">
            {/* Hero Illustration */}
            <div className="relative lg:col-span-4 right-20 m-auto min order-1" data-aos="fade-right">
              <img src="/Hero img.png" alt="Hero Image" className="w-full h-full object-contain hidden lg:block" />
            </div>

            {/* Text Content */}
            <div
              className="text-center relative h-fit lg:absolute lg:right-52 lg:pr-10 flex flex-col lg:text-right order-1 lg:order-2 justify-around"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-title" data-aos="fade-left" data-aos-delay="100">
                Learn How to{" "}
                <br className="sm:hidden block" />
                <span className="text-primary">Build Your Own</span>
                <br className="block" />
                E-commerce Empire
                <br className="sm:hidden block" />
                from{" "}
                <br className="hidden sm:block" />
                <span className="text-gray-900">Scratch</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 pt-10 lg:pt-56 justify-center lg:justify-end px-4 lg:px-0" data-aos="fade-left" data-aos-delay="300">
                <Link href="/plans">
                  <Button className="bg-primary text-white px-6 h-14 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center justify-center group font-button">
                    Enroll Today
                    <ArrowRight
                      className="ml-2  group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate & No Inventory Model Section */}
      <section className="bg-gradient-to-r from-orange-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Certificate */}
            <div className="flex justify-center lg:justify-start" data-aos="fade-right">
              <div className="relative">
                <img 
                  src="/src/assets/certificate_1.png" 
                  alt="Amazon Global Affiliate Partner Certificate" 
                  className="w-full max-w-md h-auto shadow-2xl rounded-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left" data-aos="fade-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-title">
                No Inventory <span className="text-primary">Model</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-content">
                Our comprehensive drop shipping business model equips new entrepreneurs with the skills and knowledge needed to succeed in the e-commerce industry. From finding profitable products to managing inventory and customer service, we cover it all. Join us and transform your ambitions into a thriving online business.
              </p>
              <p className="text-base text-gray-600 mb-8 font-content">
                Don't Hesitate - Take this chance to boost your e-commerce skills and achieve outstanding success.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/plans">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors font-button" onClick={() => {
                    window.location.href = "/plans";
                  }}>
                    Buy Now
                  </Button>
                </Link>
                
                {/* Amazon SPN Certified Logo */}
                <div className="flex items-center gap-2">
                  <img 
                    src="/src/assets/small_cer.png" 
                    alt="Amazon SPN Certified" 
                    className="h-12 w-auto"
                  />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900">amazon spn</div>
                    <div className="text-xs text-gray-600">certified</div>
                    <div className="text-xs text-gray-500">Service Provider Network</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FBA Model with Inventory Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left" data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-title">
                Maximize your product sales with expert <span className="text-primary">account management & consulting</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed font-content">
                Learn the secrets of successful smart drop shipping and start your own profitable online business today.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Link href="/plans">
                  <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors font-button" onClick={() => {
                    window.location.href = "/plans";
                  }}>
                    Know More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex justify-center lg:justify-end" data-aos="fade-left">
              <div className="relative">
                <img 
                  src="/src/assets/model_2.png" 
                  alt="FBA Model with Inventory Management" 
                  className="w-full max-w-lg h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section id="highlights" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-title">
              Key <span className="text-primary">Highlights</span>
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto font-content">
              Discover what makes our e-commerce training program unique and
              effective
            </p>
          </div>
        </div>
        <div className="md:grid lg:grid-cols-2 gap-12 block  items-center mb-20">
          {/* Illustration */}
          <div className="col-span-1 md:flex lg:justify-end justify-center hidden " data-aos="fade-right">
            <img src="/Highlight img.png" alt="Highlight Image" className="md:7/12 lg:w-8/12 h-full object-cover" />
          </div>

          {/* Highlights list */}
          <div className="order-1 lg:order-2 lg:relative flex justify-center lg:justify-start" data-aos="fade-left" data-aos-delay="100">
            {/* Highlights with proper spacing */}
            <div className="space-y-8 relative">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                // Apply right offset for items 1 and 2 (second and third items)
                const isOffset = index === 1 || index === 2;

                return (
                  <div key={index} className={`relative ${isOffset ? 'ml-10' : ''}`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 relative z-20">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 font-title">
                          {highlight.title}
                        </h3>
                        <p className="text-secondary font-content">
                          {highlight.description}
                        </p>
                      </div>
                    </div>

                    {/* Individual curved connecting lines between consecutive points */}
                    {index < highlights.length - 1 && (
                      <div
                        className="absolute pointer-events-none"
                        style={{
                          top: '48px',
                          left: '24px',
                        }}
                      >
                        <svg
                          width="100"
                          height="80"
                          viewBox="0 0 100 80"
                          fill="none"
                          style={{ overflow: 'visible' }}
                        >
                          <path
                            d={
                              index === 0 ? "M 0 -15 Q 40 0 42 80" :   // Learning to Sell (slight curve right)
                                index === 1 ? "M 5 -10 Q 10 0 5 80" :     // Sell to Start (straight)
                                  "M 0 -10 Q -20 50 -42 60"                 // Start to Trust (slight curve left)
                            }
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="5 5"
                            fill="none"
                            className="text-primary"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer - Services Section */}
      <section className="bg-white py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-lg text-gray-600 mb-4 font-content">What VPN offers</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 font-title">
              Elevate Your E-commerce Business with <span className="text-primary">Comprehensive Management</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full flex items-center justify-center">
                <ShoppingCart size={400} className="text-primary" />
              </div>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={`${(index + 1) * 100}`}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <IconComponent 
                            className="text-blue-600 group-hover:text-white transition-colors duration-300" 
                            size={24} 
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 font-title group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed font-content">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-title">
              Platforms <span className="text-primary">A1 E-commerce Expert</span> teach for your E-commerce business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-content">
              Master the world's leading e-commerce platforms and expand your business across multiple marketplaces
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Amazon */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-orange-200">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-lg">a</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-title">Amazon</h3>
              <p className="text-sm text-gray-600 text-center font-content">Global marketplace leader</p>
            </div>

            {/* Walmart */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-blue-200">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">★</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-title">Walmart</h3>
              <p className="text-sm text-gray-600 text-center font-content">Retail giant marketplace</p>
            </div>

            {/* eBay */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-blue-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">e</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-title">eBay</h3>
              <p className="text-sm text-gray-600 text-center font-content">Auction & fixed price</p>
            </div>

            {/* Flipkart */}
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border-2 border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">F</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-title">Flipkart</h3>
              <p className="text-sm text-gray-600 text-center font-content">India's leading marketplace</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link href="/plans">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors font-button">
                Start Learning Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-title">
              Why Choose <span className="text-primary">Us</span>
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto font-content">
              Get the Best E-commerce Training Experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br bg-primary-10 rounded-2xl p-8 text-center hover:shadow-lg hover:bg-teal-100 transition-all duration-300 group border-0 cursor-pointer shadow-lg`}
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white *: transition-transform`}
                    >
                      <IconComponent
                        className={`text-teal-600 text-2xl`}
                        size={24}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-title">
                      {feature.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed font-content">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FAQ Content */}
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900 font-title" data-aos="fade-up">
            Frequently <span className="text-primary">Asked Questions</span>
          </h2>
          <p className="text-lg text-center text-secondary max-w-2xl mx-auto font-content"
          data-aos="fade-up" data-aos-delay="100">
            Got questions? Browse our most frequently asked questions below.
          </p>
          <div className="grid lg:grid-cols-2 gap-16 mt-24 items-start">
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-4">
                {faqs.map((question, index) => (
                  <Card
                    key={index}
                    className="bg-white rounded-xl  shadow-md border border-gray-100 overflow-hidden "
                  >
                    <CardContent className="p-0">
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors hover:text-teal-500"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="font-medium font-content transition-colors">
                          {question}
                        </span>
                        <div className="p-1 bg-teal-500 rounded-full">

                          {expandedFAQ === index ? (
                            <ChevronUp
                              className="text-white transition-transform duration-200"
                              size={20}
                            />
                          ) : (
                            <ChevronDown
                              className="text-white transition-transform duration-200"
                              size={20}
                            />
                          )}
                        </div>
                      </button>
                      {expandedFAQ === index && (
                        <div className="px-6 pb-4">
                          <p className="text-secondary font-content">
                            {index === 0 &&
                              "E-commerce refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions."}
                            {index === 1 &&
                              "Yes, e-commerce continues to grow rapidly and offers tremendous opportunities for entrepreneurs willing to learn the right strategies."}
                            {index === 2 &&
                              "Absolutely. We use industry-standard security measures to protect all personal information and account credentials."}
                            {index === 3 &&
                              "No special requirements needed! Our program is designed for complete beginners with no prior experience."}
                            {index === 4 &&
                              "We provide comprehensive product research training and tools to help you identify profitable products in your niche."}
                            {index === 5 &&
                              "We focus on providing maximum value at affordable prices to make e-commerce education accessible to everyone."}
                            {index === 6 &&
                              "Our step-by-step program guides you through account setup, product selection, store creation, and marketing strategies."}
                            {index === 7 &&
                              "Simply complete the enrollment form and submit the required information through our secure online portal."}
                            {index === 8 &&
                              "After form submission, you'll receive payment instructions and can complete the process through our secure payment gateway."}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>


            </div>

            {/* Illustration */}
            <div className="block" data-aos="fade-left" data-aos-delay="200">
              <img src="/Questions.png" alt="FAQ image" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;
