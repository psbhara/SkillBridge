
import { User, Opportunity, FileUpload } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    skills: ['React', 'JavaScript', 'UI/UX Design', 'Figma'],
    profilePicture: 'https://i.pravatar.cc/150?img=11',
    uploadedFiles: [
      {
        id: 'file1',
        filename: 'resume_alex.pdf',
        uploadDate: '2023-04-05',
        fileType: 'application/pdf',
        size: '1.2 MB'
      }
    ]
  },
  {
    id: '2',
    name: 'Sam Taylor',
    email: 'sam@example.com',
    skills: ['Python', 'Data Analysis', 'Machine Learning', 'SQL'],
    profilePicture: 'https://i.pravatar.cc/150?img=5',
    uploadedFiles: []
  }
];

export const mockOpportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp',
    location: 'New York, NY',
    description: 'Join our team to develop cutting-edge web applications using React. Work directly with senior developers on real client projects.',
    requiredSkills: ['React', 'JavaScript', 'HTML', 'CSS'],
    type: 'internship',
    deadline: '2023-05-30',
    logo: 'https://logo.clearbit.com/google.com',
    remote: true
  },
  {
    id: '2',
    title: 'UI/UX Design Project',
    company: 'DesignHub',
    location: 'Remote',
    description: 'Help redesign our mobile application interface. Looking for fresh perspectives and modern design sensibilities.',
    requiredSkills: ['UI/UX Design', 'Figma', 'Mobile Design'],
    type: 'project',
    deadline: '2023-06-15',
    logo: 'https://logo.clearbit.com/figma.com',
    remote: true
  },
  {
    id: '3',
    title: 'Data Science Volunteer',
    company: 'EcoTech Nonprofit',
    location: 'Boston, MA',
    description: 'Analyze environmental data to help our conservation efforts. Great opportunity to apply data science skills for a good cause.',
    requiredSkills: ['Python', 'Data Analysis', 'Statistics'],
    type: 'volunteer',
    deadline: '2023-07-01',
    logo: 'https://logo.clearbit.com/mongodb.com',
    remote: false
  },
  {
    id: '4',
    title: 'Mobile App Developer',
    company: 'StartupX',
    location: 'San Francisco, CA',
    description: 'Develop a new mobile app from scratch. This is a short-term freelance opportunity with possibility for future work.',
    requiredSkills: ['React Native', 'JavaScript', 'Mobile Development'],
    type: 'freelance',
    deadline: '2023-05-15',
    logo: 'https://logo.clearbit.com/microsoft.com',
    remote: true
  },
  {
    id: '5',
    title: 'Backend Developer Intern',
    company: 'CloudSystems',
    location: 'Austin, TX',
    description: 'Build and optimize backend services for our cloud platform. Learn about scalable architecture and database design.',
    requiredSkills: ['Node.js', 'Express', 'MongoDB', 'API Design'],
    type: 'internship',
    deadline: '2023-06-30',
    logo: 'https://logo.clearbit.com/aws.amazon.com',
    remote: false
  }
];

export const mockFiles: FileUpload[] = [
  {
    id: 'file1',
    filename: 'resume_alex.pdf',
    uploadDate: '2023-04-05',
    fileType: 'application/pdf',
    size: '1.2 MB'
  },
  {
    id: 'file2',
    filename: 'portfolio_project.zip',
    uploadDate: '2023-03-22',
    fileType: 'application/zip',
    size: '5.7 MB'
  },
  {
    id: 'file3',
    filename: 'cover_letter.docx',
    uploadDate: '2023-04-10',
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: '0.5 MB'
  }
];
