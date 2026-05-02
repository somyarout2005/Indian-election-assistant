import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutList, Layers, GraduationCap, MessageSquare, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const features = [
    {
      title: 'Election Timeline',
      description: 'Step-by-step guide to how elections work in India.',
      icon: <LayoutList size={32} />,
      path: '/timeline',
      color: 'var(--saffron-main)',
    },
    {
      title: 'Flashcards',
      description: 'Learn key electoral terms quickly with interactive cards.',
      icon: <Layers size={32} />,
      path: '/flashcards',
      color: 'var(--green-main)',
    },
    {
      title: 'Knowledge Quiz',
      description: 'Test your understanding of the Indian electoral system.',
      icon: <GraduationCap size={32} />,
      path: '/quiz',
      color: 'var(--chakra-blue)',
    },
    {
      title: 'AI Assistant',
      description: 'Ask any questions about voting, eligibility, and process.',
      icon: <MessageSquare size={32} />,
      path: '/assistant',
      color: '#A855F7',
    },
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title stagger-1">
          Understand the <span className="gradient-text">World's Largest</span> Democracy
        </h1>
        <p className="hero-subtitle stagger-2">
          Your interactive guide to the Indian Election System. Learn the process, test your knowledge, and get your questions answered.
        </p>
        <div className="hero-actions stagger-3">
          <Link to="/timeline" className="btn-primary">
            Start Learning <ArrowRight size={18} />
          </Link>
          <Link to="/quiz" className="btn-secondary">
            Take a Quiz
          </Link>
        </div>
      </section>

      <section className="features-section stagger-4">
        <h2 className="section-title">Explore Modules</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Link to={feature.path} key={index} className="feature-card glass-panel">
              <div className="feature-icon" style={{ color: feature.color, backgroundColor: `${feature.color}20` }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="info-section glass-panel stagger-4">
        <div className="info-grid">
          <div className="info-content">
            <h2 className="gradient-text">Why Your Vote Matters</h2>
            <p>Every vote is a voice in the world's largest democracy. By voting, you participate in the decision-making process that shapes the future of our nation, its policies, and its leadership.</p>
            <ul className="info-list">
              <li>Choose representatives who align with your values.</li>
              <li>Hold the government accountable.</li>
              <li>Shape the legislative agenda for the next 5 years.</li>
              <li>Exercise your constitutional right and duty.</li>
            </ul>
          </div>
          <div className="info-stats">
            <div className="stat-card">
              <h3>900M+</h3>
              <p>Registered Voters</p>
            </div>
            <div className="stat-card">
              <h3>1M+</h3>
              <p>Polling Stations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="facts-section stagger-4">
        <h2 className="section-title">Election Quick Facts</h2>
        <div className="facts-grid">
          <div className="fact-item glass-panel">
            <h4>First Election</h4>
            <p>India's first general election was held in 1951-52 after independence.</p>
          </div>
          <div className="fact-item glass-panel">
            <h4>ECI Authority</h4>
            <p>The Election Commission is a permanent Constitutional Body established in 1950.</p>
          </div>
          <div className="fact-item glass-panel">
            <h4>Universal Suffrage</h4>
            <p>Every Indian citizen above 18 has the right to vote regardless of caste, religion, or gender.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
