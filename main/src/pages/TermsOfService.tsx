
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "April 10, 2024";
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-500">Last Updated: {lastUpdated}</p>
        </div>
        
        <Alert variant="destructive" className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Important Notice</AlertTitle>
          <AlertDescription>
            Please read these Terms of Service carefully before using SkillBridge. By accessing or using the platform, 
            you agree to be bound by these terms.
          </AlertDescription>
        </Alert>
        
        <div className="space-y-8">
          <Tabs defaultValue="agreement">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="agreement" className="touch-scale">Agreement</TabsTrigger>
              <TabsTrigger value="account" className="touch-scale">Account</TabsTrigger>
              <TabsTrigger value="conduct" className="touch-scale">Content</TabsTrigger>
              <TabsTrigger value="intellectual" className="touch-scale">Intellectual Property</TabsTrigger>
              <TabsTrigger value="liability" className="touch-scale">Liability</TabsTrigger>
            </TabsList>
            
            <TabsContent value="agreement" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Agreement Overview</h2>
                
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and 
                  SkillBridge, Inc. ("SkillBridge," "we," "us," or "our") governing your access to and use 
                  of the SkillBridge website, mobile application, and related services (collectively, the "Platform").
                </p>
                
                <p>
                  By accessing or using the Platform, you agree to these Terms. If you do not agree to these Terms, 
                  you may not access or use the Platform.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Changes to Terms</h3>
                
                <p>
                  We may modify these Terms at any time. If we make changes, we will provide notice of such changes, 
                  such as by sending an email notification, providing notice through the Platform, or updating the 
                  "Last Updated" date at the beginning of these Terms. Your continued use of the Platform following 
                  notification of changes will constitute your acceptance of such changes. If you do not agree to 
                  any modified terms, you must stop using the Platform.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Eligibility</h3>
                
                <p>
                  To use the Platform, you must be at least 16 years old and not prohibited from using the 
                  Platform under applicable law. By using the Platform, you represent and warrant that you meet 
                  these eligibility requirements.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Additional Terms</h3>
                
                <p>
                  Certain features or services offered through the Platform may be subject to additional terms and 
                  conditions. Those additional terms and conditions are incorporated into these Terms by reference.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="account" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Account Registration and Security</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Account Creation</h3>
                
                <p>
                  To access certain features of the Platform, you may need to register for an account. When you 
                  register, you agree to provide accurate, current, and complete information about yourself and to 
                  update such information as necessary. We reserve the right to suspend or terminate your account 
                  if any information provided is inaccurate, misleading, or incomplete.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Account Types</h3>
                
                <p>
                  SkillBridge offers different types of accounts, including student accounts, company accounts, and 
                  university accounts. Each account type has specific features and functionality designed for its 
                  intended users. By creating a specific type of account, you represent that you qualify for that 
                  account type.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Account Security</h3>
                
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all 
                  activities that occur under your account. You agree to immediately notify us of any unauthorized 
                  use of your account or any other breach of security. We cannot and will not be liable for any 
                  loss or damage arising from your failure to protect your account credentials.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Account Suspension and Termination</h3>
                
                <p>
                  We may suspend or terminate your account at any time for any reason without notice or liability, 
                  including if we believe that you have violated these Terms. Upon termination, your right to use 
                  the Platform will immediately cease, and we may delete or restrict access to your account and 
                  any content or information associated with it.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Account Cancellation</h3>
                
                <p>
                  You may cancel your account at any time by following the instructions on the Platform or 
                  contacting us. Upon cancellation, we may retain certain information associated with your 
                  account as required by law or for legitimate business purposes.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="conduct" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">User Content and Conduct</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">User Content</h3>
                
                <p>
                  "User Content" means any content that you or other users submit, post, upload, or otherwise make 
                  available through the Platform, including profiles, resumes, job postings, messages, reviews, and 
                  comments. You retain ownership of your User Content, but you grant us a worldwide, non-exclusive, 
                  royalty-free, transferable, sublicensable license to use, copy, modify, display, and distribute 
                  your User Content in connection with operating and promoting the Platform.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Content Guidelines</h3>
                
                <p>
                  You agree that your User Content and your use of the Platform will not:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable law, regulation, or these Terms</li>
                  <li>Infringe on the rights of any third party</li>
                  <li>Contain false, misleading, or deceptive information</li>
                  <li>Contain discriminatory, harassing, or offensive content</li>
                  <li>Promote illegal activities or harmful conduct</li>
                  <li>Contain viruses, malware, or other harmful code</li>
                  <li>Interfere with the proper working of the Platform</li>
                  <li>Attempt to gain unauthorized access to any part of the Platform</li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Content Monitoring and Removal</h3>
                
                <p>
                  We have the right, but not the obligation, to monitor, edit, or remove any User Content. We may 
                  remove or refuse to display User Content that we believe violates these Terms or may harm us, 
                  our users, or third parties.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Feedback</h3>
                
                <p>
                  If you provide feedback, suggestions, or ideas about the Platform ("Feedback"), you grant us a 
                  non-exclusive, worldwide, perpetual, irrevocable, transferable, sublicensable, royalty-free 
                  license to use the Feedback for any purpose without compensation to you.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="intellectual" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">SkillBridge Intellectual Property</h3>
                
                <p>
                  The Platform and its content, features, and functionality are owned by SkillBridge and its 
                  licensors and are protected by copyright, trademark, patent, and other intellectual property laws. 
                  The SkillBridge name, logo, and all related names, logos, product and service names, designs, and 
                  slogans are trademarks of SkillBridge or its affiliates or licensors. You may not use such marks 
                  without our prior written permission.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Limited License</h3>
                
                <p>
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, 
                  non-sublicensable license to access and use the Platform for your personal or internal business 
                  purposes. This license does not include the right to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copy, modify, or create derivative works of the Platform or its content</li>
                  <li>Use any data mining, robots, or similar data gathering methods</li>
                  <li>Remove any copyright, trademark, or other proprietary notices</li>
                  <li>Use the Platform for any commercial purpose not expressly permitted by us</li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Third-Party Intellectual Property</h3>
                
                <p>
                  The Platform may contain content from third parties, including other users, that is protected by 
                  copyright, trademark, or other intellectual property laws. You may not use such content without 
                  the permission of the owner or as otherwise permitted by law.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Copyright Infringement</h3>
                
                <p>
                  If you believe that your copyright has been infringed on the Platform, please send a notice of 
                  claimed infringement to our designated copyright agent at copyright@skillbridge.com. Your notice 
                  must include:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>A physical or electronic signature of the copyright owner or authorized agent</li>
                  <li>Identification of the copyrighted work claimed to have been infringed</li>
                  <li>Identification of the material that is claimed to be infringing</li>
                  <li>Your contact information</li>
                  <li>A statement that you have a good faith belief that the use is not authorized</li>
                  <li>A statement that the information is accurate and, under penalty of perjury, that you are 
                  authorized to act on behalf of the copyright owner</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="liability" className="animate-fade-in">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability and Disclaimers</h2>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Disclaimer of Warranties</h3>
                
                <p>
                  THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
                  EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, 
                  FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE 
                  PLATFORM WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE 
                  PLATFORM IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Limitation of Liability</h3>
                
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SKILLBRIDGE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, 
                  AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                  OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN 
                  CONNECTION WITH YOUR ACCESS TO OR USE OF THE PLATFORM, EVEN IF WE HAVE BEEN ADVISED OF THE 
                  POSSIBILITY OF SUCH DAMAGES.
                </p>
                
                <p>
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR IN CONNECTION 
                  WITH THESE TERMS OR YOUR USE OF THE PLATFORM EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR 
                  ACCESSING THE PLATFORM DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING 
                  RISE TO THE LIABILITY.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Third-Party Content and Services</h3>
                
                <p>
                  The Platform may contain links to third-party websites, services, or content that are not owned 
                  or controlled by SkillBridge. We have no control over, and assume no responsibility for, the 
                  content, privacy policies, or practices of any third-party websites or services. You acknowledge 
                  and agree that SkillBridge shall not be responsible or liable for any damage or loss caused by 
                  or in connection with the use of any such website, service, or content.
                </p>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Indemnification</h3>
                
                <p>
                  You agree to indemnify, defend, and hold harmless SkillBridge and its officers, directors, 
                  employees, agents, and affiliates from and against any and all claims, liabilities, damages, 
                  losses, costs, expenses, and fees (including reasonable attorneys' fees) arising from or relating to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of the Platform</li>
                  <li>Your User Content</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another</li>
                </ul>
                
                <h3 className="text-xl font-medium mt-6 mb-3">Release</h3>
                
                <p>
                  If you have a dispute with one or more users, you release us from claims, demands, and damages 
                  of every kind and nature, known and unknown, arising out of or in any way connected with such 
                  disputes. In entering into this release, you expressly waive any protections that would otherwise 
                  limit the coverage of this release to include only those claims which you may know or suspect to 
                  exist in your favor at the time of agreeing to this release.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="touch-scale">
              Download PDF Version
            </Button>
            <Button className="touch-scale">
              Contact Legal Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
