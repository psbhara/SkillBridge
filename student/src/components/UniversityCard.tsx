
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Star, Info, MapPin } from "lucide-react";
import { University } from '@/data/universities';

interface UniversityCardProps {
  university: University;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ university }) => {
  const isDeadlineSoon = () => {
    const deadline = new Date(university.admissionDeadline);
    const now = new Date();
    const diffTime = Math.abs(deadline.getTime() - now.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-uni-lightBlue rounded-md">
              <img 
                src={university.logoUrl} 
                alt={`${university.name} logo`} 
                className="w-8 h-8"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-uni-navy">{university.name}</h3>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin size={14} className="mr-1" />
                {university.location}
              </div>
            </div>
          </div>
          {university.acceptingApplications && (
            <Badge className={`${isDeadlineSoon() ? 'bg-amber-500' : 'bg-uni-darkGreen'}`}>
              {isDeadlineSoon() ? 'Limited Seats' : 'Accepting Applications'}
            </Badge>
          )}
          {!university.acceptingApplications && (
            <Badge variant="outline" className="text-uni-darkRed border-uni-darkRed">
              Applications Closed
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="grid grid-cols-2 gap-y-3 text-sm mb-4">
          <div>
            <p className="text-gray-500">Streams</p>
            <p className="font-medium">{university.streams.join(', ')}</p>
          </div>
          <div>
            <p className="text-gray-500">Min. Eligibility</p>
            <p className="font-medium">{university.minEligibility}%</p>
          </div>
          <div>
            <p className="text-gray-500">Fees Range</p>
            <p className="font-medium">{formatCurrency(university.fees.min)} - {formatCurrency(university.fees.max)}</p>
          </div>
          <div>
            <p className="text-gray-500">Campus Rating</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(university.campusRating) ? 'fill-uni-gold text-uni-gold' : 'text-gray-300'}
                />
              ))}
              <span className="ml-1 font-medium">{university.campusRating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        
        <div>
          <p className="text-gray-500 text-sm mb-1">Available Courses</p>
          <div className="flex flex-wrap gap-1">
            {university.courses.slice(0, 3).map((course, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100">
                {course}
              </Badge>
            ))}
            {university.courses.length > 3 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="secondary" className="bg-gray-100 cursor-help">
                      +{university.courses.length - 3} more
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{university.courses.slice(3).join(', ')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 border-t text-sm text-gray-500 justify-between">
        <div className="flex items-center">
          <p>Deadline: <span className="font-medium">{new Date(university.admissionDeadline).toLocaleDateString()}</span></p>
        </div>
        <div className="flex items-center">
          <p>Available seats: <span className="font-medium">{university.availableSeats}</span></p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UniversityCard;
