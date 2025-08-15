// Import onboard image for the phone mockup here
import onboardImage from '../assets/onboard.png'

const Download = () => {
  return (
    <section id="download" className="download">
      <div className="container">
        <div className="download-content">
          <div className="download-text">
            <h2>Get AI Home Design</h2>
            <p>
              Capture or select a room photo, pick a style, and generate photoreal interior designs instantly.
            </p>
            
            <div className="download-buttons">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-store-btn"
              >
                <div className="app-store-content">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.85 11.3 7.75 12.11 7.75C12.91 7.75 14.37 6.68 15.92 6.84C16.54 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="white"/>
                  </svg>
                  <div className="app-store-text">
                    <div className="app-store-line1">Download on the</div>
                    <div className="app-store-line2">App Store</div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="download-features">
              <div className="download-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Fast, photoreal results</span>
              </div>
              
              <div className="download-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Multiple styles + history</span>
              </div>
            </div>
          </div>
          
          <div className="download-image">
            <div className="phone-mockup-large">
              <img 
                src={onboardImage}
                alt="AI Home Design onboarding"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
