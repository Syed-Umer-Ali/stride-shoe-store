import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedPromo = () => {
    return (
        <div className="bg-gray-900 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/hero-banner.png"
                            alt="Midnight Collection"
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative px-6 py-16 sm:px-12 sm:py-24 lg:py-32 lg:px-16">
                        <div className="max-w-lg">
                            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-4">
                                Limited Edition
                            </span>
                            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                The Midnight Collection
                            </h2>
                            <p className="mt-6 text-xl text-gray-300 max-w-md">
                                Engineered for the night. Premium materials meet cutting-edge design in our most exclusive drop yet.
                            </p>
                            <div className="mt-10">
                                <Link
                                    to="/shop"
                                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPromo;
