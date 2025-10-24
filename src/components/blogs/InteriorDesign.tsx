"use client";

import Image from "next/image";
interface HotelImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

const InteriorDesign = () => {
  const images: HotelImage[] = [
    {
      id: 1,
      src: "/assets/Blogs/Interior1.png",
      title: "Bells Grand Inn",
      category: "RESORTS & HOTELS",
    },
    {
      id: 2,
      src: "/assets/Blogs/Interior2.png",
      title: "Bells Grand Inn",
      category: "RESORTS & HOTELS",
    },
    {
      id: 3,
      src: "/assets/Blogs/Interior3.png",
      title: "Bells Grand Inn",
      category: "RESORTS & HOTELS",
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:mt-[130px] mt-[30px]">
      <div className="relative">
        {/* Main Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={500} // Adjust width as needed
                  height={500} // Adjust height as needed
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <div className="text-[12px] font-medium">
                    {image.category}
                  </div>
                  <div className="text-[20px] font-bold mb-1">
                    {image.title}
                  </div>
                  <button className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-[10px] font-medium transition-transform duration-300 hover:scale-105">
                    Talk to interior design expert
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;
