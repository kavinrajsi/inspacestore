"use client"; // Ensure this component runs only on the client

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Fix incorrect import

type ArticlePreview = {
  id: number;
  title: string;
  image: string;
};

const articles2: ArticlePreview[] = [
  { id: 1, title: "Why Quality Matters: Choosing the Right Fixtures", image: "/assets/Blogs/BlogGrid1.webp" },
  { id: 2, title: "How a Well-Designed Store Boosts Sales", image: "/assets/Blogs/BlogGrid2.avif" },
  { id: 3, title: "The Role of Innovation in Modern Retail", image: "/assets/Blogs/BlogGrid3.jpg" },
  { id: 4, title: "5 Key Factors to Consider for Interiors", image: "/assets/Blogs/BlogGrid4.jpg" },
  { id: 5, title: "Building a Strong Brand Identity", image: "/assets/Blogs/BlogGrid5.jpeg" },
  { id: 6, title: "Common Mistakes in Retail Space Planning", image: "/assets/Blogs/BlogGrid6.jpg" },
  { id: 7, title: "Sustainability in Retail Fixtures", image: "/assets/Blogs/BlogGrid7.jpg" },
  { id: 8, title: "The Future of Retail Spaces", image: "/assets/Blogs/BlogGrid8.jpg" },
];

export default function RandomBlogs() {
  const [randomArticles, setRandomArticles] = useState<ArticlePreview[]>([]);

  useEffect(() => {
    const shuffleArray = (arr: ArticlePreview[]) => {
      return [...arr].sort(() => Math.random() - 0.5).slice(0, 3);
    };
    setRandomArticles(shuffleArray(articles2));
  }, []);

  return (
    <div className="max-w-full px-0 sm:px-10 sm:mt-20">
      <div className="mt-12 sm:mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[20px] sm:text-[34px] sm:mb-10 mb-8 text-center font-semibold text-[#4A044E]">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {randomArticles.map((article) => (
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
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <div className="font-semibold mb-2 text-lg">{article.title}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}