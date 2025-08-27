import React from 'react'
import './Clients.css'

const Clients: React.FC = () => {
  const clients = [
    'Archway Consulting',
    'SalambaTv',
    'Smartware Collection',
    'Fraezer Group',
    'PeepIn',
    'Manka Bakery',
    'Escape To Wild Tours & Safari Adventure'
  ]

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="clients">
      <div className="container">
        <div className="clients-header">
          <h2 className="fade-in-up">Trusted by Leading Companies</h2>
        </div>
        
        <div className="clients-scroll-container">
          <div className="clients-scroll">
            {duplicatedClients.map((client, index) => (
              <div key={index} className="client-item">
                <div className="client-logo">
                  {client.split(' ').map(word => word.charAt(0)).join('').slice(0, 3)}
                </div>
                <span className="client-name">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
