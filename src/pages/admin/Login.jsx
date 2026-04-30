// src/pages/admin/Login.jsx
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const [showPass, setShowPass] = useState(false)
  const [mounted, setMounted]   = useState(false)

  useEffect(() => {
    setMounted(true)
    if (searchParams.get('error') === 'unauthorized') {
      setError('Access denied. You are not authorized as admin.')
    }
  }, [])

  async function handleLogin(e) {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)

    try {
      // Step 1 — Login
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      })

      if (authError) {
        setError('Invalid email or password.')
        setLoading(false)
        return
      }

      // Step 2 — Admin check
      const { data: adminUser } = await supabase
        .from('admin_users')
        .select('role')
        .eq('id', data.user.id)
        .single()

      if (!adminUser) {
        await supabase.auth.signOut()
        setError('Access denied. You are not an admin.')
        setLoading(false)
        return
      }

      // Step 3 — Dashboard pe jao
      navigate('/admin')

    } catch {
      setError('Something went wrong. Try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .input-field {
          width: 100%;
          background: #181818;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #F0EEE8;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          padding: 12px 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-field:focus { border-color: #E8FF4D; }
        .input-field::placeholder { color: #444; }
        .submit-btn {
          width: 100%;
          background: #E8FF4D;
          color: #000;
          border: none;
          border-radius: 10px;
          padding: 13px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
          margin-top: 8px;
        }
        .submit-btn:hover:not(:disabled) { background: #d4ea30; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'DM Sans', sans-serif",
      }}>

        {/* Glow */}
        <div style={{
          position: 'fixed', width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,255,77,0.05) 0%, transparent 70%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }} />

        {/* Card */}
        <div style={{
          background: '#111',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '20px',
          padding: '40px',
          width: '100%',
          maxWidth: '420px',
          position: 'relative',
          zIndex: 1,
          boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
        }}>

          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '44px',
              letterSpacing: '0.14em',
              color: '#E8FF4D',
              lineHeight: 1,
            }}>STRIDE</div>
            <div style={{
              fontSize: '11px', color: '#555',
              letterSpacing: '0.18em',
              textTransform: 'uppercase', marginTop: '4px',
            }}>Admin Portal</div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '28px' }} />

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block', fontSize: '11px', color: '#666',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                fontWeight: 500, marginBottom: '8px',
              }}>Email Address</label>
              <input
                className="input-field"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@stride.com"
                autoComplete="email"
                autoFocus
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block', fontSize: '11px', color: '#666',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                fontWeight: 500, marginBottom: '8px',
              }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  className="input-field"
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  style={{ paddingRight: '44px' }}
                  autoComplete="current-password"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  style={{
                    position: 'absolute', right: '12px', top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none', border: 'none',
                    cursor: 'pointer', fontSize: '15px', padding: '4px',
                  }}>
                  {showPass ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,77,77,0.1)',
                border: '1px solid rgba(255,77,77,0.2)',
                borderRadius: '8px', padding: '10px 14px',
                color: '#FF6B6B', fontSize: '13px', marginBottom: '12px',
              }}>
                <span>⚠️</span><span>{error}</span>
              </div>
            )}

            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? '↻ Signing in...' : 'Sign In →'}
            </button>

          </form>

          <p style={{
            textAlign: 'center', fontSize: '11px',
            color: '#444', marginTop: '24px', letterSpacing: '0.04em',
          }}>
            Authorized admins only
          </p>

        </div>
      </div>
    </>
  )
}
