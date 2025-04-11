
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Award } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-bridge-primary" />
              <span className="ml-2 text-xl font-bold text-bridge-dark">
                SkillBridge
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/opportunities" 
              className="px-3 py-2 text-bridge-dark hover:text-bridge-primary transition-colors"
            >
              Opportunities
            </Link>
            <Link 
              to="/dashboard" 
              className="px-3 py-2 text-bridge-dark hover:text-bridge-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              to="/upload" 
              className="px-3 py-2 text-bridge-dark hover:text-bridge-primary transition-colors"
            >
              Upload
            </Link>
            <Link 
              to="/global-certifications" 
              className="px-3 py-2 text-bridge-dark hover:text-bridge-primary transition-colors flex items-center"
            >
              <Award className="h-4 w-4 mr-1" />
              Certifications
            </Link>
            <Link to="/login">
              <Button variant="outline" className="ml-2">Log in</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-bridge-primary hover:bg-bridge-primary/90">Sign up</Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          <div className="space-y-1">
            <Link
              to="/opportunities"
              className="block px-3 py-2 text-bridge-dark hover:bg-gray-50 hover:text-bridge-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Opportunities
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 text-bridge-dark hover:bg-gray-50 hover:text-bridge-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/upload"
              className="block px-3 py-2 text-bridge-dark hover:bg-gray-50 hover:text-bridge-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Upload
            </Link>
            <Link
              to="/global-certifications"
              className="block px-3 py-2 text-bridge-dark hover:bg-gray-50 hover:text-bridge-primary rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Award className="h-4 w-4 mr-1" />
              Global Certifications
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-bridge-dark hover:bg-gray-50 hover:text-bridge-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="block px-3 py-2 font-medium text-white bg-bridge-primary hover:bg-bridge-primary/90 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
