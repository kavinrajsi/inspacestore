"use client";

import { useRef } from "react";
import Image from "next/image";

type ScrollingImageProps = {
  images: string[];
};

function ScrollingImage({ images }: ScrollingImageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.9;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      <div
        className="flex gap-4 overflow-x-hidden scroll-smooth no-scrollbar"
        ref={scrollRef}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[400px] flex-shrink-0 rounded-lg overflow-hidden border border-gray-300 relative"
          >
            <Image
              src={src}
              alt={`Rack ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              priority
            />
            <p className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
              Rack {index + 1}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        &#x3c;
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        &#x3e;
      </button>
    </div>
  );
}

export default ScrollingImage;
