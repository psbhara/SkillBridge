
import { MarksheetData, getMatchingUniversities, universities, University } from '../data/universities';

// Simulates backend processing of uploaded marksheet
export const processMarksheet = async (file: File): Promise<MarksheetData> => {
  // In a real implementation, this would send the file to a backend for processing
  // For demo purposes, we're returning mock data
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data extraction from PDF/image
  const mockData: MarksheetData = {
    stream: 'Science',
    coreSubjects: ['Mathematics', 'Physics', 'Chemistry'],
    percentage: 87.5
  };
  
  return mockData;
};

// Get university recommendations based on marksheet data and interests
export const getUniversityRecommendations = async (marksheetData: MarksheetData): Promise<University[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return getMatchingUniversities(marksheetData);
};

// Filter universities based on criteria
export interface FilterCriteria {
  stream?: string;
  course?: string;
  minEligibility?: number;
  minFee?: number;
  maxFee?: number;
  minRating?: number;
  location?: string;
  acceptingOnly?: boolean;
  searchQuery?: string;
  interests?: string[];
}

export const filterUniversities = (criteria: FilterCriteria): University[] => {
  return universities.filter(uni => {
    // Filter by stream
    if (criteria.stream && !uni.streams.includes(criteria.stream as any)) {
      return false;
    }
    
    // Filter by course
    if (criteria.course && !uni.courses.some(course => 
      course.toLowerCase().includes(criteria.course!.toLowerCase()))) {
      return false;
    }
    
    // Filter by interests
    if (criteria.interests && criteria.interests.length > 0 && 
        !uni.courses.some(course => 
          criteria.interests!.some(interest => 
            course.toLowerCase().includes(interest.toLowerCase())
          )
        )) {
      return false;
    }
    
    // Filter by minimum eligibility
    if (criteria.minEligibility !== undefined && uni.minEligibility < criteria.minEligibility) {
      return false;
    }
    
    // Filter by fee range
    if (criteria.minFee !== undefined && uni.fees.max < criteria.minFee) {
      return false;
    }
    if (criteria.maxFee !== undefined && uni.fees.min > criteria.maxFee) {
      return false;
    }
    
    // Filter by rating
    if (criteria.minRating !== undefined && uni.campusRating < criteria.minRating) {
      return false;
    }
    
    // Filter by location
    if (criteria.location && !uni.location.toLowerCase().includes(criteria.location.toLowerCase())) {
      return false;
    }
    
    // Filter by accepting applications
    if (criteria.acceptingOnly && !uni.acceptingApplications) {
      return false;
    }
    
    // Filter by search query (name or course)
    if (criteria.searchQuery) {
      const query = criteria.searchQuery.toLowerCase();
      const nameMatch = uni.name.toLowerCase().includes(query);
      const courseMatch = uni.courses.some(course => course.toLowerCase().includes(query));
      if (!nameMatch && !courseMatch) {
        return false;
      }
    }
    
    return true;
  });
};
