import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "01 // Data Acquisition",
            content: "We collect only the essential biometric and telemetry data required to optimize your Stride experience. This includes gait analysis (if using Stride-Link hardware) and standard transaction metadata."
        },
        {
            title: "02 // Encryption Standards",
            content: "All sensitive data is processed through our Cryos-Grade encryption layers. We utilize quantum-resistant protocols to ensure your architectural blueprints and personal identifiers remain sovereign."
        },
        {
            title: "03 // Third-Party Synchronization",
            content: "Stride Cryos Systems does not sell your data to external entities. Synchronization only occurs with verified logistics partners required for the physical manifestation of your orders."
        },
        {
            title: "04 // Neural Rights",
            content: "Users maintain absolute authority over their digital shadow. You may request a complete system purge of all archived telemetry at any time through the Control Hub."
        }
    ];

    return (
        <div className="bg-[#050b18] min-h-screen pt-40 pb-20 overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative">
                {/* Background Text */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.02] text-[15vw] font-black italic select-none pointer-events-none">
                    PRIVACY
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 mb-8"
                         style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)' }}
                    >
                        <Shield className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-black text-cyan-100 uppercase tracking-[0.5em]">Security Protocol Alpha</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase leading-none mb-8">
                        PRIVACY <span className="text-gradient">PROTOCOL</span>.
                    </h1>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest max-w-xl mx-auto">
                        Last System Update: April 30, 2026 // Archive Revision: V.4.0.2
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {sections.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-10 bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all relative"
                            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 90%, 95% 100%, 0 100%, 0% 10%)' }}
                        >
                            <h2 className="text-2xl font-black text-white uppercase italic mb-6 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-cyan-500" />
                                {section.title}
                            </h2>
                            <p className="text-slate-400 font-medium text-sm uppercase tracking-widest leading-relaxed pl-12">
                                {section.content}
                            </p>
                            
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/20" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-12 border border-dashed border-white/10 text-center">
                    <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em] leading-loose">
                        By continuing your access to Stride Cryos Systems, you acknowledge your alignment with these technical protocols. <br />
                        Questions? Contact the Control Hub at <span className="text-cyan-500">LEGAL@STRIDE.LABS</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
