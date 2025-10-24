"use client";
import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <div className="text-start sm:text-center px-5 py-8 mt-[80px] leading-[25px] sm:leading-[40px]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[20px] sm:text-[34px] text-start sm:text-center font-bold text-[#4A044E] mb-4"
      > 
        Where Design Meets Expertise <br /> Explore Our Insights
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[12px] sm:text-[14px] text-gray-700 leading-relaxed mb-[14px]"
      >
        Why Quality Matters: Choosing the Right Fixtures for Your Retail Space
      </motion.p>
    </div>
  );
};

export default Header;
