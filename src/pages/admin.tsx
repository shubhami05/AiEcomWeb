import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("adminAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Check credentials
    if (email === "triopulse@gmail.com" && password === "triopulse123") {
      localStorage.setItem("adminAuthenticated", "true");
      setIsAuthenticated(true);
    } else {
      setError("Invalid email or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Admin Login
            </CardTitle>
            <p className="text-gray-600">Enter your credentials to access the admin panel</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm text-center">
                  {error}
                </div>
              )}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show admin dashboard if authenticated
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
              <Button 
                onClick={handleLogout}
                className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800"
              >
                Logout
              </Button>
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