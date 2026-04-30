// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './App'
import ProtectedRoute from './components/ProtectedRoute'
import Auth from './pages/Auth'
import AdminProducts from './pages/admin/AdminProducts'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLayout from './pages/admin/AdminLayout'
import AdminOrders from './pages/admin/AdminOrders'
import AdminAnalytics from './pages/admin/AdminAnalytics'
import AdminSettings from './pages/admin/AdminSettings'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* ── Auth (Glassmorphism) ─────────────────── */}
        <Route path="/login" element={<Auth />} />
        <Route path="/admin/login" element={<Auth />} />

        {/* ── Admin Routes (Protected + Sidebar Layout) */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Unknown admin routes → redirect to admin */}
        <Route path="/admin/*" element={<Navigate to="/admin" replace />} />

        {/* ── Public Store Routes ──────────────────── */}
        <Route path="/*" element={<App />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

