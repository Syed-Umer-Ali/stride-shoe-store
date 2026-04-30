import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, User, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        return location.pathname === path ? 'text-white' : 'text-slate-500 hover:text-white';
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
            setShowSearch(false);
            setSearchQuery('');
        }
    };

    return (
        <nav 
            className={`fixed w-full z-[100] transition-all duration-700 ${
                scrolled ? 'py-4' : 'py-8'
            }`}
        >
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`relative glass-card px-8 flex justify-between items-center h-20 transition-all duration-700 ${
                        scrolled ? 'bg-[#050b18]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-cyan-500/20' : 'bg-white/5 border-white/5'
                    }`}
                    style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0% 30%)' }}
                >
                    {/* Brand */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-4 group">
                            <motion.div 
                                whileHover={{ rotate: 180, scale: 1.1 }}
                                className="w-10 h-10 bg-cyan-600 rounded-sm flex items-center justify-center transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                            >
                                <div className="w-5 h-5 border-2 border-white rounded-none rotate-45" />
                            </motion.div>
                            <span className="text-2xl font-display text-white tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-500 uppercase">
                                Stride
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex items-center gap-10">
                        {['Shop', 'Stories', 'About'].map((item, i) => (
                            <Link 
                                key={item}
                                to={`/${item.toLowerCase().replace(' ', '-')}`} 
                                className={`${isActive(`/${item.toLowerCase().replace(' ', '-')}`)} transition-all text-[10px] font-bold uppercase tracking-[0.3em] relative group`}
                            >
                                {item}
                                <motion.span 
                                    className="absolute -bottom-2 left-0 h-[2px] bg-cyan-500 rounded-full"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Action Hub */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowSearch(!showSearch)}
                            className="w-12 h-12 bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all border border-white/5"
                            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                        >
                            <Search className="w-5 h-5" />
                        </button>
                        
                        <Link to="/cart" className="w-12 h-12 bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all relative border border-white/5"
                            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                        >
                            <ShoppingBag className="w-5 h-5" />
                            <AnimatePresence>
                                {cartCount > 0 && (
                                    <motion.span 
                                        initial={{ scale: 0, y: 10 }}
                                        animate={{ scale: 1, y: 0 }}
                                        exit={{ scale: 0, y: 10 }}
                                        className="absolute -top-1 -right-1 bg-cyan-600 text-white text-[8px] font-bold h-5 w-5 flex items-center justify-center border border-black"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>

                        <div className="hidden sm:flex items-center gap-4 ml-4">
                            <Link to="/login" className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-all shadow-xl"
                                style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                            >
                                <User className="w-5 h-5" />
                            </Link>
                        </div>

                        <button
                            className="lg:hidden w-12 h-12 bg-cyan-600 flex items-center justify-center text-white"
                            onClick={() => setIsMenuOpen(true)}
                            style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>

                {/* Search Overlay */}
                <AnimatePresence>
                    {showSearch && (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="absolute top-full left-0 w-full mt-4 px-6 z-40"
                        >
                            <form onSubmit={handleSearch} className="max-w-3xl mx-auto glass-card p-4 flex items-center border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                style={{ clipPath: 'polygon(3% 0, 100% 0, 100% 70%, 97% 100%, 0 100%, 0% 30%)' }}
                            >
                                <div className="pl-6 text-cyan-500">
                                    <Search className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="SEARCH THE GRID..."
                                    className="bg-transparent border-none focus:ring-0 text-white placeholder-slate-600 w-full px-6 text-sm font-bold tracking-widest uppercase"
                                    autoFocus
                                />
                                <button
                                    onClick={() => setShowSearch(false)}
                                    type="button"
                                    className="px-6 py-3 bg-white/5 text-slate-400 hover:text-cyan-400 text-[10px] font-bold"
                                >
                                    CLOSE
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Premium Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#050b18]/95 backdrop-blur-3xl z-[200] lg:hidden"
                    >
                        <div className="flex justify-between items-center p-10">
                            <span className="text-2xl font-display text-white tracking-widest uppercase">Stride</span>
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="w-12 h-12 bg-white/5 flex items-center justify-center text-white"
                                style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center h-full space-y-12 pb-32">
                            {['Shop', 'Stories', 'About'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link 
                                        to={`/${item.toLowerCase().replace(' ', '-')}`} 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-5xl font-display text-white group flex items-center gap-4"
                                    >
                                        <span className="text-cyan-500 text-xs font-bold font-mono">0{i+1}</span>
                                        {item}
                                        <ChevronRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link 
                                    to="/login" 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="btn-primary !px-12 !py-6"
                                >
                                    JOIN ACCESS
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;


