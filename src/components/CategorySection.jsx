import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        name: 'Running',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        href: '/shop'
    },
    {
        name: 'Lifestyle',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        href: '/shop'
    },
    {
        name: 'Basketball',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        href: '/shop'
    }
];

const CategorySection = () => {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
                    <Link to="/shop" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        Browse all categories<span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                    <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 relative">
                        <img
                            src={categories[0].image}
                            alt={categories[0].name}
                            className="object-center object-cover group-hover:opacity-75 transition-opacity w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 p-6 flex items-end">
                            <div>
                                <h3 className="font-semibold text-white text-xl">
                                    <Link to={categories[0].href}>
                                        <span className="absolute inset-0" />
                                        {categories[0].name}
                                    </Link>
                                </h3>
                                <p aria-hidden="true" className="mt-1 text-sm text-white">
                                    Shop now
                                </p>
                            </div>
                        </div>
                    </div>
                    {categories.slice(1).map((category) => (
                        <div key={category.name} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden relative sm:aspect-none sm:h-full">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="object-center object-cover group-hover:opacity-75 transition-opacity w-full h-full absolute inset-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 p-6 flex items-end">
                                <div>
                                    <h3 className="font-semibold text-white text-xl">
                                        <Link to={category.href}>
                                            <span className="absolute inset-0" />
                                            {category.name}
                                        </Link>
                                    </h3>
                                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                                        Shop now
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 sm:hidden">
                    <Link to="/shop" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Browse all categories<span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;
