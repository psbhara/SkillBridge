
import { useState } from "react";
import { Search, MapPin, Filter, GraduationCap, School, Book, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock university data
const mockUniversities = [
  {
    id: "uni1",
    name: "Stanford University",
    location: "California, USA",
    courses: ["Computer Science", "Business", "Engineering"],
    ranking: 4,
    logo: "https://placehold.co/100x100?text=Stanford",
    acceptanceRate: "4%",
    tuitionFees: "$56,000/year",
    scholarshipsAvailable: true,
    deadlines: "January 15, 2026",
  },
  {
    id: "uni2",
    name: "MIT",
    location: "Massachusetts, USA",
    courses: ["Computer Science", "Physics", "Mathematics"],
    ranking: 1,
    logo: "https://placehold.co/100x100?text=MIT",
    acceptanceRate: "7%",
    tuitionFees: "$55,000/year",
    scholarshipsAvailable: true,
    deadlines: "January 10, 2026",
  },
  {
    id: "uni3",
    name: "Oxford University",
    location: "Oxford, UK",
    courses: ["Philosophy", "Physics", "Medicine"],
    ranking: 5,
    logo: "https://placehold.co/100x100?text=Oxford",
    acceptanceRate: "15%",
    tuitionFees: "£37,000/year",
    scholarshipsAvailable: true,
    deadlines: "October 15, 2025",
  },
  {
    id: "uni4",
    name: "National University of Singapore",
    location: "Singapore",
    courses: ["Computer Science", "Medicine", "Business"],
    ranking: 11,
    logo: "https://placehold.co/100x100?text=NUS",
    acceptanceRate: "10%",
    tuitionFees: "S$29,000/year",
    scholarshipsAvailable: true,
    deadlines: "March 31, 2026",
  },
  {
    id: "uni5",
    name: "University of Toronto",
    location: "Toronto, Canada",
    courses: ["Arts", "Science", "Engineering"],
    ranking: 18,
    logo: "https://placehold.co/100x100?text=UofT",
    acceptanceRate: "43%",
    tuitionFees: "CA$57,000/year",
    scholarshipsAvailable: true,
    deadlines: "January 20, 2026",
  },
];

const UniversitySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("universities");
  const [country, setCountry] = useState("");
  const [course, setCourse] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  // Filter universities based on search and filters
  const filteredUniversities = mockUniversities.filter(uni => {
    // Search term filter
    const matchesSearch = 
      searchTerm === "" || 
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.courses.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Country filter
    const matchesCountry = country === "" || uni.location.includes(country);
    
    // Course filter
    const matchesCourse = course === "" || uni.courses.includes(course);
    
    return matchesSearch && matchesCountry && matchesCourse;
  });

  const toggleFavorite = (uniId: string) => {
    if (favorites.includes(uniId)) {
      setFavorites(favorites.filter(id => id !== uniId));
    } else {
      setFavorites([...favorites, uniId]);
    }
  };

  const toggleCardExpand = (uniId: string) => {
    if (expandedCards.includes(uniId)) {
      setExpandedCards(expandedCards.filter(id => id !== uniId));
    } else {
      setExpandedCards([...expandedCards, uniId]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search universities, courses, locations..."
              className="pl-10 pr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Button 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
          className="md:w-auto w-full touch-scale"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border rounded-lg shadow-sm p-4 mb-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Country/Region</label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="All countries" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All countries</SelectItem>
                  <SelectItem value="USA">United States</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Singapore">Singapore</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Course/Major</label>
              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="All courses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All courses</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Medicine">Medicine</SelectItem>
                  <SelectItem value="Arts">Arts</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button 
                onClick={() => { setCountry(""); setCourse(""); }} 
                variant="outline" 
                size="sm" 
                className="touch-scale"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="universities" className="touch-scale">Universities</TabsTrigger>
          <TabsTrigger value="courses" className="touch-scale">Courses</TabsTrigger>
          <TabsTrigger value="scholarships" className="touch-scale">Scholarships</TabsTrigger>
        </TabsList>
        
        <TabsContent value="universities" className="space-y-4">
          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredUniversities.map((uni) => {
                const isExpanded = expandedCards.includes(uni.id);
                const isFavorite = favorites.includes(uni.id);
                
                return (
                  <div 
                    key={uni.id} 
                    className={`bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 card-hover ${
                      isFavorite ? 'border-yellow-300 ring-1 ring-yellow-200' : ''
                    }`}
                  >
                    <div className="p-5">
                      <div className="flex items-start">
                        {uni.logo ? (
                          <img 
                            src={uni.logo} 
                            alt={uni.name} 
                            className="h-16 w-16 rounded mr-4 object-contain"
                          />
                        ) : (
                          <div className="h-16 w-16 rounded bg-gray-200 flex items-center justify-center mr-4">
                            <GraduationCap className="h-8 w-8 text-gray-500" />
                          </div>
                        )}
                        
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold mb-1">{uni.name}</h3>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className={`hover:bg-transparent touch-scale ${isFavorite ? 'text-yellow-500' : 'text-gray-400'}`}
                              onClick={() => toggleFavorite(uni.id)}
                            >
                              {isFavorite ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                              )}
                            </Button>
                          </div>
                          
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{uni.location}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {uni.courses.map((course, idx) => (
                              <Badge key={idx} variant="secondary">{course}</Badge>
                            ))}
                          </div>
                          
                          <div className="flex flex-wrap gap-2 text-sm">
                            <div className="flex items-center">
                              <School className="h-4 w-4 mr-1 text-bridge-primary" />
                              <span>Ranking: #{uni.ranking}</span>
                            </div>
                            <div className="flex items-center">
                              <Book className="h-4 w-4 mr-1 text-bridge-secondary" />
                              <span>Acceptance: {uni.acceptanceRate}</span>
                            </div>
                          </div>
                          
                          {isExpanded && (
                            <div className="mt-4 pt-4 border-t animate-fade-in">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium mb-2">Tuition</h4>
                                  <p>{uni.tuitionFees}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Application Deadline</h4>
                                  <p>{uni.deadlines}</p>
                                </div>
                                <div className="md:col-span-2">
                                  <h4 className="font-medium mb-2">Scholarships</h4>
                                  <p>{uni.scholarshipsAvailable ? 'Available' : 'Not available'}</p>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex gap-3 mt-4">
                            <Button className="touch-scale button-pulse">Apply Now</Button>
                            <Button 
                              variant="outline" 
                              onClick={() => toggleCardExpand(uni.id)}
                              className="touch-scale"
                            >
                              {isExpanded ? 'Show Less' : 'View Details'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <GraduationCap className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No universities found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <Button onClick={() => { setSearchTerm(""); setCountry(""); setCourse(""); }}>
                Clear All Filters
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="courses" className="space-y-4">
          <div className="text-center py-12">
            <Book className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Course Search Coming Soon</h3>
            <p className="text-gray-500 mb-6">We're working on expanding our course database</p>
          </div>
        </TabsContent>
        
        <TabsContent value="scholarships" className="space-y-4">
          <div className="text-center py-12">
            <HelpCircle className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scholarship Search Coming Soon</h3>
            <p className="text-gray-500 mb-6">We're working on expanding our scholarship database</p>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="text-center mt-8">
        <Button className="touch-scale button-pulse">
          Explore More Universities <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default UniversitySearch;
