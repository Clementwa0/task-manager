import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { isAuthenticated } from '../lib/api' 

const ProtectedRoute = ({ element }) => {
  const location = useLocation()

  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default ProtectedRoute
