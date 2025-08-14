const Features = () => {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 11L12 2L21 11V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V11Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Photoreal redesigns",
      description: "Generate high‑quality room redesigns from your photos in seconds, perfect for inspiration and planning."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L2 7L12 11L22 7L12 3Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12L12 16L22 12" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 17L12 21L22 17" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Style presets",
      description: "Modern, Scandinavian, Japandi, Mid‑Century, Coastal, and more. Add custom prompts to fine‑tune results."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 20H16" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "On‑device workflow",
      description: "Select or capture a photo, choose a style, and generate results. Save, compare, and share your favorites."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <rect x="13" y="6" width="8" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Before/after comparison",
      description: "View your original photo side‑by‑side with the generated design for a clear, instant comparison."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H21" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 12H17" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 18H13" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="10" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "High‑resolution exports",
      description: "Save crisp images that look great when zoomed, shared, or printed."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Privacy‑friendly by design",
      description: "Your photos and generated designs stay on your device unless you choose to share them."
    }
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Design your space, effortlessly</h2>
          <p>Turn any room photo into multiple beautiful concepts with AI—no design skills required.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
