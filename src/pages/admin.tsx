import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
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
                className="text-gray-600 hover:text-gray-900 font-medium"
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

      {/* Empty Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* This area is intentionally left empty as requested */}
      </div>
    </div>
  );
};

export default Admin; 