import { useEffect } from 'react'

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="privacy-policy">
      <div className="container">
        <div className="privacy-header">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: August, 2025</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using AI Home Design, you agree to these Terms of Service.
              If you do not agree, do not use the app.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>Description of Service</h2>
            <p>
              AI Home Design is an iOS application that allows users to redesign interior spaces from photos.
              The app provides tools for:
            </p>
            <ul>
              <li>Selecting or capturing a room photo</li>
              <li>Choosing design styles and adding custom prompts</li>
              <li>Generating photoreal design concepts</li>
              <li>Saving, comparing, and sharing generated images</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2>Accounts and Data Storage</h2>
            <p>
              The app does not require an account and does not use developer-operated servers for storing your content. Design history
              may be stored locally on your device using Apple technologies (SwiftData) and limited
              preferences via <code>UserDefaults</code> (for example, style selection and app preferences).
              Generated images are created on-device or via third‑party APIs you invoke and are shared only when you choose to export or share them.
            </p>
          </section>

          <section className="privacy-section">
            <h2>User Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your device and app data</li>
              <li>Using the app in compliance with applicable laws and regulations</li>
              <li>Ensuring accuracy of information entered into invoices</li>
              <li>Backing up your data as needed (e.g., via iOS/iCloud device backups)</li>
            </ul>
          </section>
          
          <section className="privacy-section">
            <h2>Payments and Fees</h2>
            <p>
              Downloading and using the app may be free or paid depending on the App Store listing in your
              region. If the app offers in‑app purchases, those are processed by Apple under the App Store
              terms. The app itself does not process or store payment information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Intellectual Property</h2>
            <p>
              The Invoice Maker app, including its design, features, and functionality, 
              is owned by us and is protected by copyright, trademark, and other laws. 
              You may not reproduce, distribute, or create derivative works without 
              our express written permission.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>Limitation of Liability</h2>
            <p>
              Invoice Maker is provided "as is" without warranties of any kind. To the maximum extent
              permitted by law, we shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of the app.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>Data and Privacy</h2>
            <p>
              Your use of AI Home Design is also governed by our Privacy Policy. Please review it to
              understand how data is handled on your device and how sharing/export works.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>Termination</h2>
            <p>
              You may stop using AI Home Design at any time by deleting the app from 
              your device. We reserve the right to terminate or suspend access to 
              the app for violations of these terms.
            </p>
          </section>
          
          <section className="privacy-section">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. 
              Changes will be effective immediately upon posting. Your continued 
              use of the app after changes constitutes acceptance of the new terms.
            </p>
          </section>
          
          <section className="privacy-section">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:spareisle@gmail.com">spareisle@gmail.com</a>
              </p>
              <p>
                We will respond to your inquiry within a reasonable timeframe.
              </p>
            </div>
          </section>
          
          <section className="privacy-section">
            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with 
              applicable laws, without regard to conflict of law principles.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default TermsPage
