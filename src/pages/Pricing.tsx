import React, { useState } from 'react'
import './Pricing.css'

interface PricingConfig {
  vcpu: number
  ram: number
  storage: number
  bandwidth: number
}

interface AppPackage {
  name: string
  description: string
  icon: string
  specs: PricingConfig
  monthlyPrice: number
}

const Pricing: React.FC = () => {
  const [customConfig, setCustomConfig] = useState<PricingConfig>({
    vcpu: 1,
    ram: 1,
    storage: 20,
    bandwidth: 1000
  })

  const appPackages: AppPackage[] = [
    {
      name: 'WordPress',
      description: 'Perfect for blogs and small websites',
      icon: '📝',
      specs: { vcpu: 1, ram: 2, storage: 20, bandwidth: 1000 },
      monthlyPrice: 12
    },
    {
      name: 'Odoo',
      description: 'Complete business management suite',
      icon: '💼',
      specs: { vcpu: 2, ram: 4, storage: 50, bandwidth: 2000 },
      monthlyPrice: 35
    },
    {
      name: 'n8n',
      description: 'Workflow automation platform',
      icon: '🔄',
      specs: { vcpu: 1, ram: 2, storage: 30, bandwidth: 1500 },
      monthlyPrice: 18
    },
    {
      name: 'Nextcloud',
      description: 'Self-hosted cloud storage',
      icon: '☁️',
      specs: { vcpu: 2, ram: 3, storage: 100, bandwidth: 3000 },
      monthlyPrice: 28
    },
    {
      name: 'GitLab',
      description: 'Complete DevOps platform',
      icon: '🦊',
      specs: { vcpu: 4, ram: 8, storage: 100, bandwidth: 5000 },
      monthlyPrice: 75
    },
    {
      name: 'Grafana',
      description: 'Analytics and monitoring',
      icon: '📊',
      specs: { vcpu: 2, ram: 4, storage: 50, bandwidth: 2000 },
      monthlyPrice: 32
    }
  ]

  const calculateCustomPrice = (config: PricingConfig): number => {
    const vcpuPrice = config.vcpu * 8
    const ramPrice = config.ram * 4
    const storagePrice = config.storage * 0.1
    const bandwidthPrice = config.bandwidth * 0.01
    return vcpuPrice + ramPrice + storagePrice + bandwidthPrice
  }

  const handleConfigChange = (key: keyof PricingConfig, value: number) => {
    setCustomConfig(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="pricing-page">
      <div className="container">
        <div className="pricing-header">
          <h1>Pricing</h1>
          <p>Transparent pricing for every need. Pay only for what you use.</p>
        </div>

        {/* One-Click App Packages */}
        <section className="app-packages">
          <h2>One-Click App Packages</h2>
          <p>Pre-configured applications with recommended specifications</p>
          
          <div className="packages-grid">
            {appPackages.map((pkg, index) => (
              <div key={index} className="package-card">
                <div className="package-header">
                  <div className="package-icon">{pkg.icon}</div>
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                </div>
                
                <div className="package-specs">
                  <div className="spec-item">
                    <span>vCPU:</span>
                    <span>{pkg.specs.vcpu}</span>
                  </div>
                  <div className="spec-item">
                    <span>RAM:</span>
                    <span>{pkg.specs.ram} GB</span>
                  </div>
                  <div className="spec-item">
                    <span>Storage:</span>
                    <span>{pkg.specs.storage} GB</span>
                  </div>
                  <div className="spec-item">
                    <span>Bandwidth:</span>
                    <span>{pkg.specs.bandwidth} GB</span>
                  </div>
                </div>
                
                <div className="package-price">
                  <span className="price">${pkg.monthlyPrice}</span>
                  <span className="period">/month</span>
                </div>
                
                <button className="btn btn-primary package-btn">Deploy Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Calculator */}
        <section className="custom-calculator">
          <h2>Custom Configuration Calculator</h2>
          <p>Build your own configuration and see real-time pricing</p>
          
          <div className="calculator-content">
            <div className="calculator-controls">
              <div className="control-group">
                <label>vCPU Cores</label>
                <div className="slider-container">
                  <input
                    type="range"
                    min="1"
                    max="16"
                    value={customConfig.vcpu}
                    onChange={(e) => handleConfigChange('vcpu', parseInt(e.target.value))}
                    className="slider"
                  />
                  <span className="slider-value">{customConfig.vcpu}</span>
                </div>
                <div className="pricing-detail">$8/core/month</div>
              </div>

              <div className="control-group">
                <label>RAM (GB)</label>
                <div className="slider-container">
                  <input
                    type="range"
                    min="1"
                    max="64"
                    value={customConfig.ram}
                    onChange={(e) => handleConfigChange('ram', parseInt(e.target.value))}
                    className="slider"
                  />
                  <span className="slider-value">{customConfig.ram} GB</span>
                </div>
                <div className="pricing-detail">$4/GB/month</div>
              </div>

              <div className="control-group">
                <label>Storage (GB)</label>
                <div className="slider-container">
                  <input
                    type="range"
                    min="20"
                    max="1000"
                    step="10"
                    value={customConfig.storage}
                    onChange={(e) => handleConfigChange('storage', parseInt(e.target.value))}
                    className="slider"
                  />
                  <span className="slider-value">{customConfig.storage} GB</span>
                </div>
                <div className="pricing-detail">$0.10/GB/month</div>
              </div>

              <div className="control-group">
                <label>Bandwidth (GB)</label>
                <div className="slider-container">
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="100"
                    value={customConfig.bandwidth}
                    onChange={(e) => handleConfigChange('bandwidth', parseInt(e.target.value))}
                    className="slider"
                  />
                  <span className="slider-value">{customConfig.bandwidth} GB</span>
                </div>
                <div className="pricing-detail">$0.01/GB/month</div>
              </div>
            </div>

            <div className="calculator-summary">
              <div className="summary-card">
                <h3>Configuration Summary</h3>
                <div className="summary-specs">
                  <div className="summary-item">
                    <span>vCPU:</span>
                    <span>{customConfig.vcpu} cores</span>
                  </div>
                  <div className="summary-item">
                    <span>RAM:</span>
                    <span>{customConfig.ram} GB</span>
                  </div>
                  <div className="summary-item">
                    <span>Storage:</span>
                    <span>{customConfig.storage} GB</span>
                  </div>
                  <div className="summary-item">
                    <span>Bandwidth:</span>
                    <span>{customConfig.bandwidth} GB</span>
                  </div>
                </div>
                
                <div className="total-price">
                  <span className="price">${calculateCustomPrice(customConfig).toFixed(2)}</span>
                  <span className="period">/month</span>
                </div>
                
                <button className="btn btn-primary calculator-btn">Deploy Custom Config</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Pricing
