import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ element }) => {
  const { isSignedIn, isLoaded } = useUser()
  const location = useLocation()

  if (!isLoaded) {
    return <div className="text-center py-6">Loading...</div>
  }

  return isSignedIn ? (
    element
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  )
}

export default ProtectedRoute
