
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileUpload } from "@/types";
import { toast } from "sonner";
import { 
  Upload as UploadIcon, 
  File, 
  X, 
  CheckCircle,
  AlertTriangle,
  FileText,
  ArrowRight,
  Shield
} from "lucide-react";
import ResumeATSChecker from "@/components/ResumeATSChecker";

// Function to format file size
const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' bytes';
  else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  else return (bytes / 1048576).toFixed(1) + ' MB';
};

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<FileUpload[]>([]);
  const [fileType, setFileType] = useState<"resume" | "project" | "other">("resume");
  const [description, setDescription] = useState("");
  const [showATSChecker, setShowATSChecker] = useState(false);

  useEffect(() => {
    // Load previously uploaded files from localStorage for demo
    const storedFiles = localStorage.getItem('uploadedFiles');
    if (storedFiles) {
      setUploadedFiles(JSON.parse(storedFiles));
    }
  }, []);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Provide haptic feedback if available (will only work on devices that support it)
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
    
    // Replace files completely if it's a resume (only allow one resume)
    if (fileType === "resume" && acceptedFiles.length > 0) {
      setFiles([acceptedFiles[0]]);
    } else {
      // For projects or other, append to existing list
      setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    }
  }, [fileType]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/zip': ['.zip'],
      'application/x-zip-compressed': ['.zip'],
    },
    maxSize: 10485760, // 10MB
  });

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    if (files.length === 0) {
      toast.error("Please select at least one file to upload");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    // Simulate API call
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      
      // Create fake IDs and timestamps for uploaded files
      const newUploadedFiles: FileUpload[] = files.map(file => ({
        id: `file-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        filename: file.name,
        uploadDate: new Date().toISOString().split('T')[0],
        fileType: file.type,
        size: formatFileSize(file.size),
      }));
      
      const updatedFiles = [...uploadedFiles, ...newUploadedFiles];
      setUploadedFiles(updatedFiles);
      localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
      
      setFiles([]);
      setDescription("");
      setUploading(false);
      
      toast.success(`${files.length} ${files.length === 1 ? 'file' : 'files'} uploaded successfully!`);
      
      // Show ATS checker if it's a resume
      if (fileType === "resume") {
        setTimeout(() => {
          setShowATSChecker(true);
        }, 500);
      }
    }, 2500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Upload Documents</h1>
      <p className="text-gray-600 mb-8">
        Upload your resume or project files to showcase your skills and apply for opportunities
      </p>
      
      <div className="grid md:grid-cols-7 gap-8">
        <div className="md:col-span-4 space-y-6">
          {/* File Type Selection */}
          <div className="space-y-2">
            <Label htmlFor="fileType">What are you uploading?</Label>
            <div className="grid grid-cols-3 gap-4">
              <Button
                type="button"
                variant={fileType === "resume" ? "default" : "outline"}
                className={`flex items-center justify-center h-24 touch-scale ${fileType === "resume" ? "bg-bridge-primary" : ""}`}
                onClick={() => setFileType("resume")}
              >
                <div className="flex flex-col items-center">
                  <FileText className="h-8 w-8 mb-2" />
                  <span>Resume/CV</span>
                </div>
              </Button>
              
              <Button
                type="button"
                variant={fileType === "project" ? "default" : "outline"}
                className={`flex items-center justify-center h-24 touch-scale ${fileType === "project" ? "bg-bridge-primary" : ""}`}
                onClick={() => setFileType("project")}
              >
                <div className="flex flex-col items-center">
                  <File className="h-8 w-8 mb-2" />
                  <span>Project Files</span>
                </div>
              </Button>
              
              <Button
                type="button"
                variant={fileType === "other" ? "default" : "outline"}
                className={`flex items-center justify-center h-24 touch-scale ${fileType === "other" ? "bg-bridge-primary" : ""}`}
                onClick={() => setFileType("other")}
              >
                <div className="flex flex-col items-center">
                  <File className="h-8 w-8 mb-2" />
                  <span>Other</span>
                </div>
              </Button>
            </div>
          </div>
          
          {/* Dropzone */}
          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-8 transition-colors touch-scale
              ${isDragActive ? "border-bridge-primary bg-bridge-primary/5" : "border-gray-300"}
              ${isDragReject ? "border-red-500 bg-red-50" : ""}
              cursor-pointer flex flex-col items-center justify-center min-h-[200px]
            `}
          >
            <input {...getInputProps()} />
            <UploadIcon className={`h-12 w-12 mb-4 ${isDragActive ? "text-bridge-primary animate-bounce" : "text-gray-400"}`} />
            
            {isDragReject ? (
              <div className="text-center animate-fade-in">
                <p className="text-red-500 font-medium">Some files are not supported</p>
                <p className="text-sm text-gray-500 mt-2">Please only upload PDF, DOC, DOCX, or ZIP files (max 10MB)</p>
              </div>
            ) : isDragActive ? (
              <p className="font-medium text-bridge-primary animate-fade-in">Drop the files here</p>
            ) : (
              <div className="text-center">
                <p className="font-medium text-gray-700">Drag & drop files here, or click to select files</p>
                <p className="text-sm text-gray-500 mt-2">
                  Supports PDF, DOC, DOCX, ZIP (Max: 10MB)
                  {fileType === "resume" && " - Only one resume file allowed"}
                </p>
              </div>
            )}
          </div>
          
          {/* File List */}
          {files.length > 0 && (
            <div className="border rounded-lg overflow-hidden animate-fade-in">
              <div className="bg-gray-50 px-4 py-2 border-b">
                <h3 className="font-medium">Selected Files ({files.length})</h3>
              </div>
              <div className="divide-y">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <File className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <div className="font-medium">{file.name}</div>
                        <div className="text-xs text-gray-500">{formatFileSize(file.size)}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors touch-scale"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a brief description of your file(s)"
            />
          </div>
          
          {/* Upload Button */}
          <Button
            onClick={handleUpload}
            disabled={files.length === 0 || uploading}
            className="w-full bg-bridge-primary touch-scale button-pulse"
          >
            {uploading ? (
              <span className="flex items-center">
                Uploading {uploadProgress}%...
              </span>
            ) : (
              <span className="flex items-center">
                Upload Files <UploadIcon className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
          
          {/* ATS Checker */}
          {showATSChecker && fileType === "resume" && uploadedFiles.length > 0 && (
            <div className="mt-8 animate-fade-in">
              <ResumeATSChecker fileName={uploadedFiles[uploadedFiles.length - 1].filename} />
            </div>
          )}
        </div>
        
        <div className="md:col-span-3">
          {/* Recently Uploaded Files */}
          <div className="bg-white rounded-lg border shadow-sm p-5 space-y-4">
            <h3 className="font-semibold text-lg">Your Uploaded Files</h3>
            
            {uploadedFiles.length > 0 ? (
              <div className="space-y-3">
                {uploadedFiles.slice(0, 5).map((file, index) => (
                  <div 
                    key={file.id} 
                    className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors touch-scale staggered-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-9 w-9 rounded bg-bridge-primary/10 flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-bridge-primary" />
                    </div>
                    <div className="flex-grow truncate">
                      <div className="font-medium truncate">{file.filename}</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <span>{file.uploadDate}</span>
                        <span className="mx-1">•</span>
                        <span>{file.size}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 ml-2 touch-scale">
                      <File className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                
                <Button variant="ghost" size="sm" className="w-full text-bridge-primary mt-2 touch-scale">
                  View All Uploads <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="text-center py-8">
                <File className="h-10 w-10 mx-auto text-gray-300 mb-3" />
                <p className="text-gray-500">No files uploaded yet</p>
              </div>
            )}
          </div>
          
          {/* ATS Info */}
          {fileType === "resume" && (
            <div className="bg-blue-50 rounded-lg border border-blue-100 p-5 mt-6 animate-fade-in">
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-lg text-blue-700">ATS-Friendly Resume</h3>
              </div>
              
              <p className="text-sm text-blue-800 mb-4">
                Our system will analyze your resume for ATS compatibility and provide optimization tips to help your resume stand out to hiring managers.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Keyword identification and suggestions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Format compatibility check</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Section analysis and recommendations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Readability score and optimization</span>
                </li>
              </ul>
            </div>
          )}
          
          {/* Tips */}
          <div className="bg-green-50 rounded-lg border border-green-100 p-5 mt-6 animate-fade-in">
            <h3 className="font-semibold text-lg mb-3 text-green-700">Upload Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Keep your resume concise and under 2 pages</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Use PDF format for consistent formatting across devices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Include a README file with your project submissions</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Don't include personal information like your address or ID numbers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
