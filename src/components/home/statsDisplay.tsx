"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const StatsDisplay = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);
  const stats = [
    {
      value: "38+",
      label: "Years",
    },
    {
      value: "1200+",
      label: "Projects Completed",
    },
    {
      value: "200000+",
      label: "Sqft Production Facility",
    },
  ];
  return (
    <>
      {isMobile ? (
        <div className="w-full bg-white p-6">
          <div className="grid grid-cols-2 gap-3 max-w-4xl mx-auto">
            <div className="relative bg-[#FAE8FF] rounded-3xl p-6 group">
              {/* <div className="absolute top-2 right-2 bg-purple-900 rounded-full group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-white" />
              </div> */}
              <div className="text-3xl font-light text-purple-900 mb-2">
                {stats[0].value}
              </div>
              <div className="text-[10px] text-purple-900">
                {stats[0].label}
              </div>
            </div>
            <div className="relative bg-[#FAE8FF] rounded-3xl p-6 group">
              {/* <div className="absolute top-2 right-2 bg-purple-900 rounded-full group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-white" />
              </div> */}
              <div className="text-3xl font-light text-purple-900 mb-2">
                {stats[1].value}
              </div>
              <div className="text-[10px] text-purple-900">
                {stats[1].label}
              </div>
            </div>
            <div className="relative bg-[#FAE8FF] rounded-3xl p-6 col-span-2 group">
              {/* <div className="absolute top-2 right-2 bg-purple-900 rounded-full group-hover:scale-110 transition-transform">
                <ArrowUpRight className="text-white" />
              </div> */}
              <div className="text-3xl font-light text-purple-900 mb-2">
                {stats[2].value}
              </div>
              <div className="text-[10px] text-purple-900">
                {stats[2].label}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-start bg-[#FAE8FF] py-7 rounded-xl px-5 space-y-2 shadow-lg"
                  >
                    <div className="flex items-center">
                      <motion.span
                        className="text-7xl font-normal text-[#4A044E]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {stat.value}
                      </motion.span>
                      {/* <motion.div
                        className="absolute top-3 cursor-pointer right-3 bg-[#4A044E] rounded-full p-1.5"
                        whileHover={{ scale: 1.2, rotate: 20 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ArrowUpRight className="text-white" />
                      </motion.div> */}
                    </div>
                    <span className="text-lg text-[#4A044E]">{stat.label}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StatsDisplay;
