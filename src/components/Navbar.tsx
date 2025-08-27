import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="/Nexent_Logo.svg" alt="Nexent Cloud" className="navbar-logo" />
        </Link>
        
        <div className={`navbar-menu ${isMobileMenuOpen ? 'navbar-menu-open' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="navbar-link">Home</button>
          <button onClick={() => scrollToSection('services')} className="navbar-link">Features</button>
          <Link to="/marketplace" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Marketplace</Link>
          <Link to="/docs" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Docs</Link>
          <button onClick={() => scrollToSection('roadmap')} className="navbar-link">Roadmap</button>
          <Link to="/pricing" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/contact" className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
        
        <div className="navbar-actions">
          <a href="https://console.cloud.nexent.dev" target="_blank" rel="noopener noreferrer" className="navbar-link">Sign In</a>
          <a href="https://console.cloud.nexent.dev/register" target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar-btn">Get Started</a>
        </div>
        
        <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
