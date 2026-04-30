import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Zap, Shield, Target, Cpu } from 'lucide-react';

const FloatingShoeShowcase = ({ scrollProgress }) => {
    // FLY DOWN LOGIC: Cross-screen transition from Hero (Center-Right) to Showcase (Center-Left)
    // -60vh relative to landing spot puts it in Hero center.
    // 40vw relative to landing spot puts it in Hero right.
    const shoeY = useTransform(scrollProgress, [0, 0.25], ["-60vh", "0vh"]);
    const shoeX = useTransform(scrollProgress, [0, 0.25], ["40vw", "0vw"]);
    const shoeRotate = useTransform(scrollProgress, [0, 0.25], [-35, 0]);
    const shoeScale = useTransform(scrollProgress, [0, 0.25], [0.8, 1.2]);

    const shoeImg = "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";



    return (
        <section className="relative min-h-screen flex items-center py-32 overflow-hidden bg-[#050b18] border-y border-white/5">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Left Side: The landing zone for the sneaker */}
                    <div className="hidden lg:block min-h-[600px] relative">
                        {/* Parent Container - relative */}
                        <div className="relative w-full h-[600px]">
                            {/* The Shoe - absolute centered */}
                            <motion.div 
                                layoutId="main-sneaker"
                                style={{ x: shoeX, y: shoeY, rotate: shoeRotate, scale: shoeScale }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                                transition={{ type: "spring", stiffness: 40, damping: 20 }}
                            >
                                <div className="relative group perspective-1000">
                                    <img 
                                        src={shoeImg} 
                                        alt="Cryos Sneaker" 
                                        className="w-[650px] h-auto drop-shadow-[0_0_60px_rgba(6,182,212,0.4)] shoe-float-effect brightness-110"
                                        style={{ filter: 'drop-shadow(0 0 40px rgba(0,150,255,0.4))' }}
                                    />
                                    
                                    {/* Ground Shadow */}
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 0.3, scale: 1 }}
                                        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-80 h-4 bg-black blur-2xl rounded-full"
                                    />
                                </div>
                            </motion.div>
                        </div>


                         {/* Landing Platform Detail */}
                         <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1 bg-cyan-500/50 blur-sm shadow-[0_0_50px_rgba(6,182,212,0.8)]"
                        />
                    </div>

                    {/* Right Side: Product Narrative */}

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <span className="text-cyan-500 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Product Dossier // V.04</span>
                            <h2 className="text-6xl md:text-8xl font-black text-[#f5f0ea] leading-[0.85] uppercase italic drop-shadow-2xl">
                                KINETIC <br />
                                <span className="text-gradient">ARCHITECTURE</span>
                            </h2>
                        </div>

                        <p className="text-[#f5f0ea]/70 text-lg font-bold leading-relaxed max-w-xl uppercase tracking-tight">
                            Engineered for absolute zero. The Cryos chassis is laser-sintered for extreme precision and thermal efficiency in high-velocity environments.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-8">
                            {[
                                { icon: Zap, title: "CRYO-PROP", desc: "Liquid Core" },
                                { icon: Shield, title: "AERO-SHELL", desc: "Carbon Composite" },
                                { icon: Cpu, title: "GRID-LINK", desc: "Neural Sync" }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4 group">
                                    <div className="w-14 h-14 bg-cyan-600/5 flex items-center justify-center text-cyan-500 border border-cyan-500/10 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500"
                                         style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                                    >
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-[#f5f0ea] text-[10px] font-black uppercase tracking-[0.2em]">{item.title}</h4>
                                        <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <button className="btn-primary">
                                CONFIGURE PROTOCOL
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute -bottom-10 right-0 opacity-[0.02] pointer-events-none select-none">
                <h3 className="text-[20rem] font-black text-white leading-none">CRYOS</h3>
            </div>
        </section>
    );
};

export default FloatingShoeShowcase;

