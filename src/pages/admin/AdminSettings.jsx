import { Settings, User, Bell, Shield, Palette } from "lucide-react"

export default function AdminSettings() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-sm text-gray-400 mt-1">Configure your store and admin preferences.</p>
      </div>

      <div className="max-w-4xl space-y-6">
        {[
          { title: "Store Profile", desc: "Logo, name, and contact information.", icon: User },
          { title: "Notifications", desc: "WhatsApp and Email alert preferences.", icon: Bell },
          { title: "Security", desc: "Password and authentication settings.", icon: Shield },
          { title: "Appearance", desc: "Dark mode and brand theme colors.", icon: Palette },
        ].map(section => (
          <div key={section.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-gray-200 transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <section.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold">{section.title}</h3>
                <p className="text-gray-400 text-sm">{section.desc}</p>
              </div>
            </div>
            <div className="text-gray-300 group-hover:text-gray-900 transition-colors">→</div>
          </div>
        ))}

        <div className="pt-6 border-t border-gray-100">
          <button className="bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all">
            Save All Changes
          </button>
        </div>
      </div>
    </div>
  )
}
