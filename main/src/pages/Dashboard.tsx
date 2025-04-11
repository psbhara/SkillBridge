import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Award, 
  FileText, 
  BarChart3, 
  ChevronRight,
  GraduationCap
} from "lucide-react";
import { mockUsers, mockOpportunities, mockFiles } from "@/data/mockData";
import UniversitySearch from "@/components/UniversitySearch";
import RecommendationsList from "@/components/RecommendationsList";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isStudent, setIsStudent] = useState(false);
  const user = mockUsers[0]; // Using the first mock user for demo
  
  // Simulate applications for this user
  const applications = [
    {
      id: "app1",
      opportunity: mockOpportunities[0],
      status: "applied",
      appliedDate: "2023-04-10",
    },
    {
      id: "app2",
      opportunity: mockOpportunities[2],
      status: "interview",
      appliedDate: "2023-03-25",
    },
    {
      id: "app3",
      opportunity: mockOpportunities[4],
      status: "rejected",
      appliedDate: "2023-03-15",
    }
  ];
  
  // Simulate saved opportunities
  const savedOpportunities = [mockOpportunities[1], mockOpportunities[3]];
  
  // Simulate skills and progress
  const skillProgress = [
    { skill: "React", progress: 85, certified: true },
    { skill: "JavaScript", progress: 90, certified: true },
    { skill: "UI/UX Design", progress: 75, certified: false },
    { skill: "Figma", progress: 60, certified: false },
  ];

  // Animations effect on load
  useEffect(() => {
    // Add animation classes to elements on load
    const staggeredItems = document.querySelectorAll('.staggered-item');
    staggeredItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate-fade-in');
      }, index * 150);
    });
  }, [activeTab]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - User Profile */}
        <div className="lg:w-1/4">
          <Card className="touch-scale">
            <CardHeader className="text-center pb-0">
              <div className="flex justify-center mb-4">
                {user.profilePicture ? (
                  <img 
                    src={user.profilePicture} 
                    alt={user.name} 
                    className="h-24 w-24 rounded-full"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-bridge-primary/10 flex items-center justify-center">
                    <User className="h-12 w-12 text-bridge-primary" />
                  </div>
                )}
              </div>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="touch-scale">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Profile Completion</h4>
                  <Progress value={75} className="h-2" />
                  <p className="text-sm text-gray-500 mt-1">75% complete</p>
                </div>
                
                <Button className="w-full touch-scale">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6 touch-scale">
            <CardHeader>
              <CardTitle className="text-lg">Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-bridge-primary/10 flex items-center justify-center mr-3">
                      <BookOpen className="h-4 w-4 text-bridge-primary" />
                    </div>
                    <span className="text-sm">Applications</span>
                  </div>
                  <span className="font-medium">{applications.length}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-bridge-secondary/10 flex items-center justify-center mr-3">
                      <Award className="h-4 w-4 text-bridge-secondary" />
                    </div>
                    <span className="text-sm">Certificates</span>
                  </div>
                  <span className="font-medium">2</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-bridge-accent/10 flex items-center justify-center mr-3">
                      <FileText className="h-4 w-4 text-bridge-accent" />
                    </div>
                    <span className="text-sm">Uploads</span>
                  </div>
                  <span className="font-medium">{user.uploadedFiles.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6 touch-scale">
            <CardHeader>
              <CardTitle className="text-lg">Account Type</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  {isStudent ? (
                    <GraduationCap className="h-4 w-4 text-blue-600" />
                  ) : (
                    <User className="h-4 w-4 text-blue-600" />
                  )}
                </div>
                <span className="font-medium">{isStudent ? 'Student' : 'Professional'}</span>
              </div>
              
              <div className="space-y-2">
                <Button 
                  variant={isStudent ? "default" : "outline"} 
                  size="sm" 
                  className="w-full justify-start touch-scale"
                  onClick={() => setIsStudent(true)}
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Student
                </Button>
                <Button 
                  variant={!isStudent ? "default" : "outline"} 
                  size="sm" 
                  className="w-full justify-start touch-scale"
                  onClick={() => setIsStudent(false)}
                >
                  <User className="h-4 w-4 mr-2" />
                  Professional
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Dashboard Content */}
        <div className="lg:w-3/4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="overview" className="touch-scale">Overview</TabsTrigger>
              <TabsTrigger value="applications" className="touch-scale">Applications</TabsTrigger>
              <TabsTrigger value="uploads" className="touch-scale">Uploads</TabsTrigger>
              {isStudent && (
                <TabsTrigger value="universities" className="touch-scale">Universities</TabsTrigger>
              )}
              {!isStudent && (
                <TabsTrigger value="network" className="touch-scale">Network</TabsTrigger>
              )}
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card className="card-hover staggered-item">
                <CardHeader>
                  <CardTitle className="text-lg">Skill Progress</CardTitle>
                  <CardDescription>Track your skill development journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillProgress.map(item => (
                      <div key={item.skill}>
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="font-medium">{item.skill}</span>
                            {item.certified && (
                              <Badge variant="outline" className="ml-2 text-xs">
                                <CheckCircle className="h-3 w-3 mr-1" /> Certified
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="card-hover staggered-item">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {applications.length > 0 ? (
                      <div className="space-y-4">
                        {applications.slice(0, 2).map(app => (
                          <div key={app.id} className="flex items-start touch-scale">
                            {app.opportunity.logo ? (
                              <img 
                                src={app.opportunity.logo} 
                                alt={app.opportunity.company} 
                                className="h-10 w-10 rounded mr-3 object-contain"
                              />
                            ) : (
                              <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center mr-3">
                                <span className="text-gray-500 font-bold">{app.opportunity.company.charAt(0)}</span>
                              </div>
                            )}
                            <div className="flex-grow">
                              <div className="flex justify-between">
                                <h4 className="font-medium">{app.opportunity.title}</h4>
                                <Badge 
                                  variant={
                                    app.status === "applied" ? "secondary" : 
                                    app.status === "interview" ? "default" : "destructive"
                                  }
                                  className="capitalize"
                                >
                                  {app.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-500">{app.opportunity.company}</p>
                            </div>
                          </div>
                        ))}
                        <Button variant="ghost" size="sm" className="w-full text-bridge-primary touch-scale">
                          View All <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-gray-500">No applications yet</p>
                        <Button variant="link" className="mt-2 touch-scale">
                          Find Opportunities
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card className="card-hover staggered-item">
                  <CardHeader>
                    <CardTitle className="text-lg">Saved Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {savedOpportunities.length > 0 ? (
                      <div className="space-y-4">
                        {savedOpportunities.map(opp => (
                          <div key={opp.id} className="flex items-start touch-scale">
                            {opp.logo ? (
                              <img 
                                src={opp.logo} 
                                alt={opp.company} 
                                className="h-10 w-10 rounded mr-3 object-contain"
                              />
                            ) : (
                              <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center mr-3">
                                <span className="text-gray-500 font-bold">{opp.company.charAt(0)}</span>
                              </div>
                            )}
                            <div className="flex-grow">
                              <h4 className="font-medium">{opp.title}</h4>
                              <p className="text-sm text-gray-500">{opp.company}</p>
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>Deadline: {opp.deadline}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-6">
                        <p className="text-gray-500">No saved opportunities</p>
                        <Button variant="link" className="mt-2 touch-scale">
                          Browse Opportunities
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Use the new component that shows more recommendations */}
              <div className="staggered-item">
                <RecommendationsList initialCount={3} />
              </div>
            </TabsContent>
            
            {/* Applications Tab */}
            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <CardTitle className="text-lg">Your Applications</CardTitle>
                      <CardDescription>Track the status of your applications</CardDescription>
                    </div>
                    <div className="flex gap-2 mt-4 sm:mt-0">
                      <Button variant="outline" size="sm">Filter</Button>
                      <Button variant="outline" size="sm">Sort</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {applications.map(app => (
                      <div key={app.id} className="p-4 rounded-lg border bg-white shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center">
                          {app.opportunity.logo ? (
                            <img 
                              src={app.opportunity.logo} 
                              alt={app.opportunity.company} 
                              className="h-12 w-12 rounded-lg mr-4 mb-4 md:mb-0 object-contain"
                            />
                          ) : (
                            <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mr-4 mb-4 md:mb-0">
                              <span className="text-gray-500 font-bold">{app.opportunity.company.charAt(0)}</span>
                            </div>
                          )}
                          
                          <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                              <div>
                                <h3 className="font-semibold">{app.opportunity.title}</h3>
                                <p className="text-sm text-gray-500 mb-2">{app.opportunity.company}</p>
                              </div>
                              <Badge 
                                variant={
                                  app.status === "applied" ? "secondary" : 
                                  app.status === "interview" ? "default" : "destructive"
                                }
                                className="capitalize mb-2 sm:mb-0"
                              >
                                {app.status}
                              </Badge>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 gap-y-2 sm:gap-x-4">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>Applied: {app.appliedDate}</span>
                              </div>
                              <Badge variant="outline" className="w-fit capitalize">
                                {app.opportunity.type}
                              </Badge>
                              {app.opportunity.remote && (
                                <Badge variant="outline" className="w-fit">Remote</Badge>
                              )}
                            </div>
                            
                            <div className="mt-4 flex gap-2 flex-wrap">
                              <Button size="sm">View Details</Button>
                              <Button size="sm" variant="outline">Contact</Button>
                              {app.status === "applied" && (
                                <Button size="sm" variant="outline" className="text-destructive">
                                  Withdraw
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Application Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Total Applications</div>
                      <div className="text-2xl font-bold">{applications.length}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Interviews</div>
                      <div className="text-2xl font-bold">{applications.filter(a => a.status === "interview").length}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Success Rate</div>
                      <div className="text-2xl font-bold">33%</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center h-48">
                    <BarChart3 className="h-full w-full text-gray-300" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Uploads Tab */}
            <TabsContent value="uploads" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <CardTitle className="text-lg">Your Uploads</CardTitle>
                      <CardDescription>Manage your resumes and project files</CardDescription>
                    </div>
                    <Button className="mt-4 sm:mt-0 bg-bridge-primary">
                      Upload New File
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.uploadedFiles.length > 0 ? (
                      user.uploadedFiles.map(file => (
                        <div key={file.id} className="flex items-center p-4 border rounded-lg">
                          <div className="h-10 w-10 rounded-lg bg-bridge-primary/10 flex items-center justify-center mr-4">
                            <FileText className="h-5 w-5 text-bridge-primary" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium">{file.filename}</h4>
                            <div className="flex items-center text-sm text-gray-500">
                              <span>Uploaded: {file.uploadDate}</span>
                              <span className="mx-2">•</span>
                              <span>{file.size}</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost">View</Button>
                            <Button size="sm" variant="ghost">Replace</Button>
                            <Button size="sm" variant="ghost" className="text-destructive">Delete</Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium mb-2">No files uploaded yet</h3>
                        <p className="text-gray-500 mb-4">Upload your resume or project files to share with potential opportunities</p>
                        <Button>Upload Your First File</Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-bridge-accent/10 flex items-center justify-center mr-3">
                        <FileText className="h-4 w-4 text-bridge-accent" />
                      </div>
                      <div>
                        <p className="text-sm"><span className="font-medium">resume_alex.pdf</span> was viewed by <span className="font-medium">TechCorp</span></p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-bridge-primary/10 flex items-center justify-center mr-3">
                        <CheckCircle className="h-4 w-4 text-bridge-primary" />
                      </div>
                      <div>
                        <p className="text-sm">You received a <span className="font-medium">JavaScript</span> skill certification</p>
                        <p className="text-xs text-gray-500">1 week ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-bridge-secondary/10 flex items-center justify-center mr-3">
                        <FileText className="h-4 w-4 text-bridge-secondary" />
                      </div>
                      <div>
                        <p className="text-sm">You uploaded <span className="font-medium">resume_alex.pdf</span></p>
                        <p className="text-xs text-gray-500">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Universities Tab */}
            <TabsContent value="universities" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">University Search</CardTitle>
                  <CardDescription>Find the right university for your educational journey</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <UniversitySearch />
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Network Tab */}
            <TabsContent value="network" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Professional Network</CardTitle>
                  <CardDescription>Connect with mentors, peers, and opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <User className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Network Feature Coming Soon</h3>
                    <p className="text-gray-500 mb-6">We're working on enhancing your professional network experience</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
