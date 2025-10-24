'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideshowProps {
    images: string[];
}

const SlideProduct: React.FC<SlideshowProps> = ({ images }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const displayImage = isMobile
        ? images[0]
        : isHovered
            ? images[1] || images[0]
            : images[0];

    return (
        <div
            className="relative w-full h-full cursor-pointer"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className="relative w-full h-full transition-opacity duration-500">
                <Image
                    src={displayImage}
                    alt="Product Image"
                    fill
                    className="object-cover rounded-lg"
                    priority
                />
            </div>
        </div>
    );
};

export default SlideProduct;
