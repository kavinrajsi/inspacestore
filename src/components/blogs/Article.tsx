'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Article = () => {
    const articles = [
        { id: 1, title: 'Why Quality Matters: Choosing the Right Fixtures', image: '/assets/Blogs/BlogGrid1.webp' },
        { id: 2, title: 'How a Well-Designed Store Boosts Sales', image: '/assets/Blogs/BlogGrid2.avif' },
        { id: 3, title: 'The Role of Innovation in Modern Retail', image: '/assets/Blogs/BlogGrid3.jpg' },
        { id: 4, title: '5 Key Factors to Consider for Interiors', image: '/assets/Blogs/BlogGrid4.jpg' },
        { id: 5, title: 'Building a Strong Brand Identity', image: '/assets/Blogs/BlogGrid5.jpeg' },
        { id: 6, title: 'Common Mistakes in Retail Space Planning', image: '/assets/Blogs/BlogGrid6.jpg' },
        { id: 7, title: 'Sustainability in Retail Fixtures', image: '/assets/Blogs/BlogGrid7.jpg' },
        { id: 8, title: 'The Future of Retail Spaces', image: '/assets/Blogs/BlogGrid8.jpg' },
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                
                {/* Row 1 (3 Equal Cards) */}
                {articles.slice(0, 3).map((article) => (
                    <Link href={`/insights/${article.id}`} key={article.id}>
                        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full lg:h-[350px] h-[300px]">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 px-6 text-white">
                                    <div className="font-semibold mb-4 text-lg">{article.title}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                {/* Row 2 (2 Cards - 60% & 40% Width) */}
                <div className="lg:col-span-3 flex flex-col lg:flex-row gap-5">
                    <Link href={`/insights/${articles[3].id}`} className="lg:w-[60%]">
                        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full lg:h-[400px] h-[300px]">
                                <Image
                                    src={articles[3].image}
                                    alt={articles[3].title}
                                    fill
                                    className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 px-6 text-white">
                                    <div className="font-semibold mb-4 text-lg">{articles[3].title}</div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href={`/insights/${articles[4].id}`} className="lg:w-[40%]">
                        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full lg:h-[400px] h-[300px]">
                                <Image
                                    src={articles[4].image}
                                    alt={articles[4].title}
                                    fill
                                    className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 px-6 text-white">
                                    <div className="font-semibold mb-4 text-lg">{articles[4].title}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Row 3 (3 Equal Cards) */}
                {articles.slice(5, 8).map((article) => (
                    <Link href={`/insights/${article.id}`} key={article.id}>
                        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full lg:h-[350px] h-[300px]">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-x-0 bottom-0 px-6 text-white">
                                    <div className="font-semibold mb-4 text-lg">{article.title}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Article;
