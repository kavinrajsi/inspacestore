"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mr.Prabhakaran",
      role: "Chairman",
      imagePath: "/assets/aboutus/KP.jpg",
    },
    {
      name: "Mr.Harihara Subramanian",
      role: "Managing Director",
      imagePath: "/assets/aboutus/MD.jpg",
    },
    {
      name: "Mr.Karthikeyan",
      role: "Director",
      imagePath: "/assets/aboutus/karthick.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-start px-3 sm:px-0 sm:text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#4A044E] mb-4">
          Meet Our Team
        </h2>
        <p className="text-black text-[11px] md:text-base mt-1 !mb-5">
          The Pioneers Behind Every Curve, Joint, and Bespoke Masterpiece
        </p>
      </motion.div>

      {/* Team Grid */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            key={index}
            className="bg-[#FDF4FF] border-2 border-[#4A044E] rounded-lg p-6 transition-transform hover:scale-105"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-square relative mb-4 overflow-hidden rounded-lg"
            >
              <Image
                src={member.imagePath}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-start"
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-semibold text-gray-900 mb-1"
              >
                {member.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gray-600 text-sm"
              >
                {member.role}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
