import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight, Star, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface Feedback {
  id: string;
  date: string;
  name: string;
  email: string;
  category: string;
  rating: number;
  feedback: string;
  status: "new" | "reviewed" | "responded";
}

const AdminFeedback = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const itemsPerPage = 5;

  // Sample feedback data
  const feedbackData: Feedback[] = [
    {
      id: "1",
      date: "2024-01-15",
      name: "Priya Sharma",
      email: "priya@gmail.com",
      category: "training",
      rating: 5,
      feedback: "The training program completely transformed my approach to online business. The mentors are incredibly knowledgeable and supportive. I learned everything from product research to marketing strategies. Now I'm running a successful online store earning ₹50,000+ monthly!",
      status: "new"
    },
    {
      id: "2",
      date: "2024-01-14",
      name: "Rahul Patel",
      email: "rahul@gmail.com",
      category: "support",
      rating: 5,
      feedback: "Amazing experience! The step-by-step guidance helped me launch my first successful online store within 3 months. The support team is always there to help. I went from zero knowledge to making my first sale in just 45 days. Highly recommended for beginners!",
      status: "reviewed"
    },
    {
      id: "3",
      date: "2024-01-13",
      name: "Anjali Desai",
      email: "anjali@gmail.com",
      category: "general",
      rating: 4,
      feedback: "From knowing nothing about e-commerce to running a profitable business - this program made it possible. The trainers are patient and explain everything clearly. I'm now earning ₹30,000 monthly while managing my home. This changed my life completely!",
      status: "responded"
    },
    {
      id: "4",
      date: "2024-01-12",
      name: "Vikram Singh",
      email: "vikram@gmail.com",
      category: "website",
      rating: 3,
      feedback: "The website experience could be improved. Sometimes it's slow to load and the mobile version needs some work. But the content is great and very helpful.",
      status: "new"
    },
    {
      id: "5",
      date: "2024-01-11",
      name: "Meera Patel",
      email: "meera@gmail.com",
      category: "suggestion",
      rating: 5,
      feedback: "I suggest adding more video content and maybe some live Q&A sessions. The current content is excellent but more interactive sessions would be amazing!",
      status: "reviewed"
    }
  ];

  const filteredFeedback = feedbackData.filter(feedback => {
    const matchesSearch = 
      feedback.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.feedback.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || feedback.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredFeedback.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFeedback = filteredFeedback.slice(startIndex, endIndex);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">New</Badge>;
      case "reviewed":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Reviewed</Badge>;
      case "responded":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Responded</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Unknown</Badge>;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "general":
        return "General Feedback";
      case "training":
        return "Training Experience";
      case "support":
        return "Customer Support";
      case "website":
        return "Website Experience";
      case "suggestion":
        return "Suggestion";
      case "complaint":
        return "Complaint";
      default:
        return category;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      {/* Header with Navigation */}
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
              <span className="ml-3 text-lg font-bold text-gray-900">
                A1 Ecommerce Expert
              </span>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-8">
              <Link
                href="/admin/inquiries"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Inquiries
              </Link>
              <Link
                href="/admin/students"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Students
              </Link>
              <Link
                href="/admin/feedback"
                className="text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
              >
                Feedback
              </Link>
              <Link href="/admin">
                <Button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title and Search */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Feedback Management</h1>
            <p className="text-gray-600 mt-1">Manage and respond to user feedback</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Filter by category"
            >
              <option value="all">All Categories</option>
              <option value="general">General Feedback</option>
              <option value="training">Training Experience</option>
              <option value="support">Customer Support</option>
              <option value="website">Website Experience</option>
              <option value="suggestion">Suggestion</option>
              <option value="complaint">Complaint</option>
            </select>
            
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by name, email, or feedback"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Feedback</p>
                <p className="text-2xl font-bold text-gray-900">{feedbackData.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New</p>
                <p className="text-2xl font-bold text-blue-600">
                  {feedbackData.filter(f => f.status === "new").length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Reviewed</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {feedbackData.filter(f => f.status === "reviewed").length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Responded</p>
                <p className="text-2xl font-bold text-green-600">
                  {feedbackData.filter(f => f.status === "responded").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Cards */}
        <div className="space-y-6">
          {currentFeedback.map((feedback) => (
            <div key={feedback.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {feedback.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feedback.name}</h3>
                    <p className="text-sm text-gray-600">{feedback.email}</p>
                    <p className="text-xs text-gray-500">{feedback.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(feedback.status)}
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                    {getCategoryLabel(feedback.category)}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={`${star <= feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill={star <= feedback.rating ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{feedback.rating}/5</span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 leading-relaxed">"{feedback.feedback}"</p>
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button variant="outline" size="sm">
                  Mark as Reviewed
                </Button>
                <Button variant="outline" size="sm">
                  Respond
                </Button>
                <Button size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredFeedback.length)} of {filteredFeedback.length} entries
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={`h-8 w-8 p-0 ${
                    currentPage === page
                      ? "bg-primary hover:bg-primary-dark text-white"
                      : ""
                  }`}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminFeedback;
