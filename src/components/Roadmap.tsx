import React from 'react'
import './Roadmap.css'

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      title: 'App Creator Marketplace',
      description: 'Developers will be able to publish their own applications for one-click installation by the community.',
      status: 'Coming Soon',
      timeline: 'Q2 2025',
      icon: '🛠️'
    },
    {
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive monitoring and analytics for all your deployed applications with real-time insights.',
      status: 'In Development',
      timeline: 'Q1 2025',
      icon: '📈'
    },
    {
      title: 'Multi-Cloud Support',
      description: 'Deploy across multiple cloud providers with unified management and seamless migration capabilities.',
      status: 'Planned',
      timeline: 'Q3 2025',
      icon: '🌐'
    }
  ]

  return (
    <section id="roadmap" className="roadmap section">
      <div className="container">
        <div className="roadmap-header">
          <h2 className="fade-in-up">Future Roadmap</h2>
          <p className="fade-in-up">
            Exciting features and capabilities coming to Nexent Cloud
          </p>
        </div>

        <div className="roadmap-timeline">
          {roadmapItems.map((item, index) => (
            <div key={index} className="roadmap-item fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="roadmap-connector">
                <div className="roadmap-dot"></div>
                {index < roadmapItems.length - 1 && <div className="roadmap-line"></div>}
              </div>
              <div className="roadmap-content">
                <div className="roadmap-card">
                  <div className="roadmap-icon">{item.icon}</div>
                  <div className="roadmap-info">
                    <div className="roadmap-meta">
                      <span className={`roadmap-status ${item.status.toLowerCase().replace(' ', '-')}`}>
                        {item.status}
                      </span>
                      <span className="roadmap-timeline">{item.timeline}</span>
                    </div>
                    <h3 className="roadmap-title">{item.title}</h3>
                    <p className="roadmap-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="roadmap-cta">
          <p>Have suggestions for our roadmap?</p>
          <a href="#feedback" className="btn btn-secondary">
            Share Your Ideas
          </a>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
