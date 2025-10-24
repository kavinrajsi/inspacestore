"use client";

interface ClientImage {
  id: number;
  name: string;
  imageUrl: string;
  logoUrl: string;
}

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const clients: ClientImage[] = [
  {
    id: 1,
    name: "BASICS",
    imageUrl: "/assets/home/bg-1.svg",
    logoUrl: "/assets/home/1.png",
  },
  {
    id: 2,
    name: "REDPEN",
    imageUrl: "/assets/home/bg-2.svg",
    logoUrl: "/assets/home/2.png",
  },
  {
    id: 3,
    name: "MELTIN",
    imageUrl: "/assets/home/bg-3.svg",
    logoUrl: "/assets/home/3.png",
  },
  {
    id: 4,
    name: "SPORTUS",
    imageUrl: "/assets/home/bg-4.svg",
    logoUrl: "/assets/home/4.png",
  },
  {
    id: 5,
    name: "L STORE",
    imageUrl: "/assets/home/bg-5.svg",
    logoUrl: "/assets/home/5.png",
  },
  {
    id: 6,
    name: "MADRAS DHABA",
    imageUrl: "/assets/home/bg-6.svg",
    logoUrl: "/assets/home/17.png",
  },
  {
    id: 7,
    name: "POTHYS",
    imageUrl: "/assets/home/bg-7.svg",
    logoUrl: "/assets/home/7.png",
  },
  {
    id: 8,
    name: "SARAVANA STORE",
    imageUrl: "/assets/home/bg-8.svg",
    logoUrl: "/assets/home/8.jpeg",
  },
  {
    id: 9,
    name: "SM MALLS",
    imageUrl: "/assets/home/bg-9.svg",
    logoUrl: "/assets/home/9.jpeg",
  },
  {
    id: 10,
    name: "SUMMER SIDE",
    imageUrl: "/assets/home/bg-10.svg",
    logoUrl: "/assets/home/10.png",
  },
  {
    id: 11,
    name: "KUTTIES WORLD",
    imageUrl: "/assets/home/bg-11.svg",
    logoUrl: "/assets/home/11.png",
  },
  {
    id: 12,
    name: "NAVEGADOR",
    imageUrl: "/assets/home/bg-12.svg",
    logoUrl: "/assets/home/12.png",
  },
  {
    id: 13,
    name: "NAVEGADOR",
    imageUrl: "/assets/home/bg-12.svg",
    logoUrl: "/assets/home/13.png",
  },
  {
    id: 14,
    name: "NAVEGADOR",
    imageUrl: "/assets/home/bg-12.svg",
    logoUrl: "/assets/home/14.png",
  },
  {
    id: 15,
    name: "NAVEGADOR",
    imageUrl: "/assets/home/bg-12.svg",
    logoUrl: "/assets/home/15.jpeg",
  },
  {
    id: 16,
    name: "NAVEGADOR",
    imageUrl: "/assets/home/bg-12.svg",
    logoUrl: "/assets/home/16.jpeg",
  },
];

const ClientGrid = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname === "/projects";

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <section className="sm:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {isMobile ? (
          <motion.div
            className="flex flex-col min-h-[500px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-start">
             
              <motion.h2
                className="text-3xl mt-3 mb-2 md:text-4xl px-2 font-semibold text-[#4A044E]"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Clients
              </motion.h2>
              <motion.p
                className="!text-[12px] md:!text-base px-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                We provide world-class solutions that help you <br />
                10x your speed.
              </motion.p>
            </div>

            {/* Image Container with Fixed Height and Margin */}
            <motion.div
              className="relative text-center flex-1 mt-4 -mb-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/assets/home/productContainer.svg"
                alt="productContainer"
                width={500}
                height={200}
                className="object-contain"
                priority
              />
            </motion.div>

     
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-12">
        
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-[#400043] mb-2"
              >
                Our Clients
              </motion.h2>
        
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {clients.map((client) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-[5/4] overflow-hidden rounded-2xl group"
                >
                 
                  <div className="absolute inset-0 bg-[#FAE4FF] bg-opacity-40 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full max-w-[200px] pl-8 relative">
                      <Image
                        src={client.logoUrl}
                        alt={client.name}
                        width={150}
                        height={150}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ClientGrid;
