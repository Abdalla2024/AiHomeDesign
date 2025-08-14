import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './styles.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import Download from './components/Download'
import Footer from './components/Footer'
import PrivacyPage from './components/PrivacyPage'
import TermsPage from './components/TermsPage'
import invoiceIcon from './invoiceicon.svg?url'

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />
      <Features />
      <Screenshots />
      <Download />
    </main>
  )
}

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Set favicon to a circular PNG generated via canvas at runtime
  useEffect(() => {
    try {
      const ensureIconLink = () => {
        let link = document.querySelector("link[rel='icon']")
        if (!link) {
          link = document.createElement('link')
          link.setAttribute('rel', 'icon')
          document.head.appendChild(link)
        }
        link.setAttribute('type', 'image/png')
        return link
      }

      const link = ensureIconLink()
      const img = new Image()
      img.onload = () => {
        const size = 64
        const canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Draw circular mask
        ctx.beginPath()
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
        ctx.closePath()
        ctx.clip()

        // Draw the image with object-fit: cover
        const iw = img.naturalWidth
        const ih = img.naturalHeight
        const scale = Math.max(size / iw, size / ih)
        const dw = iw * scale
        const dh = ih * scale
        const dx = (size - dw) / 2
        const dy = (size - dh) / 2
        ctx.drawImage(img, dx, dy, dw, dh)

        const dataUrl = canvas.toDataURL('image/png')
        link.setAttribute('href', dataUrl)
      }
      img.onerror = () => {
        // Fallback to the original icon if canvas step fails
        const fallbackLink = document.querySelector("link[rel='icon']") || document.createElement('link')
        fallbackLink.setAttribute('rel', 'icon')
        fallbackLink.setAttribute('type', 'image/png')
        fallbackLink.setAttribute('href', invoiceIcon)
        if (!fallbackLink.parentNode) document.head.appendChild(fallbackLink)
      }
      img.src = invoiceIcon
    } catch (e) {
      // no-op if document/head not available
    }
  }, [])

  return (
    <div className={isLoaded ? 'loaded' : 'loading'}>
      <Header currentPath={location.pathname} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
