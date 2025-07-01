import React from 'react'
import './App.css'
import { Footer, Forgot, LandingPage, Login, Navbar, SignIn, TaskManager, ProtectedRoute
} from './components'
import { BrowserRouter as Router, Routes, Route,
} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/" element={<LandingPage />} />
          <Route
          element={<ProtectedRoute>
            <TaskManager />
          </ProtectedRoute>
          }>
          <Route path="/task-manager" element={<TaskManager />} />
          </Route>
        </Routes>
        <Footer />
      </Router>

  )
}

export default App