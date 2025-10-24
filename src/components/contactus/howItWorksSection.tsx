"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    {
      description:
        "Share your store details, layout, and the fixtures you need—shelves, racks, display units, or custom designs. We’ll review your requirements and provide a clear quote to get started.",
      duration: "Step 1: Tell Us What You Need",
      image: "/assets/contactus/straightline1.svg",
    },
    {
      description:
        "Our design experts create a layout that fits your space and style. You’ll review and adjust the design before we finalize detailed plans for production.",
      duration: "Step 2: Designing Your Store",
      image: "/assets/contactus/straightline2.svg",
    },
    {
      description:
        "Once approved, we start building! Using high-quality materials, we cut, shape, and assemble each fixture with precision to ensure durability and a perfect fit",
      duration: "Step 3: Crafting Your Fixtures",
      image: "/assets/contactus/straightline3.svg",
    },
    {
      description:
        "Share your store details, layout, and the fixtures you need—shelves, racks, display units, or custom designs. We’ll review your requirements and provide a clear quote to get started.",
      duration: "Step 4: Quality Check & Finishing",
      image: "/assets/contactus/straightline4.svg",
    },
    {
      description:
        "Your fixtures are given the final touch—custom colors, branding, and protective coatings. We carefully inspect every piece to ensure top quality and long-lasting performance.",
      duration: "Step 5: Safe & Timely Delivery",
      image: "/assets/contactus/straightline5.svg",
    },
    {
      description:
        "Our team installs everything with minimal disruption to your store. We align, secure, and test the fixtures so you’re all set to welcome your customers!",
      duration: "Step 6: Easy Installation",
      image: "/assets/contactus/straightline6.svg",
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:py-8">
      {/* Header section */}
      <div className="sm:mb-16 text-center mb-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-4xl text-start sm:text-center px-3 sm:px-0 font-semibold text-gray-900"
        >
          How it works?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-start sm:text-center px-4 sm:px-0 text-sm text-[#666666]"
        >
          At Inspace, we make setting up your store simple and hassle-free. Here&apos;s how we bring your vision to life
        </motion.p>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-10 sm:mb-0">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start">
            {/* Unique image for each step */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-[135px] mr-7 w-[2px]"
              >
                <Image
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </motion.div>
            )}

            {/* Step content */}
            <div className="flex-1 sm:space-y-8 sm:mb-10 mx-4 md:mx-0 space-y-4">
               <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-medium text-gray-900"
              >
                {step.duration}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-600"
              >
                {step.description}
              </motion.p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
