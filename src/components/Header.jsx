import { Link } from 'react-router-dom'
import { useState } from 'react'
import iconImage from '../assets/icon.png'

const Header = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  const scrollToSection = (sectionId) => {
    if (currentPath !== '/') {
      // If not on home page, navigate to home first
      window.location.hash = '/'
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    closeMenu()
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">
            <img src={iconImage} alt="AI Home Design" width="32" height="32" style={{ borderRadius: '6px' }} />
          </div>
          <h2>AI Home Design</h2>
        </Link>
        
        <ul className="nav-menu">
          <li>
            <button onClick={() => scrollToSection('features')}>
              Features
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('screenshots')}>
              Gallery
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('download')}>
              Download
            </button>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
        </ul>

        <button
          className="hamburger"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(o => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><button onClick={() => scrollToSection('features')}>Features</button></li>
            <li><button onClick={() => scrollToSection('screenshots')}>Screenshots</button></li>
            <li><button onClick={() => scrollToSection('download')}>Download</button></li>
            <li><Link to="/privacy" onClick={closeMenu}>Privacy</Link></li>
            <li><Link to="/terms" onClick={closeMenu}>Terms</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Header
