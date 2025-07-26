import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Services = () => {
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            {/* Main Content with Pill Design */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-full px-8 sm:px-16 py-12 sm:py-20 border-4 border-primary relative overflow-hidden">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-title px-4">
                  What You Get as a<br className="hidden sm:block" />
                  <span className="text-primary">Subscriber?</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-title">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto mb-12 font-content">
              As a subscriber, you get access to comprehensive e-commerce training, expert guidance, and proven strategies to build your online business successfully.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 px-4">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">Expert Training</h3>
                <p className="text-secondary font-content">Comprehensive courses covering all aspects of e-commerce business development</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">24/7 Support</h3>
                <p className="text-secondary font-content">Round-the-clock assistance from our expert team whenever you need help</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-title">Market Insights</h3>
                <p className="text-secondary font-content">Access to real-time market data and trends to stay ahead of competition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;