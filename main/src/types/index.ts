
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "student" | "employer" | "admin";
  skills?: string[];
  savedOpportunities?: string[];
  appliedOpportunities?: string[];
  bio?: string;
  location?: string;
  phone?: string;
  website?: string;
  university?: string;
  graduation?: string;
  company?: string;
  position?: string;
  profilePicture?: string;
  uploadedFiles?: FileUpload[];
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "internship" | "full-time" | "part-time" | "contract" | "project" | "volunteer" | "freelance";
  category: string;
  description: string;
  requirements: string[];
  salary?: string;
  skills: string[];
  postedDate: string;
  deadline?: string;
  companyLogo?: string;
  duration?: string;
  logo?: string;
  requiredSkills?: string[];
  remote?: boolean;
  matchPercentage?: number;
}

export interface FileUpload {
  id: string;
  filename: string;
  uploadDate: string;
  fileType: string;
  size: string;
}
