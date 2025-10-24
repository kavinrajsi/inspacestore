"use client"; // Ensure this component runs only on the client

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type RandomProjects = {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
};

const projects2: RandomProjects[] = [
  {
    id: 1,
    title: "Saravana Stores",
    imageUrl: "/assets/Thumbnail/SS_TN.JPG",
    category: "Retail",
  },
  {
    id: 2,
    title: "House of clothing",
    imageUrl: "/assets/Thumbnail/HC_TN.JPG",
    category: "Fashion",
  },
  {
    id: 3,
    title: "The Fresh Basket",
    imageUrl: "/assets/Thumbnail/FB_TN.JPG",
    category: "Grocery",
  },
  {
    id: 4,
    title: "Born babies",
    imageUrl: "/assets/Thumbnail/BB_TN.JPG",
    category: "Kids",
  },
  {
    id: 5,
    title: "Kandhan Stores",
    imageUrl: "/assets/Thumbnail/KS_TN.JPG",
    category: "Retail",
  },
  {
    id: 6,
    title: "Global Wear",
    imageUrl: "/assets/Thumbnail/GW_TN.JPG",
    category: "Fashion",
  },
  {
    id: 7,
    title: "Silver lady",
    imageUrl: "/assets/Thumbnail/SL_TN.JPG",
    category: "Fashion",
  },
  {
    id: 8,
    title: "In and out station 1",
    imageUrl: "/assets/Thumbnail/IN1.JPG",
    category: "Retail",
  },
  {
    id: 9,
    title: "In and out station 2",
    imageUrl: "/assets/Thumbnail/IN2.JPG",
    category: "Retail",
  },
  {
    id: 10,
    title: "Naidu Hall",
    imageUrl: "/assets/Thumbnail/NH_TN.JPG",
    category: "Fashion",
  },
];

export default function RandomProjectsPage() {
  const [randomProjects, setRandomProjects] = useState<RandomProjects[]>([]);

  useEffect(() => {
    const shuffleArray = (arr: RandomProjects[]) => {
      return [...arr].sort(() => Math.random() - 0.5).slice(0, 3);
    };
    setRandomProjects(shuffleArray(projects2));
  }, []);

  return (
    <div className="max-w-full px-0 sm:px-10 sm:mt-20">
      <div className="mt-12 sm:mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[20px] sm:text-[34px] sm:mb-10 mb-8  text-start sm:text-center font-semibold text-[#4A044E]">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {randomProjects.map((projects) => (
              <Link href={`/projects/${projects.id}`} key={projects.id}>
                <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full lg:h-[350px] h-[300px]">
                    <Image
                      src={projects.imageUrl}
                      alt={projects.title}
                      fill
                      className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <div className="font-semibold text-lg">
                        {projects.title}
                      </div>
                      <div className="font-normal  text-sm">
                        {projects.category}
                      </div>
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
