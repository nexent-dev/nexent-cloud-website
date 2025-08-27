import React from 'react'
import './CTA.css'

const CTA: React.FC = () => {
  return (
    <section id="get-started" className="cta">
      <div className="container">
        <div className="cta-content fade-in-up">
          <h2 className="cta-title">Start hosting on Nexent Cloud today</h2>
          <p className="cta-subtitle">
            Join thousands of developers who trust Nexent Cloud for reliable, 
            scalable, and zero-downtime application hosting.
          </p>
          <div className="cta-buttons">
            <a href="https://console.cloud.nexent.dev/register" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-btn-primary">
              Launch App
            </a>
            <a href="#contact" className="btn btn-secondary cta-btn-secondary">
              Contact Sales
            </a>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="cta-feature-icon">✅</span>
              <span>No setup fees</span>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">✅</span>
              <span>99.99% uptime SLA</span>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">✅</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
