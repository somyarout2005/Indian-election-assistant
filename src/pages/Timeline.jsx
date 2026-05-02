import React, { useState } from 'react';
import { Calendar, Users, Megaphone, FileText, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
  const [expandedStep, setExpandedStep] = useState(0);

  const steps = [
    {
      title: 'Announcement & MCC',
      icon: <Calendar size={24} />,
      color: 'var(--saffron-main)',
      description: 'The Election Commission of India (ECI) announces the election schedule. The Model Code of Conduct (MCC) comes into effect immediately to ensure a level playing field.',
      details: [
        'ECI holds a press conference to announce dates.',
        'MCC guidelines restrict ruling parties from using official machinery for campaigns.',
        'No new schemes or projects can be announced by the government.'
      ]
    },
    {
      title: 'Nominations & Scrutiny',
      icon: <FileText size={24} />,
      color: 'var(--green-main)',
      description: 'Candidates file their nomination papers along with an affidavit detailing their assets, liabilities, and criminal background (if any).',
      details: [
        'Candidates must deposit a security amount.',
        'Returning Officer (RO) scrutinizes the papers for validity.',
        'Candidates have a window to withdraw their nominations.'
      ]
    },
    {
      title: 'Campaigning',
      icon: <Megaphone size={24} />,
      color: '#A855F7',
      description: 'Political parties and candidates campaign to reach out to voters. This phase is heavily monitored by the ECI.',
      details: [
        'Campaigns include rallies, door-to-door visits, and media advertisements.',
        'Strict limits on campaign expenditure are enforced.',
        'Campaigning stops 48 hours before the polling begins (Silence Period).'
      ]
    },
    {
      title: 'Polling Day',
      icon: <Users size={24} />,
      color: '#3B82F6',
      description: 'Voters cast their votes using Electronic Voting Machines (EVMs) equipped with Voter Verifiable Paper Audit Trail (VVPAT).',
      details: [
        'Voters must show a valid ID (like EPIC/Voter ID) at the booth.',
        'Indelible ink is applied to the voter\'s left index finger.',
        'Security forces are deployed to ensure peaceful voting.'
      ]
    },
    {
      title: 'Counting & Results',
      icon: <CheckCircle size={24} />,
      color: '#F43F5E',
      description: 'EVMs are opened and votes are counted in the presence of candidates or their agents. The candidate with the highest votes wins.',
      details: [
        'Counting is done under tight security and video surveillance.',
        'VVPAT slips may be matched with EVM counts in specific cases.',
        'The ECI officially declares the winning candidates.'
      ]
    }
  ];

  return (
    <div className="timeline-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">The Election <span className="gradient-text">Timeline</span></h1>
        <p className="page-subtitle">A step-by-step guide to how the democratic process unfolds in India.</p>
      </div>

      <div className="timeline-container">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`timeline-item ${expandedStep === index ? 'expanded' : ''}`}
            onClick={() => setExpandedStep(expandedStep === index ? null : index)}
          >
            <div className="timeline-marker" style={{ backgroundColor: step.color }}>
              <div className="marker-icon">{step.icon}</div>
              {index < steps.length - 1 && <div className="timeline-line"></div>}
            </div>
            
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <h3 className="timeline-step-title" style={{ color: step.color }}>{step.title}</h3>
                <button className="expand-btn">
                  {expandedStep === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              
              <p className="timeline-desc">{step.description}</p>
              
              <div className="timeline-details">
                <h4>Key Highlights:</h4>
                <ul>
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
