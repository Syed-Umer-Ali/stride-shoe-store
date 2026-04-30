import React from 'react';
import { Award, Users, TrendingUp, Globe, Zap, ShieldCheck, Cpu, Terminal, Target } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const { scrollYProgress } = useScroll();
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

    const stats = [
        { label: 'Archived Drops', value: '100K+' },
        { label: 'System Hubs', value: '25+' },
        { label: 'Active Pilots', value: '50K+' },
        { label: 'Core Engineers', value: '50+' }
    ];

    const values = [
        {
            icon: Cpu,
            title: 'Neural Precision',
            description: 'Architecture mapped to human kinetic potential with sub-millimeter accuracy.'
        },
        {
            icon: Globe,
            title: 'Sovereign Network',
            description: 'A global protocol of high-velocity movement across all sectors.'
        },
        {
            icon: ShieldCheck,
            title: 'Encryption Grade',
            description: 'Every silhouette is laboratory-verified for absolute structural integrity.'
        },
        {
            icon: Zap,
            title: 'Thermal Flux',
            description: 'Engineered for optimal efficiency in extreme environmental vectors.'
        }
    ];

    return (
        <div className="bg-[#050b18] overflow-hidden">
            {/* Cinematic About Hero */}
            <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div 
                    style={{ y: y1 }}
                    className="absolute inset-0 z-0 opacity-20"
                >
                    <div className="absolute inset-0 bg-[#050b18] mix-blend-multiply z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1579546673183-59d44816634c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        alt="Cryos Architecture"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b18]/50 to-[#050b18]" />
                </motion.div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 mb-8"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)' }}
                    >
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-black text-cyan-100 uppercase tracking-[0.5em]">Manifesto Protocol V.04</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-9xl font-black text-white italic leading-tight uppercase mb-8"
                    >
                        THE <span className="text-gradient">CRYOS</span> <br /> DOCTRINE.
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto text-lg text-slate-400 font-bold uppercase tracking-tighter leading-tight"
                    >
                        // Engineering the absolute zero of movement. We don't build footwear; we code kinetic propulsion systems.
                    </motion.p>
                </div>

                {/* Decorative Brackets */}
                <div className="absolute bottom-10 left-10 w-32 h-32 border-l border-b border-white/5 pointer-events-none" />
                <div className="absolute top-32 right-10 w-32 h-32 border-r border-t border-white/5 pointer-events-none" />
            </div>

            {/* Mission Section: The Architecture */}
            <section className="py-32 relative border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-7xl font-black text-white italic uppercase leading-[0.8] mb-12">
                                ENGINEERING <br /> <span className="text-cyan-500">ABSOLUTE</span> <br /> VELOCITY.
                            </h2>
                            <div className="space-y-8 text-slate-400 text-lg font-bold uppercase tracking-tighter leading-tight">
                                <p className="border-l-4 border-cyan-500 pl-6 py-2">
                                    // STRIDE LABS operates at the intersection of material science and digital fluidity. Every silhouette is an optimization of the human-environment interface.
                                </p>
                                <p className="opacity-60">
                                    Our proprietary carbon-matrix composites and liquid-cooled support structures ensure zero energy loss across all high-velocity vectors.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            style={{ y: y2 }}
                            className="relative group"
                        >
                            <div className="bg-white/5 p-4"
                                 style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0% 15%)' }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="Design Laboratory"
                                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                                />
                            </div>
                            {/* Floating Tech Stat */}
                            <motion.div 
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-10 -right-10 bg-cyan-600 p-8 z-20 shadow-[0_0_50px_rgba(6,182,212,0.4)]"
                                style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%)' }}
                            >
                                <span className="text-5xl font-black text-white italic block mb-1">99.9%</span>
                                <span className="text-[10px] text-cyan-100 uppercase tracking-widest font-black">PRECISION_RATE</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* System Values Grid */}
            <section className="py-32 bg-white/[0.01]">
                <div className="container mx-auto px-6 text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl md:text-8xl font-black text-white italic uppercase tracking-tighter mb-8"
                    >
                        THE CORE <span className="text-gradient">VALUES</span>.
                    </motion.h2>
                </div>

                <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => (
                        <motion.div 
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white/5 border border-white/5 p-10 hover:border-cyan-500/50 transition-all"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 10%)' }}
                        >
                            <div className="w-16 h-16 bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                                <value.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-black text-white uppercase italic mb-4">{value.title}</h3>
                            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Visionary Section: The Founder */}
            <section className="py-40 relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-24">
                        {/* Profile Image with Tech Frame */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative group w-full md:w-[450px] flex-shrink-0"
                        >
                            <div className="relative z-10 bg-[#050b18] p-4"
                                 style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0% 15%)' }}
                            >
                                <img
                                    src="/founder.jpg"
                                    alt="Founder SYED UMER ALI"
                                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-90 group-hover:brightness-110 shadow-2xl"
                                />
                            </div>
                            
                            {/* Animated Scanner Frame */}
                            <div className="absolute -inset-4 border border-cyan-500/20 pointer-events-none -z-0">
                                <motion.div 
                                    animate={{ y: [0, 400, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                                />
                            </div>

                            <motion.div 
                                initial={{ rotate: 90 }}
                                className="absolute -right-20 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-700 uppercase tracking-[1em] whitespace-nowrap hidden lg:block"
                            >
                                // CHIEF_ARCHITECT_SYED_UMER_ALI
                            </motion.div>
                        </motion.div>

                        <div className="flex-grow space-y-8">
                            <div className="space-y-2">
                                <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] block">// ARCHITECT & VISIONARY</span>
                                <h3 className="text-5xl md:text-7xl font-black text-white italic uppercase leading-none">SYED UMER <span className="text-gradient">ALI</span></h3>
                            </div>
                            
                            <p className="text-slate-400 text-xl font-bold uppercase tracking-tighter leading-tight italic border-l-4 border-cyan-500 pl-8">
                                "We are not selling products. We are providing the technical propulsion required to reach the next stage of human evolution."
                            </p>
                            
                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div className="space-y-2">
                                    <div className="text-white text-xl font-black italic tracking-widest">PHASE_04</div>
                                    <div className="text-[9px] text-slate-600 font-bold tracking-[0.3em] uppercase underline underline-offset-8">Current Protocol</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-white text-xl font-black italic tracking-widest text-cyan-500">V.INFINITY</div>
                                    <div className="text-[9px] text-slate-600 font-bold tracking-[0.3em] uppercase underline underline-offset-8">Optimization Target</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Protocol Timeline */}
            <section className="py-32 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-black text-white text-center italic uppercase tracking-[0.4em] mb-24">SYSTEM_HISTORY</h2>
                    <div className="relative space-y-24">
                        {/* Center Line */}
                        <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-cyan-500/50 via-white/5 to-transparent ml-[48px] md:ml-0 md:left-1/2" />
                        
                        {[
                            { year: '2025', title: 'THE IGNITION', desc: 'STRIDE LABS initiated within a high-density digital workshop.' },
                            { year: '2025', title: 'V1.0 DROP', desc: 'Experimental series sold out across all sectors in 240 seconds.' },
                            { year: '2026', title: 'GLOBAL GRID', desc: 'Establishing sovereign hubs across 25+ global sectors.' }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full md:w-1/2 text-center md:text-left px-12">
                                    <span className="text-4xl font-black text-white/10 italic mb-2 block group-hover:text-cyan-500 transition-colors">{item.year}</span>
                                    <h4 className="text-2xl font-black text-white italic uppercase tracking-widest mb-2">{item.title}</h4>
                                    <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="w-12 h-12 bg-[#050b18] border-4 border-cyan-500/30 rotate-45 z-10 flex-shrink-0" />
                                <div className="w-full md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;


