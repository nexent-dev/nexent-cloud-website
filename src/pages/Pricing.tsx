import React, { useState } from 'react'
import './Pricing.css'
import AppMarketplace from '../components/AppMarketplace'

interface PricingConfig {
  vcpu: number
  ram: number
  storage: number
  bandwidth: number
}

const Pricing: React.FC = () => {
  const [customConfig, setCustomConfig] = useState<PricingConfig>({
    vcpu: 1,
    ram: 1,
    storage: 20,
    bandwidth: 1000
  })

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
        <AppMarketplace />

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
