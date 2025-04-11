
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, BriefcaseBusiness, Clock, Users, Coins, GraduationCap } from "lucide-react";
import { Opportunity } from "@/types";
import { toast } from "sonner";

interface OpportunityDetailsModalProps {
  opportunity: Opportunity & { matchPercentage?: number } | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const OpportunityDetailsModal = ({ 
  opportunity, 
  isOpen, 
  onOpenChange 
}: OpportunityDetailsModalProps) => {
  if (!opportunity) return null;

  const handleApply = () => {
    toast.success("Application submitted successfully!");
    onOpenChange(false);
  };

  const handleSave = () => {
    toast.success("Opportunity saved to your favorites!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            {opportunity.logo ? (
              <img 
                src={opportunity.logo} 
                alt={opportunity.company} 
                className="h-12 w-12 rounded object-contain" 
              />
            ) : (
              <div className="h-12 w-12 rounded bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500 font-bold">{opportunity.company.charAt(0)}</span>
              </div>
            )}
            <div>
              <DialogTitle className="text-xl">{opportunity.title}</DialogTitle>
              <DialogDescription>
                <span className="font-medium">{opportunity.company}</span>
                {opportunity.matchPercentage && (
                  <Badge className="ml-2 bg-bridge-secondary">
                    {opportunity.matchPercentage}% Match
                  </Badge>
                )}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <Tabs defaultValue="details" className="mt-2">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="details" className="touch-scale">Details</TabsTrigger>
            <TabsTrigger value="requirements" className="touch-scale">Requirements</TabsTrigger>
            <TabsTrigger value="company" className="touch-scale">Company</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-4 animate-fade-in">
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-bridge-primary" />
                  <span>Deadline: <span className="font-medium">{opportunity.deadline}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-bridge-primary" />
                  <span>Location: <span className="font-medium">{opportunity.location || "Remote"}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BriefcaseBusiness className="h-4 w-4 text-bridge-primary" />
                  <span>Type: <span className="font-medium capitalize">{opportunity.type}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-bridge-primary" />
                  <span>Duration: <span className="font-medium">{opportunity.duration || "3 months"}</span></span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Description</h4>
                <p className="text-sm text-gray-600">
                  {opportunity.description || 
                    `${opportunity.company} is looking for a talented ${opportunity.title} to join their team. 
                    This is a great opportunity to gain hands-on experience and develop your skills in a 
                    professional setting. The successful candidate will work on real projects and 
                    collaborate with experienced professionals.`
                  }
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Responsibilities</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Collaborate with the team on project deliverables</li>
                  <li>Apply technical skills to solve real-world problems</li>
                  <li>Participate in team meetings and planning sessions</li>
                  <li>Document work and share findings with stakeholders</li>
                  <li>Learn and adapt to new technologies as needed</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="requirements" className="space-y-4 animate-fade-in">
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium mb-2">Required Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {opportunity.requiredSkills.map(skill => (
                    <Badge key={skill} variant="secondary" className="touch-scale">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Qualifications</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Currently enrolled in or recently graduated from a relevant program</li>
                  <li>Basic understanding of industry tools and practices</li>
                  <li>Strong communication and teamwork skills</li>
                  <li>Self-motivated and eager to learn</li>
                  <li>Portfolio or previous projects (preferred)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Benefits</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Hands-on experience with real projects</li>
                  <li>Mentorship from industry professionals</li>
                  <li>Networking opportunities</li>
                  <li>Potential for full-time employment</li>
                  <li>Certificate of completion</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="company" className="space-y-4 animate-fade-in">
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-medium mb-2">About {opportunity.company}</h4>
                <p className="text-sm text-gray-600">
                  {opportunity.company} is a leading organization in their industry, 
                  committed to innovation and excellence. They provide a supportive 
                  and dynamic environment for students and professionals to grow and 
                  develop their skills.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-bridge-primary" />
                  <span>Company Size: <span className="font-medium">50-200 employees</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Coins className="h-4 w-4 text-bridge-primary" />
                  <span>Industry: <span className="font-medium">Technology</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-bridge-primary" />
                  <span>Headquarters: <span className="font-medium">San Francisco, CA</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4 text-bridge-primary" />
                  <span>Students Hired: <span className="font-medium">50+</span></span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Company Culture</h4>
                <p className="text-sm text-gray-600">
                  At {opportunity.company}, we believe in fostering a collaborative and 
                  inclusive environment where everyone can contribute and grow. We value 
                  innovation, continuous learning, and a healthy work-life balance.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter className="mt-6 flex-col sm:flex-row gap-2">
          <Button variant="outline" className="touch-scale" onClick={handleSave}>
            Save for Later
          </Button>
          <DialogClose asChild>
            <Button variant="outline" className="touch-scale">
              Close
            </Button>
          </DialogClose>
          <Button className="touch-scale" onClick={handleApply}>
            Apply Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OpportunityDetailsModal;
