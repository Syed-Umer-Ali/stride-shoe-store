import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050b18] pt-32 pb-10 border-t border-cyan-500/10 relative overflow-hidden">
            {/* Background Text Overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
                <span className="text-[20vw] font-bold tracking-[0.5em] leading-none uppercase italic">CRYOS</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="text-3xl font-bold tracking-[0.3em] text-white flex items-center gap-2 mb-8 group">
                            <div className="w-10 h-10 bg-cyan-600 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                                <span className="text-white text-sm -rotate-45 group-hover:rotate-0 transition-transform">S</span>
                            </div>
                            STRIDE
                        </Link>
                        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest leading-relaxed mb-8 italic">
                            Redefining the boundaries of movement through technical innovation and cryogenic engineering.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <motion.a 
                                    key={i}
                                    href="#" 
                                    whileHover={{ y: -5, color: '#06b6d4' }}
                                    className="w-12 h-12 bg-white/5 flex items-center justify-center border border-white/5 text-slate-500 transition-all"
                                    style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                                >
                                    <Icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border-l-2 border-cyan-500 pl-4">Protocol Path</h4>
                        <ul className="space-y-4">
                            {['Shop', 'New Arrivals', 'Stories', 'About'].map((link) => (
                                <li key={link}>
                                    <Link 
                                        to={`/${link.toLowerCase().replace(' ', '-')}`} 
                                        className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-cyan-400 transition-all flex items-center group gap-3"
                                    >
                                        <span className="w-4 h-[1px] bg-white/10 transition-all group-hover:bg-cyan-500 group-hover:w-8" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experience */}
                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border-l-2 border-cyan-500 pl-4">System Access</h4>
                        <ul className="space-y-4">
                            {['Stride Lab', 'Sizing', 'Shipping'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-cyan-400 transition-all flex items-center group gap-3">
                                        <span className="w-4 h-[1px] bg-white/10 transition-all group-hover:bg-cyan-500 group-hover:w-8" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Link to="/return-policy" className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-cyan-400 transition-all flex items-center group gap-3">
                                    <span className="w-4 h-[1px] bg-white/10 transition-all group-hover:bg-cyan-500 group-hover:w-8" />
                                    Return Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="glass-card p-8 border-cyan-500/10"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0% 15%)' }}
                    >
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Contact Hub</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0"
                                     style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                                >
                                    <MapPin className="h-5 w-5 text-cyan-400" />
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 leading-relaxed pt-2">CRYOS COMPLEX // SECTOR 7</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0"
                                     style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                                >
                                    <Mail className="h-5 w-5 text-cyan-400" />
                                </div>
                                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">蓝STRIDE@LABS.COM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.3em]">
                        &copy; {currentYear} STRIDE CRYOS SYSTEMS. ALL BLUEPRINTS ENCRYPTED.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/privacy-policy" className="text-[9px] text-slate-600 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] font-bold">Privacy Policy</Link>
                        <Link to="/return-policy" className="text-[9px] text-slate-600 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] font-bold">Return Policy</Link>
                        <a href="#" className="text-[9px] text-slate-600 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] font-bold flex items-center gap-1">
                            Cookie Protocol <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;

