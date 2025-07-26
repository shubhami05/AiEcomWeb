import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const About = () => {
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

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div data-aos="fade-right">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8 font-title">
                Who We Are
              </h1>
              
              <div className="mb-8">
                <p className="text-lg text-gray-900 mb-4 font-content">
                  <span className="text-primary font-semibold">Bulls & Bears</span> is a data-driven stock market insights platform designed to help <em>traders</em> and <em>investors</em> make smarter decisions. While we do not provide financial advisory services, our team of experienced analysts shares stock recommendations based on extensive market research.
                </p>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-title">
                Our <span className="text-primary">Mission</span>
              </h2>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-lg text-gray-900 font-content italic">
                  To provide <strong>reliable, educational, and insightful</strong> stock market analysis that empowers investors and traders to navigate the stock market with confidence.
                </p>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-primary/20 to-primary/40 rounded-3xl p-8 relative overflow-hidden min-h-[400px] flex items-center justify-center">
                {/* Abstract team illustration */}
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-2xl p-6 mx-4">
                    <div className="flex items-center justify-around">
                      {/* Team members represented as circles */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-orange-400 rounded-full mb-2"></div>
                        <div className="w-8 h-1 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full mb-2"></div>
                        <div className="w-8 h-1 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full mb-2"></div>
                        <div className="w-8 h-1 bg-gray-300 rounded"></div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-purple-500 rounded-full mb-2"></div>
                        <div className="w-8 h-1 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Table representation */}
                    <div className="mt-4 bg-gray-200 rounded-lg h-2 w-full"></div>
                    <div className="mt-2 bg-gray-100 rounded h-16 w-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Computer/Screen element */}
                  <div className="absolute top-8 right-8 bg-white rounded-lg p-3 shadow-lg">
                    <div className="w-16 h-12 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full mx-auto mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;