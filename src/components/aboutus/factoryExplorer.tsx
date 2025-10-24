"use client";
import { useEffect, useState } from "react";
import ImageSlider from "./imageSlider";
import { motion } from "framer-motion";

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


const extendedImages = [...images, ...images, ...images];

const FactoryExplorer = () => {
  const [index, setIndex] = useState(images.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (index >= extendedImages.length - images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(images.length);
      }, 500);
    } else if (index < images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(extendedImages.length - images.length * 2);
      }, 500);
    } else {
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [index]);

  return (
    <div className="max-w-full mx-auto text-center pb-10">
      {isMobile ? (
        <>
          {/* <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-6 py-2 mb-2 bg-[#F5D0FE] border border-[#4A044E] text-[#4A044E] rounded-full text-sm"
          >
            Our Gallery
          </motion.button> */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-start px-6 -mb-10 mt-10 font-semibold"
          >
            Explore Our Factory
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 mt-2"
          >
            Save your irreplaceable time by using our components with no
            compromise on design.
          </motion.p> */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center bottom-60"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-[1000px] h-[500px]"
            >
              <ImageSlider />
            </motion.div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold relative text-[#4A044E] top-10 mb-5"
            >
              Explore Our Factory
            </motion.h2>
            {/* <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 mt-2 -mb-24"
          >
            Save your irreplaceable time by using our components with no
            compromise on design.
          </motion.p> */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center items-center bottom-12"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <ImageSlider />
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default FactoryExplorer;
