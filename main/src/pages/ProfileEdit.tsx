
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { mockUsers } from "@/data/mockData";
import { User, Save, Camera, Trash2, Plus, Briefcase, Award, GraduationCap, Mail, Phone, MapPin, Link2 } from "lucide-react";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const user = mockUsers[0]; // Using the first mock user for demo
  const [activeTab, setActiveTab] = useState("personal");
  const [skills, setSkills] = useState<string[]>(user.skills || []);
  const [newSkill, setNewSkill] = useState("");
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio || "",
    location: user.location || "",
    phone: user.phone || "",
    website: user.website || "",
    university: user.university || "",
    graduation: user.graduation || "",
    company: user.company || "",
    position: user.position || "",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills(prev => [...prev, newSkill]);
      setNewSkill("");
    }
  };
  
  const handleRemoveSkill = (skill: string) => {
    setSkills(prev => prev.filter(s => s !== skill));
  };
  
  const handleSaveProfile = () => {
    // In a real app, this would send data to a backend
    toast.success("Profile updated successfully!");
    navigate("/dashboard");
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Edit Profile</h1>
        <p className="text-gray-500">Update your profile information and preferences</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Profile Picture */}
        <div className="lg:w-1/4">
          <Card className="touch-scale">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative mb-4">
                {user.profilePicture ? (
                  <img 
                    src={user.profilePicture} 
                    alt={user.name} 
                    className="h-32 w-32 rounded-full"
                  />
                ) : (
                  <div className="h-32 w-32 rounded-full bg-bridge-primary/10 flex items-center justify-center">
                    <User className="h-16 w-16 text-bridge-primary" />
                  </div>
                )}
                <Button 
                  size="icon" 
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8 touch-scale"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2 w-full">
                <Button variant="outline" className="w-full touch-scale">
                  Upload New Picture
                </Button>
                <Button variant="outline" className="w-full text-destructive touch-scale">
                  Remove Picture
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6 touch-scale">
            <CardHeader>
              <CardTitle className="text-lg">Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="public-profile">Public Profile</Label>
                    <p className="text-xs text-gray-500">Allow others to view your profile</p>
                  </div>
                  <Switch id="public-profile" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="show-email">Show Email</Label>
                    <p className="text-xs text-gray-500">Display email on your profile</p>
                  </div>
                  <Switch id="show-email" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <p className="text-xs text-gray-500">Receive opportunity notifications</p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Profile Details */}
        <div className="lg:w-3/4">
          <Card className="touch-scale">
            <CardHeader>
              <CardTitle>Edit Profile Information</CardTitle>
              <CardDescription>Update your personal information and profile details</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="personal" className="touch-scale">Personal</TabsTrigger>
                  <TabsTrigger value="education" className="touch-scale">Education</TabsTrigger>
                  <TabsTrigger value="experience" className="touch-scale">Experience</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal" className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="flex">
                        <User className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex">
                        <Mail className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <div className="flex">
                        <Phone className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                        <Input 
                          id="phone" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="flex">
                        <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                        <Input 
                          id="location" 
                          name="location" 
                          value={formData.location} 
                          onChange={handleInputChange}
                          placeholder="City, Country"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <div className="flex">
                        <Link2 className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                        <Input 
                          id="website" 
                          name="website" 
                          value={formData.website} 
                          onChange={handleInputChange}
                          placeholder="https://yourwebsite.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      name="bio" 
                      value={formData.bio} 
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about yourself"
                    />
                    <p className="text-xs text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="education" className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="university">University/College</Label>
                      <div className="flex">
                        <GraduationCap className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                        <Input 
                          id="university" 
                          name="university" 
                          value={formData.university} 
                          onChange={handleInputChange}
                          placeholder="University name"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="graduation">Graduation Year</Label>
                      <Input 
                        id="graduation" 
                        name="graduation" 
                        value={formData.graduation} 
                        onChange={handleInputChange}
                        placeholder="Expected graduation year"
                      />
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-md">
                    <h3 className="font-medium mb-2">Certifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white p-3 rounded border">
                        <div className="flex items-center">
                          <Award className="h-4 w-4 text-bridge-secondary mr-2" />
                          <span>JavaScript Fundamentals</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between bg-white p-3 rounded border">
                        <div className="flex items-center">
                          <Award className="h-4 w-4 text-bridge-secondary mr-2" />
                          <span>React Development</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full touch-scale">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Certification
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="experience" className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <div className="flex">
                        <Briefcase className="h-4 w-4 text-gray-500 mr-2 mt-3" />
                        <Input 
                          id="company" 
                          name="company" 
                          value={formData.company} 
                          onChange={handleInputChange}
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Input 
                        id="position" 
                        name="position" 
                        value={formData.position} 
                        onChange={handleInputChange}
                        placeholder="Your title"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block">Skills</Label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {skills.map(skill => (
                          <div key={skill} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                            <span>{skill}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-5 w-5 ml-1 text-gray-500 hover:text-destructive"
                              onClick={() => handleRemoveSkill(skill)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Add a skill (e.g. JavaScript)" 
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddSkill();
                            }
                          }}
                        />
                        <Button onClick={handleAddSkill} className="touch-scale">
                          <Plus className="h-4 w-4 mr-2" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-6 flex justify-end">
                <Button 
                  variant="outline" 
                  className="mr-2 touch-scale"
                  onClick={() => navigate("/dashboard")}
                >
                  Cancel
                </Button>
                <Button 
                  className="touch-scale"
                  onClick={handleSaveProfile}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
