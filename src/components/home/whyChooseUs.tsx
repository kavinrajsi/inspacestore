"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Package, ShieldCheck, Truck, Users } from "lucide-react";

interface Feature {
  id: string;
  number: string;
  title: string;
  image: string;
  icon: (size: number) => React.ReactNode;
  description: string;
}

const features: Feature[] = [
  {
    id: "1",
    number: "#01",
    title: "Custom & Modular Solutions",
    image: "/assets/home/c-1.svg",
    icon: (size: number) => <Image
      src="/assets/icons/icon2.png"
      alt="Shield Check Icon"
      width={size}
      height={size}
      className="text-[#400043]"
    />,
    description:
      "Shape your space your way with adaptable displays designed for your brand's story.",
  },
  {
    id: "2",
    number: "#02",
    title: "Quality That Lasts",
    image: "/assets/home/c-2.svg",
    icon: (size: number) => (
      // <ShieldCheck className="text-[#400043]" size={size} />
      <Image
        src="/assets/icons/icon1.png"
        alt="Shield Check Icon"
        width={size}
        height={size}
        className="text-[#400043]"
      />
    ),
    description:
      "Built with premium materials for durability, backed by extended warranties.",
  },
  {
    id: "3",
    number: "#03",
    title: "Seamless Delivery & Support",
    image: "/assets/home/c-3.svg",
    icon: (size: number) => <Image
      src="/assets/icons/icon4.png"
      alt="Shield Check Icon"
      width={size}
      height={size}
      className="text-[#400043]"
    />,
    description:
      "Nationwide shipping, hassle-free installation, and expert assistance anytime.",
  },
  {
    id: "4",
    number: "#04",
    title: "Partnering for Your Success",
    image: "/assets/home/c-4.svg",
    icon: (size: number) =>

      <Image
        src="/assets/icons/icon3.png"
        alt="Shield Check Icon"
        width={size}
        height={size}
        className="text-[#400043]"
      />
    ,
    description:
      "From concept to completion, we craft solutions that align with your vision.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyChooseUs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <section className="px-1 mt-6 sm:my-10 py-8 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {isMobile ? (
          <>
            <div className="text-center mb-8">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl mt-4 md:text-4xl px-4 font-semibold text-[#4A044E] mb-4"
              >
                Why Choose Inspace ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-[12px] px-5 text-start"
              >
                At Inspace, we&apos;re committed to creating commercial
                interiors and furniture solutions that go beyond the ordinary.
                From innovative designs to reliable support, everything we do is
                focused on helping you transform your space into an immersive
                and efficient environment.
              </motion.p>
            </div>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4">
                {features.map((feature) => (
                  <motion.div
                    key={feature.id}
                    variants={itemVariants}
                    className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="mb-4">
                      <div className="relative flex justify-center">
                        {/* <div className="absolute inset-0 bg-[#FAE8FF] rounded-full transform scale-110 -z-10"></div> */}
                        {/* <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F5D0FE] to-[#FAE8FF] flex justify-center items-center shadow-md">
                          
                        </div> */}
                        <div className="w-28 h-28 rounded-full bg-white flex justify-center items-center">
                          {feature.icon(90)}
                        </div>
                        {/* <div className="absolute -top-1 right-28 w-3 h-3 bg-[#D946EF] rounded-full"></div>
                        <div className="absolute -bottom-1 left-28 w-2 h-2 bg-[#E879F9] rounded-full"></div> */}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold  text-center">
                      {feature.title}
                    </h3>

                    {/* <p className="text-[#400043] text-sm leading-relaxed">
                      {feature.description}
                    </p> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[20px] sm:text-[34px] px-4 font-bold text-[#4A044E]  mb-4"
                >
                  Why Choose Inspace ?
                </motion.h2>
                <motion.p
                  className="text-black text-[11px] md:text-base mt-1 !mb-5"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  At Inspace, we&apos;re committed to creating commercial
                  interiors and furniture solutions that go beyond the ordinary.
                  From innovative designs to reliable support, everything we do
                  is focused on helping you transform your space into an
                  immersive and efficient environment.
                </motion.p>
              </div>
            </motion.div>
            <div className="text-center">
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => (
                  <motion.div
                    key={feature.id}
                    className="bg-white p-6 rounded-xl "
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}

                  >
                    <div className="flex justify-center items-center mb-4">
                      <div className="relative flex justify-center items-center">
                        {/* <div className="absolute inset-0 bg-[#FAE8FF] rounded-full transform scale-110 -z-10"></div> */}
                        {/* <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F5D0FE] to-[#FAE8FF] flex justify-center items-center shadow-md">
                          
                        </div> */}
                        <div className="w-36 h-36 rounded-full bg-white flex justify-center items-center">
                          {feature.icon(120)}
                        </div>
                        {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#D946EF] rounded-full"></div>
                        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#E879F9] rounded-full"></div> */}
                      </div>
                    </div>
                    <h3 className="text-[20px] font-semibold  mb-3 font-montserrat">
                      {feature.title}
                    </h3>
                    {/* <p className="text-[#400043] text-[14px] leading-relaxed">
                      {feature.description}
                    </p> */}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
