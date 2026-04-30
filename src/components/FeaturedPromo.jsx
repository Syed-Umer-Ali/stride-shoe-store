import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeaturedPromo = () => {
    const promoShoe = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80";

    return (
        <section className="py-24 relative overflow-hidden bg-[#0c0c12] border-y border-white/5">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden group h-[500px] lg:h-[600px] flex items-center border border-white/10 bg-[#12121a] shadow-2xl"
                    style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 85%, 95% 100%, 0 100%, 0% 15%)' }}
                >
                    {/* Content Left */}
                    <div className="relative z-20 px-10 md:px-20 max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-block py-1 px-4 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-[10px] font-black tracking-[0.4em] uppercase mb-8"
                        >
                            Exclusive Protocol Release
                        </motion.span>
                        
                        <h2 className="text-5xl md:text-8xl font-black text-[#f5f0ea] mb-8 leading-[0.85] uppercase italic drop-shadow-2xl">
                            THE <span className="text-gradient">CRYOS</span> <br />LABS.
                        </h2>
                        
                        <p className="text-[#f5f0ea]/80 text-lg md:text-xl font-bold leading-relaxed mb-10 max-w-md uppercase tracking-tight">
                            Experimental silhouettes forged in absolute zero. Featuring our new G-Shock carbon soles and liquid-cooled support systems.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link to="/shop" className="btn-primary flex items-center gap-3 h-16 px-10">
                                INITIALIZE ACCESS <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Image Right - High Visibility */}
                    <div className="absolute right-0 top-0 w-1/2 h-full z-10 pointer-events-none overflow-hidden">
                        <motion.img
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            transition={{ duration: 0.8 }}
                            src={promoShoe}
                            alt="Cryos Collection"
                            className="w-full h-full object-contain object-right transform translate-x-20 scale-125 drop-shadow-[0_0_60px_rgba(0,150,255,0.4)]"
                            style={{ filter: 'drop-shadow(0 0 40px rgba(0,150,255,0.3))' }}
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 right-10 flex flex-col items-end gap-2 text-white/10 font-bold tracking-tighter text-4xl pointer-events-none uppercase italic z-20">
                        <span>SYS//V04</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-500/40 font-mono">Status: Locked</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedPromo;
