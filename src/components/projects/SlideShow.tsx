"use client"
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

interface SlideshowProps {
  images: string[]; 
  speed?: number; 
  delay?: number; 
}

const Slideshow: React.FC<SlideshowProps> = ({ 
  images, 
  speed = 500, 
  delay = 2000 
}) => {
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div
      className="relative w-full h-[400px] sm:h-full sm:aspect-[16/9] rounded-2xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          speed={speed} 
          autoplay={{ 
            delay: delay, 
            disableOnInteraction: false 
          }}
          loop={true}
          modules={[Autoplay]} 
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Slideshow;