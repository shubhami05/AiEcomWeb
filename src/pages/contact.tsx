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
      <section className="py-20 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" data-aos="fade-down">
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
                        className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-green-500 transition-colors font-content"
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
                        className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-green-500 transition-colors font-content"
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
                        className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-green-500 transition-colors resize-none font-content"
                        required
                      />
                    </div>

                    <div className="text-center">
                      <Button 
                        type="submit"
                        className="bg-green-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors font-button"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Illustration */}
            <div className="flex justify-center" data-aos="fade-left" data-aos-delay="500">
              <img src="/Contact_us.png" alt="contact image"/>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;