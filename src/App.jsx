import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, TaskManager, LandingPage, About, Features, Contact } from '@/components'
import { ThemeProvider } from './context/ThemeProvider'
import { Toaster } from "@/components/ui/sonner"

const App = () => {
  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/task-manager" element={<TaskManager /> } />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App