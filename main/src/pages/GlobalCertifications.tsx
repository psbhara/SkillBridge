
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Globe, Search, GraduationCap, Medal, BadgeCheck, ExternalLink, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Certification {
  id: string;
  name: string;
  provider: string;
  category: string;
  description: string;
  skills: string[];
  logo: string;
  link: string;
  difficulty: "beginner" | "intermediate" | "advanced" | "expert";
  duration: string;
  cost: string;
  industry: string[];
}

const certifications: Certification[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    category: "Cloud Computing",
    description: "Validate your expertise in designing and deploying scalable systems on AWS. This certification showcases your ability to design distributed systems and implement AWS solutions following best practices.",
    skills: ["Cloud Architecture", "AWS Services", "Solution Design", "Security"],
    logo: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    difficulty: "intermediate",
    duration: "6 months preparation",
    cost: "$150",
    industry: ["Technology", "Cloud Computing", "IT Infrastructure"]
  },
  {
    id: "2",
    name: "Google Professional Data Engineer",
    provider: "Google Cloud",
    category: "Data Engineering",
    description: "Demonstrate your ability to design, build, operationalize, secure, and monitor data processing systems with a particular emphasis on security and compliance.",
    skills: ["Data Processing", "Machine Learning", "Big Data", "Google Cloud"],
    logo: "https://cloud.google.com/images/certification/badges/certified-professional-data-engineer.png",
    link: "https://cloud.google.com/certification/data-engineer",
    difficulty: "advanced",
    duration: "3-6 months preparation",
    cost: "$200",
    industry: ["Data Science", "Cloud Computing", "Analytics"]
  },
  {
    id: "3",
    name: "Certified Information Systems Security Professional (CISSP)",
    provider: "ISC²",
    category: "Cybersecurity",
    description: "Globally recognized certification for information security professionals. Demonstrates expertise across a broad range of security practices and principles.",
    skills: ["Security Operations", "Risk Management", "Security Architecture", "Network Security"],
    logo: "https://www.isc2.org/-/media/ISC2/Certifications/Certification-Badges/CISSP-Badge.ashx",
    link: "https://www.isc2.org/Certifications/CISSP",
    difficulty: "expert",
    duration: "6-12 months preparation",
    cost: "$699",
    industry: ["Cybersecurity", "IT Security", "Governance"]
  },
  {
    id: "4",
    name: "Project Management Professional (PMP)",
    provider: "Project Management Institute",
    category: "Project Management",
    description: "The gold standard of project management certification, demonstrating expertise in leading and directing projects and teams.",
    skills: ["Project Planning", "Risk Management", "Team Leadership", "Stakeholder Management"],
    logo: "https://www.pmi.org/-/media/pmi/other-images/certifications/pmp/pmp-cert.png",
    link: "https://www.pmi.org/certifications/project-management-pmp",
    difficulty: "intermediate",
    duration: "3-6 months preparation",
    cost: "$555 for non-members",
    industry: ["Business", "Technology", "Construction", "Healthcare"]
  },
  {
    id: "5",
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    provider: "Microsoft",
    category: "Cloud Computing",
    description: "Validates expertise in compute, network, storage, and security to design solutions that run on Azure.",
    skills: ["Cloud Architecture", "Azure Services", "Solution Design", "Security"],
    logo: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
    link: "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/",
    difficulty: "expert",
    duration: "6 months preparation",
    cost: "$165 per exam (two exams required)",
    industry: ["Cloud Computing", "IT Infrastructure", "Software Development"]
  },
  {
    id: "6",
    name: "Certified Ethical Hacker (CEH)",
    provider: "EC-Council",
    category: "Cybersecurity",
    description: "Demonstrates skills in identifying weaknesses and vulnerabilities in target systems using the same knowledge and tools as malicious hackers.",
    skills: ["Ethical Hacking", "Penetration Testing", "Security Analysis", "Vulnerability Assessment"],
    logo: "https://www.eccouncil.org/wp-content/uploads/2021/08/CEH-Logo.png",
    link: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/",
    difficulty: "intermediate",
    duration: "2-3 months preparation",
    cost: "$950 - $1,199",
    industry: ["Cybersecurity", "IT Security", "Network Security"]
  },
  {
    id: "7",
    name: "Cisco Certified Network Professional (CCNP)",
    provider: "Cisco",
    category: "Networking",
    description: "Validates the ability to plan, implement, verify and troubleshoot local and wide-area enterprise networks.",
    skills: ["Network Infrastructure", "Network Security", "Automation", "Troubleshooting"],
    logo: "https://www.cisco.com/c/dam/en/us/training-events/certifications/professional/ccnp-enterprise.png",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html",
    difficulty: "advanced",
    duration: "6-12 months preparation",
    cost: "$300 per exam (multiple exams required)",
    industry: ["Networking", "IT Infrastructure", "Telecommunications"]
  },
  {
    id: "8",
    name: "Certified ScrumMaster (CSM)",
    provider: "Scrum Alliance",
    category: "Agile & Scrum",
    description: "Demonstrates knowledge of Scrum methodologies and their application in project management and software development.",
    skills: ["Agile Methodologies", "Scrum Framework", "Team Facilitation", "Iterative Development"],
    logo: "https://www.scrumalliance.org/ScrumRedesignDEVSite/media/ScrumAllianceMedia/Files%20and%20PDFs/Certifications/CSM/CSM-Logo.png",
    link: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
    difficulty: "beginner",
    duration: "2-4 weeks preparation",
    cost: "$450 - $1,000 (includes course)",
    industry: ["Software Development", "Project Management", "IT"]
  },
  {
    id: "9",
    name: "Salesforce Certified Administrator",
    provider: "Salesforce",
    category: "CRM",
    description: "Validates expertise in managing Salesforce applications, including user setup, security controls, and automation tools.",
    skills: ["Salesforce Administration", "CRM Management", "User Management", "Data Management"],
    logo: "https://developer.salesforce.com/resources2/certification-site/images/Certifications-admin.png",
    link: "https://trailhead.salesforce.com/en/credentials/administrator",
    difficulty: "intermediate",
    duration: "2-3 months preparation",
    cost: "$200",
    industry: ["Sales", "Marketing", "Customer Service", "Business"]
  },
  {
    id: "10",
    name: "Chartered Financial Analyst (CFA)",
    provider: "CFA Institute",
    category: "Finance",
    description: "Globally recognized professional designation that measures and certifies the competence and integrity of financial analysts.",
    skills: ["Investment Analysis", "Portfolio Management", "Financial Analysis", "Ethical Standards"],
    logo: "https://www.cfainstitute.org/-/media/images/logos/cfa-logo-stacked.svg",
    link: "https://www.cfainstitute.org/en/programs/cfa",
    difficulty: "expert",
    duration: "18-36 months (three levels)",
    cost: "$3,000+ (total for all levels)",
    industry: ["Finance", "Investment Banking", "Asset Management", "Financial Services"]
  }
];

const GlobalCertifications = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCertifications, setFilteredCertifications] = useState(certifications);
  const [category, setCategory] = useState("all");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    filterCertifications(term, category);
  };
  
  const handleCategoryChange = (value: string) => {
    setCategory(value);
    filterCertifications(searchTerm, value);
  };
  
  const filterCertifications = (term: string, cat: string) => {
    let filtered = certifications;
    
    // Filter by search term
    if (term) {
      filtered = filtered.filter(cert => 
        cert.name.toLowerCase().includes(term.toLowerCase()) ||
        cert.provider.toLowerCase().includes(term.toLowerCase()) ||
        cert.description.toLowerCase().includes(term.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(term.toLowerCase())) ||
        cert.industry.some(ind => ind.toLowerCase().includes(term.toLowerCase()))
      );
    }
    
    // Filter by category
    if (cat !== "all") {
      filtered = filtered.filter(cert => cert.category.toLowerCase() === cat.toLowerCase());
    }
    
    setFilteredCertifications(filtered);
  };

  const handleCertificationClick = (cert: Certification) => {
    toast({
      title: `${cert.name} Selected`,
      description: `You've selected the ${cert.name} certification by ${cert.provider}.`,
    });
  };

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(certifications.map(cert => cert.category.toLowerCase())))];

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <Award className="h-12 w-12 mx-auto text-bridge-primary animate-pulse" />
        <h1 className="text-4xl font-bold tracking-tight text-bridge-dark">Global Certifications</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover industry-recognized certifications that can enhance your skills and boost your career opportunities worldwide.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search certifications, skills, or providers..."
            className="pl-10 touch-scale"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={handleCategoryChange}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 touch-scale">
            {categories.map((cat, index) => (
              <TabsTrigger key={index} value={cat} className="capitalize">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.length > 0 ? (
          filteredCertifications.map((cert) => (
            <Card key={cert.id} className="overflow-hidden border border-gray-200 hover:border-bridge-primary hover:shadow-md transition-all duration-300 touch-scale">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-bold line-clamp-2">{cert.name}</CardTitle>
                    <CardDescription>{cert.provider}</CardDescription>
                  </div>
                  <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                    {cert.logo ? (
                      <img src={cert.logo} alt={`${cert.name} logo`} className="w-full h-full object-contain" />
                    ) : (
                      <BookOpen className="w-full h-full text-bridge-primary" />
                    )}
                  </div>
                </div>
                <Badge variant="outline" className="bg-gray-50 text-gray-700 capitalize">
                  {cert.category}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 line-clamp-3">{cert.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Medal className="h-4 w-4 text-bridge-primary" />
                    <span className="font-medium">Difficulty:</span> 
                    <span className="capitalize">{cert.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-bridge-primary" />
                    <span className="font-medium">Duration:</span> 
                    <span>{cert.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BadgeCheck className="h-4 w-4 text-bridge-primary" />
                    <span className="font-medium">Cost:</span> 
                    <span>{cert.cost}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 pt-2">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{cert.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleCertificationClick(cert)}
                  className="touch-scale"
                >
                  Learn More
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="touch-scale"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Visit Site
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center p-12 text-center">
            <Globe className="h-16 w-16 text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700">No certifications found</h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filter criteria to find more certifications.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalCertifications;
