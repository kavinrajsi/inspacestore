"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ProductFilterPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const categories = ["SUPERMARKET", "Fashion"];

  const products = [
    {
      id: "10",
      title: "Contemporary Cream 6-Door Swing Wardrobe Design",
      subtitle: "Contemporary Cream 6-Door Swing Wardrobe Design",
      image: "/assets/projects/product1.svg",
    },
    {
      id: "11",
      title: "Contemporary Cream 6-Door Swing Wardrobe Design",
      subtitle: "Contemporary Cream 6-Door Swing Wardrobe Design",
      image: "/assets/projects/product2.svg",
    },
    {
      id: "12",
      title: "Contemporary Cream 6-Door Swing Wardrobe Design",
      subtitle: "Contemporary Cream 6-Door Swing Wardrobe Design",
      image: "/assets/projects/product3.svg",
    },
  ];

  const features = [
    {
      icon: "/assets/projects/warrenty.svg",
      title: "Flat 10-year warranty¹",
    },
    {
      icon: "/assets/projects/paintBrush.svg",
      title: "1000+ Designs",
    },
    {
      icon: "/assets/projects/calender.svg",
      title: "45-day move-in guarantee²",
    },
  ];

  return (
    <div className="min-h-screen px-5 bg-white">
      {/* Header */}
      <header className="p-4 bg-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-full mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-[#333333] px-0 sm:px-3 pt-0 sm:pt-8"
          >
            Filter The Product
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs mt-1 text-[#4C4C4C] px-0 sm:px-3"
          >
            Save your irreplaceable time by using our Components with No
            <br /> Compromise on Design
          </motion.p>
        </motion.div>
      </header>

      {/* Categories */}
      <motion.div className="w-full overflow-x-auto bg-white border-gray-200 scrollbar-hide px-0 sm:px-3">
        <style jsx global>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* Hide scrollbar for IE, Edge and Firefox */
          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-full mx-auto py-3 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex space-x-6 whitespace-nowrap"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className="text-sm text-gray-600 border px-2 border-[#65558F] rounded-lg py-1 min-w-fit hover:text-gray-900 transition-colors flex items-center gap-2"
              >
                <span className="w-4 h-4 flex-shrink-0">
                  <Image
                    src="/assets/projects/carIcon.svg"
                    alt=""
                    width={16}
                    height={16}
                    priority
                  />
                </span>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="whitespace-nowrap"
                >
                  {category}
                </motion.div>
              </button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Product Grid */}
      <main className="max-w-full mx-auto px-0 sm:px-4 py-0 sm:py-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-md bg-black/10"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="aspect-[4/3] h-[300px] sm:h-[500px] w-full relative"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 p-6"
                >
                  <h3 className="text-white text-lg font-medium mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-xs mb-4">
                    {product.subtitle}
                  </p>
                  <button
                    onClick={() => router.push(`/projects/${product.id}`)}
                    className="px-4 py-1 rounded-full border border-white/40 text-white text-sm hover:bg-white/10 transition-colors"
                  >
                    Learn more
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Features
      {isMobile ? (
        <>
          <div className="w-full px-4 py-6">
            <div className="bg-white rounded-xl border border-[#4A044E] p-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 py-4">
                  <div className="w-12 h-12 bg-[#400043] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={28}
                      height={28}
                      className="text-white"
                      priority
                    />
                  </div>
                  <span className="text-[#400043] text-lg font-medium">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-full mx-auto px-4 py-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border-2 border-[#4A044E] p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 relative"
            >
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 p-6 relative"
                >
                  {index > 0 && index < features.length && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="hidden md:block absolute left-0 top-6 bottom-6 !w-[2px] bg-[#4A044E]"
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-[#400043] rounded-lg flex items-center justify-center"
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={50}
                      height={50}
                      className="text-white"
                      priority
                    />
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg font-medium text-purple-900"
                  >
                    {feature.title}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )} */}
    </div>
  );
};

export default ProductFilterPage;
