"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MeetOurTeam = () => {
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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-full mx-0 px-4 sm:py-5 mb-10 py-0"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`rounded-xl overflow-hidden ${
          isMobile ? "px-4 py-4" : "mx-28"
        } relative ${isMobile ? "h-[300px]" : "h-[500px]"}`}
      >
        <Image
          src="/assets/Team.jpg"
          alt="Team"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default MeetOurTeam;
