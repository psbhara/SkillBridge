
import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  companyName: string;
  opportunityTitle?: string;
}

const ContactModal = ({ 
  isOpen, 
  onOpenChange, 
  companyName,
  opportunityTitle
}: ContactModalProps) => {
  const [subject, setSubject] = useState(opportunityTitle ? `Regarding ${opportunityTitle} Application` : "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!subject.trim() || !message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success(`Message sent to ${companyName}`);
      onOpenChange(false);
      setSubject(opportunityTitle ? `Regarding ${opportunityTitle} Application` : "");
      setMessage("");
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Contact {companyName}</DialogTitle>
          <DialogDescription>
            Send a message to the hiring team about your application.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input 
              id="subject" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              placeholder="Enter subject" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Type your message here" 
              rows={6}
            />
          </div>
        </div>
        
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="touch-scale">Cancel</Button>
          </DialogClose>
          <Button 
            onClick={handleSend} 
            disabled={loading} 
            className="touch-scale"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
