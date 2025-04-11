
import { useState, useEffect } from "react";
import { Search, MapPin, Clock, Filter, X, Star, StarOff, History, Save, Check, Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { mockOpportunities } from "@/data/mockData";
import { Opportunity } from "@/types";

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState<Opportunity[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    types: [] as string[],
    remote: false,
    skills: [] as string[]
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("match");
  const [favoriteOpportunities, setFavoriteOpportunities] = useState<string[]>([]);
  const [appliedOpportunities, setAppliedOpportunities] = useState<string[]>([]);
  const [savedFilters, setSavedFilters] = useState<Array<{name: string, filters: any}>>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with slight delay
    const fetchOpportunities = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      const data = [...mockOpportunities];
      
      // Add random match percentages
      const enhancedData = data.map(opportunity => ({
        ...opportunity,
        matchPercentage: Math.floor(Math.random() * 41) + 60 // 60% to 100%
      }));
      
      setOpportunities(enhancedData);
      setFilteredOpportunities(enhancedData);
      setIsLoading(false);
    };
    
    // Load user preferences from localStorage
    const loadUserPreferences = () => {
      const storedFavorites = localStorage.getItem('favoriteOpportunities');
      const storedApplied = localStorage.getItem('appliedOpportunities');
      const storedFilters = localStorage.getItem('savedFilters');
      const storedRecentSearches = localStorage.getItem('recentSearches');
      
      if (storedFavorites) setFavoriteOpportunities(JSON.parse(storedFavorites));
      if (storedApplied) setAppliedOpportunities(JSON.parse(storedApplied));
      if (storedFilters) setSavedFilters(JSON.parse(storedFilters));
      if (storedRecentSearches) setRecentSearches(JSON.parse(storedRecentSearches));
    };
    
    fetchOpportunities();
    loadUserPreferences();
  }, []);

  // Extract all unique skills from opportunities
  const allSkills = [...new Set(
    opportunities.flatMap(opp => opp.requiredSkills)
  )];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Add to recent searches if not empty and not already in list
    if (term.trim() && e.type === 'change' && !recentSearches.includes(term)) {
      const updatedSearches = [term, ...recentSearches.slice(0, 4)];
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    }
  };

  const handleTypeFilter = (type: string) => {
    setFilters(prev => {
      const types = prev.types.includes(type)
        ? prev.types.filter(t => t !== type)
        : [...prev.types, type];
      return { ...prev, types };
    });
  };

  const handleRemoteFilter = (checked: boolean) => {
    setFilters(prev => ({ ...prev, remote: checked }));
  };

  const handleSkillFilter = (skill: string) => {
    setFilters(prev => {
      const skills = prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills };
    });
  };

  const clearFilters = () => {
    setFilters({
      types: [],
      remote: false,
      skills: []
    });
    setSearchTerm("");
  };

  const saveCurrentFilters = () => {
    // Generate a name based on active filters
    let name = "Saved Filter";
    if (filters.types.length > 0) {
      name = filters.types.join(", ");
    } else if (filters.skills.length > 0) {
      name = `${filters.skills[0]} ${filters.skills.length > 1 ? `+${filters.skills.length - 1} more` : ''}`;
    }
    
    if (searchTerm) {
      name = `"${searchTerm}" - ${name}`;
    }
    
    const newFilter = {
      name,
      filters: { ...filters, searchTerm }
    };
    
    const updatedFilters = [...savedFilters, newFilter];
    setSavedFilters(updatedFilters);
    localStorage.setItem('savedFilters', JSON.stringify(updatedFilters));
    
    toast.success("Filter saved successfully!");
  };

  const applyFilter = (savedFilter: {name: string, filters: any}) => {
    setFilters(savedFilter.filters);
    if (savedFilter.filters.searchTerm) {
      setSearchTerm(savedFilter.filters.searchTerm);
    }
    
    toast.success(`Applied filter: ${savedFilter.name}`);
  };

  const deleteFilter = (index: number) => {
    const updatedFilters = savedFilters.filter((_, i) => i !== index);
    setSavedFilters(updatedFilters);
    localStorage.setItem('savedFilters', JSON.stringify(updatedFilters));
    
    toast.success("Filter removed");
  };

  const toggleFavorite = (opportunityId: string) => {
    const updatedFavorites = favoriteOpportunities.includes(opportunityId)
      ? favoriteOpportunities.filter(id => id !== opportunityId)
      : [...favoriteOpportunities, opportunityId];
    
    setFavoriteOpportunities(updatedFavorites);
    localStorage.setItem('favoriteOpportunities', JSON.stringify(updatedFavorites));
    
    toast.success(
      favoriteOpportunities.includes(opportunityId)
        ? "Removed from favorites"
        : "Added to favorites"
    );
  };

  const markAsApplied = (opportunityId: string) => {
    if (appliedOpportunities.includes(opportunityId)) {
      return;
    }
    
    const updatedApplied = [...appliedOpportunities, opportunityId];
    setAppliedOpportunities(updatedApplied);
    localStorage.setItem('appliedOpportunities', JSON.stringify(updatedApplied));
    
    toast.success("Marked as applied!");
  };

  const useRecentSearch = (term: string) => {
    setSearchTerm(term);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  useEffect(() => {
    let results = opportunities;
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(opp => 
        opp.title.toLowerCase().includes(term) || 
        opp.company.toLowerCase().includes(term) ||
        opp.description.toLowerCase().includes(term) ||
        opp.requiredSkills.some(skill => skill.toLowerCase().includes(term))
      );
    }
    
    // Apply type filter
    if (filters.types.length > 0) {
      results = results.filter(opp => filters.types.includes(opp.type));
    }
    
    // Apply remote filter
    if (filters.remote) {
      results = results.filter(opp => opp.remote);
    }
    
    // Apply skills filter
    if (filters.skills.length > 0) {
      results = results.filter(opp => 
        filters.skills.some(skill => opp.requiredSkills.includes(skill))
      );
    }
    
    // Apply sorting
    results = [...results].sort((a, b) => {
      if (sortOption === "match") {
        return (b.matchPercentage || 0) - (a.matchPercentage || 0);
      } else if (sortOption === "recent") {
        // Simulate sorting by date
        return Math.random() - 0.5;  // For demo purposes
      } else if (sortOption === "deadline") {
        // Simulate sorting by deadline
        const dateA = new Date(a.deadline);
        const dateB = new Date(b.deadline);
        return dateA.getTime() - dateB.getTime();
      } else if (sortOption === "favorites") {
        // Sort favorites first
        const aIsFavorite = favoriteOpportunities.includes(a.id);
        const bIsFavorite = favoriteOpportunities.includes(b.id);
        
        if (aIsFavorite && !bIsFavorite) return -1;
        if (!aIsFavorite && bIsFavorite) return 1;
        return 0;
      }
      return 0;
    });
    
    setFilteredOpportunities(results);
  }, [searchTerm, filters, opportunities, sortOption, favoriteOpportunities]);

  const highlightSkills = (text: string, skills: string[]) => {
    if (!skills.length) return text;
    
    // Only take first two lines for description preview
    const lines = text.split('. ');
    const shortText = lines.slice(0, 2).join('. ') + (lines.length > 2 ? '...' : '');
    
    return shortText;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Find Opportunities</h1>
      <p className="text-gray-600 mb-8">Discover internships, projects, and volunteer positions matched to your skills</p>
      
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for opportunities..."
              className="pl-10 pr-4"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          {/* Recent Searches Dropdown */}
          {recentSearches.length > 0 && searchTerm === "" && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-md z-10 py-2">
              <div className="flex items-center justify-between px-3 py-1 border-b">
                <p className="text-sm text-gray-500 font-medium">Recent Searches</p>
                <Button variant="ghost" size="sm" className="h-6 text-xs" onClick={clearRecentSearches}>
                  Clear
                </Button>
              </div>
              <div className="max-h-48 overflow-y-auto">
                {recentSearches.map((term, i) => (
                  <button
                    key={i}
                    className="w-full text-left px-3 py-2 hover:bg-gray-100 text-sm flex items-center gap-2"
                    onClick={() => useRecentSearch(term)}
                  >
                    <History className="h-3 w-3 text-gray-400" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <Button 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
          className="md:w-auto w-full"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {(filters.types.length > 0 || filters.remote || filters.skills.length > 0) && (
            <Badge className="ml-2 bg-bridge-primary" variant="default">
              {filters.types.length + (filters.remote ? 1 : 0) + filters.skills.length}
            </Badge>
          )}
        </Button>
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="md:w-[180px] w-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="match">Best Match</SelectItem>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="deadline">Deadline</SelectItem>
            <SelectItem value="favorites">Favorites</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border rounded-lg shadow-sm p-4 mb-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Filters</h3>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={saveCurrentFilters} 
                className="text-sm flex items-center gap-1"
                disabled={filters.types.length === 0 && !filters.remote && filters.skills.length === 0 && !searchTerm}
              >
                <Save size={14} />
                Save Filter
              </Button>
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
                Clear All
              </Button>
            </div>
          </div>
          
          {/* Saved Filters */}
          {savedFilters.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Saved Filters</h4>
              <div className="flex flex-wrap gap-2">
                {savedFilters.map((filter, index) => (
                  <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                    <button 
                      onClick={() => applyFilter(filter)}
                      className="mr-1 hover:text-bridge-primary"
                    >
                      {filter.name}
                    </button>
                    <button 
                      onClick={() => deleteFilter(index)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Opportunity Type */}
            <div>
              <h4 className="font-medium mb-2">Opportunity Type</h4>
              <div className="space-y-2">
                {['internship', 'freelance', 'volunteer', 'project'].map(type => (
                  <div key={type} className="flex items-center">
                    <Checkbox 
                      id={`type-${type}`} 
                      checked={filters.types.includes(type)}
                      onCheckedChange={() => handleTypeFilter(type)}
                    />
                    <label htmlFor={`type-${type}`} className="ml-2 text-sm capitalize">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Remote Options */}
            <div>
              <h4 className="font-medium mb-2">Location</h4>
              <div className="flex items-center">
                <Checkbox 
                  id="remote" 
                  checked={filters.remote}
                  onCheckedChange={(checked) => handleRemoteFilter(!!checked)}
                />
                <label htmlFor="remote" className="ml-2 text-sm">
                  Remote only
                </label>
              </div>
            </div>
            
            {/* Skills */}
            <div>
              <h4 className="font-medium mb-2">Skills</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {allSkills.map(skill => (
                  <div key={skill} className="flex items-center">
                    <Checkbox 
                      id={`skill-${skill}`} 
                      checked={filters.skills.includes(skill)}
                      onCheckedChange={() => handleSkillFilter(skill)}
                    />
                    <label htmlFor={`skill-${skill}`} className="ml-2 text-sm">
                      {skill}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Results count */}
      <div className="mb-6 text-sm text-gray-500">
        Showing {filteredOpportunities.length} of {opportunities.length} opportunities
      </div>
      
      {/* Loading state */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-12 h-12 border-4 border-t-bridge-primary border-gray-200 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500">Loading opportunities...</p>
        </div>
      )}
      
      {/* Opportunities List */}
      {!isLoading && (
        <div className="space-y-6">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opportunity) => {
              const isFavorite = favoriteOpportunities.includes(opportunity.id);
              const isApplied = appliedOpportunities.includes(opportunity.id);
              
              return (
                <div 
                  key={opportunity.id} 
                  className={`bg-white rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 ${
                    isFavorite ? 'border-yellow-300 ring-1 ring-yellow-200' : ''
                  } ${isApplied ? 'border-green-300 ring-1 ring-green-200' : ''}`}
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      {opportunity.logo ? (
                        <img 
                          src={opportunity.logo} 
                          alt={opportunity.company} 
                          className="h-12 w-12 rounded mr-4 object-contain"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center mr-4">
                          <span className="text-gray-500 font-bold">{opportunity.company.charAt(0)}</span>
                        </div>
                      )}
                      
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <h3 className="text-xl font-semibold mb-1 flex items-center">
                            {opportunity.title}
                            <button 
                              onClick={() => toggleFavorite(opportunity.id)}
                              className={`ml-2 focus:outline-none transition-colors ${
                                isFavorite ? 'text-yellow-400 hover:text-yellow-500' : 'text-gray-300 hover:text-yellow-400'
                              }`}
                            >
                              {isFavorite ? <Star size={18} /> : <StarOff size={18} />}
                            </button>
                          </h3>
                          {opportunity.matchPercentage && (
                            <Badge className={`sm:ml-2 mb-2 sm:mb-0 w-fit ${
                              opportunity.matchPercentage >= 80 
                                ? 'bg-green-500' 
                                : opportunity.matchPercentage >= 70 
                                ? 'bg-bridge-secondary' 
                                : 'bg-gray-500'
                            }`}>
                              {opportunity.matchPercentage}% Match
                            </Badge>
                          )}
                        </div>
                        
                        <div className="text-gray-600 mb-2">{opportunity.company}</div>
                        
                        <div className="flex flex-wrap items-center text-sm text-gray-500 gap-3 mb-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{opportunity.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Deadline: {opportunity.deadline}</span>
                          </div>
                          <Badge variant="secondary" className="capitalize">
                            {opportunity.type}
                          </Badge>
                          {opportunity.remote && (
                            <Badge variant="outline">Remote</Badge>
                          )}
                          {isApplied && (
                            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                              <Check size={12} className="mr-1" /> Applied
                            </Badge>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {highlightSkills(opportunity.description, filters.skills)}
                        </p>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {opportunity.requiredSkills.map(skill => (
                              <span 
                                key={skill} 
                                className={`skill-badge ${filters.skills.includes(skill) ? 'bg-bridge-primary/10 text-bridge-primary border-bridge-primary/30' : ''}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button>View Details</Button>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  onClick={() => markAsApplied(opportunity.id)}
                                  disabled={isApplied}
                                  className={isApplied ? 'bg-green-50 text-green-600 border-green-200' : ''}
                                >
                                  {isApplied ? (
                                    <>
                                      <Check size={16} className="mr-2" /> Applied
                                    </>
                                  ) : (
                                    'Apply Now'
                                  )}
                                </Button>
                              </TooltipTrigger>
                              {isApplied && (
                                <TooltipContent>
                                  <p>You've already applied to this opportunity</p>
                                </TooltipContent>
                              )}
                            </Tooltip>
                          </TooltipProvider>
                          
                          <Button variant="ghost" size="icon" className="text-gray-500 hover:text-bridge-primary">
                            <Bookmark size={18} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <div className="mb-4 text-gray-400">
                <X className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No opportunities found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Opportunities;
