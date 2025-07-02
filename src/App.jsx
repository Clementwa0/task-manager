import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'
import { Navbar, Footer, TaskManager, LandingPage, About, Features, Contact } from '@/components'


const ThemeToggle = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow"
    >
      {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
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