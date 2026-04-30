import { BarChart2, TrendingUp, Users, ShoppingBag } from "lucide-react"

export default function AdminAnalytics() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Overview</h2>
        <p className="text-sm text-gray-400 mt-1">Track your store performance and sales trends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Sales", value: "PKR 0", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
          { label: "Total Orders", value: "0", icon: ShoppingBag, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "New Customers", value: "0", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Conversion Rate", value: "0.0%", icon: BarChart2, color: "text-orange-600", bg: "bg-orange-50" },
        ].map(stat => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</div>
            <div className="text-2xl font-black text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-80 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            <BarChart2 className="w-8 h-8 text-gray-300" />
          </div>
          <h3 className="text-gray-900 font-bold mb-1">Sales Graph</h3>
          <p className="text-gray-400 text-sm">Real-time charts will appear here as you get orders.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-80 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="w-8 h-8 text-gray-300" />
          </div>
          <h3 className="text-gray-900 font-bold mb-1">Top Products</h3>
          <p className="text-gray-400 text-sm">See which shoes are selling the best.</p>
        </div>
      </div>
    </div>
  )
}
