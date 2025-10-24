"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeButton, setActiveButton] = useState("next");

  // Array of factory images
  const images = [
    "/assets/FactoryPictures/factory1.jpeg",
    "/assets/FactoryPictures/factory2.jpeg",
    "/assets/FactoryPictures/factory3.jpeg",
    "/assets/FactoryPictures/factory4.jpeg",
    "/assets/FactoryPictures/factory5.jpeg",
    "/assets/FactoryPictures/factory6.jpeg",
    "/assets/FactoryPictures/factory7.jpeg",
    "/assets/FactoryPictures/factory8.jpeg",
    "/assets/FactoryPictures/factory9.jpeg",
    "/assets/FactoryPictures/factory10.jpeg",
    "/assets/FactoryPictures/factory11.jpeg",
    "/assets/FactoryPictures/factory12.jpeg",
    "/assets/FactoryPictures/factory13.jpeg",
    "/assets/FactoryPictures/factory14.jpeg",
    "/assets/FactoryPictures/factory15.jpeg",
    "/assets/FactoryPictures/factory16.jpeg",
    "/assets/FactoryPictures/factory17.jpeg",
    "/assets/FactoryPictures/factory18.jpeg",
    "/assets/FactoryPictures/factory19.jpeg",
    "/assets/FactoryPictures/factory20.jpeg",
    "/assets/FactoryPictures/factory21.jpeg",
    "/assets/FactoryPictures/factory22.jpeg",
    "/assets/FactoryPictures/factory23.jpeg",
    "/assets/FactoryPictures/factory24.jpeg",
    "/assets/FactoryPictures/factory25.jpeg",
    "/assets/FactoryPictures/factory26.jpeg",
    "/assets/FactoryPictures/factory27.jpeg",
    "/assets/FactoryPictures/factory28.jpeg",
    "/assets/FactoryPictures/factory29.jpeg",
    "/assets/FactoryPictures/factory30.jpeg",
    "/assets/FactoryPictures/factory31.jpeg",
    "/assets/FactoryPictures/factory32.jpeg",
    "/assets/FactoryPictures/factory33.jpeg",
    "/assets/FactoryPictures/factory34.jpeg",
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle next button click
  const handleNext = () => {
    setActiveButton("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous button click
  const handlePrev = () => {
    setActiveButton("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Calculate visible indices for the carousel
  const getVisibleIndices = () => {
    const totalImages = images.length;
    const indices = [];

    // Helper function to handle circular array access
    const getWrappedIndex = (index: number) =>
      (index + totalImages) % totalImages;

    // For larger screens show more images, fewer on mobile
    const visibleCount = isMobile ? 5 : 7;
    const halfCount = Math.floor(visibleCount / 2);

    // Calculate positions on both sides of current image
    for (let i = -halfCount; i <= halfCount; i++) {
      indices.push(getWrappedIndex(currentIndex + i));
    }

    return indices;
  };

  // Calculate position class for each image
  const getPositionClass = (index: number) => {
    const visibleIndices = getVisibleIndices();

    if (!visibleIndices.includes(index)) {
      return "hidden";
    }

    const indexPosition = visibleIndices.indexOf(index);
    const middlePosition = Math.floor(visibleIndices.length / 2);

    if (indexPosition === middlePosition) return "center";

    const distance = indexPosition - middlePosition;

    if (distance === -1) return "left1";
    if (distance === -2) return "left2";
    if (distance === -3) return "left3";
    if (distance === 1) return "right1";
    if (distance === 2) return "right2";
    if (distance === 3) return "right3";

    // Add more positions if needed
    return distance < 0 ? "far-left" : "far-right";
  };

  // Define variants for different positions
  const imageVariants = {
    center: isMobile
      ? { x: "0%", scale: 1, zIndex: 5, opacity: 1 }
      : { x: "0%", scale: 1, zIndex: 5, opacity: 1 },

    left1: isMobile
      ? { x: "-75%", scale: 0.7, zIndex: 4, opacity: 0.9 }
      : { x: "-40%", scale: 0.8, zIndex: 4, opacity: 0.9 },

    left2: isMobile
      ? { x: "-125%", scale: 0.5, zIndex: 3, opacity: 0.7 }
      : { x: "-75%", scale: 0.6, zIndex: 3, opacity: 0.7 },

    left3: isMobile
      ? { x: "-160%", scale: 0.3, zIndex: 2, opacity: 0.5 }
      : { x: "-100%", scale: 0.4, zIndex: 2, opacity: 0.5 },

    right1: isMobile
      ? { x: "75%", scale: 0.7, zIndex: 4, opacity: 0.9 }
      : { x: "40%", scale: 0.8, zIndex: 4, opacity: 0.9 },

    right2: isMobile
      ? { x: "125%", scale: 0.5, zIndex: 3, opacity: 0.7 }
      : { x: "75%", scale: 0.6, zIndex: 3, opacity: 0.7 },

    right3: isMobile
      ? { x: "160%", scale: 0.3, zIndex: 2, opacity: 0.5 }
      : { x: "100%", scale: 0.4, zIndex: 2, opacity: 0.5 },

    "far-left": isMobile
      ? { x: "-200%", scale: 0.2, zIndex: 1, opacity: 0.3 }
      : { x: "-125%", scale: 0.3, zIndex: 1, opacity: 0.3 },

    "far-right": isMobile
      ? { x: "200%", scale: 0.2, zIndex: 1, opacity: 0.3 }
      : { x: "125%", scale: 0.3, zIndex: 1, opacity: 0.3 },

    hidden: { opacity: 0, zIndex: 0 },
  };

  return (
    <div className="relative flex items-center justify-center w-full sm:h-[90vh] h-screen">
      <div className="relative w-full h-full flex items-center justify-center">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Factory image ${index + 1}`}
            className="rounded-lg absolute"
            initial="hidden"
            animate={getPositionClass(index)}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{
              width: isMobile ? "80%" : "40%",
              maxWidth: "600px",
            }}
          />
        ))}
      </div>

   

      {/* Navigation buttons - Mobile */}
      {isMobile ? (
        <div className="absolute bottom-52  flex items-center bg-white rounded-full px-2 py-2 gap-2 shadow-lg">
          <button
            onClick={handlePrev}
            className={`p-2 md:p-4 rounded-full transition-colors ${
              activeButton === "prev"
                ? "bg-purple-900 hover:bg-purple-800"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft
              className={`w-4 h-4 md:w-6 md:h-6 ${
                activeButton === "prev" ? "text-white" : "text-gray-700"
              }`}
            />
          </button>
          <div className="w-px h-6 md:h-8 bg-gray-200" />
          <button
            onClick={handleNext}
            className={`p-2 md:p-4 rounded-full transition-colors ${
              activeButton === "next"
                ? "bg-purple-900 hover:bg-purple-800"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="Next image"
          >
            <ChevronRight
              className={`w-4 h-4 md:w-6 md:h-6 ${
                activeButton === "next" ? "text-white" : "text-gray-700"
              }`}
            />
          </button>
        </div>
      ) : (
        /* Navigation buttons - Desktop */
        <div className="absolute bottom-1 flex items-center bg-white rounded-full px-2 py-2 gap-2 shadow-lg">
          <button
            onClick={handlePrev}
            className={`p-2 md:p-4 rounded-full transition-colors ${
              activeButton === "prev"
                ? "bg-purple-900 hover:bg-purple-800"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="Previous image"
          >
            <ChevronLeft
              className={`w-4 h-4 md:w-6 md:h-6 ${
                activeButton === "prev" ? "text-white" : "text-gray-700"
              }`}
            />
          </button>
          <div className="w-px h-6 md:h-8 bg-gray-200" />
          <button
            onClick={handleNext}
            className={`p-2 md:p-4 rounded-full transition-colors ${
              activeButton === "next"
                ? "bg-purple-900 hover:bg-purple-800"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="Next image"
          >
            <ChevronRight
              className={`w-4 h-4 md:w-6 md:h-6 ${
                activeButton === "next" ? "text-white" : "text-gray-700"
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
