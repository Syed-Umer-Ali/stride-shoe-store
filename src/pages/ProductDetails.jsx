import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, Truck, ShieldCheck } from 'lucide-react';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);

    if (!product) return <div className="pt-32 text-center">Product not found</div>;

    return (
        <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image gallery */}
                    <div className="flex flex-col-reverse">
                        <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">{product.price}</p>
                        </div>

                        <div className="mt-3">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <Star key={rating} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="sr-only">5 out of 5 stars</p>
                                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <p className="text-base text-gray-700">{product.description}</p>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                            </div>

                            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4 mt-4">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 ${selectedSize === size
                                                ? 'bg-black text-white border-transparent hover:bg-gray-800'
                                                : 'bg-white text-gray-900 border-gray-200'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 flex sm:flex-col1">
                            <button
                                onClick={() => {
                                    if (selectedSize) {
                                        addToCart(product, selectedSize);
                                        alert('Added to cart!');
                                    } else {
                                        alert('Please select a size');
                                    }
                                }}
                                className="max-w-xs flex-1 bg-black border border-transparent rounded-full py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-black sm:w-full transition-transform active:scale-95"
                            >
                                Add to bag
                            </button>
                        </div>

                        <div className="mt-6 text-center">
                            <div className="flex justify-center space-x-6">
                                <div className="flex items-center text-gray-500">
                                    <Truck className="h-5 w-5 mr-2" />
                                    <span className="text-sm">Free shipping</span>
                                </div>
                                <div className="flex items-center text-gray-500">
                                    <ShieldCheck className="h-5 w-5 mr-2" />
                                    <span className="text-sm">2 year warranty</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
