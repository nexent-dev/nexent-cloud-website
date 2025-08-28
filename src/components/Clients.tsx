import React from 'react'
import './Clients.css'

// Import client logos
import archwayLogo from '../assets/clients-logo/archway.png'
import salambatvLogo from '../assets/clients-logo/salambatv.png'
import smartwareLogo from '../assets/clients-logo/smartware.png'
import peepinLogo from '../assets/clients-logo/peepin.png'

const Clients: React.FC = () => {
  const clients = [
    { name: 'Archway Consulting', logo: archwayLogo, website: 'https://archwayconsulting.co.tz' },
    { name: 'SalambaTv', logo: salambatvLogo, website: 'https://salambatv.com' },
    { name: 'Smartware Collection', logo: smartwareLogo, website: 'https://smartware.co.tz/' },
    { name: 'PeepIn', logo: peepinLogo, website: 'https://peepin.co.tz' },
    { name: 'Fraezer Group', logo: null, website: 'https://reaganfraizer.com/' },
    { name: 'Manka Bakery', logo: null, website: 'https://bakery.manka.co.tz' },
    { name: 'Escape To Wild Tours & Safari Adventure', logo: null, website: 'https://escapetowild.com' }
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
              <a 
                key={index} 
                href={client.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="client-item"
              >
                <div className="client-logo">
                  {client.logo ? (
                    <img src={client.logo} alt={`${client.name} logo`} />
                  ) : (
                    <span className="client-initials">
                      {client.name.split(' ').map(word => word.charAt(0)).join('').slice(0, 3)}
                    </span>
                  )}
                </div>
                <span className="client-name">{client.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
