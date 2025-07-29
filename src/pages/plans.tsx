import { useEffect } from "react";
import { CheckCircle, TrendingUp, Shield, Eye, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { IconRight } from "react-day-picker";

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
                    <Button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors font-button">
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

      <Footer />
    </div >
  );
};

export default Plans;