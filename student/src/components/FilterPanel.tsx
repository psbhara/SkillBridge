
import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { FilterCriteria } from '@/services/apiService';
import { Search, SlidersHorizontal } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterCriteria;
  onFilterChange: (newFilters: FilterCriteria) => void;
  showFilterPanel: boolean;
  toggleFilterPanel: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ 
  filters, 
  onFilterChange,
  showFilterPanel,
  toggleFilterPanel
}) => {
  const handleStreamChange = (value: string) => {
    onFilterChange({ ...filters, stream: value === 'all' ? undefined : value });
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, course: e.target.value || undefined });
  };

  const handleMinPercentageChange = (value: number[]) => {
    onFilterChange({ ...filters, minEligibility: value[0] });
  };

  const handleFeeRangeChange = (value: number[]) => {
    onFilterChange({ 
      ...filters, 
      minFee: value[0] * 1000, 
      maxFee: value[1] * 1000 
    });
  };

  const handleRatingChange = (value: number[]) => {
    onFilterChange({ ...filters, minRating: value[0] });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, location: e.target.value || undefined });
  };

  const handleAcceptingOnlyChange = (checked: boolean) => {
    onFilterChange({ ...filters, acceptingOnly: checked || undefined });
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value || undefined });
  };

  return (
    <div className="mb-6">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search universities or courses"
              className="pl-9"
              value={filters.searchQuery || ''}
              onChange={handleSearchQueryChange}
            />
          </div>
          <button 
            onClick={toggleFilterPanel}
            className="flex items-center gap-2 px-3 py-2 ml-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {showFilterPanel && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pt-4 border-t">
            <div className="space-y-2">
              <Label htmlFor="stream">Stream</Label>
              <Select 
                onValueChange={handleStreamChange}
                value={filters.stream || 'all'}
              >
                <SelectTrigger id="stream">
                  <SelectValue placeholder="Select Stream" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">All Streams</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="Commerce">Commerce</SelectItem>
                    <SelectItem value="Arts">Arts</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Input
                id="course"
                placeholder="E.g. Computer Science"
                value={filters.course || ''}
                onChange={handleCourseChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="E.g. USA, India"
                value={filters.location || ''}
                onChange={handleLocationChange}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between mb-1">
                <Label htmlFor="min-percentage">Min. Percentage: {filters.minEligibility || 0}%</Label>
              </div>
              <Slider
                id="min-percentage"
                min={0}
                max={100}
                step={5}
                value={[filters.minEligibility || 0]}
                onValueChange={handleMinPercentageChange}
                className="py-2"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between mb-1">
                <Label htmlFor="fee-range">
                  Fee Range: ${(filters.minFee || 0)/1000}k - ${(filters.maxFee || 60000)/1000}k
                </Label>
              </div>
              <Slider
                id="fee-range"
                min={0}
                max={60}
                step={5}
                value={[(filters.minFee || 0)/1000, (filters.maxFee || 60000)/1000]}
                onValueChange={handleFeeRangeChange}
                className="py-2"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between mb-1">
                <Label htmlFor="rating">Min. Rating: {filters.minRating || 0}</Label>
              </div>
              <Slider
                id="rating"
                min={0}
                max={5}
                step={0.5}
                value={[filters.minRating || 0]}
                onValueChange={handleRatingChange}
                className="py-2"
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Switch 
                id="accepting" 
                checked={filters.acceptingOnly || false} 
                onCheckedChange={handleAcceptingOnlyChange}
              />
              <Label htmlFor="accepting">Show only accepting applications</Label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
