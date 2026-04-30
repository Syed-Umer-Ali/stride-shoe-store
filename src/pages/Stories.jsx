import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Calendar, Bookmark } from 'lucide-react';

const stories = [
    {
        id: 1,
        title: 'THE KINETIC REVOLUTION',
        category: 'ENGINEERING',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        excerpt: 'Stripping back the noise to isolate pure velocity. How the V1.0 came to life.',
        date: 'Oct 12, 2025'
    },
    {
        id: 2,
        title: 'NEON DRIFT: TOKYO BY NIGHT',
        category: 'CULTURE',
        image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        excerpt: 'Chasing the light through the Shibuya crossing in the new Urban Series.',
        date: 'Sep 28, 2025'
    },
    {
        id: 3,
        title: 'ZERO FOOTPRINT PROTOCOL',
        category: 'SUSTAINABILITY',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        excerpt: 'Transitioning to 100% molecular-recycling by the next solar cycle.',
        date: 'Sep 15, 2025'
    }
];

const Stories = () => {
    return (
        <div className="bg-[#020617] min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-indigo-500 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Archive Journal</span>
                        <h1 className="text-5xl md:text-8xl font-display text-white leading-none">
                            CULTURAL <br /> <span className="text-gradient">CHRONICLES</span>.
                        </h1>
                    </motion.div>
                    <div className="max-w-xs">
                        <p className="text-slate-400 font-light leading-relaxed">
                            A deep dive into the engineering, athletes, and sub-cultures defining the Stride universe.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid gap-12 lg:grid-cols-3">
                    {stories.map((story, i) => (
                        <motion.div 
                            key={story.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col"
                        >
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8">
                                <motion.img 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                                    src={story.image} 
                                    alt={story.title} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                                <div className="absolute top-6 right-6">
                                    <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors">
                                        <Bookmark className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="absolute bottom-8 left-8">
                                    <span className="px-4 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest">
                                        {story.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center gap-4 mb-4 text-slate-500">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{story.date}</span>
                                </div>
                                <h3 className="text-3xl font-display text-white mb-4 group-hover:text-indigo-400 transition-colors">
                                    {story.title}
                                </h3>
                                <p className="text-slate-400 font-light leading-relaxed mb-8 flex-grow">
                                    {story.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest group/btn">
                                    Read Narrative 
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Magazine Footer */}
                <div className="mt-32 border-t border-white/5 pt-20 text-center">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h4 className="text-4xl font-display text-white mb-6">SUBSCRIBE TO THE LAB.</h4>
                        <p className="text-slate-400 mb-10">Get notified about exclusive drops, athlete stories, and engineering updates directly in your terminal.</p>
                        <div className="flex gap-4 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="ENTER EMAIL"
                                className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-indigo-500 transition-colors"
                            />
                            <button className="btn-primary !rounded-2xl !py-4">JOIN</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Stories;

