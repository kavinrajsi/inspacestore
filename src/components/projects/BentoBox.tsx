"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  title?: string;
  subtitle?: string;
  className: string;
}

interface BentoBoxProps {
  images: ImageData[];
}

const BentoBox: React.FC<BentoBoxProps> = ({ images }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = () => {
    if (selectedIndex !== null) {
      setDirection(1);
      setSelectedIndex((prev) => (prev! + 1) % images.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setDirection(-1);
      setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  // Paper-like curve animation variants
  const paperVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.9,
      filter: "brightness(0.8)",
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      filter: "brightness(1)",
      zIndex: 1,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 20,
        mass: 1.2,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.9,
      filter: "brightness(0.8)",
      zIndex: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 1,
      },
    }),
  };

  return (
    <div className="bg-white w-full">
      {!isMobile ? (
        <motion.div
          className="grid grid-rows-3 grid-cols-4 gap-3 h-[90vh] px-8 pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative group rounded-lg overflow-hidden bg-gray-200 ${image.className}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => {
                setDirection(0);
                setSelectedIndex(index);
              }}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{
                  scale: 1.15,
                  // rotateZ: 1.5,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                style={{
                  willChange: "transform",
                  transformStyle: "preserve-3d",
                  boxShadow:
                    hoveredIndex === index
                      ? "0 10px 25px rgba(0,0,0,0.2)"
                      : "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src={image.src}
                  alt={
                    image.title && image.subtitle
                      ? `${image.title} - ${image.subtitle}`
                      : "Project image"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{
                    objectFit: "cover",
                    backfaceVisibility: "hidden",
                  }}
                  priority={index < 4}
                  loading="eager"
                  className="will-change-transform cursor-pointer"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <>
          <div className="flex flex-col gap-4 px-4 pb-24">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                whileTap={{ scale: 1.02, rotateZ: 0.5 }}
                onClick={() => {
                  setDirection(0);
                  setSelectedIndex(index);
                }}
              >
                <Image
                  src={image.src}
                  alt={
                    image.title && image.subtitle
                      ? `${image.title} - ${image.subtitle}`
                      : "Project image"
                  }
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  priority={index < 2}
                  loading="eager"
                />
              </motion.div>
            ))}
          </div>
        </>
      )}

      <AnimatePresence custom={direction}>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative w-[90vw] max-w-5xl h-[90vh] overflow-hidden perspective"
              onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
              style={{
                perspective: "1200px",
              }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={selectedIndex}
                  className="absolute inset-0"
                  custom={direction}
                  variants={paperVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                  }}
                >
                  <Image
                    src={images[selectedIndex].src}
                    alt="Expanded Image"
                    fill
                    sizes="90vw"
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
              </AnimatePresence>

              <button
                className="absolute top-3 right-2 text-white text-2xl bg-black/30 w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors z-10"
                onClick={() => setSelectedIndex(null)}
              >
                ✖
              </button>

              {/* Navigation Buttons */}
              <motion.button
                className="absolute left-2 top-1/2  text-white text-2xl bg-black/30 w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                ◀
              </motion.button>
              <motion.button
                className="absolute right-2 top-1/2 text-white text-2xl bg-black/30 w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/50 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                ▶
              </motion.button>

              {/* Image Caption/Info (optional) */}
              {images[selectedIndex].title && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white z-10"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold">
                    {images[selectedIndex].title}
                  </h3>
                  {images[selectedIndex].subtitle && (
                    <p className="text-sm opacity-80">
                      {images[selectedIndex].subtitle}
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BentoBox;