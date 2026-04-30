import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import { supabase } from "@/lib/supabase"
import { LayoutDashboard, ShoppingBag, Package, BarChart2, Settings, LogOut, User } from "lucide-react"

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/products", label: "Products", icon: ShoppingBag },
  { to: "/admin/orders", label: "Orders", icon: Package },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart2 },
  { to: "/admin/settings", label: "Settings", icon: Settings },
]

export default function AdminLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate("/admin/login")
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 flex flex-col shadow-sm shrink-0">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-100">
          <span className="text-xl font-black tracking-tight text-gray-900">STRIDE</span>
          <span className="ml-2 text-xs bg-black text-white px-2 py-0.5 rounded-full font-medium">Admin</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-black text-white shadow-lg shadow-black/10"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* User Info & Logout */}
        <div className="px-3 py-4 border-t border-gray-100 space-y-1">
          <div className="px-3 py-2 mb-2">
            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Logged in as</div>
            <div className="text-xs font-bold text-gray-900 truncate">{user?.email}</div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between shrink-0">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Admin Control</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Stride Shoe Store System</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right mr-2 hidden sm:block">
              <div className="text-xs font-bold text-gray-900">Admin Account</div>
              <div className="text-[10px] text-green-500 font-medium">Online</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-900 overflow-hidden">
              <User className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50/50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
