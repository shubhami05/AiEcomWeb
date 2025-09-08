import { useEffect, useState } from "react";
import { Star, Send, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    feedback: "",
    category: "general"
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        rating: 5,
        feedback: "",
        category: "general"
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* YouTube Channel Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-title">
              <span className="text-black">Free</span>
              <span className="text-primary"> YouTube</span>
              <span className="text-black"> Channel</span>
            </h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto mb-12 font-content">
              Learn e-commerce strategies, tips, and insights from our expert team
            </p>
            
            <div className="max-w-4xl mx-auto">
              {/* YouTube Channel Embed */}
              <div className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="p-6 bg-primary text-white">
                  <h3 className="text-2xl font-bold font-title mb-2">A1 Ecommerce Expert</h3>
                  <p className="text-white/90 font-content">Watch our latest e-commerce training videos</p>
                </div>
                <div className="p-6">
                  <iframe
                    // only use "embed" before video id even for shorts: "https://www.youtube.com/embed/"
                    src="https://www.youtube.com/embed/7JOLI3frfNE"
                    title="A1 Ecommerce Expert YouTube Channel"
                    className="w-full h-96 rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {/* <div className="mt-4 text-center">
                    <a 
                      href="https://www.youtube.com/@A1EcommerceExpert" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Visit Full Channel</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-title">
              Share Your <span className="text-primary">Experience</span>
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto font-content">
              Your feedback helps us improve and provide better services to our community
            </p>
          </div>

          {submitted ? (
            <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-200" data-aos="fade-up">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-2 font-title">Thank You!</h3>
              <p className="text-green-700 font-content">Your feedback has been submitted successfully. We appreciate your input!</p>
            </div>
          ) : (
            <Card className="bg-white rounded-2xl shadow-lg border-0" data-aos="fade-up">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-content">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-content"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-content">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-content"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-content">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-content"
                      required
                      aria-label="Feedback category"
                    >
                      <option value="general">General Feedback</option>
                      <option value="training">Training Experience</option>
                      <option value="support">Customer Support</option>
                      <option value="website">Website Experience</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-content">
                      Rating *
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className={`p-1 rounded-full transition-colors ${
                            star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                          title={`Rate ${star} star${star > 1 ? 's' : ''}`}
                        >
                          <Star size={24} fill={star <= formData.rating ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                      <span className="ml-2 text-sm text-gray-600 font-content">
                        {formData.rating} out of 5
                      </span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2 font-content">
                      Your Feedback *
                    </label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleInputChange}
                      placeholder="Share your experience, suggestions, or any feedback you'd like to provide..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none font-content"
                      required
                    />
                  </div>

                  <div className="text-center pt-4">
                    <Button
                      type="submit"
                      className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors font-button inline-flex items-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Submit Feedback</span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Feedback Display Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-title">
              What Our <span className="text-primary">Students Say</span>
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto font-content">
              Real feedback from our community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "E-commerce Entrepreneur",
                rating: 5,
                feedback: "The training program completely transformed my approach to online business. The mentors are incredibly knowledgeable and supportive. I learned everything from product research to marketing strategies. Now I'm running a successful online store earning ₹50,000+ monthly!",
                avatar: "PS",
                date: "2 days ago"
              },
              {
                name: "Rahul Patel",
                role: "Student",
                rating: 5,
                feedback: "Amazing experience! The step-by-step guidance helped me launch my first successful online store within 3 months. The support team is always there to help. I went from zero knowledge to making my first sale in just 45 days. Highly recommended for beginners!",
                avatar: "RP",
                date: "1 week ago"
              },
              {
                name: "Anjali Desai",
                role: "Housewife turned Entrepreneur",
                rating: 5,
                feedback: "From knowing nothing about e-commerce to running a profitable business - this program made it possible. The trainers are patient and explain everything clearly. I'm now earning ₹30,000 monthly while managing my home. This changed my life completely!",
                avatar: "AD",
                date: "3 days ago"
              }
            ].map((feedback, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold font-content">
                        {feedback.avatar}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900 font-title">{feedback.name}</h4>
                        <p className="text-sm text-gray-600 font-content">{feedback.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 font-content">{feedback.date}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className={`${star <= feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill={star <= feedback.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600 font-content">{feedback.rating}/5</span>
                  </div>
                  
                  <p className="text-gray-700 font-content leading-relaxed">"{feedback.feedback}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;