
import { useState } from "react";
import { CheckCircle, XCircle, BarChart, FileText, ExternalLink } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResumeATSCheckerProps {
  fileName: string;
}

const ResumeATSChecker = ({ fileName }: ResumeATSCheckerProps) => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock ATS check results
  const mockResults = {
    score: 76,
    keywordMatch: 68,
    formatScore: 90,
    readabilityScore: 82,
    recommendations: [
      { type: "success", text: "Good use of action verbs in experience section" },
      { type: "success", text: "Contact information is clearly presented" },
      { type: "warning", text: "Consider adding more industry-specific keywords" },
      { type: "warning", text: "Add measurable achievements with percentages or numbers" },
      { type: "error", text: "Complex formatting may not parse correctly in ATS" },
    ],
    missingKeywords: ["project management", "agile methodology", "cross-functional"],
    formatIssues: ["Tables may not parse correctly", "Header/footer content might be missed"],
    keywordMatches: [
      { keyword: "React", count: 3, industry: "high" },
      { keyword: "JavaScript", count: 4, industry: "high" },
      { keyword: "TypeScript", count: 2, industry: "medium" },
      { keyword: "CSS", count: 2, industry: "medium" },
      { keyword: "HTML", count: 1, industry: "low" },
    ]
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="h-10 w-10 rounded-full bg-bridge-primary/10 flex items-center justify-center mr-3">
              <FileText className="h-5 w-5 text-bridge-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium">{fileName}</h3>
              <p className="text-sm text-gray-500">ATS Compatibility Analysis</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold">{mockResults.score}/100</div>
            <div className="text-sm text-gray-500">Overall Score</div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="overview" className="touch-scale">Overview</TabsTrigger>
            <TabsTrigger value="keywords" className="touch-scale">Keywords</TabsTrigger>
            <TabsTrigger value="recommendations" className="touch-scale">Recommendations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 staggered-item">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border rounded-md p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium">Keyword Match</h4>
                  <span className={`text-sm ${mockResults.keywordMatch >= 70 ? 'text-green-600' : 'text-amber-600'}`}>
                    {mockResults.keywordMatch}%
                  </span>
                </div>
                <Progress value={mockResults.keywordMatch} className="h-2" />
              </div>
              
              <div className="bg-white border rounded-md p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium">Format Score</h4>
                  <span className={`text-sm ${mockResults.formatScore >= 70 ? 'text-green-600' : 'text-amber-600'}`}>
                    {mockResults.formatScore}%
                  </span>
                </div>
                <Progress value={mockResults.formatScore} className="h-2" />
              </div>
              
              <div className="bg-white border rounded-md p-4 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium">Readability</h4>
                  <span className={`text-sm ${mockResults.readabilityScore >= 70 ? 'text-green-600' : 'text-amber-600'}`}>
                    {mockResults.readabilityScore}%
                  </span>
                </div>
                <Progress value={mockResults.readabilityScore} className="h-2" />
              </div>
            </div>
            
            <div className="bg-white border rounded-md p-5 shadow-sm">
              <h4 className="font-medium mb-4">Key Findings</h4>
              <div className="space-y-3">
                {mockResults.recommendations.slice(0, 3).map((rec, idx) => (
                  <div key={idx} className="flex items-start">
                    {rec.type === "success" ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    ) : rec.type === "warning" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-2 flex-shrink-0">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                    )}
                    <span className="text-sm">{rec.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="keywords" className="space-y-6 staggered-item">
            <div className="bg-white border rounded-md p-5 shadow-sm">
              <h4 className="font-medium mb-4">Keyword Analysis</h4>
              <div className="space-y-4">
                {mockResults.keywordMatches.map((keyword, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">{keyword.keyword}</span>
                      <Badge variant="outline" className={
                        keyword.industry === "high" 
                          ? "bg-green-50 text-green-700 border-green-200" 
                          : keyword.industry === "medium"
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                      }>
                        {keyword.industry} demand
                      </Badge>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Found {keyword.count} times</span>
                      <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            keyword.count >= 3 ? "bg-green-500" : keyword.count >= 2 ? "bg-amber-500" : "bg-gray-300"
                          }`} 
                          style={{ width: `${Math.min(100, keyword.count * 33.33)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-medium mb-3">Missing Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {mockResults.missingKeywords.map((keyword, idx) => (
                    <Badge key={idx} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="recommendations" className="space-y-4 staggered-item">
            <div className="bg-white border rounded-md p-5 shadow-sm">
              <h4 className="font-medium mb-4">Recommendations to Improve ATS Score</h4>
              <div className="space-y-4">
                {mockResults.recommendations.map((rec, idx) => (
                  <div key={idx} className="flex items-start p-3 rounded-md bg-gray-50">
                    {rec.type === "success" ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    ) : rec.type === "warning" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3 flex-shrink-0 mt-0.5">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm">{rec.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white border rounded-md p-5 shadow-sm">
              <h4 className="font-medium mb-3">Format Issues</h4>
              <div className="space-y-2">
                {mockResults.formatIssues.map((issue, idx) => (
                  <div key={idx} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span className="text-sm">{issue}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="sm" className="mt-4 touch-scale">
                <BarChart className="h-4 w-4 mr-2" />
                View Detailed Analysis
              </Button>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-md p-5">
              <h4 className="font-medium mb-3 text-blue-800">ATS-Friendly Resume Tips</h4>
              <div className="space-y-2 text-blue-800">
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Use standard section headings (Education, Experience, Skills)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Avoid using tables, headers, footers, and text boxes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Use a clean, simple format with standard fonts</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Include keywords from the job description</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Save your resume as a PDF or .docx file</span>
                </div>
              </div>
              
              <Button variant="link" size="sm" className="mt-3 text-blue-600 p-0 touch-scale">
                <ExternalLink className="h-4 w-4 mr-1" />
                Learn more about ATS optimization
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between mt-6 pt-4 border-t">
          <Button variant="outline" className="touch-scale">Download Report</Button>
          <Button className="touch-scale button-pulse">Optimize Resume</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeATSChecker;
