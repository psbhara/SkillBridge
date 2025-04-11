
import { BookOpen, Instagram, Twitter, Linkedin, Github, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-bridge-primary" />
              <span className="ml-2 text-lg font-bold text-bridge-dark">SkillBridge</span>
            </div>
            <p className="text-sm text-gray-500">
              Connecting students with real-world opportunities to build and showcase their skills.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bridge-primary touch-scale">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bridge-primary touch-scale">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bridge-primary touch-scale">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bridge-primary touch-scale">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Students</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/opportunities" className="text-gray-500 hover:text-bridge-primary touch-scale">Find Opportunities</Link></li>
              <li><Link to="/upload" className="text-gray-500 hover:text-bridge-primary touch-scale">Upload Resume</Link></li>
              <li><Link to="/dashboard" className="text-gray-500 hover:text-bridge-primary touch-scale">Your Dashboard</Link></li>
              <li><Link to="/global-certifications" className="text-gray-500 hover:text-bridge-primary touch-scale">Global Certifications</Link></li>
              <li><a href="#" className="text-gray-500 hover:text-bridge-primary touch-scale">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">For Companies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-bridge-primary touch-scale">Post Opportunities</a></li>
              <li><a href="#" className="text-gray-500 hover:text-bridge-primary touch-scale">Find Talent</a></li>
              <li><a href="#" className="text-gray-500 hover:text-bridge-primary touch-scale">Partner With Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-bridge-primary touch-scale">Company Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-500 hover:text-bridge-primary touch-scale">About Us</Link></li>
              <li><Link to="/global-certifications" className="text-gray-500 hover:text-bridge-primary touch-scale flex items-center gap-1">
                <Award className="h-3.5 w-3.5" />
                Global Certifications
              </Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-bridge-primary touch-scale">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-500 hover:text-bridge-primary touch-scale">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-500 hover:text-bridge-primary touch-scale">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
