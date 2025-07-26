import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Contact = () => {
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
    name: "",
    email: "",
    message: ""
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
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-down">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-title px-4">
              Stay <span className="text-primary">Connected</span>
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto font-content">
              Want to share feedback, report issues, or ask questions? Fill out the form below, and our team will get back to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Contact Form */}
            <div data-aos="fade-right" data-aos-delay="500">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 sm:p-8 shadow-lg border-2 border-primary/20">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-title">
                    Contact Form
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-2 font-content">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors font-content"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2 font-content">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email Address"
                        className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors font-content"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-lg font-medium text-gray-900 mb-2 font-content">
                        Message:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Type your message here"
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none font-content"
                        required
                      />
                    </div>

                    <div className="text-center">
                      <Button 
                        type="submit"
                        className="bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors font-button"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Illustration */}
            <div className="relative" data-aos="fade-left" data-aos-delay="500">
              <div className="bg-gradient-to-br from-primary/20 to-primary/40 rounded-3xl p-8 relative overflow-hidden min-h-[500px] flex items-center justify-center">
                {/* Customer service illustration */}
                <div className="relative w-full h-full">
                  {/* Central figure - customer service representative */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-20 h-12 bg-gray-300 rounded-lg mx-auto"></div>
                    </div>
                  </div>

                  {/* Floating communication icons */}
                  <div className="absolute top-8 left-8 bg-white rounded-xl p-3 shadow-lg">
                    <div className="w-8 h-6 bg-green-400 rounded"></div>
                    <div className="w-6 h-1 bg-gray-300 rounded mt-1"></div>
                    <div className="w-4 h-1 bg-gray-300 rounded mt-1"></div>
                  </div>

                  <div className="absolute top-12 right-8 bg-white rounded-xl p-3 shadow-lg">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-green-400 rounded"></div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-32 left-8 bg-white rounded-xl p-3 shadow-lg">
                    <div className="w-6 h-6 bg-blue-400 rounded-full mb-2"></div>
                    <div className="w-8 h-1 bg-gray-300 rounded"></div>
                  </div>

                  <div className="absolute bottom-40 right-12 bg-white rounded-xl p-3 shadow-lg">
                    <div className="w-8 h-6 bg-gray-200 rounded mb-1"></div>
                    <div className="w-6 h-1 bg-green-400 rounded"></div>
                  </div>

                  {/* Stars for rating */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                    ))}
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

export default Contact;