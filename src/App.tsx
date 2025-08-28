import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import GoogleAnalytics from './components/GoogleAnalytics'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import Documentation from './pages/Documentation'
import DeployModal from './components/DeployModal'
import { initGA } from './utils/analytics'
import './App.css'

// Create a client with caching configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1 hour - data is fresh for 1 hour
      gcTime: 30 * 60 * 1000, // 30 minutes - cache for 30 minutes
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      refetchOnMount: true, // Refetch when component mounts if data exists
      retry: 1, // Only retry once on failure
    },
  },
})

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <GoogleAnalytics />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
          <DeployModal />
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
