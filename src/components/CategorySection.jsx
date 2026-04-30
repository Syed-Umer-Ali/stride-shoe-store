import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
    {
        name: 'Velocity',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        href: '/shop',
        desc: 'Performance Running'
    },
    {
        name: 'Aura',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        href: '/shop',
        desc: 'Elite Lifestyle'
    },
    {
        name: 'Apex',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        href: '/shop',
        desc: 'Pro Basketball'
    }
];

const CategorySection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0c0c12] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-cyan-500 text-xs font-bold uppercase tracking-[0.5em] mb-4 block"
                        >
                            Curated Series // Protocol
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-black text-[#f5f0ea] italic uppercase leading-none">THE COLLECTIONS</h2>
                    </div>
                    <Link to="/shop" className="btn-outline !py-3 !px-6 text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                        Enter All Zones <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <motion.div 
                            key={cat.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-[600px] overflow-hidden border border-white/5"
                            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 95%, 95% 100%, 0 100%, 0% 5%)' }}
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#050b18]/40 to-transparent opacity-80" />
                            
                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.4em] mb-2 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {cat.desc}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-display text-[#f5f0ea] mb-6 uppercase tracking-tighter italic">
                                    {cat.name}
                                </h3>
                                <Link 
                                    to={cat.href}
                                    className="w-14 h-14 bg-cyan-600 text-white flex items-center justify-center transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                                    style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 20%)' }}
                                >
                                    <ArrowUpRight className="w-6 h-6" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default CategorySection;

