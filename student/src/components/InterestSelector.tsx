
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export interface InterestData {
  interests: string[];
}

interface InterestSelectorProps {
  stream: string;
  onComplete: (data: InterestData) => void;
}

const InterestSelector: React.FC<InterestSelectorProps> = ({ stream, onComplete }) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  
  // Define interests based on stream
  const getInterestsForStream = (stream: string): string[] => {
    switch(stream) {
      case 'Science':
        return [
          'Computer Science', 'Mechanical Engineering', 'Electrical Engineering', 
          'Civil Engineering', 'Chemical Engineering', 'Biotechnology',
          'Aerospace Engineering', 'Data Science', 'Artificial Intelligence'
        ];
      case 'Commerce':
        return [
          'Accounting', 'Business Administration', 'Finance', 
          'Marketing', 'Economics', 'Human Resources'
        ];
      case 'Arts':
        return [
          'Literature', 'Fine Arts', 'Psychology', 
          'Sociology', 'Political Science', 'History'
        ];
      default:
        return ['General Engineering', 'Computer Applications', 'Business Studies'];
    }
  };

  const streamInterests = getInterestsForStream(stream);

  const handleInterestChange = (interest: string) => {
    setSelectedInterests(current => 
      current.includes(interest) 
        ? current.filter(i => i !== interest)
        : [...current, interest]
    );
  };

  const handleSubmit = () => {
    if (selectedInterests.length === 0) {
      // Select at least one interest if none selected
      setSelectedInterests([streamInterests[0]]);
      onComplete({ interests: [streamInterests[0]] });
    } else {
      onComplete({ interests: selectedInterests });
    }
  };

  return (
    <Card className="max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle className="text-xl text-center">Select Your Interests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-gray-600 mb-4">
            Based on your {stream} stream, select areas you're interested in:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {streamInterests.map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <Checkbox 
                  id={`interest-${interest}`} 
                  checked={selectedInterests.includes(interest)}
                  onCheckedChange={() => handleInterestChange(interest)}
                />
                <Label htmlFor={`interest-${interest}`}>{interest}</Label>
              </div>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={handleSubmit} 
          className="w-full bg-uni-navy hover:bg-uni-navy/90"
        >
          Find Matching Universities
        </Button>
      </CardContent>
    </Card>
  );
};

export default InterestSelector;
