import React from 'react';

const Newsletter = () => {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                <div className="lg:w-0 lg:flex-1">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Sign up for our newsletter
                    </h2>
                    <p className="mt-3 max-w-3xl text-lg text-gray-300">
                        Be the first to know about new drops, exclusive offers, and behind-the-scenes content.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                    <form className="sm:flex">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email-address"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white focus:border-white sm:max-w-xs rounded-full"
                            placeholder="Enter your email"
                        />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-colors"
                            >
                                Notify me
                            </button>
                        </div>
                    </form>
                    <p className="mt-3 text-sm text-gray-300">
                        We care about the protection of your data. Read our{' '}
                        <a href="#" className="text-white font-medium underline">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
