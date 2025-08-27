import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import AppMarketplace from './components/AppMarketplace'
import Roadmap from './components/Roadmap'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <AppMarketplace />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
