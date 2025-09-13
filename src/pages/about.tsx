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
    <div className="min-h-screen w-full bg-white" >
      <Navbar />
      {/* Main Content */}
      <section className="py-20 lg:py-28 relative">
        {/* Bottom Left Shape */}

        <div className="max-w-7xl sm:mx-auto px-4 mx-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">


            {/* Text Content Founder */}
            <div data-aos="fade-right">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight mb-8">
                Meet Our <span style={{color:"hsl(183, 85.00%, 42.00%)"}}>Founder & CEO</span>
              </h1>

              <div className="mb-8 ">
                <p className="text-lg text-gray-900 mb-4 ml-4">
                  With over 5 years of hands-on experience in global e-commerce and digital entrepreneurship, Ajay Prajapati founded A1 E-commerce Expert to empower students and aspiring business owners with real-world knowledge.
                </p>
              </div>

              <p className="text-lg ml-4 text-gray-900">
                <span>“E-commerce and dropshipping aren’t just trends — they are the future of how businesses will operate globally. Those who learn it today, lead tomorrow.”</span>
              </p>
              <br />
              <br />
              <p className="text-lg ml-4 text-gray-900">
                <span className="italic">~Ajay Prajapati , CEO & Mentor</span>
              </p>
            </div>

            {/* Founder Image */}
            <div className="flex justify-center lg:justify-center" data-aos="fade-left">
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl border-4 border-primary overflow-hidden shadow-2xl">
                  <img
                    src="/CEO.png"
                    alt="Ajay Prajapati - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
      </section >


      <section className="py-20 relative" style={{ overflow: 'hidden' }}>
        <div className="absolute z-0 sm:-bottom-20 bottom-20 -right-5 w-[800px] h-[800px] pointer-events-none">
          <img
            src="/About_side2.png"
            alt="left decoration"
            className="w-full h-full object-contain translate-y-24 opacity-50"
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
                  <span style={{color:"hsl(183, 85.00%, 42.00%)"}}>Bulls & Bears</span> is a data-driven stock market insights platform designed to help <em>traders and investors</em> make smarter decisions. While we do not provide financial advisory services, our team of experienced analysts shares stock recommendations based on extensive market research.
                </p>
              </div>

              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                Our <span className="text-green-500" style={{color:"hsl(183, 85.00%, 42.00%)"}}>Mission</span>
              </h2>

              <p className="text-lg ml-4 text-gray-900">
                To provide <span className="italic">reliable, educational and insightful</span> stock market analysis that empowers investors and traders to navigate the stock market with confidence.
              </p>
            </div>

            {/* Illustration */}
            <div className="flex items-end  h-full" data-aos="fade-left">
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
      <div className=" relative w-full">
        <Footer />
      </div>
    </div >
  );
};

export default About;