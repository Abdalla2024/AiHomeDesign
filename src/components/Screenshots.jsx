// Import screenshots so Vite handles asset paths
import inspo from '../assets/inspo.png'
import screen1 from '../assets/screen1.png'
import screen2 from '../assets/screen2.png'
// Note: screen3 is used in the Download section

const Screenshots = () => {
  const screenshots = [
    {
      title: "Upload & set preferences",
      description: "Upload your room photo, pick a style, and add an optional prompt.",
      image: inspo,
    },
    {
      title: "AI generating your design",
      description: "Watch the progress as AI creates a photoreal redesign of your space.",
      image: screen1,
    },
    {
      title: "Before & after comparison",
      description: "See your original photo side‑by‑side with the generated design.",
      image: screen2,
    },
  ]

  return (
    <section id="screenshots" className="screenshots">
      <div className="container">
        <div className="section-header">
          <h2>How it works</h2>
          <p>From photo to concept—fast, simple, and inspiring.</p>
        </div>
        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-card">
              <div className="screenshot-phone">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />
              </div>
              {screenshot.title && <h3>{screenshot.title}</h3>}
              {screenshot.description && <p>{screenshot.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Screenshots
