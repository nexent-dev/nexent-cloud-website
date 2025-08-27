import React, { useState, useMemo } from 'react'
import { apps } from '../data/apps'
import './Marketplace.css'

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(apps.map(app => app.category)))]

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory
      return matchesSearch && matchesCategory
    }).sort((a, b) => b.popularity - a.popularity)
  }, [searchTerm, selectedCategory])

  return (
    <div className="marketplace-page">
      <div className="container">
        <div className="marketplace-header">
          <h1>App Marketplace</h1>
          <p>Deploy production-ready applications in minutes with optimized configurations</p>
        </div>

        <div className="marketplace-controls">
          <div className="search-section">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search apps, categories, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="custom-deploy-section">
            <button className="btn btn-secondary custom-deploy-btn">
              <span className="technical-badge">TECHNICAL</span>
              <span>Deploy Custom App</span>
              <span className="btn-icon">⚙️</span>
            </button>
          </div>
        </div>

        <div className="apps-grid">
          {filteredApps.map((app) => (
            <div key={app.id} className="app-card">
              <div className="app-card-inner">
                
                <div className="app-header">
                  <div className="app-icon-wrapper">
                    <div className="app-icon">{app.icon}</div>
                    <div className="app-popularity-badge">
                      <span className="popularity-score">{app.popularity}%</span>
                    </div>
                  </div>
                  <div className="app-info">
                    <div className="app-title-row">
                      <h3 className="app-name">{app.name}</h3>
                      <span className="app-category-badge">{app.category}</span>
                    </div>
                    <p className="app-description">{app.description}</p>
                  </div>
                </div>

                <div className="app-content">
                  <p className="app-long-description">{app.longDescription}</p>

                  <div className="app-features">
                    {app.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="feature-more">
                        <span className="feature-check"></span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    ))}
                    {app.features.length > 3 && (
                      <div className="feature-more">
                        <span className="more-icon">+</span>
                        <span>{app.features.length - 3} more features</span>
                      </div>
                    )}
                  </div>

                  <div className="app-specs">
                    <div className="specs-header">
                      <span className="specs-title">Resource Requirements</span>
                      <span className="install-time">{app.installTime} setup</span>
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
                </div>

                <div className="app-footer">
                  <div className="app-pricing">
                    <div className="price-main">
                      <span className="price">${app.monthlyPrice}</span>
                      <span className="period">/month</span>
                    </div>
                    {/* <div className="price-note">Starting price</div> */}
                  </div>
                  <button className="btn btn-primary deploy-btn">
                    <span>Deploy Now</span>
                    <span className="deploy-icon">🚀</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No apps found</h3>
            <p>Try adjusting your search terms or category filters</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Marketplace
