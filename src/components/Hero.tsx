import React from 'react'
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <svg className="polygon-geometry" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="polygonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
            </linearGradient>
            <linearGradient id="polygonGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
            </linearGradient>
            <linearGradient id="electronGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="20%" stopColor="rgba(255,255,255,1)" />
              <stop offset="80%" stopColor="rgba(255,255,255,1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          
          {/* Electron border path */}
          <rect x="10" y="10" width="1180" height="780" fill="none" stroke="url(#electronGradient)" strokeWidth="3" strokeDasharray="30,15" className="electron-border" />
          
          {/* Large background pentagons */}
          <polygon points="0,0 300,80 250,200 100,300 0,180" fill="url(#polygonGradient1)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="polygon poly-1" />
          <polygon points="200,50 480,30 500,150 400,280 220,250" fill="url(#polygonGradient2)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="polygon poly-2" />
          <polygon points="600,0 850,60 880,180 750,280 580,200" fill="url(#polygonGradient1)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" className="polygon poly-3" />
          <polygon points="900,120 1200,150 1150,300 1000,420 800,350" fill="url(#polygonGradient2)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="polygon poly-4" />
          <polygon points="80,480 350,420 400,580 280,720 100,680" fill="url(#polygonGradient1)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="polygon poly-5" />
          <polygon points="520,380 780,340 850,480 750,640 550,620" fill="url(#polygonGradient2)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" className="polygon poly-6" />
          <polygon points="920,480 1200,440 1200,580 1100,720 880,680" fill="url(#polygonGradient1)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="polygon poly-7" />
          
          {/* Smaller accent pentagons */}
          <polygon points="150,180 230,160 250,220 200,280 130,260" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" className="polygon accent-poly-1" />
          <polygon points="720,230 800,210 820,270 770,330 690,310" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" className="polygon accent-poly-2" />
          <polygon points="320,580 400,560 420,620 370,680 290,660" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="polygon accent-poly-3" />
          
        </svg>
      </div>
      
      <div className="container">
        <div className="hero-content fade-in-up">
          <div className="hero-badge">
            <span className="badge-icon">🚀</span>
            <span>Now supporting Kubernetes & Docker</span>
          </div>
          <h1 className="hero-title">
            Zero-Downtime Cloud Platform
          </h1>
          <p className="hero-subtitle">
            Experience unmatched reliability, seamless scalability, and a developer-first approach 
            to cloud hosting. Deploy with confidence on Nexent Cloud.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">99.99%</span>
              <span className="stat-label">Uptime SLA</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2ms</span>
              <span className="stat-label">Response Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Global Regions</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="https://cloud.nexent.dev/register" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <span>Get Started</span>
              <span className="btn-icon">→</span>
            </a>
            <a href="#services" className="btn btn-secondary">
              <span>Explore Services</span>
            </a>
          </div>
          
          <div className="hero-features">
            <div className="feature-tag">✓ Free SSL Certificates</div>
            <div className="feature-tag">✓ Auto-scaling</div>
            <div className="feature-tag">✓ 24/7 Support</div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <span className="dashboard-title">Nexent Cloud Dashboard</span>
            </div>
            
            <div className="dashboard-content">
              <div className="status-bar">
                <div className="status-item">
                  <div className="status-indicator active"></div>
                  <span>All Systems Operational</span>
                </div>
                <div className="deployment-count">
                  <span className="count">12</span>
                  <span>Active Deployments</span>
                </div>
              </div>
              
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-header">CPU Usage</div>
                  <div className="metric-value">23%</div>
                  <div className="metric-chart">
                    <div className="chart-bar" style={{height: '23%'}}></div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">Memory</div>
                  <div className="metric-value">1.2GB</div>
                  <div className="metric-chart">
                    <div className="chart-bar" style={{height: '45%'}}></div>
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-header">Network</div>
                  <div className="metric-value">45MB/s</div>
                  <div className="metric-chart">
                    <div className="chart-bar" style={{height: '67%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
