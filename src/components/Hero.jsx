import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Premium Sneaker Collection"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-900/60 to-pink-900/40"></div>
            </div>

            {/* Floating Shoe Element */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden lg:flex items-center justify-center">
                <div className="relative animate-float">
                    <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Featured Sneaker"
                        className="w-full max-w-lg drop-shadow-2xl transform rotate-[-15deg] hover:rotate-[-10deg] transition-transform duration-500"
                    />
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"></div>
                </div>
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6">
                        New Collection 2025
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                        Step Into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                            The Future.
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                        Where bold design meets uncompromising comfort.
                        Discover sneakers that make a statement.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/shop"
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Explore Collection
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/new-arrivals"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                        >
                            New Arrivals
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                </div>
            </div>

            {/* Custom CSS for floating animation */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default Hero;
