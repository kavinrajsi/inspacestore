"use client";
 
import React, { useEffect, useRef, useState } from "react";
// import { Play } from "lucide-react";
import { motion } from "framer-motion";
 
const ManagementAttention = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
 
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const stats = [
    { value: "36+", label: "Years Experience" },
    { value: "1200+", label: "Projects Completed" },
    { value: "7+", label: "Operating Locations" },
  ];
 
  return (
    <>
      {isMobile ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-start  p-6 space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-w-16 aspect-h-9 relative"
            >
              <iframe
                src="https://www.youtube.com/embed/kHkDSkPBzt8?si=hbUppku73p8AGQlz"
                title="YouTube video player"
                className="rounded-lg w-full h-[300px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
            {/* <motion.button
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-6 py-2 mb-2  bg-[#F5D0FE] border border-[#4A044E] text-[#4A044E] rounded-full text-sm"
            >
              About us
            </motion.button> */}
            {/* <motion.h4
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold text-[#333333]"
            >
              Attention and Maximum Attention <br /> to Detail
            </motion.h4> */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-normal  text-[#4C4C4C] pt-2"
            >
              About Inspace
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#666666] leading-relaxed"
            >
              At Inspace, we specialize in transforming retail environments with
              innovative, high-quality display solutions. With a focus on
              functionality, aesthetics, and durability, we design and
              manufacture shelving, racks, display units, and customized retail
              fixtures that enhance customer experience and optimize store
              layouts. From concept to installation, we deliver seamless,
              end-to-end solutions tailored to your brand's needs.
            </motion.p>
            {/* <motion.button
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-3 py-2 mb-2  bg-[#F5D0FE] border border-[#4A044E] text-[#4A044E] rounded-full text-sm"
            >
              Learn More
            </motion.button> */}
            {/* <motion.h4
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold text-[#333333]"
            >
              Heading goes here
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#666666] leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#4A044E] flex justify-between px-8 py-3 items-center text-white w-full rounded-full"
            >
              <div>36+</div>
              <div>Years Experience </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#4A044E] flex justify-between px-8 py-3 items-center text-white w-full rounded-full"
            >
              <div>1200+</div>
              <div>Projects Done</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#4A044E] flex justify-between px-8 py-3 items-center text-white w-full rounded-full"
            >
              <div>7+</div>
              <div>Operating Locations</div>
            </motion.div> */}
          </motion.div>
        </>
      ) : (
        <div className="max-w-8xl mx-auto px-4 sm:py-12 ml-10 sm:px-8 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-semibold text-[#333333]"
              >
                Attention and Maximum Attention <br /> to Detail
              </motion.h1> */}
 
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-xl font-normal text-[#4C4C4C]"
                >
                  About Inspace
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[#666666] leading-relaxed"
                >
                  At Inspace, we specialize in transforming retail environments
                  with innovative, high-quality display solutions. With a focus
                  on functionality, aesthetics, and durability, we design and
                  manufacture shelving, racks, display units, and customized
                  retail fixtures that enhance customer experience and optimize
                  store layouts. From concept to installation, we deliver
                  seamless, end-to-end solutions tailored to your brand's needs.
                </motion.p>
                {/* <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex gap-5 !mt-10"
                >
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#4A044E] text-white px-6 py-2 rounded-full hover:bg-[#4A044E] transition-colors "
                  >
                    Book a call
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#FAE8FF] text-[#4A044E] px-6 py-2 border  border-[#4A044E] rounded-full hover:bg-[#FAE8FF] transition-colors"
                  >
                    Learn more
                  </motion.button>
                </motion.div> */}
              </motion.div>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-lg overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="aspect-w-16 aspect-h-9 relative"
              >
                <iframe
                  src="https://www.youtube.com/embed/kHkDSkPBzt8?si=hbUppku73p8AGQlz"
                  title="YouTube video player"
                  className="rounded-lg w-full h-[450px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            Heading Goes Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#666666] text-sm"
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.p> */}
          {/* Stats Section */}
          {/* <div className=" mt-4 bg-[#4A044E] rounded-full py-8 px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  key={index}
                  className={`flex justtify-start text-white relative flex-col items-start ${
                    index !== stats.length - 1
                      ? "md:border-r md:border-white md:pr-8"
                      : ""
                  }`}
                >
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div> */}
        </div>
      )}
    </>
  );
};
 
export default ManagementAttention;