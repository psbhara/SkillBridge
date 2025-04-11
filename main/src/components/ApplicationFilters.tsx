
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  ChevronDown, 
  Filter, 
  X, 
  CalendarIcon, 
  SortAsc, 
  SortDesc,
  Briefcase, 
  MapPin, 
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface ApplicationFiltersProps {
  onFilter?: (filters: any) => void;
  onSort?: (sortKey: string, direction: "asc" | "desc") => void;
}

const ApplicationFilters = ({ onFilter, onSort }: ApplicationFiltersProps) => {
  const [filters, setFilters] = useState({
    status: [] as string[],
    types: [] as string[],
    location: [] as string[],
    dateRange: null as { from: Date; to?: Date } | null,
  });
  const [activeSortKey, setActiveSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const statusOptions = [
    { value: "applied", label: "Applied" },
    { value: "interview", label: "Interview" },
    { value: "rejected", label: "Rejected" },
    { value: "offered", label: "Offered" },
    { value: "accepted", label: "Accepted" },
  ];
  
  const typeOptions = [
    { value: "internship", label: "Internship" },
    { value: "fulltime", label: "Full Time" },
    { value: "parttime", label: "Part Time" },
    { value: "freelance", label: "Freelance" },
    { value: "contract", label: "Contract" },
  ];
  
  const locationOptions = [
    { value: "remote", label: "Remote" },
    { value: "onsite", label: "On-site" },
    { value: "hybrid", label: "Hybrid" },
  ];
  
  const sortOptions = [
    { key: "date", label: "Date Applied" },
    { key: "company", label: "Company Name" },
    { key: "status", label: "Status" },
    { key: "deadline", label: "Deadline" },
  ];

  const handleStatusChange = (value: string) => {
    setFilters(prev => {
      const newStatus = prev.status.includes(value)
        ? prev.status.filter(s => s !== value)
        : [...prev.status, value];
      
      updateActiveFilters("status", value, !prev.status.includes(value));
      
      return { ...prev, status: newStatus };
    });
  };
  
  const handleTypeChange = (value: string) => {
    setFilters(prev => {
      const newTypes = prev.types.includes(value)
        ? prev.types.filter(t => t !== value)
        : [...prev.types, value];
      
      updateActiveFilters("type", value, !prev.types.includes(value));
      
      return { ...prev, types: newTypes };
    });
  };
  
  const handleLocationChange = (value: string) => {
    setFilters(prev => {
      const newLocations = prev.location.includes(value)
        ? prev.location.filter(l => l !== value)
        : [...prev.location, value];
      
      updateActiveFilters("location", value, !prev.location.includes(value));
      
      return { ...prev, location: newLocations };
    });
  };
  
  const handleDateRangeChange = (range: { from: Date; to?: Date } | null) => {
    setFilters(prev => ({ ...prev, dateRange: range }));
    
    if (range?.from) {
      updateActiveFilters("date", "date-range", true);
    } else {
      setActiveFilters(prev => prev.filter(f => !f.startsWith("date:")));
    }
  };
  
  const updateActiveFilters = (type: string, value: string, add: boolean) => {
    setActiveFilters(prev => {
      const filterKey = `${type}:${value}`;
      if (add) {
        return [...prev, filterKey];
      } else {
        return prev.filter(f => f !== filterKey);
      }
    });
  };
  
  const removeFilter = (filter: string) => {
    const [type, value] = filter.split(":");
    
    if (type === "status") {
      handleStatusChange(value);
    } else if (type === "type") {
      handleTypeChange(value);
    } else if (type === "location") {
      handleLocationChange(value);
    } else if (type === "date") {
      setFilters(prev => ({ ...prev, dateRange: null }));
      setActiveFilters(prev => prev.filter(f => !f.startsWith("date:")));
    }
  };
  
  const clearAllFilters = () => {
    setFilters({
      status: [],
      types: [],
      location: [],
      dateRange: null,
    });
    setActiveFilters([]);
    setActiveSortKey(null);
    if (onFilter) onFilter({});
  };
  
  const applyFilters = () => {
    if (onFilter) onFilter(filters);
  };
  
  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    
    if (activeSortKey === key) {
      direction = sortDirection === "asc" ? "desc" : "asc";
      setSortDirection(direction);
    } else {
      setActiveSortKey(key);
      setSortDirection("asc");
      direction = "asc";
    }
    
    if (onSort) onSort(key, direction);
  };
  
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="touch-scale">
              <Filter className="h-4 w-4 mr-2" />
              Filter
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter Applications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs font-normal text-gray-500">
                Status
              </DropdownMenuLabel>
              {statusOptions.map(option => (
                <DropdownMenuItem key={option.value} onSelect={(e) => e.preventDefault()}>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={`status-${option.value}`}
                      checked={filters.status.includes(option.value)}
                      onCheckedChange={() => handleStatusChange(option.value)}
                    />
                    <label 
                      htmlFor={`status-${option.value}`}
                      className="text-sm cursor-pointer flex-grow"
                    >
                      {option.label}
                    </label>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs font-normal text-gray-500">
                Type
              </DropdownMenuLabel>
              {typeOptions.map(option => (
                <DropdownMenuItem key={option.value} onSelect={(e) => e.preventDefault()}>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={`type-${option.value}`}
                      checked={filters.types.includes(option.value)}
                      onCheckedChange={() => handleTypeChange(option.value)}
                    />
                    <label 
                      htmlFor={`type-${option.value}`}
                      className="text-sm cursor-pointer flex-grow"
                    >
                      {option.label}
                    </label>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs font-normal text-gray-500">
                Location
              </DropdownMenuLabel>
              {locationOptions.map(option => (
                <DropdownMenuItem key={option.value} onSelect={(e) => e.preventDefault()}>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={`location-${option.value}`}
                      checked={filters.location.includes(option.value)}
                      onCheckedChange={() => handleLocationChange(option.value)}
                    />
                    <label 
                      htmlFor={`location-${option.value}`}
                      className="text-sm cursor-pointer flex-grow"
                    >
                      {option.label}
                    </label>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator />
            
            <div className="p-2">
              <Button 
                size="sm" 
                className="w-full"
                onClick={applyFilters}
              >
                Apply Filters
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "touch-scale",
                filters.dateRange && "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <CalendarIcon className="h-4 w-4 mr-2" />
              {filters.dateRange?.from ? (
                filters.dateRange.to ? (
                  <>
                    {format(filters.dateRange.from, "LLL dd, y")} -{" "}
                    {format(filters.dateRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(filters.dateRange.from, "LLL dd, y")
                )
              ) : (
                "Date Range"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={new Date()}
              selected={filters.dateRange as any}
              onSelect={handleDateRangeChange}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="touch-scale">
              {sortDirection === "asc" ? (
                <SortAsc className="h-4 w-4 mr-2" />
              ) : (
                <SortDesc className="h-4 w-4 mr-2" />
              )}
              Sort
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Sort Applications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            
            {sortOptions.map(option => (
              <DropdownMenuItem 
                key={option.key} 
                onClick={() => handleSort(option.key)}
                className="flex justify-between"
              >
                {option.label}
                {activeSortKey === option.key && (
                  sortDirection === "asc" ? (
                    <SortAsc className="h-4 w-4" />
                  ) : (
                    <SortDesc className="h-4 w-4" />
                  )
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {activeFilters.map(filter => {
            const [type, value] = filter.split(":");
            let label = value;
            let icon = null;
            
            if (type === "status") {
              label = statusOptions.find(o => o.value === value)?.label || value;
            } else if (type === "type") {
              label = typeOptions.find(o => o.value === value)?.label || value;
              icon = <Briefcase className="h-3 w-3 mr-1" />;
            } else if (type === "location") {
              label = locationOptions.find(o => o.value === value)?.label || value;
              icon = <MapPin className="h-3 w-3 mr-1" />;
            } else if (type === "date") {
              label = "Date Range";
              icon = <Clock className="h-3 w-3 mr-1" />;
            }
            
            return (
              <Badge key={filter} variant="secondary" className="pl-2 touch-scale">
                {icon}
                {label}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-5 w-5 ml-1 p-0" 
                  onClick={() => removeFilter(filter)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            );
          })}
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 px-2 text-xs touch-scale" 
            onClick={clearAllFilters}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApplicationFilters;
