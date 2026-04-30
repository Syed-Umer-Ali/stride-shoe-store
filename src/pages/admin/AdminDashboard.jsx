import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { BarChart2, ShoppingBag, Package, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalRevenue: 0,
    totalOrders: 0,
    avgOrder: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  async function fetchStats() {
    setLoading(true)
    
    // Get product count
    const { count: productCount } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true })

    // In a real app, you'd fetch orders and sum revenue here
    // For now, let's just show product count and placeholders for orders
    setStats({
      totalProducts: productCount || 0,
      totalRevenue: 0,
      totalOrders: 0,
      avgOrder: 0
    })
    
    setLoading(false)
  }

  const statCards = [
    { label: "Total Revenue", value: `PKR ${stats.totalRevenue.toLocaleString()}`, icon: TrendingUp, color: "bg-green-50 text-green-600" },
    { label: "Total Products", value: stats.totalProducts.toString(), icon: ShoppingBag, color: "bg-blue-50 text-blue-600" },
    { label: "Total Orders", value: stats.totalOrders.toString(), icon: Package, color: "bg-purple-50 text-purple-600" },
    { label: "Avg Order Value", value: `PKR ${stats.avgOrder.toLocaleString()}`, icon: BarChart2, color: "bg-orange-50 text-orange-600" },
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back 👋</h2>
        <p className="text-sm text-gray-400 mt-1">Here's what's happening in your store today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {loading ? <span className="animate-pulse opacity-50">...</span> : value}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">{label}</div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Add New Shoe", href: "/admin/products", emoji: "👟" },
            { label: "View Orders", href: "/admin/orders", emoji: "📦" },
            { label: "See Analytics", href: "/admin/analytics", emoji: "📊" },
          ].map(item => (
            <a key={item.label} href={item.href}
              className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 hover:border-gray-200 transition-all">
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

