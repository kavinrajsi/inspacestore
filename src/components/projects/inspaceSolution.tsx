"use client";

import React, { useState } from "react";
import Image from "next/image";

type Project = {
  imageContent: string;
  inspaceImage: string;
  scrollingImages: string[];
};

export default function InspaceSolution({
  imageContent,
  inspaceImage,
  scrollingImages,
}: Project) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate Backward
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? scrollingImages.length - 1 : prevIndex - 1
    );
  };

  // Navigate Forward
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === scrollingImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <section className="py-6 px-8 flex justify-between items-center">
        <div className="max-w-7xl">
          <h2 className="text-2xl font-semibold mb-2">
            Inspace&apos;s Solution
          </h2>
          <p className="text-gray-700 text-sm">{imageContent}</p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center bg-[#400043] text-white rounded-full"
          >
            &#x3c;
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center bg-[#400043] text-white rounded-full"
          >
            &#x3e;
          </button>
        </div>
      </section>
      <div className="ml-[30px] mr-[30px]">
        <div className="relative w-full h-[40vh] sm:h-[70vh] mb-8 rounded-2xl overflow-hidden">
          <Image
            src={scrollingImages[currentIndex]} // Dynamically change the image
            alt="image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
}
