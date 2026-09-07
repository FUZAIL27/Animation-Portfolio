import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { AppProvider } from './context/AppContext'
import './index.css'

const Landing = lazy(() => import('./pages/Landing'))

function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ background: '#030308' }}>
      <div className="flex flex-col items-center gap-5">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center animate-glow-pulse"
          style={{ background: 'linear-gradient(135deg,#6366f1,#22d3ee)', boxShadow: '0 0 60px rgba(99,102,241,0.6)' }}>
          <span className="text-2xl">🧠</span>
        </div>
        <div className="w-40 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div className="h-full progress-bar" style={{ width: '70%' }} />
        </div>
        <p className="text-xs font-mono" style={{ color: '#6366f1', letterSpacing: 2 }}>LOADING PORTFOLIO...</p>
      </div>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
      </Routes>
    </AnimatePresence>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Toaster position="top-right" toastOptions={{
          style: { background: '#1a1a3e', color: '#e2e8f0', border: '1px solid rgba(99,102,241,0.3)', fontFamily: 'Inter' }
        }} />
        <Suspense fallback={<Spinner />}>
          <AnimatedRoutes />
        </Suspense>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
