import React from 'react'
import { Link } from 'react-router-dom'
import { apps } from '../data/apps'
import './AppMarketplace.css'

const AppMarketplace: React.FC = () => {
  // Show only the first 8 apps, sorted by popularity
  const displayApps = apps
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 8)

  return (
    <section id="marketplace" className="app-marketplace section">
      <div className="container">
        <div className="marketplace-header">
          <h2 className="fade-in-up">Open Source App Marketplace</h2>
          <p className="fade-in-up">
            Deploy popular open-source applications instantly with our one-click installation process
          </p>
        </div>

        <div className="apps-grid">
          {displayApps.map((app, index) => (
            <div key={app.id} className="app-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="app-header">
                <div className="app-icon">{app.icon}</div>
                <div className="app-info">
                  <h3 className="app-name">{app.name}</h3>
                  <span className="app-category">{app.category}</span>
                </div>
              </div>
              <p className="app-description">{app.description}</p>
              
              <div className="app-specs">
                <div className="specs-header">
                  <span className="specs-title">Requirements</span>
                  <span className="install-time">⚡ {app.installTime}</span>
                </div>
                <div className="spec-grid">
                  <div className="spec-item">
                    <div className="spec-icon">🔧</div>
                    <div className="spec-details">
                      <span className="spec-value">{app.specs.vcpu}</span>
                      <span className="spec-label"> vCPU</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-icon">💾</div>
                    <div className="spec-details">
                      <span className="spec-value">{app.specs.ram}GB</span>
                      <span className="spec-label"> RAM</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-icon">💿</div>
                    <div className="spec-details">
                      <span className="spec-value">{app.specs.storage}GB</span>
                      <span className="spec-label"> Storage</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-icon">🌐</div>
                    <div className="spec-details">
                      <span className="spec-value">{app.specs.bandwidth}GB</span>
                      <span className="spec-label"> Bandwidth</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="app-footer">
                <div className="app-pricing">
                  <span className="price">${app.monthlyPrice}</span>
                  <span className="period">/month</span>
                </div>
                <button className="btn btn-primary app-install-btn">
                  Install Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="marketplace-cta">
          <p>And many more applications available...</p>
          <Link to="/marketplace" className="btn btn-secondary">
            Browse All Apps
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AppMarketplace
