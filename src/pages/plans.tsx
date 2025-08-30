import { useEffect, useState } from "react";
import { CheckCircle, TrendingUp, Shield, Eye, ArrowRight, X, CreditCard, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Plans = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occupation: "",
    dob: ""
  });

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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showForm || showPayment) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [showForm, showPayment]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowForm(false);
    setShowPayment(true);
  };

  const handlePayment = (method: string) => {
    console.log(`Payment method selected: ${method}`);
    // Here you would integrate with actual payment gateway
    alert(`Redirecting to ${method} payment gateway...`);
  };

  const planCards = [
    {
      icon: CheckCircle,
      title: "3 Months Plan",
      price: "₹20,000",
      description: "Core Dropshipping Training + Amazon Basics + Product Research Techniques",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      iconBg: "bg-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: CheckCircle,
      title: "3 Months Plan",
      price: "₹20,000",
      description: "Core Dropshipping Training + Amazon Basics + Product Research Techniques",
      bgColor: "bg-gradient-to-br from-gray-50 to-gray-100",
      iconBg: "bg-green-200",
      iconColor: "text-green-600",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-title px-4">
              <span className="text-black"> Start</span>
              <span className="text-primary"> Learning</span>
              <span className="text-black"> Start</span>
              <span className="text-primary"> Earning</span>
            </h1>
            <p className="text-base sm:text-lg text-secondary mb-12 max-w-3xl mx-auto font-content px-4">
              Whether you're just exploring e-commerce or ready to go full-time, we have a plan designed to kickstart your journey with the right tools, mentorship, and support.
            </p>
          </div>

          {/* Performance Cards Grid */}
          <div className="flex justify-around flex-wrap gap-6 sm:gap-8 mt-16 px-4">
            {planCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={index}
                  className={`bg-white  hover:bg-teal-50 rounded-lg sm:w-80 w-full p-8 text-center hover:shadow-lg transition-all duration-300 group border-0 shadow-lg`}
                  data-aos="fade-up"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${card.iconBg} group-hover:bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`${card.iconColor} text-2xl`} size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 font-title">{card.title}</h3>
                    <p className="text-secondary text-xl leading-relaxed mb-4 font-content">{card.price}</p>
                    <p className="text-secondary text-md leading-relaxed font-content">{card.description}</p>

                  </CardContent>
                  <div className="text-center  mt-16" >
                    <Button 
                      onClick={() => {
                        setSelectedPlan(card.title);
                        setShowForm(true);
                      }}
                      className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors font-button"
                    >
                      Buy Now
                      <ArrowRight
                        className="ml-2 transition-transform"
                        size={20}
                      />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>


        </div>
      </section >

      {/* Spacer for additional content */}
      <section className="py-5" >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">

            <p className="text-lg text-secondary mb-8 font-content">
              Success begins with the first step. Join now and start your journey in the global e-commerce space.
            </p>

          </div>
        </div>
      </section >

      <section>
        <p className="text-sm text-secondary w sm:mx-24 mx-4 text-justify mb-8 font-content">
          Terms & Conditions
          <br />
          1. By enrolling in any training program offered by A1 E-commerce Expert, you (“the user”) agree to abide by all the terms outlined herein, including any future amendments that may be made without prior notification.
          <br />
          2. All payments made towards any plan (₹20,000 for 3 months or ₹30,000 for 6 months) are strictly non-refundable and non-transferable under any circumstances, including but not limited to dissatisfaction, technical issues, lack of time, or change in interest.
          <br />
          3. The services provided under these plans are educational in nature and A1 E-commerce Expert does not guarantee business success, revenue generation, or marketplace approvals as outcomes are dependent on individual effort, compliance, and market behavior.
          <br />
          4. Any delay in payment or non-completion of fees may lead to suspension or termination of access to training materials or sessions, without prior notice or compensation.
          <br />
          5. The training sessions will be conducted live over virtual platforms such as Zoom or Google Meet; students are responsible for arranging their own devices, internet connection, and environment conducive to learning. No additional technical support will be provided for such setups.
          <br />
          6. Sharing of training content, Zoom/Meet links, video recordings, or proprietary strategies taught during sessions to third parties is strictly prohibited and will lead to immediate legal action under applicable Indian cyber and intellectual property laws.
          <br />
          7. The user acknowledges that the training involves digital skill development and that any earnings, store success, or product performance may vary significantly depending on user input, marketplace terms, and customer behavior, and hence no legal claims or disputes can be raised against A1 E-commerce Expert for lack of results.
          <br />
          8. A1 E-commerce Expert reserves the right to reschedule, postpone, or substitute any live session or trainer without prior intimation in case of unforeseen circumstances or technical disruptions.
          <br />
          9. In the event of a public holiday, national emergency, server outage, or platform restriction (e.g., Amazon policy change), the timeline of training and onboarding may be altered without resulting in compensation or refund.
          <br />
          10. Students must complete their training within the validity period of their selected plan (3 or 6 months respectively); access to future sessions or materials after expiry will be denied unless an extension is mutually agreed upon and separately billed.
          <br />
          11. Any abuse, misconduct, or violation of etiquette during training will lead to instant termination of access, with no entitlement to a refund, warning, or explanation.
          <br />
          12. All disputes, legal matters, or claims arising from this service shall be subject to exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India, regardless of the student’s local laws or residency.
          <br />
          13. Users consent to receive transactional and promotional messages, emails, and calls from A1 E-commerce Expert as part of the service engagement.
          <br />
          14. These Terms & Conditions represent a complete agreement between the user and A1 E-commerce Expert, superseding all prior oral or written understandings.
        </p>

      </section>

      {/* Enrollment Form Modal */}
      {showForm && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowForm(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 font-title">Enrollment Form</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </Button>
              </div>
              
              <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-primary font-medium">Selected Plan: {selectedPlan}</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-content">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-content"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 font-content">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-content"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-content">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-content"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1 font-content">
                    Occupation *
                  </label>
                  <select
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-content"
                    required
                  >
                    <option value="">Select your occupation</option>
                    <option value="student">Student</option>
                    <option value="job">Job/Employee</option>
                    <option value="housewife">Housewife</option>
                    <option value="business">Business Owner</option>
                    <option value="freelancer">Freelancer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1 font-content">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-content"
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors font-button"
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}

      {/* Payment Options Modal */}
      {showPayment && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowPayment(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
            <div className="bg-white rounded-2xl p-0 w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold font-title">Complete Payment</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPayment(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X size={24} />
                  </Button>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Bill Section - Left Side */}
                <div className="lg:w-1/2 p-6 border-r border-gray-200">
                  <div className="bg-gray-50 rounded-xl p-6 h-full">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 font-title">Invoice Details</h3>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 font-content">Invoice #</p>
                        <p className="text-sm font-medium text-gray-900 font-content">INV-{Date.now().toString().slice(-6)}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <div>
                          <p className="font-medium text-gray-900 font-content text-lg">{selectedPlan}</p>
                          <p className="text-sm text-gray-500 font-content">E-commerce Training Program</p>
                        </div>
                        <p className="font-semibold text-gray-900 font-title text-lg">₹20,000</p>
                      </div>
                      
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <p className="text-sm text-gray-600 font-content">GST (18%)</p>
                        <p className="font-medium text-gray-900 font-content">₹3,600</p>
                      </div>
                      
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <p className="text-sm text-gray-600 font-content">Processing Fee</p>
                        <p className="font-medium text-gray-900 font-content">₹200</p>
                      </div>
                      
                      <div className="flex justify-between items-center py-4 bg-white rounded-lg p-4">
                        <p className="text-xl font-semibold text-gray-900 font-title">Total Amount</p>
                        <p className="text-2xl font-bold text-primary font-title">₹23,800</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods Section - Right Side */}
                <div className="lg:w-1/2 p-6 overflow-y-auto">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 font-title">Choose Payment Method</h3>
                  
                  <div className="space-y-4">
                    {/* GPay */}
                    <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.02]" onClick={() => handlePayment("GPay")}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                            <Smartphone className="text-green-600" size={32} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 font-content text-lg">Google Pay</p>
                            <p className="text-sm text-gray-500 font-content">Fast & Secure UPI Payment</p>
                            <p className="text-xs text-green-600 font-content mt-1">⚡ Instant Payment</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-green-600 font-content font-medium">Recommended</p>
                          <div className="w-5 h-5 border-2 border-green-500 rounded-full mt-2"></div>
                        </div>
                      </div>
                    </div>

                    {/* Razorpay */}
                    <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.02]" onClick={() => handlePayment("Razorpay")}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                            <CreditCard className="text-blue-600" size={32} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 font-content text-lg">Razorpay</p>
                            <p className="text-sm text-gray-500 font-content">Cards, UPI, Net Banking</p>
                            <p className="text-xs text-blue-600 font-content mt-1">💳 Multiple Options</p>
                          </div>
                        </div>
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                      </div>
                    </div>

                    {/* Credit/Debit Card */}
                    <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer transform hover:scale-[1.02]" onClick={() => handlePayment("Card")}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                            <CreditCard className="text-gray-600" size={32} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 font-content text-lg">Credit/Debit Card</p>
                            <p className="text-sm text-gray-500 font-content">Visa, Mastercard, RuPay</p>
                            <p className="text-xs text-gray-600 font-content mt-1">🔒 Secure Payment</p>
                          </div>
                        </div>
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-green-700 font-content font-medium">
                          Your payment is secured with 256-bit SSL encryption
                        </p>
                        <p className="text-xs text-green-600 font-content mt-1">
                          All transactions are protected and encrypted
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500 font-content">
                      By proceeding, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div >
  );
};

export default Plans;