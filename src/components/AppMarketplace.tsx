import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useApi } from '../hooks/useApi'
import './AppMarketplace.css'
import type API from '../services/api.services'
import { useNavigate } from 'react-router-dom'

// Interface for API response (same as Marketplace)
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
  category: string
  installTime: string
  specs: {
    vcpu: number
    ram: number
    storage: number
    bandwidth: number
  }
  monthlyPrice: number
}

const AppMarketplace: React.FC = () => {
  const api: API = useApi()
  const navigate = useNavigate()

  // Fetch featured app templates using React Query
  const { data: featuredAppTemplates = [], isLoading, error } = useQuery({
    queryKey: ['featuredAppTemplates'],
    queryFn: () => api.getAppTemplates(true) as Promise<AppTemplate[]>
  })

  // Transform API data to match existing component structure
  const displayApps: TransformedApp[] = useMemo(() => {
    return featuredAppTemplates.slice(0, 8).map(template => {
      const cpuReq = template.minimum_requirements.find(req => req.name === 'cpu')
      const memoryReq = template.minimum_requirements.find(req => req.name === 'memory')
      const storageReq = template.minimum_requirements.find(req => req.name === 'storage')
      const bandwidthReq = template.minimum_requirements.find(req => req.name === 'bandwidth')

      return {
        id: template.uid,
        name: template.name,
        icon: template.logo_url ? `<img src="${template.logo_url}" alt="${template.name}" style="width: 100%; height: 100%; object-fit: contain;" />` : '📦',
        description: template.short_description,
        category: template.categories[0] || 'Other',
        installTime: `${template.setup_time_minutes} min`,
        specs: {
          vcpu: cpuReq?.quantity || 1,
          ram: memoryReq?.quantity || 1,
          storage: storageReq?.quantity || 5,
          bandwidth: bandwidthReq?.quantity || 50
        },
        monthlyPrice: template.price
      }
    })
  }, [featuredAppTemplates])

  if (isLoading) {
    return (
      <section id="marketplace" className="app-marketplace section">
        <div className="container">
          <div className="marketplace-header">
            <h2 className="fade-in-up">Open Source App Marketplace</h2>
            <p className="fade-in-up">
              Loading featured applications...
            </p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="marketplace" className="app-marketplace section">
        <div className="container">
          <div className="marketplace-header">
            <h2 className="fade-in-up">Open Source App Marketplace</h2>
            <p className="fade-in-up">
              Error loading applications. Please try again later.
            </p>
          </div>
        </div>
      </section>
    )
  }

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
                <div className="app-icon" dangerouslySetInnerHTML={{ __html: app.icon }}></div>
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
                <button 
                  className="btn btn-primary app-install-btn"
                  onClick={() => {
                    navigate(`?action=deploy&id=${app.id}`)
                  }}
                >
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
