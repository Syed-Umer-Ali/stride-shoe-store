import React from 'react';
import { Award, Heart, Users, TrendingUp } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Happy Customers', value: '50K+' },
        { label: 'Products Sold', value: '100K+' },
        { label: 'Countries', value: '25+' },
        { label: 'Team Members', value: '50+' }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Passion for Design',
            description: 'Every sneaker is crafted with meticulous attention to detail and a love for innovation.'
        },
        {
            icon: Users,
            title: 'Community First',
            description: 'We listen to our customers and build products that solve real problems.'
        },
        {
            icon: Award,
            title: 'Quality Guaranteed',
            description: 'Premium materials and rigorous testing ensure every pair meets our high standards.'
        },
        {
            icon: TrendingUp,
            title: 'Sustainable Growth',
            description: 'Committed to reducing our environmental impact with eco-friendly materials and processes.'
        }
    ];

    const team = [
        {
            name: 'Alex Chen',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Sarah Martinez',
            role: 'Head of Design',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'James Wilson',
            role: 'Chief Technology Officer',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gray-900 py-24 sm:py-32">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1556906781-9a412961d28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        alt="Our Story"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Built for Those Who Move Forward
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                        Since 2025, we've been redefining what it means to create footwear that performs as good as it looks.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Our Mission
                            </h2>
                            <p className="mt-4 text-lg text-gray-500">
                                At STRIDE, we believe that great footwear should empower you to push boundaries. Whether you're training for a marathon, exploring city streets, or conquering mountain trails, our shoes are engineered to keep up with your ambitions.
                            </p>
                            <p className="mt-4 text-lg text-gray-500">
                                We combine cutting-edge technology with timeless design principles to create sneakers that don't just follow trends—they set them.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <img
                                src="https://images.unsplash.com/photo-1556906781-9a412961d28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Design Process"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gray-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                                <p className="mt-2 text-base text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16 sm:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Our Values
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            The principles that guide everything we do.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => (
                            <div key={value.title} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white mb-4">
                                    <value.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900">{value.title}</h3>
                                <p className="mt-2 text-base text-gray-500">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Meet the Team
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            The passionate people behind STRIDE.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
                        {team.map((member) => (
                            <div key={member.name} className="text-center">
                                <div className="space-y-4">
                                    <img
                                        className="mx-auto h-40 w-40 rounded-full object-cover"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                    <div className="space-y-2">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3 className="text-gray-900">{member.name}</h3>
                                            <p className="text-indigo-600">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Our Journey
                        </h2>
                    </div>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-24 text-right">
                                <span className="text-lg font-bold text-gray-900">2025</span>
                            </div>
                            <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                                <h3 className="text-lg font-medium text-gray-900">Founded</h3>
                                <p className="mt-2 text-gray-500">STRIDE was born from a vision to create footwear that bridges performance and style.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-24 text-right">
                                <span className="text-lg font-bold text-gray-900">2025</span>
                            </div>
                            <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                                <h3 className="text-lg font-medium text-gray-900">First Collection</h3>
                                <p className="mt-2 text-gray-500">Launched our debut collection to overwhelming response from the community.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-24 text-right">
                                <span className="text-lg font-bold text-gray-900">2025</span>
                            </div>
                            <div className="flex-grow pl-8">
                                <h3 className="text-lg font-medium text-gray-900">Global Expansion</h3>
                                <p className="mt-2 text-gray-500">Now shipping to 25+ countries worldwide with more to come.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
