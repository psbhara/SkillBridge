
import React, { useState } from 'react';
import MarksheetUploader from '@/components/MarksheetUploader';
import InterestSelector from '@/components/InterestSelector';
import Universities from '@/components/Universities';
import ChatBot from '@/components/ChatBot';
import { MarksheetData } from '@/data/universities';
import { InterestData } from '@/components/InterestSelector';

const Index = () => {
  const [marksheetData, setMarksheetData] = useState<MarksheetData | undefined>(undefined);
  const [showInterestSelector, setShowInterestSelector] = useState(false);
  const [interestsSelected, setInterestsSelected] = useState(false);

  const handleMarksheetProcessed = (data: MarksheetData) => {
    setMarksheetData(data);
    setShowInterestSelector(true);
    setInterestsSelected(false);
  };

  const handleInterestsSelected = (interestData: InterestData) => {
    if (marksheetData) {
      setMarksheetData({
        ...marksheetData,
        interests: interestData.interests
      });
      setInterestsSelected(true);
      setShowInterestSelector(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-uni-navy text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">SkillBridge</h1>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-uni-navy mb-4">Find Your Perfect University Match with SkillBridge</h2>
            <p className="text-gray-600">
              Upload your marksheet, select your interests, and we'll help you find universities 
              that match your academic profile, stream, and preferences.
            </p>
          </div>
          
          {!showInterestSelector && !interestsSelected && (
            <MarksheetUploader onProcessComplete={handleMarksheetProcessed} />
          )}

          {showInterestSelector && marksheetData && (
            <InterestSelector 
              stream={marksheetData.stream} 
              onComplete={handleInterestsSelected} 
            />
          )}
        </section>
        
        <section>
          {interestsSelected && marksheetData && (
            <Universities marksheetData={marksheetData} />
          )}
        </section>
      </main>
      
      <footer className="bg-gray-100 py-6 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} SkillBridge - Find your university match</p>
        </div>
      </footer>
      
      {/* Add the ChatBot component */}
      <ChatBot />
    </div>
  );
};

export default Index;
