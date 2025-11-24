import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4">STRIDE</h3>
                        <p className="text-sm text-gray-400 mb-4">
                            Premium sneakers for those who dare to move forward.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/shop" className="text-sm hover:text-white transition-colors">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/new-arrivals" className="text-sm hover:text-white transition-colors">
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link to="/stories" className="text-sm hover:text-white transition-colors">
                                    Stories
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm hover:text-white transition-colors">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition-colors">
                                    Shipping Info
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition-colors">
                                    Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm hover:text-white transition-colors">
                                    Size Guide
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">123 Sneaker Street, Fashion District, NY 10001</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                <span className="text-sm">support@stride.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2025 STRIDE. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
