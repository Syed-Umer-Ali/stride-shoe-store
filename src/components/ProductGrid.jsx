import React from 'react';
import { Heart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const ProductGrid = ({ limit, title }) => {
    const displayProducts = limit ? products.slice(0, limit) : products;

    return (
        <section className="py-24 relative overflow-hidden bg-[#050b18]">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-black text-[#f5f0ea] mb-2 uppercase italic tracking-tighter"
                        >
                            {title || "PROTOCOL // DROPS"}
                        </motion.h2>
                        <div className="h-[2px] w-40 bg-gradient-to-r from-cyan-600 to-transparent" />
                    </div>
                    <Link to="/shop" className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400 hover:text-white transition-colors flex items-center gap-2">
                        ENTER GRID <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {displayProducts.map((product, index) => (
                        <motion.div 
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-[#12121a] min-h-[420px] flex flex-col transition-all duration-500 border border-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] shadow-2xl relative overflow-hidden"
                                style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%)' }}
                            >
                                {/* Larger Product Image Wrap */}
                                <div className="product-img-wrap relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                    <button className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-md border border-white/10 text-white/40 hover:text-cyan-400 transition-colors z-10"
                                        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                                    >
                                        <Heart className="h-4 w-4" />
                                    </button>
                                    
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-[8px] font-black uppercase tracking-[0.3em] bg-cyan-600/30 text-cyan-400 px-3 py-1 border border-cyan-500/30 backdrop-blur-md">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow p-8 bg-[#12121a]">
                                    <h3 className="text-xl font-black text-[#f5f0ea] mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tight italic">
                                        <Link to={`/product/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </h3>
                                    
                                    <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Structural Performance Chassis</p>

                                    <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] text-slate-500 uppercase tracking-widest font-black">PROTOCOL VALUE</span>
                                            <span className="text-2xl font-black text-[#f5f0ea] font-mono tracking-tighter">{product.price}</span>
                                        </div>
                                        <Link 
                                            to={`/product/${product.id}`}
                                            className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-cyan-500 transition-all shadow-lg"
                                            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductGrid;
