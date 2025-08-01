import { useState, useEffect } from "react";
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
  Send,
  ShoppingCart,
  Package,
  CreditCard,
  Star,
  BarChart3,
  HelpCircle,
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
  const [formData, setFormData] = useState({
    question: ""
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ question: "" });
  };


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
    <div className="min-h-screen bg-white">
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
                <Button className="bg-primary text-white px-6 h-14 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center justify-center group font-button">
                  Enroll Today
                  <ArrowRight
                    className="ml-2  group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>

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
              <p className="text-center text-secondary">Ask anything you want to know about Stock Market Investments</p>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4 mx-8">
                <div>
                  <input
                    type="text"
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    placeholder="Enter Your Question Here"
                    className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors font-content"
                    required
                  />
                </div>
                <div className="mt-8 flex sm:justify-end justify-center">
                  <Button className="bg-primary text-white px-6 h-14 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center justify-center group font-button">
                    Send Question
                    <Send
                      className="ml-2  group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Home;
