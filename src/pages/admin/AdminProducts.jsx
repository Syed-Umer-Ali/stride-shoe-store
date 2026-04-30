import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Pencil, Trash2, Plus, Search, ChevronUp, ChevronDown } from "lucide-react"

export default function AdminProducts() {
  const [shoes, setShoes] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [editShoe, setEditShoe] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [form, setForm] = useState({
    name:"", brand:"", price:"", original_price:"",
    category:"", stock:"", description:"", badge:"",
    status:"active", sizes:[], image_url:""
  })

  useEffect(() => { fetchShoes() }, [])

  async function fetchShoes() {
    setLoading(true)
    const { data } = await supabase
      .from("products").select("*").order("display_order", { ascending: true })
    setShoes(data || [])
    setLoading(false)
  }

  async function saveShoe() {
    setLoading(true)
    
    // Convert string inputs to proper numbers
    const submissionData = {
      ...form,
      price: parseFloat(form.price) || 0,
      original_price: form.original_price ? parseFloat(form.original_price) : null,
      stock: parseInt(form.stock) || 0
    }

    if (editShoe) {
      await supabase.from("products").update(submissionData).eq("id", editShoe.id)
    } else {
      await supabase.from("products").insert([submissionData])
    }
    setModalOpen(false)
    setEditShoe(null)
    await fetchShoes()
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0]
    if (!file) return

    setLoading(true)
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    let { error: uploadError } = await supabase.storage
      .from('products')
      .upload(filePath, file)

    if (uploadError) {
      alert('Error uploading image!')
      setLoading(false)
      return
    }

    const { data: { publicUrl } } = supabase.storage
      .from('products')
      .getPublicUrl(filePath)

    setForm({ ...form, image_url: publicUrl })
    setLoading(false)
  }

  async function deleteShoe() {
    await supabase.from("products").delete().eq("id", deleteId)
    setDeleteId(null)
    await fetchShoes()
  }

  function openEdit(shoe) {
    setForm({ ...shoe })
    setEditShoe(shoe)
    setModalOpen(true)
  }

  function openAdd() {
    setForm({ name:"",brand:"",price:"",original_price:"",
              category:"",stock:"",description:"",badge:"",
              status:"active",sizes:[],image_url:"" })
    setEditShoe(null)
    setModalOpen(true)
  }

  async function moveShoe(index, direction) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= filtered.length) return;

    const currentShoe = filtered[index];
    const targetShoe = filtered[newIndex];

    const { error } = await supabase
      .from("products")
      .update({ display_order: targetShoe.display_order })
      .eq("id", currentShoe.id);

    if (!error) {
      await supabase
        .from("products")
        .update({ display_order: currentShoe.display_order })
        .eq("id", targetShoe.id);
      
      await fetchShoes();
    }
  }

  const [activeTab, setActiveTab] = useState("All")
  const categories = ["Training", "Outdoor", "Basketball", "Running", "Lifestyle", "Casual"]
  const availableSizes = ["6", "7", "8", "9", "10", "11", "12", "13"]

  function toggleSize(size) {
    const newSizes = form.sizes.includes(size)
      ? form.sizes.filter(s => s !== size)
      : [...form.sizes, size]
    setForm({ ...form, sizes: newSizes })
  }

  const filtered = shoes.filter(s => {
    const matchesSearch = s.name?.toLowerCase().includes(search.toLowerCase()) ||
                         s.brand?.toLowerCase().includes(search.toLowerCase());
    const matchesTab = activeTab === "All" || s.category === activeTab;
    return matchesSearch && matchesTab;
  })

  return (
    <div className="p-6">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Shoes", value: shoes.length },
          { label: "In Stock", value: shoes.filter(s => s.stock > 0).length },
          { label: "Out of Stock", value: shoes.filter(s => s.stock === 0).length },
          { label: "Sections", value: categories.length }
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
            <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-2xl font-black text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 mb-6 bg-gray-50 p-1.5 rounded-2xl w-fit border border-gray-100 overflow-x-auto max-w-full">
        {["All", ...categories].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 rounded-xl text-xs font-black transition-all whitespace-nowrap ${activeTab === cat ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4 gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            className="w-full pl-9 pr-4 py-2.5 text-sm border-none bg-white rounded-xl outline-none focus:ring-2 focus:ring-black shadow-sm"
            placeholder={`Search in ${activeTab}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-xl text-sm font-black hover:bg-gray-800 transition-all shadow-lg active:scale-95">
          <Plus className="w-4 h-4" /> Add New Shoe
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="border-b border-gray-100">
            <tr>
              {["Product","Category","Price","Stock","Status","Actions"].map(h => (
                <th key={h} className="text-left text-xs text-gray-400 font-medium uppercase tracking-wide px-4 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((shoe, idx) => (
              <tr key={shoe.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img src={shoe.image_url || "https://placehold.co/48x48/f5f5f5/888?text=👟"}
                      alt={shoe.name} className="w-12 h-12 rounded-lg object-cover border border-gray-100" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{shoe.name}</div>
                      <div className="text-xs text-gray-400">{shoe.brand}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{shoe.category}</td>
                <td className="px-4 py-3">
                  <div className="text-sm font-bold text-gray-900">PKR {shoe.price?.toLocaleString()}</div>
                  {shoe.original_price && <div className="text-xs text-gray-400 line-through">PKR {shoe.original_price?.toLocaleString()}</div>}
                </td>
                <td className="px-4 py-3">
                  {shoe.stock === 0
                    ? <span className="text-xs bg-red-50 text-red-500 px-2 py-1 rounded-full">Out of Stock</span>
                    : shoe.stock <= 5
                      ? <span className="text-xs bg-orange-50 text-orange-500 px-2 py-1 rounded-full">{shoe.stock} left</span>
                      : <span className="text-sm text-gray-700">{shoe.stock}</span>}
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${shoe.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                    {shoe.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => moveShoe(idx, -1)} 
                      disabled={idx === 0}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-20"
                    >
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    </button>
                    <button 
                      onClick={() => moveShoe(idx, 1)} 
                      disabled={idx === filtered.length - 1}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-20"
                    >
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>
                    <button onClick={() => openEdit(shoe)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Pencil className="w-4 h-4 text-gray-500" />
                    </button>
                    <button onClick={() => setDeleteId(shoe.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden shadow-2xl">
            {/* Form Column */}
            <div className="flex-1 p-8 overflow-y-auto max-h-[90vh] border-r border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-gray-900">{editShoe ? "Edit Masterpiece" : "New Collection"}</h2>
                <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-900 transition-colors">✕</button>
              </div>

              <div className="space-y-6">
                {/* Image Upload */}
                <div>
                  <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Product Visual</label>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                    <img src={form.image_url || "https://placehold.co/100x100/f5f5f5/888?text=👟"}
                      className="w-16 h-16 rounded-xl object-cover shadow-sm bg-white" />
                    <div className="flex-1">
                      <input type="file" onChange={handleImageUpload} accept="image/*"
                        className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer w-full" />
                      <p className="text-[10px] text-gray-400 mt-2">Recommended: 1:1 Aspect Ratio, JPEG/PNG</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Name</label>
                    <input type="text" placeholder="e.g. Air Max 270"
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-black transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Brand</label>
                    <input type="text" placeholder="e.g. Nike"
                      value={form.brand} onChange={e => setForm({...form, brand: e.target.value})}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-black transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Price (PKR)</label>
                    <input type="number" placeholder="15000"
                      value={form.price} onChange={e => setForm({...form, price: e.target.value})}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm font-bold focus:ring-2 focus:ring-black transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Stock</label>
                    <input type="number" placeholder="50"
                      value={form.stock} onChange={e => setForm({...form, stock: e.target.value})}
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-black transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(c => (
                      <button key={c} onClick={() => setForm({...form, category: c})}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${form.category === c ? 'bg-black text-white shadow-lg' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Available Sizes</label>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map(s => (
                      <button key={s} onClick={() => toggleSize(s)}
                        className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border ${form.sizes.includes(s) ? 'bg-black text-white border-black shadow-lg' : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Description</label>
                  <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})}
                    placeholder="Tell the story of this shoe..."
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm h-24 focus:ring-2 focus:ring-black transition-all resize-none" />
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <button onClick={() => setModalOpen(false)} className="flex-1 py-4 text-sm font-bold text-gray-500 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">Discard</button>
                <button onClick={saveShoe} disabled={loading} className="flex-[2] py-4 text-sm font-bold text-white bg-black rounded-2xl hover:bg-gray-800 shadow-xl disabled:opacity-50 transition-all">
                  {loading ? "Processing..." : editShoe ? "Confirm Changes" : "Publish Product"}
                </button>
              </div>
            </div>

            {/* Preview Column */}
            <div className="hidden md:flex flex-[0.8] bg-gray-50 p-8 flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-8 left-8">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Live Preview</span>
              </div>
              
              <div className="w-full max-w-[280px] bg-white rounded-3xl p-4 shadow-2xl rotate-1 group hover:rotate-0 transition-transform">
                <div className="aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden">
                  <img src={form.image_url || "https://placehold.co/400x400/f5f5f5/888?text=👟"} 
                    className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-black text-gray-900 truncate pr-2 uppercase text-sm">{form.name || "Product Name"}</h4>
                    <span className="text-xs font-black text-gray-900 shrink-0">PKR {(parseFloat(form.price) || 0).toLocaleString()}</span>
                  </div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{form.category || "Uncategorized"}</p>
                </div>
                <button className="w-full mt-4 bg-gray-50 text-gray-900 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                  View Details
                </button>
              </div>

              <p className="mt-8 text-[10px] text-gray-400 text-center max-w-[200px] leading-relaxed">
                This is how your product will appear on the storefront. Make sure the visual is stunning.
              </p>
            </div>
          </div>
        </div>
      )}


      {/* Delete Confirm */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-80 text-center">
            <div className="text-4xl mb-3">🗑️</div>
            <h3 className="font-bold text-gray-900 mb-2">Delete Shoe?</h3>
            <p className="text-sm text-gray-500 mb-5">This cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2 text-sm border border-gray-200 rounded-lg">Cancel</button>
              <button onClick={deleteShoe} className="flex-1 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
