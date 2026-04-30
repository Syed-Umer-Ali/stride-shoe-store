import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, Package, CheckCircle, AlertTriangle, Terminal } from 'lucide-react';

const ReturnPolicy = () => {
    const protocols = [
        {
            icon: RefreshCcw,
            title: "30-Day Evaluation Window",
            content: "You have a 30-day temporal window from the point of physical arrival to initiate a Return Authorization Protocol. Beyond this limit, all transactions are finalized in the ledger."
        },
        {
            icon: Package,
            title: "Pristine State Requirement",
            content: "Returned hardware must remain in factory-fresh condition. Any evidence of field-testing, structural wear, or environmental contamination will void the authorization."
        },
        {
            icon: CheckCircle,
            title: "Refund Materialization",
            content: "Once the audit is complete and structural integrity is verified, your refund will materialize in your original payment sector within 5-7 system cycles."
        },
        {
            icon: AlertTriangle,
            title: "Excluded Artifacts",
            content: "Custom-encoded silhouettes and final-phase clearance drops are non-returnable. Please verify all biometric sizing before finalizing the sync."
        }
    ];

    return (
        <div className="bg-[#050b18] min-h-screen pt-40 pb-20 overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative">
                {/* Background Text */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.02] text-[15vw] font-black italic select-none pointer-events-none">
                    RETURNS
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 mb-8"
                         style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0% 30%)' }}
                    >
                        <Terminal className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-black text-cyan-100 uppercase tracking-[0.5em]">Auth Protocol R-44</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase leading-none mb-8">
                        RETURN <span className="text-gradient">AUTHORIZATION</span>.
                    </h1>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest max-w-xl mx-auto">
                        Standard Operating Procedure for Structural Reversals
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {protocols.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-10 bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0% 10%)' }}
                        >
                            <div className="w-12 h-12 bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
                                <p.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase italic mb-4">{p.title}</h3>
                            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest leading-relaxed">
                                {p.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-cyan-500/5 border border-cyan-500/20 text-center"
                     style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0% 20%)' }}
                >
                    <h4 className="text-white font-black italic uppercase tracking-widest mb-4">Ready to initiate?</h4>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                        Enter your Order ID and Neural Link ID in the return portal.
                    </p>
                    <button className="btn-primary px-12 h-14">
                        <span className="tracking-[0.3em] font-black">START PROTOCOL</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReturnPolicy;
