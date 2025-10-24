"use client";

import { useState, useEffect } from "react";
import Navbar from "../layout/navbar";
import { motion } from "framer-motion";

const HeroMainPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const slides = [
        {
            id: 1,
            images: [
                "assets/Herosection/HMS1.JPG",
            ],
        },
        {
            id: 2,
            images: [
                "assets/Herosection/HMS2.JPG",
            ],
        },
        {
            id: 3,
            images: [
                "assets/Herosection/HMS3.JPG"
            ],
        },
        {
            id: 4,
            images: [
                "assets/Herosection/HMS4.JPG"
            ],
        },
        {
            id: 5,
            images: [
                "assets/Herosection/HMS5.JPG"
            ],
        },
        {
            id: 6,
            images: [
                "assets/Herosection/HMS6.JPG"
            ],
        },
        {
            id: 7,
            images: [
                "assets/Herosection/HMS7.JPG"
            ],
        },
        // {
        //     id: 8,
        //     images: [
        //         "assets/Herosection/HMS8.JPG"
        //     ],
        // },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <>
            <Navbar />
            <div className="relative w-full h-screen overflow-hidden">
                {/* Main slider container */}
                <div className="relative w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            {/* Full-width image */}
                            <div className="w-full h-full relative">
                                <img
                                    src={slide.images[0]}
                                    alt="Hero full-width"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>

                            {/* Content overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end py-[14%] px-[5%] md:py-[2%] md:px-[5%] mb-8">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    {isMobile ? (
                                        <motion.h1
                                            initial={{ opacity: 0, y: -20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="text-white text-[26px] font-bold max-w-[90%] sm:max-w-3xl md:max-w-4xl leading-[1.3]"
                                        >
                                            Designing the Future of
                                            <br />
                                            Retail & Commercial Spaces
                                        </motion.h1>
                                    ) : (
                                        <motion.h1
                                            className="text-2xl sm:text-4xl md:text-[42px] font-semibold text-white max-w-[90%] sm:max-w-3xl md:max-w-4xl leading-[1.2]"
                                            style={{
                                                lineHeight: "50px",
                                            }}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                        >
                                            Designing the Future of
                                            <br />
                                            Retail & Commercial Spaces
                                        </motion.h1>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slide indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white w-8" : "bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default HeroMainPage;