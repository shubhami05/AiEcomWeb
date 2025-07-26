import { useEffect } from "react";
import { CheckCircle, TrendingUp, Shield, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Plans = () => {
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

  const performanceCards = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "A track record that demonstrates actionable market insights.",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconBg: "bg-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Transparency You Can Trust",
      description: "Full visibility into trade results to help assess the value of our recommendations.",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      iconBg: "bg-gray-200",
      iconColor: "text-gray-600",
    },
    {
      icon: Shield,
      title: "Measured Success",
      description: "Explore trade history before subscribing to understand accuracy, highlighting real investment opportunities.",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconBg: "bg-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: Eye,
      title: "See the Value First",
      description: "Explore trade history before subscribing to understand the impact of expert insights.",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconBg: "bg-green-200",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-title px-4">
              Past <span className="text-primary">Performance</span>
            </h1>
            <p className="text-base sm:text-lg text-secondary mb-12 max-w-3xl mx-auto font-content px-4">
              Real results, real trades – showcasing past performance to build confidence
            </p>
          </div>

          {/* Performance Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 px-4">
            {performanceCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={index}
                  className={`${card.bgColor} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group border-0`}
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${card.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`${card.iconColor} text-2xl`} size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">{card.title}</h3>
                    <p className="text-secondary text-sm leading-relaxed font-content">{card.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="500">
            <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors font-button">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Spacer for additional content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-title">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto mb-8 font-content">
              Join thousands of successful entrepreneurs who have built profitable e-commerce businesses with our proven strategies.
            </p>
            <Button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors font-button">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plans;