"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialLinks = () => (
  <div className="flex gap-4 mt-6">
    {[
      { Icon: FaFacebookF, href: "#", label: "Facebook" },
      { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
      { Icon: FaTwitter, href: "#", label: "Twitter" },
      { Icon: FaYoutube, href: "#", label: "YouTube" },
    ].map(({ Icon, href, label }) => (
      <a
        key={label}
        href={href}
        className="w-10 h-10 rounded-full border border-[#4A044E] bg-white flex items-center justify-center text-[#4A044E] hover:bg-[#4A044E] hover:text-white hover:border-purple-600 transition-colors"
        aria-label={label}
      >
        <Icon className="w-5 h-5" />
      </a>
    ))}
  </div>
);

const MissionVisionSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg overflow-hidden aspect-[4/3]"
        >
          <Image
            src="/assets/MissionVision/Mission.jpg"
            alt="Retail display with wooden boxes and hanging lights"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-gray-900"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 leading-relaxed"
          >
            To redefine retail spaces with smart, functional, and visually
            appealing display solutions, helping businesses create engaging
            shopping experiences that drive customer satisfaction and sales.
          </motion.p>
          {/* <SocialLinks /> */}
        </motion.div>
      </motion.div>

      {/* Vision Section */}
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
          className="space-y-6 order-2 lg:order-1"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900"
          >
            Our Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 leading-relaxed"
          >
            To be a leading provider of retail interiors, setting new industry
            standards with cutting-edge design, sustainable practices, and
            innovative solutions that empower brands to succeed in an evolving
            marketplace.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 leading-relaxed"
          >
            At Inspace, we don't just build fixtures—we create impactful retail
            experiences that bring brands to life!
          </motion.p>
          {/* <SocialLinks /> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-lg overflow-hidden aspect-[4/3] order-1 lg:order-2"
        >
          <Image
            src="/assets/MissionVision/Vision.webp"
            alt="Modern interior with tree wall art"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MissionVisionSection;
