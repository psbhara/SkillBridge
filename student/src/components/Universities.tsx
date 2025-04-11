
import React, { useState, useEffect } from 'react';
import UniversityCard from './UniversityCard';
import FilterPanel from './FilterPanel';
import { University } from '@/data/universities';
import { FilterCriteria, filterUniversities } from '@/services/apiService';
import { useIsMobile } from '@/hooks/use-mobile';
import { MarksheetData } from '@/data/universities';

interface UniversitiesProps {
  marksheetData?: MarksheetData;
}

const Universities: React.FC<UniversitiesProps> = ({ marksheetData }) => {
  const isMobile = useIsMobile();
  const [universities, setUniversities] = useState<University[]>([]);
  const [showFilterPanel, setShowFilterPanel] = useState(!isMobile);
  const [filters, setFilters] = useState<FilterCriteria>({
    acceptingOnly: false,
    minEligibility: 0,
    minFee: 0,
    maxFee: 60000,
    minRating: 0
  });

  // Initialize filters based on marksheet data if provided
  useEffect(() => {
    if (marksheetData) {
      setFilters(prev => ({
        ...prev,
        stream: marksheetData.stream,
        minEligibility: marksheetData.percentage - 5, // a bit lower to show more results
        interests: marksheetData.interests
      }));
    }
  }, [marksheetData]);

  // Apply filters whenever they change
  useEffect(() => {
    const filteredResults = filterUniversities(filters);
    setUniversities(filteredResults);
  }, [filters]);

  const handleFilterChange = (newFilters: FilterCriteria) => {
    setFilters(newFilters);
  };

  const toggleFilterPanel = () => {
    setShowFilterPanel(prev => !prev);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-uni-navy mb-2">University Explorer</h1>
        <p className="text-gray-600">
          {universities.length} universities found 
          {marksheetData ? ` matching your ${marksheetData.stream} stream with ${marksheetData.percentage}% marks` : ''}
          {marksheetData?.interests?.length ? ` and interests in ${marksheetData.interests.join(', ')}` : ''}
        </p>
      </div>

      <FilterPanel 
        filters={filters} 
        onFilterChange={handleFilterChange}
        showFilterPanel={showFilterPanel}
        toggleFilterPanel={toggleFilterPanel}
      />

      {universities.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium text-gray-700">No universities found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters to see more results</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((university) => (
            <UniversityCard key={university.id} university={university} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Universities;
