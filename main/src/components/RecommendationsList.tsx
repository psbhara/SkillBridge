
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Clock } from "lucide-react";
import { mockOpportunities } from "@/data/mockData";
import { Opportunity } from "@/types";
import { toast } from "sonner";
import OpportunityDetailsModal from "./OpportunityDetailsModal";

interface RecommendationsListProps {
  initialCount?: number;
  title?: string;
  description?: string;
}

const RecommendationsList = ({ 
  initialCount = 3,
  title = "Recommended Opportunities",
  description = "Based on your skills and interests"
}: RecommendationsListProps) => {
  const [displayCount, setDisplayCount] = useState(initialCount);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState<(Opportunity & { matchPercentage: number }) | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  // Add random match percentages to opportunities
  const recommendedOpportunities: (Opportunity & { matchPercentage: number })[] = 
    mockOpportunities.map(opp => ({
      ...opp,
      matchPercentage: Math.floor(Math.random() * 21) + 80 // 80-100%
    }));
  
  const toggleFavorite = (opportunityId: string) => {
    setFavorites(prev => 
      prev.includes(opportunityId) 
        ? prev.filter(id => id !== opportunityId) 
        : [...prev, opportunityId]
    );
    
    const action = favorites.includes(opportunityId) ? "removed from" : "added to";
    toast.success(`Opportunity ${action} favorites`);
  };
  
  const showMore = () => {
    setDisplayCount(prev => prev + 3);
  };

  const handleViewDetails = (opportunity: Opportunity & { matchPercentage: number }) => {
    setSelectedOpportunity(opportunity);
    setIsDetailsOpen(true);
  };

  return (
    <>
      <Card className="animate-fade-in">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              {description && <p className="text-sm text-gray-500">{description}</p>}
            </div>
          </div>
          
          <div className="space-y-4 divide-y">
            {recommendedOpportunities.slice(0, displayCount).map((opp, index) => (
              <div 
                key={opp.id} 
                className={`${index > 0 ? 'pt-4' : ''} flex items-start ${index >= initialCount ? 'slide-in-bottom' : ''}`}
              >
                {opp.logo ? (
                  <img 
                    src={opp.logo} 
                    alt={opp.company} 
                    className="h-12 w-12 rounded mr-4 object-contain"
                  />
                ) : (
                  <div className="h-12 w-12 rounded bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-bold">{opp.company.charAt(0)}</span>
                  </div>
                )}
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <div className="flex items-center">
                      <h4 className="font-medium">{opp.title}</h4>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(opp.id);
                        }}
                        className={`ml-2 touch-scale ${
                          favorites.includes(opp.id) 
                            ? "text-yellow-500" 
                            : "text-gray-300 hover:text-yellow-400"
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={favorites.includes(opp.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </button>
                    </div>
                    <Badge className="w-fit sm:ml-2 mt-1 sm:mt-0 bg-bridge-secondary">
                      {opp.matchPercentage}% Match
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-500">{opp.company}</p>
                  
                  <div className="flex items-center text-xs text-gray-500 my-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Deadline: {opp.deadline}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {opp.requiredSkills.slice(0, 3).map(skill => (
                      <span key={skill} className="skill-badge text-xs py-0.5 px-2 touch-scale">{skill}</span>
                    ))}
                    {opp.requiredSkills.length > 3 && (
                      <span className="text-xs text-gray-500">+{opp.requiredSkills.length - 3} more</span>
                    )}
                  </div>
                  
                  <div className="mt-2">
                    <Button 
                      variant="link" 
                      size="sm" 
                      className="px-0 h-7 touch-scale"
                      onClick={() => handleViewDetails(opp)}
                    >
                      View Details
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {displayCount < recommendedOpportunities.length && (
            <Button 
              variant="outline" 
              onClick={showMore}
              className="w-full mt-4 touch-scale"
            >
              Show More Recommendations
            </Button>
          )}
        </CardContent>
      </Card>
      
      <OpportunityDetailsModal 
        opportunity={selectedOpportunity} 
        isOpen={isDetailsOpen} 
        onOpenChange={setIsDetailsOpen} 
      />
    </>
  );
};

export default RecommendationsList;
