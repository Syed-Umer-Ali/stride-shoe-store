import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useCart } from '../context/CartContext';
import { Star, Truck, ShieldCheck, Loader2, ArrowLeft, Heart, ShoppingBag, Ruler } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);

    useEffect(() => {
        fetchProduct();
        window.scrollTo(0, 0);
    }, [id]);

    async function fetchProduct() {
        setLoading(true);
        const { data } = await supabase
            .from('products')
            .select('*')
            .eq('id', id)
            .single();
        
        if (data) setProduct(data);
        setLoading(false);
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

    if (!product) return (
        <div className="min-h-screen pt-40 text-center bg-mesh">
            <h2 className="text-2xl font-display text-white">DROP NOT FOUND</h2>
            <Link to="/shop" className="text-indigo-400 mt-4 inline-block underline">Return to Archive</Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-mesh pt-32 pb-20">
            {/* Background Accent */}
            <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <Link to="/shop" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Back to Archive</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Interactive Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative group"
                    >
                        <div className="glass-card rounded-[3rem] overflow-hidden p-12 aspect-square flex items-center justify-center relative">
                            {/* Glow behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent pointer-events-none" />
                            
                            <motion.img
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                src={product.image_url || 'https://placehold.co/800x800?text=Stride'}
                                alt={product.name}
                                className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] z-10"
                            />

                            {/* Floating Stats */}
                            <div className="absolute bottom-8 right-8 flex flex-col gap-2">
                                <motion.div 
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em]"
                                >
                                    Limited Tech
                                </motion.div>
                            </div>
                        </div>

                        {/* Thumbnail Bar (Decorative for now) */}
                        <div className="flex gap-4 mt-8">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="w-24 h-24 rounded-2xl border border-white/5 bg-white/5 hover:border-indigo-500/50 transition-colors cursor-pointer overflow-hidden p-4">
                                    <img src={product.image_url} alt="" className="w-full h-full object-contain opacity-40 hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Info */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-indigo-400 text-xs font-bold uppercase tracking-[0.3em]">{product.category}</span>
                                <div className="h-[1px] w-12 bg-white/10" />
                                <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 text-indigo-500 fill-indigo-500" />
                                    <span className="text-xs text-slate-400 font-bold">4.9</span>
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight">
                                {product.name.toUpperCase()}
                            </h1>

                            <div className="flex items-baseline gap-6 mb-12">
                                <span className="text-4xl font-bold text-white font-mono">RS {product.price?.toLocaleString()}</span>
                                {product.original_price && (
                                    <span className="text-2xl text-slate-500 line-through font-mono">RS {product.original_price?.toLocaleString()}</span>
                                )}
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">The Specification</h3>
                                    <p className="text-slate-400 font-light leading-relaxed text-lg max-w-xl italic">
                                        "{product.description || "Experimental silhouette engineered for high-performance movement and distinct aesthetic presence."}"
                                    </p>
                                </div>

                                {/* Sizes */}
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Select Prototype Size</h3>
                                        <button className="flex items-center gap-2 text-[10px] uppercase font-bold text-indigo-400 hover:text-white transition-colors">
                                            <Ruler className="w-3 h-3" /> Size Guide
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                                        {(product.sizes || ['7', '8', '9', '10', '11']).map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`h-14 rounded-2xl flex items-center justify-center text-sm font-bold transition-all border ${
                                                    selectedSize === size
                                                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-[0_0_30px_rgba(79,70,229,0.3)] scale-105'
                                                        : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30'
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-4 pt-8">
                                    <button
                                        onClick={() => {
                                            if (selectedSize) {
                                                addToCart(product, selectedSize);
                                            } else {
                                                alert('Please select a size');
                                            }
                                        }}
                                        className="flex-grow h-20 bg-white text-black rounded-3xl text-sm font-bold uppercase tracking-[0.2em] hover:bg-indigo-500 hover:text-white transition-all duration-500 active:scale-95 flex items-center justify-center gap-4 group"
                                    >
                                        <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                        Secure Transaction — RS {product.price?.toLocaleString()}
                                    </button>
                                    <button 
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                        className={`w-20 h-20 rounded-3xl border flex items-center justify-center transition-all ${
                                            isWishlisted ? 'bg-red-500/10 border-red-500/50 text-red-500' : 'border-white/10 text-slate-500 hover:border-white/30'
                                        }`}
                                    >
                                        <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                                    </button>
                                </div>

                                {/* Trust Badges */}
                                <div className="grid grid-cols-2 gap-6 pt-12 border-t border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                            <Truck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-white uppercase tracking-widest">Rapid Transit</p>
                                            <p className="text-[10px] text-slate-500">2-4 Business Days</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-white uppercase tracking-widest">Authenticated</p>
                                            <p className="text-[10px] text-slate-500">Verified by Stride Labs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;


