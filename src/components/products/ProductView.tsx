"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ProductViewProps = {
    images: string[];
};

export default function ProductView({ images }: ProductViewProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full">
            {/* Selected Image Display */}
            <div className="relative w-full h-[300px] md:h-[400px] mb-6  rounded-md overflow-hidden">
                <Image
                    src={images[activeIndex]}
                    alt="Product"
                    fill
                    className="object-cover rounded-md"
                />
            </div>

            {/* Thumbnail Swiper */}
            <div className="relative w-[300px] md:w-[400px] items-center mx-auto md:items-start md:ml-5 ">
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    
                    breakpoints={{
                        0: {
                            slidesPerView: 3,
                            spaceBetween: 8,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    className="!py-1"
                >
                    {images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <div
                                onClick={() => setActiveIndex(i)}
                                className={`relative h-[80px] w-[90px] cursor-pointer rounded border-[1.7px] ${activeIndex === i
                                    ? "border-[#400043]/80"
                                    : "border-transparent"
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`thumb-${i}`}
                                    fill
                                    className="object-cover p-1"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button className="custom-prev absolute -left-9 top-1/2 -translate-y-1/2 z-10 px-2 py-1 md:hover:scale-110 transition-transform duration-200">
                    <ChevronLeft className="w-5 h-5 text-gray-600 " />
                </button>
                <button className="custom-next absolute -right-9 top-1/2 -translate-y-1/2 z-10 px-2 py-1 md:hover:scale-110 transition-transform duration-200">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </div >
    );
}
