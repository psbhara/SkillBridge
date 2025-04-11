
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqCategories = [
    {
      category: "For Students",
      questions: [
        {
          question: "How do I create an account on SkillBridge?",
          answer: "To create an account, click on the 'Register' button in the top right corner of the homepage. Fill in your details, verify your email address, and complete your profile to get started."
        },
        {
          question: "Is SkillBridge free for students?",
          answer: "Yes, SkillBridge is completely free for students. We're committed to making opportunities accessible to all students regardless of their background."
        },
        {
          question: "How do I apply for opportunities?",
          answer: "Browse the Opportunities page to find positions that match your skills and interests. Click on 'View Details' to learn more about an opportunity, and then click 'Apply Now' to submit your application."
        },
        {
          question: "Can I upload my resume to SkillBridge?",
          answer: "Yes, you can upload your resume and other documents on the Upload page. These documents will be stored in your profile and can be used when applying for opportunities."
        },
        {
          question: "How does the skills matching work?",
          answer: "Our AI-powered system compares your listed skills with the requirements of each opportunity and calculates a match percentage. This helps you find opportunities that are most relevant to your skills and experience."
        }
      ]
    },
    {
      category: "For Companies",
      questions: [
        {
          question: "How do I post an opportunity on SkillBridge?",
          answer: "After creating a company account, navigate to your dashboard and click on 'Post New Opportunity'. Fill in the details about the position, required skills, and other relevant information."
        },
        {
          question: "What types of opportunities can I post?",
          answer: "You can post a variety of opportunities including internships, part-time roles, freelance projects, volunteer work, and full-time entry-level positions."
        },
        {
          question: "How much does it cost to post opportunities?",
          answer: "We offer various plans for companies, starting with a free tier that allows a limited number of postings. Premium plans offer additional features such as featured listings, advanced candidate filtering, and more."
        },
        {
          question: "Can I search for specific skills or qualifications?",
          answer: "Yes, our advanced search allows you to filter candidates based on skills, education, location, and availability. This helps you find the right talent for your specific needs."
        },
        {
          question: "How do I review applications?",
          answer: "All applications will appear in your company dashboard. You can review resumes, portfolios, and application materials, as well as manage the status of each application through our intuitive interface."
        }
      ]
    },
    {
      category: "Account & Technical",
      questions: [
        {
          question: "How do I reset my password?",
          answer: "Click on 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email to reset your password."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we take data security seriously. We use encryption and follow best practices to protect your personal information. You can learn more in our Privacy Policy."
        },
        {
          question: "Can I delete my account?",
          answer: "Yes, you can delete your account from your account settings. This will permanently remove all your data from our system."
        },
        {
          question: "Which browsers are supported?",
          answer: "SkillBridge works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated to the latest version for the best experience."
        },
        {
          question: "Is there a mobile app available?",
          answer: "Currently, we offer a responsive web application that works well on mobile devices. A dedicated mobile app is in development and will be available soon."
        }
      ]
    }
  ];
  
  const filteredFAQs = searchQuery.trim() === "" 
    ? faqCategories 
    : faqCategories.map(category => ({
        ...category,
        questions: category.questions.filter(
          q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
               q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.questions.length > 0);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-500 text-lg mb-8">
            Find answers to common questions about SkillBridge
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search questions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="space-y-8">
          {filteredFAQs.map((category, index) => (
            category.questions.length > 0 && (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`} className="animate-fade-in">
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          ))}
          
          {filteredFAQs.every(category => category.questions.length === 0) && (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No questions found matching your search.</p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            If you couldn't find the answer to your question, feel free to contact us directly.
          </p>
          <Button>Contact Support</Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
