import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import CategorySection from '../components/CategorySection';
import FeaturedPromo from '../components/FeaturedPromo';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Hero />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <CategorySection />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <ProductGrid limit={4} title="Featured Drops" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <FeaturedPromo />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Newsletter />
            </motion.div>
        </div>
    );
};

export default Home;
