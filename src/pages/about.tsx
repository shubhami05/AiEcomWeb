import Navbar from "@/components/navbar";
import { useEffect } from "react";
import Footer from "@/components/footer"

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
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      {/* Decorative Shape Images */}
      {/* Top Right Shape */}


      {/* Navbar placeholder */}


      {/* Main Content */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute z-0 sm:-bottom-20 bottom-20 -right-5 w-[800px] h-[800px] pointer-events-none">
          <img
            src="/About_side2.png"
            alt="left decoration"
            className="w-full h-full object-contain opacity-50"
          />
        </div>

        {/* Bottom Left Shape */}
        <div className="absolute sm:block hidden z-0 -bottom-20 -left-5 w-[600px] h-[600px] pointer-events-none">
          <img
            src="/About_side1.png"
            alt="right decoration"
            className="w-full h-full object-contain opacity-50"
          />
        </div>
        <div className="max-w-7xl sm:mx-auto px-4 mx-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div data-aos="fade-right">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-8">
                Who We Are
              </h1>

              <div className="mb-8 ">
                <p className="text-lg text-gray-900 mb-4 ml-4">
                  <span className="text-green-500 font-medium">Bulls & Bears</span> is a data-driven stock market insights platform designed to help <em>traders and investors</em> make smarter decisions. While we do not provide financial advisory services, our team of experienced analysts shares stock recommendations based on extensive market research.
                </p>
              </div>

              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                Our <span className="text-green-500">Mission</span>
              </h2>

              <p className="text-lg ml-4 text-gray-900">
                To provide <span className="italic">reliable, educational and insightful</span> stock market analysis that empowers investors and traders to navigate the stock market with confidence.
              </p>
            </div>

            {/* Illustration */}
            <div className="flex items-end h-full" data-aos="fade-left">
              <img
                src="/About_main.png"
                alt="Team working together"
                className="rounded-lg"
              />

            </div>
          </div>
        </div>
      </section >

      {/* Footer placeholder */}
      <div className=" absolute w-full">
        <Footer />
      </div>
    </div >
  );
};

export default About;