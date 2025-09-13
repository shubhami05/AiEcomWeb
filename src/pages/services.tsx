import { useState } from "react";
import { 
  TrendingUp, 
  Globe, 
  Users, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Services = () => {
  const [activeTab, setActiveTab] = useState("zero-inventory");

  const zeroInventoryFeatures = [
    "No upfront inventory investment required",
    "Start with minimal capital",
    "Test products without financial risk",
    "Focus on marketing and customer acquisition",
    "Scalable business model",
    "Global supplier network access"
  ];

  const fbaFeatures = [
    "Amazon handles storage and shipping",
    "Prime eligibility for faster delivery",
    "Professional fulfillment services",
    "Reduced operational complexity",
    "Better customer satisfaction",
    "Higher profit margins potential"
  ];

  const futureStats = [
    { icon: TrendingUp, value: "24%", label: "Annual E-commerce Growth" },
    { icon: Globe, value: "4.9B", label: "Global Online Shoppers" },
    { icon: BarChart3, value: "$6.3T", label: "E-commerce Market Value" },
    { icon: Users, value: "85%", label: "Mobile Commerce Adoption" }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src="/src/assets/small_cer.png" 
                alt="Amazon SPN Certified" 
                className="h-16 w-auto"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 font-title">
              E-commerce <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-content">
              Discover the future of online business with our comprehensive e-commerce solutions. 
              From zero inventory models to FBA fulfillment, we guide you through the evolving landscape of digital commerce.
            </p>
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-title">
              Choose Your <span className="text-primary">Business Model</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-content">
              Two proven strategies to launch and scale your e-commerce business
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab("zero-inventory")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "zero-inventory"
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Zero Inventory Model
              </button>
              <button
                onClick={() => setActiveTab("fba")}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === "fba"
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                FBA Model (With Inventory)
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {activeTab === "zero-inventory" ? (
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-title">
                    Zero Inventory <span className="text-primary">Dropshipping</span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-content">
                    Start your e-commerce journey without the burden of inventory management. 
                    Our zero inventory model allows you to focus on what matters most - building your brand and acquiring customers.
                  </p>
                  <div className="space-y-4 mb-8">
                    {zeroInventoryFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                        <span className="text-gray-700 font-content">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/plans">
                    <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors font-button">
                      Start Zero Inventory Business
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-title">
                    FBA Model <span className="text-primary">With Inventory</span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-content">
                    Leverage Amazon's Fulfillment by Amazon (FBA) program to scale your business with professional logistics support. 
                    Store your inventory in Amazon's warehouses and let them handle the rest.
                  </p>
                  <div className="space-y-4 mb-8">
                    {fbaFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                        <span className="text-gray-700 font-content">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/plans">
                    <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors font-button">
                      Start FBA Business
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Illustration */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {activeTab === "zero-inventory" ? (
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 text-center">
                    <img 
                      src="/src/assets/certificate_1.png" 
                      alt="Zero Inventory Model Certificate" 
                      className="w-full h-48 object-contain mx-auto mb-4 rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 font-title">Zero Inventory</h4>
                    <p className="text-gray-600 font-content">Start without upfront investment</p>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center">
                    <img 
                      src="/src/assets/model_2.png" 
                      alt="FBA Model with Inventory" 
                      className="w-full h-48 object-contain mx-auto mb-4 rounded-lg"
                    />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 font-title">FBA Model</h4>
                    <p className="text-gray-600 font-content">Professional fulfillment services</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future of E-commerce Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-title">
              The Future of <span className="text-primary">E-commerce & Dropshipping</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto font-content">
              E-commerce and dropshipping are not just trends - they represent the fundamental shift in how the world shops and does business.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {futureStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border-0">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2 font-title">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-content">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Why E-commerce is the Future */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-title">
                Why E-commerce is the <span className="text-primary">Future of Marketing</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 font-title">Global Reach</h4>
                    <p className="text-gray-600 font-content">Access customers worldwide without geographical limitations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 font-title">Scalable Growth</h4>
                    <p className="text-gray-600 font-content">Scale your business exponentially with digital marketing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 font-title">Data-Driven Decisions</h4>
                    <p className="text-gray-600 font-content">Make informed decisions with real-time analytics and insights</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 font-title">Customer-Centric</h4>
                    <p className="text-gray-600 font-content">Build lasting relationships through personalized experiences</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 font-title">Key Market Trends</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-gray-700 font-content">Mobile commerce dominance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-gray-700 font-content">AI-powered personalization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-gray-700 font-content">Social commerce integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-gray-700 font-content">Sustainable business practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="text-yellow-500" size={20} />
                  <span className="text-gray-700 font-content">Voice commerce growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-title">
            Ready to Start Your E-commerce Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto font-content">
            Join thousands of successful entrepreneurs who have built thriving online businesses with our proven strategies.
          </p>
          <Link href="/plans">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors font-button">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;