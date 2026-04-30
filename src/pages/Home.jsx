import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import CategorySection from '../components/CategorySection';
import FeaturedPromo from '../components/FeaturedPromo';
import Newsletter from '../components/Newsletter';
import FloatingShoeShowcase from '../components/FloatingShoeShowcase';

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    
    // Parallax background text
    const textX = useTransform(smoothProgress, [0, 1], [0, -1000]);


    return (
        <div ref={containerRef} className="relative bg-[#050b18] overflow-hidden">
            {/* Background Parallax Text */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0 opacity-[0.03]">
                <motion.h1 
                    style={{ x: textX }}
                    className="text-[40rem] font-black whitespace-nowrap text-white leading-none mt-20"
                >
                    VELOCITY PRECISION MOTION VELOCITY
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20"
            >
                <Hero />
            </motion.div>

            <div className="relative z-10 flex flex-col">
                {/* Each section now has controlled padding and explicit backgrounds */}
                <div className="bg-[#050b18]">
                    <FloatingShoeShowcase scrollProgress={smoothProgress} />
                </div>

                <div className="bg-[#0c0c12]">
                    <CategorySection />
                </div>

                <div className="bg-[#050b18] border-y border-white/5">
                    <ProductGrid limit={4} title="LATEST PROTOCOLS" />
                </div>

                <div className="bg-[#0c0c12]">
                    <FeaturedPromo />
                </div>

                <div className="bg-[#050b18]">
                    <Newsletter />
                </div>
            </div>
        </div>
    );
};

export default Home;
