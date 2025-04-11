
import { ArrowRight, Briefcase, BookOpen, Award, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bridge-primary/10 to-bridge-accent/10 py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-bridge-dark leading-tight mb-6">
              Build Your Skills with Real-World Opportunities
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              SkillBridge connects students and learners with internships, projects, 
              and volunteer opportunities to help you gain experience and showcase your talents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/opportunities">
                <Button className="bg-bridge-primary hover:bg-bridge-primary/90">
                  Find Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Students collaborating" 
              className="rounded-lg shadow-xl max-w-full h-auto animate-float"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How SkillBridge Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover-lift">
              <div className="h-12 w-12 bg-bridge-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-bridge-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Discover Opportunities</h3>
              <p className="text-gray-600">
                Browse through hundreds of internships, projects, and volunteer positions 
                matched to your skills and interests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover-lift">
              <div className="h-12 w-12 bg-bridge-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-bridge-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply & Connect</h3>
              <p className="text-gray-600">
                Submit your application with just a few clicks. Upload your resume 
                and projects to showcase your talents.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover-lift">
              <div className="h-12 w-12 bg-bridge-accent/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-bridge-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gain Experience</h3>
              <p className="text-gray-600">
                Work on real projects, build your portfolio, and earn badges and 
                certificates to showcase your achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="bg-bridge-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-bridge-primary mb-2">5,000+</div>
              <div className="text-gray-300">Active Opportunities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bridge-secondary mb-2">10,000+</div>
              <div className="text-gray-300">Registered Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-bridge-accent mb-2">500+</div>
              <div className="text-gray-300">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">85%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://i.pravatar.cc/150?img=33" 
                  alt="Student portrait" 
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">Jessica Chen</h3>
                  <p className="text-gray-500">Computer Science Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Through SkillBridge, I found an internship that allowed me to apply my 
                programming skills to real-world problems. This experience was instrumental 
                in helping me land my dream job after graduation."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://i.pravatar.cc/150?img=15" 
                  alt="Student portrait" 
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">Marcus Johnson</h3>
                  <p className="text-gray-500">Marketing Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The freelance projects I found on SkillBridge helped me build an impressive 
                portfolio even before I finished college. The platform's skill-matching feature 
                connected me with opportunities that were perfect for my interests."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bridge-primary to-bridge-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Building Your Skills?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are gaining real-world experience and building their careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="bg-white text-bridge-primary hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/opportunities">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Browse Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
