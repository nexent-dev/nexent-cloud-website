import React, { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useApi } from '../hooks/useApi'
import './Marketplace.css'
import type API from '../services/api.services'
import { Divider } from 'rsuite'
import { useNavigate } from 'react-router-dom'

// Interface for API response
interface AppTemplate {
  uid: string
  name: string
  logo_url: string
  description: string
  short_description: string
  is_active: boolean
  is_public: boolean
  setup_time_minutes: number
  repository: string
  billing_cycle: string
  price: number
  created_at: string
  updated_at: string
  minimum_requirements: {
    name: string
    quantity: number
    unit: string
    display_name: string
    cost: number
  }[]
  categories: string[]
  features: {
    name: string
    description: string
  }[]
}

// Interface for transformed app data
interface TransformedApp {
  id: string
  name: string
  icon: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  popularity: number
  installTime: string
  specs: {
    vcpu: number
    ram: number
    storage: number
    bandwidth: number
  }
  features: string[]
  monthlyPrice: number
}

const Marketplace: React.FC = () => {
  const api: API = useApi()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Fetch app templates using React Query
  const { data: appTemplates = [], isLoading, error } = useQuery({
    queryKey: ['appTemplates'],
    queryFn: () => api.getAppTemplates() as Promise<AppTemplate[]>
  })

  // Transform API data to match existing component structure
  const transformedApps: TransformedApp[] = useMemo(() => {
    return appTemplates.map(template => {
      const cpuReq = template.minimum_requirements.find(req => req.name === 'cpu')
      const memoryReq = template.minimum_requirements.find(req => req.name === 'memory')
      const storageReq = template.minimum_requirements.find(req => req.name === 'storage')
      const bandwidthReq = template.minimum_requirements.find(req => req.name === 'bandwidth')

      return {
        id: template.uid,
        name: template.name,
        icon: template.logo_url ? `<img src="${template.logo_url}" alt="${template.name}" style="width: 100%; height: 100%; object-fit: contain;" />` : '📦',
        description: template.short_description,
        longDescription: template.description,
        category: template.categories[0] || 'Other',
        tags: template.categories,
        popularity: Math.floor(Math.random() * 30) + 70, // Random popularity for now
        installTime: `${template.setup_time_minutes} min`,
        specs: {
          vcpu: cpuReq?.quantity || 1,
          ram: memoryReq?.quantity || 1,
          storage: storageReq?.quantity || 5,
          bandwidth: bandwidthReq?.quantity || 50
        },
        features: template.features.map(f => f.name),
        monthlyPrice: template.price
      }
    })
  }, [appTemplates])

  const categories = ['All', ...Array.from(new Set(transformedApps.map(app => app.category)))]

  const filteredApps = useMemo(() => {
    if (isLoading) return []
    return transformedApps.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory
      return matchesSearch && matchesCategory
    }).sort((a, b) => b.popularity - a.popularity)
  }, [transformedApps, searchTerm, selectedCategory, isLoading])

  if (isLoading) {
    return (
      <div className="marketplace-page">
        <div className="container">
          <div className="marketplace-header">
            <h1>App Marketplace</h1>
            <p>Loading applications...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="marketplace-page">
        <div className="container">
          <div className="marketplace-header">
            <h1>App Marketplace</h1>
            <p>Error loading applications. Please try again later.</p>
          </div>
        </div>
      </div>
    )
  }

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
                    <div className="app-icon" dangerouslySetInnerHTML={{ __html: app.icon }}></div>
                    <div className="app-popularity-badge">
                      {/* <span className="popularity-score">{app.popularity}%</span> */}
                    </div>
                  </div>
                  <div className="app-info">
                    <div className="app-title-row">
                      <h3 className="app-name">{app.name}</h3>
                      {/* <span className="app-category-badge">{app.category}</span> */}
                    </div>
                    <p className="app-description">{app.description}</p>
                  </div>
                </div>

                <Divider />

                <div style={{height: '160px'}}>
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
                </div>

                <div className="app-content">

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
                  <button 
                    className="btn btn-primary deploy-btn"
                    onClick={() => navigate(`/deploy/${app.id}`)}
                  >
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
