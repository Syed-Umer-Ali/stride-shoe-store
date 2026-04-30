import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Package, Clock, CheckCircle, XCircle } from "lucide-react"

export default function AdminOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  async function fetchOrders() {
    setLoading(true)
    // Placeholder logic since orders table might not exist yet
    // const { data } = await supabase.from("orders").select("*").order("created_at", { ascending: false })
    // setOrders(data || [])
    setOrders([]) 
    setLoading(false)
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Orders Management</h2>
        <p className="text-sm text-gray-400 mt-1">Manage and track customer orders.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        {orders.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-gray-900 font-medium">No orders found</h3>
            <p className="text-gray-400 text-sm">When customers buy shoes, they will appear here.</p>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Order ID</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Total</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">#{order.id.slice(0, 8)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.customer_email}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                      <Clock className="w-3 h-3" /> {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">PKR {order.total.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{new Date(order.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
