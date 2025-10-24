"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import { usePathname } from "next/navigation";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname === "/projects";
  const isHomePage = pathname === "/" || pathname === "/home";

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
      {/* Background Image Fix */}
      {isProjectPage ? (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/hero-project.jpg"
            alt="Modern interior"
            fill
            className="w-full h-full object-cover object-center"
            priority
            quality={100}
          />
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/Home-hero.jpg"
            alt="Modern interior"
            fill
            className="w-full h-full object-cover object-center"
            priority
            quality={100}
          />
        </div>
      )}

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end py-[14%] px-[5%] md:py-[2%] md:px-[5%]">
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
                className="text-white text-[26px] font-bold max-w-[90%] sm:max-w-3xl md:max-w-4xl leading-[1.3]"
              >
                {isProjectPage ? (
                  <div className="!text-black font-bold text-[30px] max-w-[90%] sm:max-w-3xl md:max-w-4xl leading-[1.2]">
                    Your Vision, Our Expertise <br /> See How We Bring Spaces to
                    Life
                  </div>
                ) : (
                  <>
                    {isHomePage ? (
                      <div className="!text-black">
                        Designing the Future of
                        <br />
                        Retail & Commercial Spaces
                      </div>
                    ) : (
                      <>
                        Designing the Future of
                        <br />
                        Retail & Commercial Spaces
                      </>
                    )}
                  </>
                )}
              </motion.h1>
            </>
          ) : (
            <>
              {isProjectPage ? (
                <>
                  <div className="flex justify-between items-center">
                    {/* Left Section */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="max-w-[60%]"
                    >
                      <h1
                        className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-black"
                        style={{
                          lineHeight: "50px",
                        }}
                      >
                        Your Vision, Our Expertise <br /> See How We Bring
                        Spaces to Life
                      </h1>
                    </motion.div>
                  </div>
                </>
              ) : (
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-white max-w-[90%] sm:max-w-3xl md:max-w-4xl  leading-[1.2]"
                  style={{
                    lineHeight: "50px",
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  {isHomePage ? (
                    <div className="!text-black">
                      Designing the Future of
                      <br />
                      Retail & Commercial Spaces
                    </div>
                  ) : (
                    <>
                      Designing the Future of
                      <br />
                      Retail & Commercial Spaces
                    </>
                  )}
                </motion.h1>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
