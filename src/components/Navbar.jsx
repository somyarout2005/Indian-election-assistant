import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, GraduationCap, LayoutList, Layers, MessageSquare } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Landmark size={18} /> },
    { name: 'Timeline', path: '/timeline', icon: <LayoutList size={18} /> },
    { name: 'Flashcards', path: '/flashcards', icon: <Layers size={18} /> },
    { name: 'Quiz', path: '/quiz', icon: <GraduationCap size={18} /> },
    { name: 'Assistant', path: '/assistant', icon: <MessageSquare size={18} /> },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        <NavLink to="/" className="navbar-logo">
          <div className="logo-icon">
            <span className="chakra-dot"></span>
          </div>
          <span className="logo-text">
            Election<span className="text-highlight">Assist</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              <span className="link-icon">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle mobile-only"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              <span className="link-icon">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
