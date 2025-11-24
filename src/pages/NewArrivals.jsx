import React from 'react';
import ProductGrid from '../components/ProductGrid';

const NewArrivals = () => {
    return (
        <div className="pt-24">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">New Arrivals</h1>
                <p className="mt-4 text-xl text-gray-500">The latest heat, just dropped.</p>
            </div>
            <ProductGrid limit={8} title=" " />
        </div>
    );
};

export default NewArrivals;
