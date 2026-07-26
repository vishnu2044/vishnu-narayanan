import React, { useState, useEffect } from 'react';
import "./nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: "#header", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#experience", label: "Skills" },
    { id: "#services", label: "Services" },
    { id: "#contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#header" className="navbar__logo" onClick={() => setActiveNav("#header")}>
          <span className="navbar__logo-symbol">&lt;</span>
          VN
          <span className="navbar__logo-symbol"> /&gt;</span>
        </a>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.id}
              className={`navbar__link ${activeNav === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button 
          className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;