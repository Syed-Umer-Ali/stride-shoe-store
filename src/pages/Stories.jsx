import React from 'react';

const stories = [
    {
        id: 1,
        title: 'The Evolution of Air Flow',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        excerpt: 'How we stripped back the unnecessary to create our lightest runner yet.',
        date: 'Oct 12, 2025'
    },
    {
        id: 2,
        title: 'Urban Exploration with Sarah Jenkins',
        category: 'Culture',
        image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        excerpt: 'The photographer takes us through Tokyo in the new Urban Drift.',
        date: 'Sep 28, 2025'
    },
    {
        id: 3,
        title: 'Sustainable Steps: Our 2025 Pledge',
        category: 'Sustainability',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        excerpt: 'We are committing to 100% recycled packaging by the end of the year.',
        date: 'Sep 15, 2025'
    }
];

const Stories = () => {
    return (
        <div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Stories</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Behind the design, athlete spotlights, and culture.
                    </p>
                </div>
                <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                    {stories.map((story) => (
                        <div key={story.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={story.image} alt={story.title} />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        {story.category}
                                    </p>
                                    <a href="#" className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{story.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{story.excerpt}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="sr-only">{story.date}</span>
                                        <p className="text-sm text-gray-500">{story.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stories;
