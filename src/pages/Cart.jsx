import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, CheckCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const [showSuccess, setShowSuccess] = useState(false);

    const handleCheckout = () => {
        setShowSuccess(true);
        setTimeout(() => {
            clearCart();
            setShowSuccess(false);
        }, 2500);
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-mesh pt-40 pb-20 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <ShoppingBag className="w-10 h-10 text-slate-500" />
                    </div>
                    <h2 className="text-4xl font-display text-white mb-4">THE BAG IS VOID.</h2>
                    <p className="text-slate-500 font-light max-w-md mx-auto mb-12">
                        Your selection archive is currently empty. Begin your evolution by exploring the latest drops.
                    </p>
                    <Link to="/shop" className="btn-primary inline-flex items-center gap-3">
                        Explore drops <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-mesh pt-32 pb-20">
            <AnimatePresence>
                {showSuccess && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -20, x: '-50%' }}
                        className="fixed top-24 left-1/2 z-50 glass-card bg-indigo-600/90 border-indigo-500 text-white px-8 py-4 rounded-3xl shadow-[0_0_40px_rgba(79,70,229,0.5)] flex items-center gap-4"
                    >
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-indigo-600">
                            <CheckCircle className="h-5 w-5" />
                        </div>
                        <span className="font-bold uppercase tracking-widest text-sm">Transaction Synchronized</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-6">
                <div className="flex items-center gap-4 mb-16">
                    <h1 className="text-5xl md:text-7xl font-display text-white">YOUR <span className="text-gradient">SELECTION</span>.</h1>
                    <div className="flex-grow h-[1px] bg-white/5 hidden md:block" />
                    <span className="text-slate-500 font-bold uppercase tracking-[0.2em]">{cartItems.length} ITEMS</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Item List */}
                    <div className="lg:col-span-7 space-y-8">
                        <AnimatePresence mode="popLayout">
                            {cartItems.map((item) => (
                                <motion.div
                                    key={`${item.id}-${item.size}`}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="glass-card rounded-[2.5rem] p-8 group flex flex-col sm:flex-row gap-8 items-center"
                                >
                                    <div className="w-full sm:w-48 aspect-square rounded-[2rem] overflow-hidden bg-white/5 p-4 flex items-center justify-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="flex-grow flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-2xl font-display text-white group-hover:text-indigo-400 transition-colors">
                                                <Link to={`/product/${item.id}`}>{item.name}</Link>
                                            </h3>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.size)}
                                                className="w-10 h-10 rounded-full bg-red-500/10 text-red-500/40 hover:text-red-500 hover:bg-red-500/20 transition-all flex items-center justify-center"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">{item.category}</span>
                                            <div className="w-1 h-1 rounded-full bg-white/20" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Size {item.size}</span>
                                        </div>

                                        <div className="flex justify-between items-end mt-auto">
                                            <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md rounded-2xl p-1 border border-white/5">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </button>
                                                <span className="text-sm font-bold text-white w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </button>
                                            </div>
                                            <span className="text-2xl font-bold text-white font-mono">RS {item.price?.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Summary Card */}
                    <div className="lg:col-span-5">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card rounded-[3rem] p-10 sticky top-32"
                        >
                            <h2 className="text-3xl font-display text-white mb-8">SUMMARY</h2>

                            <div className="space-y-6 mb-10">
                                <div className="flex justify-between">
                                    <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Subtotal</span>
                                    <span className="text-white font-mono">RS {cartTotal?.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Logistics</span>
                                    <span className="text-indigo-400 uppercase tracking-widest text-xs font-bold">Complimentary</span>
                                </div>
                                <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                                    <span className="text-white uppercase tracking-[0.2em] text-sm font-bold">Aggregate Total</span>
                                    <span className="text-4xl font-bold text-white font-mono">RS {cartTotal?.toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full h-20 bg-white text-black rounded-3xl text-sm font-bold uppercase tracking-[0.2em] hover:bg-indigo-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group"
                            >
                                Execute Checkout <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                            
                            <div className="mt-8 flex items-center justify-center gap-6">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Secure</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                                        <ShoppingBag className="w-5 h-5" />
                                    </div>
                                    <span className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Certified</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

