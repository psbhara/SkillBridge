
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  X, 
  Send,
  Bot
} from 'lucide-react';
import { toast } from "sonner";

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hi there! 👋 I\'m your SkillBridge assistant. How can I help you today?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      handleBotResponse(inputValue);
      setIsTyping(false);
    }, 1000);
  };

  const handleBotResponse = (userInput: string) => {
    let response: string;
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      response = 'Hello! How can I help you with finding universities?';
    } else if (lowerInput.includes('university') || lowerInput.includes('college')) {
      response = 'To find matching universities, please upload your marksheet and select your interests on the main page.';
    } else if (lowerInput.includes('marksheet') || lowerInput.includes('upload')) {
      response = 'You can upload your marksheet on the main page. We\'ll analyze it and suggest universities based on your stream and marks.';
    } else if (lowerInput.includes('interest') || lowerInput.includes('preference')) {
      response = 'After uploading your marksheet, you\'ll be able to select your interests. This helps us find universities that match your preferences.';
    } else if (lowerInput.includes('thank')) {
      response = 'You\'re welcome! Is there anything else I can help you with?';
    } else if (lowerInput.includes('contact') || lowerInput.includes('support')) {
      response = 'For additional support, you can email us at support@skillbridge.com or call our helpline at +1-800-SKILL-BRIDGE.';
    } else {
      response = 'I\'m here to help you find the best universities based on your academic profile. You can ask me about the marksheet upload process, selecting interests, or university recommendations.';
    }
    
    const botMessage: Message = {
      id: Date.now().toString(),
      content: response,
      sender: 'bot',
      timestamp: new Date(),
    };
    
    setMessages(prevMessages => [...prevMessages, botMessage]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast("Chat assistant is now active", {
        description: "Ask any questions about university selection"
      });
    }
  };

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {/* Chat toggle button */}
      <Button 
        onClick={toggleChat}
        className={`rounded-full h-14 w-14 shadow-lg flex items-center justify-center ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-uni-navy hover:bg-uni-navy/90'}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 md:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col border overflow-hidden">
          {/* Chat header */}
          <div className="bg-uni-navy text-white p-3 flex items-center">
            <Bot size={20} className="mr-2" />
            <h3 className="font-medium">SkillBridge Assistant</h3>
          </div>
          
          {/* Messages area */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-lg max-w-[80%] break-words ${
                    message.sender === 'user' 
                      ? 'bg-uni-navy text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.content}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left mb-3">
                <div className="inline-block p-3 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="p-3 border-t">
            <div className="flex items-center">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 mr-2"
              />
              <Button 
                onClick={handleSendMessage}
                size="icon"
                disabled={!inputValue.trim()}
                className="bg-uni-navy hover:bg-uni-navy/90"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
