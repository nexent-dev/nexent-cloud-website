import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
