import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductGrid = ({ limit, title }) => {
    const displayProducts = limit ? products.slice(0, limit) : products;

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title || "Featured Drops"}</h2>
                    <Link to="/shop" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">View all &rarr;</Link>
                </div>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {displayProducts.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 transition-opacity">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                />
                                <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                    <Heart className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to={`/product/${product.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
