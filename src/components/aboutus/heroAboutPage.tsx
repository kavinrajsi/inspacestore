"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";

const HeroAboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/Hero-About-us1.jpg"
          alt="hero about interior"
          fill
          className="w-full h-full object-cover object-center min-w-full min-h-full"
          priority
          quality={100}
        />
      </div>

      <Navbar />

      <div className="relative h-full flex flex-col justify-end py-[10%] px-[5%] md:py-[2%] md:px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {isMobile ? (
            <>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-[24px] max-w-[90%] sm:max-w-3xl md:max-w-4xl leading-[1.2]"
              >
                {/* INSPACE RETAIL
                <br /> DISPLAYS FOR SHOP */}
                Our Story
              </motion.h1>
              {/* <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-[12px] leading-5 mt-3 font-extralight"
              >
                We use modern techniques to boost sustainable farming <br />
                and protect the environment.
              </motion.p> */}
              {/* <motion.button
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#4A044E] text-white rounded-3xl mt-4 px-6 py-2"
              >
                Get started
              </motion.button> */}
              {/* <motion.button
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white border border-white rounded-3xl ml-4 mb-[52px] px-6 py-2"
              >
                Know more
              </motion.button> */}
            </>
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="!text-4xl sm:text-5xl md:text-[42px] !font-bold text-white max-w-[90%] sm:max-w-3xl md:max-w-4xl leading-[1.2]"
            >
              {/* INSPACE RETAIL
              <br />
              DISPLAYS FOR SHOP */}
              Our Story
            </motion.h1>
          )}
        </motion.div>
      </div>

      {/* {!isMobile && (
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-10 sm:bottom-10 right-8 sm:right-14 md:right-20 p-3 sm:p-4 rounded-full shadow-lg z-10 hover:scale-110 transition-transform bg-white"
        >
          <Image src="/assets/home/Arrow.png" alt="arrow" fill  priority/>
        </motion.button>
      )} */}
    </div>
  );
};

export default HeroAboutPage;
