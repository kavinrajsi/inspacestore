"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
// import ChennaiAddressMap from "../common/Map";
// Dynamically import the MapComponent to avoid SSR issues
const ChennaiAddressMap = dynamic(() => import('@/components/common/Map'), {
  ssr: false, // Disable server-side rendering for this component
});

const VisitUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const address = "No:16, K.K Street, Kasthuri Industrial Estate, Ayanambakkam, Chennai-600 095, Tamil Nadu, India";

  const openGoogleMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };
  return (
    <section className="max-w-7xl mx-auto py-10 mb-10 px-4 md:px-0">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-[#333333]"
      >
        Visit Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#808080] text-[12px] mt-1"
      >
        See our designs up close and experience our craftsmanship firsthand.
      </motion.p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-[4fr,1fr] gap-6">
        <div>
          {/* <DynamicMap /> */}
          <ChennaiAddressMap />
        </div>

        {/* Contact Details */}
        <div className="space-y-6 sm:space-y-12 mt-5 sm:mt-10 px-3 sm:px-0">
          <div className="flex  space-x-3">
            <Image
              src="/assets/contactus/contact-phone.svg"
              alt="contact phone"
              width={45}
              height={45}
              priority
            />
            <div className="">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#4A044E] font-medium text-sm mb-1"
              >
                Phone
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#4A044E] text-sm"
              >
                +91 9840861493
              </motion.p>
            </div>
          </div>

          <div className="flex space-x-3">
            <Image
              src="/assets/contactus/contact-location.svg"
              alt="contact phone"
              width={45}
              height={45}
              className="mb-12"
              priority
            />
            <div>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#4A044E] font-medium text-sm mb-1"
              >
                Office
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#4A044E]  text-sm -pb-32 sm:pb-0"
              >
                No:16, K.K Street,Kasthuri Industrial Estate, Ayanambakkam,Chennai-600 095. Tamil Nadu. India.
              </motion.p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Image
              src="/assets/contactus/contact-email.svg"
              alt="contact phone"
              width={45}
              height={45}
              priority
            />
            <div>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#4A044E] font-medium text-sm mb-1"
              >
                Email
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#4A044E] text-sm"
              >
                contact@inspacestore.in
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className="flex gap-[890px]">
          <div className="flex items-center mt-5 space-x-3">
            {/* <Image
              src="/assets/contactus/contact-location.svg"
              alt="contact phone"
              width={45}
              height={45}
              priority
            /> */}
            {/* <div>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#4A044E] font-medium text-sm mb-1"
              >
                Office
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#4A044E]  text-sm"
              >
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </motion.p>
            </div> */}
          </div>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 px-4 bg-[#F5D0FE] border border-[#4A044E] text-[#4A044E] rounded-3xl hover:bg-[#F5D0FE] py-1"
            onClick={openGoogleMaps}
          >
            Open Map
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default VisitUs;
