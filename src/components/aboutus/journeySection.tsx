"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const JourneySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const journeySteps = [
    {
      number: "01",
      title: "Share Your Requirements",
      description:
        "It all starts with you! Tell us about your retail space, the fixtures you need—whether it's shelving, display units, counters, or customized solutions. Share your vision with us. Based on your needs, you'll get a detailed overview of your requirements. Our team will assess your needs and provide a detailed quotation with pricing, timelines, and terms to get started.",
      imagePath: "/assets/user-journey-pictures/01.jpg",
      imageAlt: "Retail space design concept",
      imagePosition: "right",
    },
    {
      number: "02",
      title: "Design That Fits Your Space",
      description:
        "Once we understand your vision, our expert designers get to work. We create a layout that optimizes space, enhances customer flow, and reflects your brand identity. You'll receive a concept for review, and we'll refine it based on your feedback. For customized solutions, we provide detailed engineering drawings and 3D visualizations to ensure everything aligns perfectly with your expectations.",
      imagePath: "/assets/user-journey-pictures/02.jpg",
      imageAlt: "Interior design layout",
      imagePosition: "left",
    },
    {
      number: "03",
      title: "High-Quality Manufacturing",
      description:
        "With the design finalized, we begin production using premium materials. Every fixture—whether racks, shelves, or counters—is carefully cut, shaped, and assembled with precision. Our skilled craftsmen and advanced manufacturing processes ensure that your fixtures are not only durable but also built to enhance your store’s aesthetic appeal.",
      imagePath: "/assets/user-journey-pictures/03.jpeg",
      imageAlt: "Interior design layout",
      imagePosition: "right",
    },
    {
      number: "04",
      title: "Finishing & Quality Checks",
      description:
        "Every fixture goes through a meticulous finishing process, from custom colors and branding elements to protective coatings that enhance longevity. Before delivery, our team conducts rigorous quality checks to ensure everything meets our high standards for durability, functionality, and design consistency.",
      imagePath: "/assets/user-journey-pictures/04.jpg",
      imageAlt: "Interior design layout",
      imagePosition: "left",
    },
    {
      number: "05",
      title: "Safe & On-Time Delivery",
      description:
        "We take care of the logistics, ensuring your fixtures arrive safely and on time. Each piece is carefully packed to prevent damage, and we provide all necessary documentation, including invoices, warranties, and installation guides. Whether you need delivery to a single store or multiple locations, we ensure a smooth handover process.",
      imagePath: "/assets/user-journey-pictures/05.webp",
      imageAlt: "Interior design layout",
      imagePosition: "right",
    },
    {
      number: "06",
      title: "Hassle-Free Installation",
      description:
        "Once your fixtures arrive, our expert team ensures a smooth and efficient installation with minimal disruption to your store operations. We align, secure, and test everything to ensure proper placement and functionality. If your fixtures have specialized features, we provide training to your team so they can maximize their use. Once installation is complete, we do a final walkthrough with you to ensure everything is perfect before sign-off.",
      imagePath: "/assets/user-journey-pictures/06.jpg",
      imageAlt: "Interior design layout",
      imagePosition: "left",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:py-16 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-start sm:text-center mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#4A044E] mb-4"
        >
          Your Retail Transformation in Six Simple Steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-600 max-w-6xl mx-auto"
        >
          At Inspace, we bring your retail vision to life with a seamless and
          structured process. From design to installation, we take care of every
          detail to ensure your store is both functional and visually stunning.
          Here's how we make it happen:
        </motion.p>
      </motion.div>

      {/* Journey Steps */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        {journeySteps.map((step, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${
              // Reduced grid gap from 0 to 6
              step.imagePosition === "right" ? "" : "lg:flex-row-reverse"
            }`}
          >
            {isMobile ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-start gap-4 w-full"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center gap-6 text-3xl font-bold text-black flex-shrink-0"
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.number}
                    </motion.h1>
                    <motion.h3
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-2xl font-semibold text-[#808080]"
                    >
                      {step.title}
                    </motion.h3>
                  </motion.span>

                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[#666666] text-sm leading-relaxed w-full"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </>
            ) : (
              <div
                className={`space-y-2 ${
                  // Reduced space-y from 4 to 2
                  step.imagePosition === "right"
                    ? "lg:pr-6" // Reduced padding from pr-12 to pr-6
                    : "lg:pl-6 lg:order-2" // Reduced padding from pl-12 to pl-6
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-start gap-3 w-full"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl font-bold text-black w-10 flex-shrink-0"
                  >
                    {step.number}
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg font-semibold text-[#808080] w-72"
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[#666666] text-sm leading-relaxed w-full"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-lg overflow-hidden w-[350px] h-[280px] md:w-[350px] md:h-[280px] lg:w-[400px] lg:h-[300px] mx-auto ${
                step.imagePosition === "right" ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Image
                src={step.imagePath}
                alt={step.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default JourneySection;
