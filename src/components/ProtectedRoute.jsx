// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user, isAdmin, loading } = useAuth()

  // Load ho raha hai → spinner dikhao
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '16px',
        fontFamily: 'DM Sans, sans-serif',
      }}>
        <div style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '32px',
          letterSpacing: '0.14em',
          color: '#E8FF4D',
        }}>STRIDE</div>
        <div style={{ color: '#444', fontSize: '13px', letterSpacing: '0.08em' }}>
          Loading...
        </div>
      </div>
    )
  }

  // Login nahi hai → login page pe bhejo
  if (!user) return <Navigate to="/admin/login" replace />

  // Login hai lekin admin nahi → access denied
  if (!isAdmin) return <Navigate to="/admin/login?error=unauthorized" replace />

  // Sab theek → page dikhao
  return children
}
