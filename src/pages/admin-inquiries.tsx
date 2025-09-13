import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import AdminAuth from "@/components/AdminAuth";

interface Inquiry {
  id: string;
  date: string;
  fullName: string;
  phoneNumber: string;
  emailId: string;
  message: string;
}

const AdminInquiriesContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Sample data matching the image
  const inquiries: Inquiry[] = [
    {
      id: "1",
      date: "17/07/2025",
      fullName: "Kovil Savaj",
      phoneNumber: "+91 9913961701",
      emailId: "kovil@gmail.com",
      message: "I need to know more about this dropshipping",
    },
    {
      id: "2",
      date: "16/07/2025",
      fullName: "Henil Kevadiya",
      phoneNumber: "+91 1234567890",
      emailId: "Henil@gmail.com",
      message: "Can you call me please?",
    },
  ];

  const filteredInquiries = inquiries.filter(inquiry =>
    inquiry.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.emailId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inquiry.phoneNumber.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInquiries = filteredInquiries.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/admin" className="flex items-center">
              <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
              <span className="ml-3 text-lg font-bold text-gray-900">
                A1 Ecommerce Expert
              </span>
            </Link>

            {/* Navigation */}
            <div className="flex items-center space-x-8">
              <Link
                href="/admin/inquiries"
                className="text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
              >
                Inquries
              </Link>
              <Link
                href="/admin/students"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Students
              </Link>
               <Link
                href="/admin/feedback"
                className="text-gray-600 font-medium  border-gray-900 "
              >
                Feedback
              </Link>
              <Link href="/">
                <Button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800">
                  Logout
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
          <h1 className="text-2xl font-bold text-gray-900">Inquiries</h1>
          
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search by Stock Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-200"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Full Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message / Question
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentInquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {inquiry.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {inquiry.fullName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {inquiry.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {inquiry.emailId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      <div className="truncate" title={inquiry.message}>
                        {inquiry.message}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing data 1 to {Math.min(endIndex, filteredInquiries.length)} of {filteredInquiries.length} entries
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
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : ""
                }`}
              >
                {page}
              </Button>
            ))}
            
            {totalPages < 5 && (
              <>
                <span className="text-gray-400">...</span>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  32
                </Button>
              </>
            )}
            
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
      </div>
    </div>
  );
};

const AdminInquiries = () => {
  return (
    <AdminAuth>
      <AdminInquiriesContent />
    </AdminAuth>
  );
};

export default AdminInquiries; 