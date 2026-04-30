import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#12121a] p-8 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl"
                    style={{ clipPath: 'polygon(3% 0, 100% 0, 100% 80%, 97% 100%, 0 100%, 0% 20%)' }}
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[100px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] -ml-32 -mb-32" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-7xl font-black text-[#f5f0ea] mb-6 leading-[0.85] uppercase italic drop-shadow-2xl">
                                JOIN THE <br />
                                <span className="text-gradient">CRYOS PROTOCOL</span>
                            </h2>
                            <p className="text-[#f5f0ea]/70 text-lg font-bold leading-relaxed max-w-md uppercase tracking-tight">
                                Synchronize your feed. Get prioritized access to limited-run chassis and engineering blueprints from Stride Labs.
                            </p>
                        </div>

                        <div className="w-full">
                            <form className="relative group">
                                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 text-white pl-16 pr-40 py-5 focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600 uppercase tracking-widest text-xs font-bold"
                                    placeholder="Enter Protocol Address"
                                    style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0% 30%)' }}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-2 bottom-2 bg-cyan-600 text-white px-10 font-bold hover:bg-cyan-500 active:scale-95 transition-all flex items-center gap-2"
                                    style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%)' }}
                                >
                                    SYNC <Send className="w-4 h-4" />
                                </button>
                            </form>
                            <p className="mt-6 text-[9px] text-slate-600 text-center lg:text-left uppercase tracking-[0.2em]">
                                Encryption guaranteed. Read our <a href="#" className="text-cyan-500 hover:underline">Privacy Dossier</a>.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


export default Newsletter;

