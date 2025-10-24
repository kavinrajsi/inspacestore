"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const VideoConsultSection = () => {
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
    <>
      {isMobile ? (
        <>
          <div className="m-4 ">
            <div className="relative rounded-xl w-full h-[500px]">
              {/* Mobile Background Image */}
              <Image
                src="/assets/contactus/mobile-view-plant-bg.svg"
                alt="Background Image"
                layout="fill"
                objectFit=" rounded-xl"
                priority
              />

              {/* Mobile Text Content (Bottom Left) */}
              <div className="absolute bottom-14 p-4 rounded-lg">
                <h2 className="text-lg font-normal text-white">
                  CONSULT WITH VIDEO CALL
                </h2>
                <p className="mt-1 font-normal text-[12px] text-white">
                  Whether you are designing your dream home or an inspired
                  workspace, we can help.
                </p>
                <button className="mt-3 bg-[#4A044E] px-4 py-2 text-sm font-normal text-white rounded-md hover:bg-[#3A0340]">
                  BOOK A CALL
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="relative w-full">
          <div className="absolute inset-0">
            <Image
              src="/assets/contactus/plant-bg.svg"
              alt="Background Image"
              fill
              priority
            />
          </div>
          <div className="relative flex min-h-screen items-center">
            <div className="mx-auto px-20  w-full max-w-full">
              <div className="w-full lg:w-1/2">
                <h2 className="mb-4 text-2xl font-normal text-gray-900">
                  CONSULT WITH VIDEO CALL
                </h2>
                <p className="mb-6 text-[12px] text-[#484848]">
                  Whether you are designing the home of your dreams, an inspired{" "}
                  <br />
                  workspace, or a luxurious retreat in a far off locale, we
                  would love to help.
                </p>
                <button className="bg-[#4A044E] rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4A044E]">
                  BOOK A CALL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoConsultSection;
