
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Users, Building, Award, Target, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">About SkillBridge</h1>
          <p className="text-gray-500 text-lg">
            Connecting students with real-world opportunities to build and showcase their skills.
          </p>
        </div>
        
        <Tabs defaultValue="mission" className="mb-12">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="mission" className="touch-scale">Our Mission</TabsTrigger>
            <TabsTrigger value="team" className="touch-scale">Our Team</TabsTrigger>
            <TabsTrigger value="story" className="touch-scale">Our Story</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission" className="mt-6 space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Bridging the Gap</CardTitle>
                <CardDescription>
                  Connecting students with real-world opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  At SkillBridge, our mission is to bridge the gap between academic learning and 
                  professional experience. We believe that every student deserves the opportunity 
                  to apply their skills in real-world settings, regardless of their background or connections.
                </p>
                <p>
                  Through our platform, we aim to democratize access to meaningful opportunities 
                  that build skills, enhance resumes, and launch careers. We're dedicated to 
                  creating pathways for students to showcase their abilities and for companies 
                  to discover fresh talent.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-bridge-primary/10 flex items-center justify-center mr-3">
                        <Target className="h-4 w-4 text-bridge-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Our Vision</h3>
                        <p className="text-sm text-gray-600">
                          A world where every student has equal access to opportunities 
                          that launch meaningful careers.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-bridge-secondary/10 flex items-center justify-center mr-3">
                        <Award className="h-4 w-4 text-bridge-secondary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Our Values</h3>
                        <p className="text-sm text-gray-600">
                          Accessibility, growth, community, innovation, and 
                          real-world application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover">
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-bridge-primary/10 flex items-center justify-center mb-3">
                    <Users className="h-5 w-5 text-bridge-primary" />
                  </div>
                  <CardTitle className="text-lg">For Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Gain practical experience</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Build your portfolio</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Earn industry certifications</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Connect with employers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-bridge-secondary/10 flex items-center justify-center mb-3">
                    <Building className="h-5 w-5 text-bridge-secondary" />
                  </div>
                  <CardTitle className="text-lg">For Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Discover fresh talent</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Test potential hires</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Complete short-term projects</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Build your brand on campus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">For Universities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Enhance student outcomes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Build industry partnerships</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Support work-integrated learning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Track student development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="team" className="mt-6 space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Meet Our Team</CardTitle>
                <CardDescription>
                  The passionate people behind SkillBridge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <div className="h-24 w-24 rounded-full bg-gray-200 mb-4"></div>
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500 mb-2">Founder & CEO</p>
                    <p className="text-sm text-gray-600">
                      Former educator passionate about creating pathways to meaningful careers for all students.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <div className="h-24 w-24 rounded-full bg-gray-200 mb-4"></div>
                    <h3 className="font-medium">David Chen</h3>
                    <p className="text-sm text-gray-500 mb-2">CTO</p>
                    <p className="text-sm text-gray-600">
                      Tech leader with experience building educational platforms that connect people with opportunities.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <div className="h-24 w-24 rounded-full bg-gray-200 mb-4"></div>
                    <h3 className="font-medium">Maya Patel</h3>
                    <p className="text-sm text-gray-500 mb-2">Head of Partnerships</p>
                    <p className="text-sm text-gray-600">
                      Builds relationships with universities and companies to create valuable opportunities.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <div className="h-24 w-24 rounded-full bg-gray-200 mb-4"></div>
                    <h3 className="font-medium">James Wilson</h3>
                    <p className="text-sm text-gray-500 mb-2">Product Manager</p>
                    <p className="text-sm text-gray-600">
                      Ensures SkillBridge delivers an exceptional experience for students and companies alike.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="story" className="mt-6 space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Our Journey</CardTitle>
                <CardDescription>
                  From idea to impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-bridge-primary/10 flex items-center justify-center">
                        <span className="text-bridge-primary font-medium">1</span>
                      </div>
                      <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-medium">The Beginning (2020)</h3>
                      <p className="text-sm text-gray-600 mt-1 mb-6">
                        Founded during the pandemic when many students lost internship opportunities,
                        SkillBridge started as a simple matchmaking service connecting students with
                        remote project opportunities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-bridge-primary/10 flex items-center justify-center">
                        <span className="text-bridge-primary font-medium">2</span>
                      </div>
                      <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-medium">Growth & Expansion (2021-2022)</h3>
                      <p className="text-sm text-gray-600 mt-1 mb-6">
                        As demand grew, we expanded our platform to include skill assessments,
                        learning paths, and formal partnerships with universities. Our community 
                        grew to over 10,000 students and 500 companies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-bridge-primary/10 flex items-center justify-center">
                        <span className="text-bridge-primary font-medium">3</span>
                      </div>
                      <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>
                    </div>
                    <div>
                      <h3 className="font-medium">Innovation (2023)</h3>
                      <p className="text-sm text-gray-600 mt-1 mb-6">
                        We introduced our AI-powered skills matching system and expanded to include
                        certifications and verified portfolios, making it easier for students to
                        showcase their abilities and for companies to find the right talent.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-bridge-primary/10 flex items-center justify-center">
                        <span className="text-bridge-primary font-medium">4</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium">Today (2024)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Today, SkillBridge is the leading platform connecting students with 
                        skill-building opportunities, serving over 50,000 students and 2,000 companies
                        worldwide. We continue to innovate and expand our offerings to better serve
                        our community.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join SkillBridge Today</h2>
          <p className="text-gray-600 mb-6">
            Whether you're a student looking to gain experience, a company seeking fresh talent,
            or a university wanting to enhance student outcomes, SkillBridge has something for you.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/register" className="inline-flex items-center text-bridge-primary hover:text-bridge-primary/80">
              Sign Up <ChevronRight className="h-4 w-4 ml-1" />
            </a>
            <a href="/opportunities" className="inline-flex items-center text-bridge-primary hover:text-bridge-primary/80">
              Browse Opportunities <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
