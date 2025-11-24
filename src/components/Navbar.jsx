import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-black' : 'text-gray-500 hover:text-gray-900';
    };

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900">STRIDE</Link>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link to="/shop" className={`${isActive('/shop')} transition-colors text-sm font-medium`}>Shop</Link>
                        <Link to="/new-arrivals" className={`${isActive('/new-arrivals')} transition-colors text-sm font-medium`}>New Arrivals</Link>
                        <Link to="/stories" className={`${isActive('/stories')} transition-colors text-sm font-medium`}>Stories</Link>
                        <Link to="/about" className={`${isActive('/about')} transition-colors text-sm font-medium`}>About</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="text-gray-400 hover:text-gray-900 transition-colors">
                            <Search className="h-5 w-5" />
                        </button>
                        <Link to="/cart" className="text-gray-400 hover:text-gray-900 transition-colors relative">
                            <ShoppingBag className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button
                            className="md:hidden text-gray-400 hover:text-gray-900"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Shop</Link>
                        <Link to="/new-arrivals" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">New Arrivals</Link>
                        <Link to="/stories" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Stories</Link>
                        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
