import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#050b18]">
            {/* Background Layer (Z-0) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050b18] via-transparent to-[#050b18] z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050b18] via-transparent to-[#050b18] z-10" />
                <div className="absolute inset-0 bg-black/60 z-10" />
                
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-30 scale-105"
                >
                    <source src="https://player.vimeo.com/external/328945607.hd.mp4?s=8f6a9e1e0a9d0a9d0a9d0a9d0a9d0a9d0a9d0a9d&profile_id=175" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-6 relative z-30">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[100vh] pt-[80px]">
                    {/* Left Side: Content */}
                    <div className="relative z-30 py-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="inline-flex items-center gap-4 px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 mb-8 backdrop-blur-md"
                                 style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0% 30%)' }}
                            >
                                <Zap className="w-3 h-3 text-cyan-400" />
                                <span className="text-[10px] font-black text-cyan-100 uppercase tracking-[0.5em]">Status: Authorized</span>
                            </div>
                            
                            <h1 className="text-7xl md:text-11xl font-black text-[#f5f0ea] leading-[0.85] uppercase italic mb-8 drop-shadow-2xl">
                                STRIDE <br />
                                <span className="text-gradient">EVOLVED.</span>
                            </h1>
                            
                            <p className="text-[#f5f0ea]/90 text-lg md:text-xl max-w-xl mb-12 font-bold uppercase tracking-tight leading-relaxed border-l-4 border-cyan-500 pl-6 bg-white/5 py-6">
                                Experience the future of movement. Forged in the lab, designed for the streets.
                            </p>

                            <div className="flex flex-wrap gap-8">
                                <Link to="/shop" className="btn-primary h-20 px-16 group relative shadow-[0_0_50px_rgba(6,182,212,0.4)]">
                                    <ShoppingBag className="w-6 h-6 mr-4" />
                                    <span className="tracking-[0.3em] font-black">SHOP NOW</span>
                                </Link>
                                <Link to="/about" className="btn-outline h-20 px-16 backdrop-blur-xl group">
                                    <span className="tracking-[0.3em] font-black">THE LAB</span>
                                    <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Reserved for wrapper in grid */}
                    <div className="hidden lg:block h-full min-h-[600px]"></div>
                </div>
            </div>

            {/* Absolute Shoe Wrap */}
            <div className="hero-shoe-wrap">
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img 
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                        alt="Hero Shoe" 
                        className="hero-shoe-img"
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40">
                <span className="text-[10px] font-black uppercase tracking-[1em] text-white/40 italic">Scroll Down</span>
                <div className="w-[1px] h-12 bg-cyan-500 animate-pulse" />
            </div>
        </section>
    );
};

export default Hero;
