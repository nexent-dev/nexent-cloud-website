import React from 'react'
import './Features.css'

const Features: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'One-Click App Hosting',
      description: 'Deploy WordPress, Odoo, n8n, and other open-source applications instantly with our streamlined one-click installation process.',
      highlight: 'WordPress, Odoo, n8n'
    },
    {
      icon: '⚡',
      title: 'Zero-Downtime Deployments',
      description: 'YAML-based CI/CD integration with GitHub/GitLab. Default 2-replica setup ensures your applications stay online during updates.',
      highlight: 'YAML + CI/CD'
    },
    {
      icon: '📧',
      title: 'Notifications as a Service',
      description: 'Comprehensive email & SMS APIs with advanced scheduling and mass send capabilities for all your communication needs.',
      highlight: 'Email & SMS APIs'
    },
    {
      icon: '🔧',
      title: 'Scalability & Reliability',
      description: 'Kubernetes-powered infrastructure with multi-replica architecture designed for enterprise-grade performance and reliability.',
      highlight: 'Kubernetes-powered'
    }
  ]

  return (
    <section id="services" className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="fade-in-up">Key Features</h2>
          <p className="fade-in-up">
            Everything you need to build, deploy, and scale your applications with confidence
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-highlight">
                <span>{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
