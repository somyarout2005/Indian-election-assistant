import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import './Assistant.css';

const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Namaste! 🙏 I am your Election Assistant. Ask me anything about the Indian electoral process, voter registration, or election rules.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Static mocked responses for the demo phase
  const getMockResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('age') || q.includes('how old')) {
      return "The minimum age to vote in India is 18 years. To contest in Lok Sabha or Vidhan Sabha elections, you must be at least 25 years old.";
    }
    if (q.includes('register') || q.includes('voter id') || q.includes('epic')) {
      return "You can register to vote online through the Voter's Service Portal (voters.eci.gov.in) using Form 6, or via the Voter Helpline App. You'll need proof of age and residence.";
    }
    if (q.includes('evm') || q.includes('machine')) {
      return "EVM stands for Electronic Voting Machine. It consists of a Control Unit and a Balloting Unit. Since 2013, VVPAT (Voter Verifiable Paper Audit Trail) machines are also used to print a paper slip for verification.";
    }
    if (q.includes('nota')) {
      return "NOTA means 'None of the Above'. It allows you to officially register a vote of rejection for all candidates in your constituency. However, even if NOTA gets the maximum votes, the candidate with the second-highest votes is declared the winner.";
    }
    if (q.includes('process') || q.includes('steps') || q.includes('how does it work')) {
      return "The complete Indian election process involves several key steps:\n\n1. Announcement & MCC: The Election Commission (ECI) announces dates, and the Model Code of Conduct begins.\n2. Delimitation & Voter Lists: Constituencies are defined, and electoral rolls are updated.\n3. Nominations: Candidates file their papers and affidavits, which are scrutinized by the Returning Officer.\n4. Campaigning: Political parties campaign, which ends 48 hours before polling (Silence Period).\n5. Polling Day: Voters cast their votes using EVMs and VVPATs at designated polling booths.\n6. Counting & Results: Votes are counted under strict security, and the candidate with the most votes wins (First-Past-The-Post system).";
    }
    if (q.includes('who') && (q.includes('conduct') || q.includes('responsible'))) {
        return "The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering Union and State election processes in India.";
    }
    
    return "That's a great question! While I am currently a demo assistant, in a fully connected version I would use AI to provide a detailed answer about the Indian election system based on ECI guidelines. Try asking about 'voter registration', 'voting age', or 'NOTA'.";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg = {
      id: Date.now(),
      type: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate network delay for AI response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: getMockResponse(newUserMsg.content)
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="assistant-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">AI <span className="gradient-text">Assistant</span></h1>
        <p className="page-subtitle">Get instant answers to your election queries.</p>
      </div>

      <div className="chat-container glass-panel">
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-wrapper ${msg.type}`}>
              <div className="message-avatar">
                {msg.type === 'bot' ? <Bot size={20} /> : <User size={20} />}
              </div>
              <div className="message-bubble">
                {msg.content}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message-wrapper bot">
              <div className="message-avatar">
                <Bot size={20} />
              </div>
              <div className="message-bubble typing-indicator">
                <Loader2 size={16} className="spinner" /> AI is thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            className="chat-input"
            placeholder="Ask about voter ID, EVMs, minimum age..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button 
            type="submit" 
            className="chat-send-btn"
            disabled={!inputValue.trim() || isTyping}
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Assistant;
