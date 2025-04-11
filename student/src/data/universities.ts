
// Mock university data with fields based on Kaggle engineering college dataset
export interface University {
  id: string;
  name: string;
  streams: ('Science' | 'Commerce' | 'Arts')[];
  courses: string[];
  minEligibility: number; // minimum percentage required
  fees: {
    min: number;
    max: number;
  };
  admissionDeadline: string; // ISO date string
  campusRating: number; // 1-5
  location: string;
  acceptingApplications: boolean;
  availableSeats: number;
  logoUrl: string;
  nirf_rank?: number;
  established_year?: number;
  campus_size_acres?: number;
  specialization?: string[];
}

export interface MarksheetData {
  stream: 'Science' | 'Commerce' | 'Arts';
  coreSubjects: string[];
  percentage: number;
  interests?: string[];
}

// Import university data (sample from Kaggle dataset)
export const universities: University[] = [
  {
    id: '1',
    name: 'Indian Institute of Technology Bombay',
    streams: ['Science'],
    courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'],
    minEligibility: 85,
    fees: {
      min: 100000,
      max: 200000,
    },
    admissionDeadline: '2025-05-30',
    campusRating: 4.9,
    location: 'Mumbai, Maharashtra',
    acceptingApplications: true,
    availableSeats: 500,
    logoUrl: '/placeholder.svg',
    nirf_rank: 2,
    established_year: 1958,
    campus_size_acres: 550,
    specialization: ['Computer Science', 'Electronics', 'Aerospace Engineering']
  },
  {
    id: '2',
    name: 'National Institute of Technology Tiruchirappalli',
    streams: ['Science'],
    courses: ['Computer Science', 'Electronics Engineering', 'Mechanical Engineering'],
    minEligibility: 80,
    fees: {
      min: 80000,
      max: 130000,
    },
    admissionDeadline: '2025-06-15',
    campusRating: 4.7,
    location: 'Tiruchirappalli, Tamil Nadu',
    acceptingApplications: true,
    availableSeats: 600,
    logoUrl: '/placeholder.svg',
    nirf_rank: 9,
    established_year: 1964,
    campus_size_acres: 800
  },
  {
    id: '3',
    name: 'Birla Institute of Technology & Science Pilani',
    streams: ['Science'],
    courses: ['Computer Science', 'Electronics Engineering', 'Chemical Engineering'],
    minEligibility: 85,
    fees: {
      min: 150000,
      max: 250000,
    },
    admissionDeadline: '2025-05-15',
    campusRating: 4.6,
    location: 'Pilani, Rajasthan',
    acceptingApplications: true,
    availableSeats: 700,
    logoUrl: '/placeholder.svg',
    nirf_rank: 28,
    established_year: 1964,
    specialization: ['Computer Science', 'Electronics']
  },
  {
    id: '4',
    name: 'Indian Institute of Technology Delhi',
    streams: ['Science'],
    courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering'],
    minEligibility: 90,
    fees: {
      min: 100000,
      max: 200000,
    },
    admissionDeadline: '2025-05-30',
    campusRating: 4.8,
    location: 'New Delhi, Delhi',
    acceptingApplications: true,
    availableSeats: 450,
    logoUrl: '/placeholder.svg',
    nirf_rank: 3,
    established_year: 1961,
    campus_size_acres: 325
  },
  {
    id: '5',
    name: 'Shri Ram College of Commerce',
    streams: ['Commerce'],
    courses: ['Accounting', 'Economics', 'Business Studies', 'Finance'],
    minEligibility: 96,
    fees: {
      min: 70000,
      max: 90000,
    },
    admissionDeadline: '2025-06-10',
    campusRating: 4.5,
    location: 'Delhi, India',
    acceptingApplications: true,
    availableSeats: 300,
    logoUrl: '/placeholder.svg',
  },
  {
    id: '6',
    name: 'St. Stephen\'s College',
    streams: ['Arts', 'Science'],
    courses: ['English Literature', 'Physics', 'Chemistry', 'History'],
    minEligibility: 95,
    fees: {
      min: 60000,
      max: 85000,
    },
    admissionDeadline: '2025-06-15',
    campusRating: 4.6,
    location: 'Delhi, India',
    acceptingApplications: false,
    availableSeats: 250,
    logoUrl: '/placeholder.svg',
    established_year: 1881
  },
  {
    id: '7',
    name: 'Vellore Institute of Technology',
    streams: ['Science'],
    courses: ['Computer Science', 'Biotechnology', 'Mechanical Engineering', 'Electronics'],
    minEligibility: 75,
    fees: {
      min: 150000,
      max: 350000,
    },
    admissionDeadline: '2025-04-30',
    campusRating: 4.4,
    location: 'Vellore, Tamil Nadu',
    acceptingApplications: true,
    availableSeats: 1200,
    logoUrl: '/placeholder.svg',
    nirf_rank: 13,
    established_year: 1984,
    campus_size_acres: 625
  },
  {
    id: '8',
    name: 'Loyola College',
    streams: ['Arts', 'Science', 'Commerce'],
    courses: ['Economics', 'Computer Science', 'Psychology', 'Commerce'],
    minEligibility: 80,
    fees: {
      min: 50000,
      max: 95000,
    },
    admissionDeadline: '2025-06-10',
    campusRating: 4.3,
    location: 'Chennai, Tamil Nadu',
    acceptingApplications: true,
    availableSeats: 900,
    logoUrl: '/placeholder.svg',
    established_year: 1925
  },
  {
    id: '9',
    name: 'PSG College of Technology',
    streams: ['Science'],
    courses: ['Electronics and Communication', 'Computer Science', 'Mechanical Engineering'],
    minEligibility: 78,
    fees: {
      min: 80000,
      max: 150000,
    },
    admissionDeadline: '2025-05-25',
    campusRating: 4.2,
    location: 'Coimbatore, Tamil Nadu',
    acceptingApplications: true,
    availableSeats: 800,
    logoUrl: '/placeholder.svg',
    nirf_rank: 37,
    established_year: 1951
  },
  {
    id: '10',
    name: 'Indian Statistical Institute',
    streams: ['Science'],
    courses: ['Statistics', 'Mathematics', 'Data Science', 'Computer Science'],
    minEligibility: 88,
    fees: {
      min: 60000,
      max: 110000,
    },
    admissionDeadline: '2025-05-10',
    campusRating: 4.7,
    location: 'Kolkata, West Bengal',
    acceptingApplications: true,
    availableSeats: 200,
    logoUrl: '/placeholder.svg',
    established_year: 1931,
    specialization: ['Statistics', 'Data Science', 'Machine Learning']
  },
  {
    id: '11',
    name: 'Lady Shri Ram College for Women',
    streams: ['Arts', 'Commerce'],
    courses: ['Psychology', 'Economics', 'English Literature', 'Journalism'],
    minEligibility: 94,
    fees: {
      min: 55000,
      max: 85000,
    },
    admissionDeadline: '2025-06-15',
    campusRating: 4.6,
    location: 'Delhi, India',
    acceptingApplications: true,
    availableSeats: 400,
    logoUrl: '/placeholder.svg',
    established_year: 1956
  },
  {
    id: '12',
    name: 'IIT Madras',
    streams: ['Science'],
    courses: ['Aerospace Engineering', 'Computer Science', 'Data Science', 'Electrical Engineering'],
    minEligibility: 90,
    fees: {
      min: 100000,
      max: 200000,
    },
    admissionDeadline: '2025-05-15',
    campusRating: 4.9,
    location: 'Chennai, Tamil Nadu',
    acceptingApplications: true,
    availableSeats: 500,
    logoUrl: '/placeholder.svg',
    nirf_rank: 1,
    established_year: 1959,
    campus_size_acres: 630,
    specialization: ['Aerospace Engineering', 'Artificial Intelligence', 'Robotics']
  },
];

export function getMatchingUniversities(marksheetData: MarksheetData): University[] {
  // Filter universities based on stream, percentage, and interests
  return universities.filter(university => {
    // Stream match
    const streamMatch = university.streams.includes(marksheetData.stream);
    
    // Percentage match
    const percentageMatch = marksheetData.percentage >= university.minEligibility;

    // Interest match (if interests are provided)
    let interestMatch = true;
    if (marksheetData.interests && marksheetData.interests.length > 0) {
      interestMatch = university.courses.some(course => 
        marksheetData.interests!.some(interest => 
          course.toLowerCase().includes(interest.toLowerCase())
        )
      );
    }
    
    return streamMatch && percentageMatch && interestMatch;
  });
}
