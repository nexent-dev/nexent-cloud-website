import React from 'react'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Features from '../components/Features'
import AppMarketplace from '../components/AppMarketplace'
import Roadmap from '../components/Roadmap'
import CTA from '../components/CTA'

const Home: React.FC = () => {
  return (
    <div id="home">
      <Hero />
      <Clients />
      <Features />
      <AppMarketplace />
      <Roadmap />
      <CTA />
    </div>
  )
}

export default Home
