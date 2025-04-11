
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const lastUpdated = "April 10, 2024";
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-500">Last Updated: {lastUpdated}</p>
        </div>
        
        <Alert className="mb-8">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            This privacy policy explains how we collect, use, and protect your personal information. 
            By using SkillBridge, you agree to the terms outlined in this policy.
          </AlertDescription>
        </Alert>
        
        <div className="space-y-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="overview" className="touch-scale">Overview</TabsTrigger>
              <TabsTrigger value="collection" className="touch-scale">Data Collection</TabsTrigger>
              <TabsTrigger value="use" className="touch-scale">Data Use</TabsTrigger>
              <TabsTrigger value="sharing" className="touch-scale">Data Sharing</TabsTrigger>
              <TabsTrigger value="rights" className="touch-scale">Your Rights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Privacy Policy Overview</h2>
                
                <p>
                  At SkillBridge, we take your privacy seriously. This Privacy Policy describes how 
                  we collect, use, and disclose information when you use our platform.
                </p>
                
                <p>
                  SkillBridge is a platform that connects students with skill-building opportunities 
                  and helps companies find talented individuals. To provide these services, we need to 
                  collect and process certain information about you.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Key Points</h3>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Information We Collect:</strong> We collect information you provide directly, 
                    such as profile information, as well as information collected automatically through 
                    cookies and similar technologies.
                  </li>
                  <li>
                    <strong>How We Use Your Information:</strong> We use your information to operate the 
                    platform, match you with relevant opportunities, improve our services, and communicate 
                    with you.
                  </li>
                  <li>
                    <strong>Information Sharing:</strong> We share information with companies you apply to, 
                    service providers who help us operate the platform, and when required by law.
                  </li>
                  <li>
                    <strong>Your Rights and Choices:</strong> You have rights regarding your personal 
                    information, including access, correction, deletion, and objection to processing.
                  </li>
                  <li>
                    <strong>Security:</strong> We implement appropriate technical and organizational 
                    measures to protect your information.
                  </li>
                </ul>
                
                <p className="mt-6">
                  Please read this Privacy Policy carefully to understand our practices regarding your 
                  information and how we will treat it. By using SkillBridge, you acknowledge that you 
                  have read and understand this Privacy Policy.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="collection" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                
                <p>
                  We collect several types of information from and about users of our platform, including:
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Information You Provide to Us</h3>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Account Information:</strong> When you register, we collect your name, email, 
                    password, and account type (student, company, or university).
                  </li>
                  <li>
                    <strong>Profile Information:</strong> For students, this includes education details, 
                    skills, experience, and preferences. For companies, this includes company details, 
                    industry, and hiring needs.
                  </li>
                  <li>
                    <strong>Uploaded Content:</strong> Resumes, portfolios, project files, and any 
                    other documents you upload to the platform.
                  </li>
                  <li>
                    <strong>Application Information:</strong> When you apply for opportunities, we 
                    collect the information you submit in your application.
                  </li>
                  <li>
                    <strong>Communications:</strong> Information you provide when contacting us or 
                    communicating with other users through the platform.
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Information We Collect Automatically</h3>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Usage Information:</strong> Details of your visits to our platform, including 
                    traffic data, location data, logs, and other communication data.
                  </li>
                  <li>
                    <strong>Device Information:</strong> Information about your computer or mobile device, 
                    including IP address, operating system, and browser type.
                  </li>
                  <li>
                    <strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies 
                    to collect information about your browsing activities over time.
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Information From Third Parties</h3>
                
                <p>
                  We may receive information about you from third parties, such as:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Social Media Platforms:</strong> If you connect your social media accounts, 
                    we may receive information from those platforms.
                  </li>
                  <li>
                    <strong>Educational Institutions:</strong> With your consent, we may receive information 
                    from your school or university.
                  </li>
                  <li>
                    <strong>References and Recommendations:</strong> Information provided by references 
                    or through recommendation features.
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="use" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                
                <p>
                  We use the information we collect for various purposes, including:
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Providing and Improving the Platform</h3>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>To operate, maintain, and improve the SkillBridge platform</li>
                  <li>To create and manage your account</li>
                  <li>To match students with relevant opportunities</li>
                  <li>To help companies find suitable talent</li>
                  <li>To process applications and facilitate connections</li>
                  <li>To analyze usage patterns and improve user experience</li>
                  <li>To develop new features and services</li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Communications</h3>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>To communicate with you about your account or opportunities</li>
                  <li>To send administrative messages, updates, and security alerts</li>
                  <li>To provide customer support and respond to inquiries</li>
                  <li>
                    To send marketing communications (with your consent or where permitted by law)
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Personalization</h3>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>To personalize your experience on the platform</li>
                  <li>To recommend opportunities based on your skills and preferences</li>
                  <li>To suggest skill development resources relevant to your interests</li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Security and Legal Compliance</h3>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>To protect the security and integrity of the platform</li>
                  <li>To detect and prevent fraud, spam, and abuse</li>
                  <li>To enforce our Terms of Service and other policies</li>
                  <li>To comply with applicable laws and regulations</li>
                  <li>To establish, exercise, or defend legal claims</li>
                </ul>
                
                <p className="mt-6">
                  We process your information based on legitimate interests, contract performance, legal 
                  obligations, and, where required, your consent. You can withdraw your consent at any time, 
                  though this won't affect processing based on consent before its withdrawal.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="sharing" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
                
                <p>
                  We may share your information in the following circumstances:
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">With Your Consent</h3>
                
                <p>
                  We may share your information when you give us consent to do so, such as when 
                  you apply for an opportunity or connect with another user.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">With Companies and Organizations</h3>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>When You Apply:</strong> When you apply for an opportunity, we share your 
                    profile information, resume, and application details with the posting company.
                  </li>
                  <li>
                    <strong>University Partners:</strong> With your consent, we may share information 
                    with your educational institution to support academic programs and career services.
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">With Service Providers</h3>
                
                <p>
                  We share information with third-party vendors, consultants, and other service providers 
                  who need access to such information to carry out work on our behalf, such as:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cloud hosting and storage providers</li>
                  <li>Payment processors</li>
                  <li>Analytics providers</li>
                  <li>Customer support services</li>
                  <li>Email and communication providers</li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">For Legal Reasons</h3>
                
                <p>
                  We may share information when we believe it's necessary to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with applicable law or legal process</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>Protect the rights, property, or safety of our users or others</li>
                  <li>Detect, prevent, or address fraud, security, or technical issues</li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Business Transfers</h3>
                
                <p>
                  If we're involved in a merger, acquisition, financing, reorganization, bankruptcy, 
                  or sale of our assets, your information may be transferred as part of that transaction. 
                  We'll notify you of any change in ownership or uses of your personal information.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Aggregated or De-identified Information</h3>
                
                <p>
                  We may share aggregated or de-identified information that cannot reasonably be used 
                  to identify you with third parties for various purposes, including analyzing platform 
                  usage and improving our services.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="rights" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
                
                <p>
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Access and Information</h3>
                
                <p>
                  You have the right to access the personal information we hold about you and to 
                  receive an explanation of how we use it and with whom we share it.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Correction</h3>
                
                <p>
                  You have the right to correct any inaccurate or incomplete personal information 
                  we hold about you. You can update most information directly through your account settings.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Deletion</h3>
                
                <p>
                  You have the right to request deletion of your personal information in certain circumstances. 
                  Note that we may retain certain information as required by law or for legitimate business purposes.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Objection and Restriction</h3>
                
                <p>
                  You have the right to object to our processing of your personal information and to 
                  request restriction of processing in certain circumstances.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Data Portability</h3>
                
                <p>
                  You have the right to receive your personal information in a structured, commonly 
                  used, and machine-readable format and to transmit that information to another controller.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Consent Withdrawal</h3>
                
                <p>
                  Where we process data based on your consent, you have the right to withdraw that 
                  consent at any time.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Exercising Your Rights</h3>
                
                <p>
                  To exercise your rights, you can:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and update certain information through your account settings</li>
                  <li>Contact us at privacy@skillbridge.com</li>
                  <li>Use the "Data & Privacy" section in your account settings</li>
                </ul>
                
                <p>
                  We will respond to your request within a reasonable timeframe and in accordance 
                  with applicable law.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Complaints</h3>
                
                <p>
                  If you have concerns about our processing of your personal information, you have 
                  the right to make a complaint to the data protection authority in your jurisdiction.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="touch-scale">
              Download PDF Version
            </Button>
            <Button className="touch-scale">
              Contact Data Protection Officer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
