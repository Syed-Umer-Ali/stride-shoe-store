import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Link, useSearchParams } from 'react-router-dom';
import { Heart, Loader2, Filter, Grid, List, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        setLoading(true);
        const { data } = await supabase
            .from('products')
            .select('*')
            .eq('status', 'active')
            .order('display_order', { ascending: true });
        setProducts(data || []);
        setLoading(false);
    }

    const categories = ['All', ...new Set(products.map(p => p.category))];

    let filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-mesh">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-mesh pt-32 pb-20">
            {/* Parallax Background Text */}
            <div className="fixed top-20 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none z-0">
                <span className="text-[30vw] font-bold tracking-tighter leading-none whitespace-nowrap">COLLECTIONS</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-indigo-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Archive 2025</span>
                        <h1 className="text-5xl md:text-8xl font-display text-white leading-none">
                            {searchQuery ? `SEARCH: ${searchQuery.toUpperCase()}` : 'ALL DROPS'}
                        </h1>
                        <p className="mt-6 text-slate-400 font-light max-w-md">
                            Curated performance silhouettes and lifestyle essentials for the modern pioneer.
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat, i) => (
                            <motion.button
                                key={cat}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                                    filter === cat
                                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]'
                                        : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20'
                                }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, i) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: i * 0.05 }}
                                className="group"
                            >
                                <div className="glass-card rounded-[2rem] p-6 h-full flex flex-col transition-all duration-500 hover:border-indigo-500/50">
                                    <div className="aspect-square relative mb-6 rounded-[1.5rem] overflow-hidden bg-white/5 flex items-center justify-center">
                                        <motion.img
                                            whileHover={{ scale: 1.15, rotate: -5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            src={product.image_url || 'https://placehold.co/600x600?text=Stride'}
                                            alt={product.name}
                                            className="w-[85%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                        />
                                        <button className="absolute top-4 right-4 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/40 hover:text-red-500 transition-colors z-10">
                                            <Heart className="h-4 w-4" />
                                        </button>
                                        
                                        <div className="absolute bottom-4 left-4">
                                            <span className="text-[10px] font-bold uppercase tracking-widest bg-indigo-600 text-white px-2 py-1 rounded-md">
                                                {product.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-xl font-display text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                            <Link to={`/product/${product.id}`}>
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Price</span>
                                                <span className="text-2xl font-bold text-white font-mono">
                                                    RS {product.price?.toLocaleString()}
                                                </span>
                                            </div>
                                            <Link 
                                                to={`/product/${product.id}`}
                                                className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
                                            >
                                                <ArrowUpRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {filteredProducts.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-40 text-center"
                    >
                        <h3 className="text-2xl font-display text-slate-500">NO DROPS FOUND IN THIS ARCHive</h3>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Shop;


