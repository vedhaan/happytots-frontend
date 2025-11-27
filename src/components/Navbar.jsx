import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars, FaPencilAlt } from "react-icons/fa";

export const Navbar = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  const [showPageIndicator, setShowPageIndicator] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    const pageMap = {
      "/Home": "",
      "/About": "About",
      "/Admission": "Admission",
      "/why-htps": "Why HTPS", 
      "/Program": "Programs",
      "/Gallery": "Gallery",
      "/Contact": "Contact"
    };
    setCurrentPage(pageMap[path] || "");
    setShowPageIndicator(path !== "/Home" && path !== "/");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const navLinks = [
    { path: "/Home", icon: "fa-home", text: "Home" },
    { path: "/About", icon: "fa-info-circle", text: "About" },
    { path: "/why-htps", icon: "fa-question-circle", text: "Why HTPS" },
    { path: "/Admission", icon: "fa-user-graduate", text: "Admission" },
    { path: "/Program", icon: "fa-book-open", text: "Programs" },
    { path: "/Gallery", icon: "fa-images", text: "Gallery" },
    { path: "/Contact", icon: "fa-phone-alt", text: "Contact" }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        {/* Pencil Design Element */}
        <div className="pencil-body">
          <div className="pencil-tip"></div>
          <div className="pencil-wood"></div>
          <div className="pencil-lead"></div>
        </div>

        {/* Logo */}
        <div className="logo">
          <img src={`/src/assets/img/logo.png`} alt="Creative Minds Logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link 
              to={link.path} 
              key={link.path}
              className={isActive(link.path) ? "active" : ""}
            >
              <span className="link-icon"><i className={`fas ${link.icon}`}></i></span>
              <span className="link-text">{link.text}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div 
          className={`hamburger ${isMenuOpen ? "open" : ""}`} 
          id="hamburgerBtn"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* CTA Button */}
        <button className="cta-button">
          <FaPencilAlt className="pencil-icon" /> ENROLL NOW
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <img src={`/src/assets/img/logo.png`} alt="Logo" />
            <button className="close-btn" onClick={toggleMenu}>
              <FaTimes />
            </button>
          </div>
          
          <div className="mobile-links">
            {navLinks.map((link) => (
              <Link 
                to={link.path} 
                key={link.path}
                className={isActive(link.path) ? "active" : ""}
                onClick={toggleMenu}
              >
                <i className={`fas ${link.icon}`}></i> {link.text}
                {isActive(link.path) && <div className="active-indicator"></div>}
              </Link>
            ))}
          </div>
          
          {/* <button className="mobile-cta">
            <FaPencilAlt /> ENROLL NOW
          </button> */}
        </div>
      </div>

      {/* Page Indicator */}
      {showPageIndicator && (
        <div className="modern-bg-header">
          <div className="bg-word" aria-hidden="true">
            <span>{currentPage}</span>
          </div>
        </div>
      )}
    </>
  );
};