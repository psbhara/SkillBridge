
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileUp, AlertCircle } from 'lucide-react';
import { processMarksheet } from '@/services/apiService';
import { MarksheetData } from '@/data/universities';
import { toast } from "sonner";

interface MarksheetUploaderProps {
  onProcessComplete: (data: MarksheetData) => void;
}

const MarksheetUploader: React.FC<MarksheetUploaderProps> = ({ onProcessComplete }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a PDF or image file (JPEG, PNG)");
      return;
    }
    
    if (file.size > maxSize) {
      setError("File size should not exceed 5MB");
      return;
    }
    
    setFile(file);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would send the file to a backend
      const result = await processMarksheet(file);
      onProcessComplete(result);
      
      toast.success("Marksheet uploaded successfully!", {
        description: `Next, select your interests to find matching universities.`
      });
    } catch (err) {
      setError("Error processing marksheet. Please try again.");
      console.error("Error processing marksheet:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle className="text-xl text-center">Upload Your Marksheet</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className={`border-2 border-dashed rounded-lg p-4 text-center mb-4 cursor-pointer
            ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
            ${file ? 'bg-green-50' : ''}
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload')?.click()}
        >
          <input
            id="file-upload"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex flex-col items-center py-4">
            <FileUp className="h-10 w-10 text-gray-400 mb-2" />
            {file ? (
              <p className="text-green-600 font-medium">{file.name}</p>
            ) : (
              <div>
                <p className="font-medium">Drop your marksheet here or click to browse</p>
                <p className="text-sm text-gray-500 mt-1">Supports PDF, JPEG, PNG (max. 5MB)</p>
              </div>
            )}
          </div>
        </div>
        
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Button 
          onClick={handleUpload} 
          disabled={!file || loading} 
          className="w-full bg-uni-navy hover:bg-uni-navy/90"
        >
          {loading ? "Processing..." : "Process Marksheet"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default MarksheetUploader;
