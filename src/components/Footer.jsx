import { Link } from 'react-router-dom'
import iconImage from '../assets/icon.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div>
            <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div className="footer-brand-icon">
                <img src={iconImage} alt="AI Home Design Icon" style={{ width: '24px', height: '24px', borderRadius: '6px' }} />
              </div>
              <h3>AI Home Design</h3>
            </div>
            <p>Redesign any room with AI on iOS.</p>
          </div>

          {/* Product */}
          <div className="footer-section">
            <h4>Product</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                  Features
                </button>
              </li>
              <li>
                 <button onClick={() => document.getElementById('screenshots')?.scrollIntoView({ behavior: 'smooth' })}>
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
                  Download
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} AI Home Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
