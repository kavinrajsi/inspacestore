"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const AwardsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const certificates = [
    {
      src: "/assets/aboutus/certificate1.svg",
      alt: "Registration Certificate",
    },
    {
      src: "/assets/aboutus/certificate2.svg",
      alt: "School Essentials Recognition",
    },
    {
      src: "/assets/aboutus/certificate3.svg",
      alt: "Certificate of Compliance",
    },
  ];

  return (
    <>
      {isMobile ? (
        <>
          <div className=" border-2 rounded-lg  border-black mb-32 mx-6">
            <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
              {/* Header */}
              <div className="mb-12">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
                  Certified Excellence <br />
                  <span className="text-[#4A044E]">Commitment to Quality & Innovation</span>
                </h2>
              </div>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                {certificates.map((cert, index) => (
                  <div key={index} className="relative aspect-[3/4]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="max-w-7xl mx-auto px-6 border rounded-lg border-black py-5 mb-10">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
                Certified Excellence <br />
                <span className="text-[#4A044E]">Commitment to Quality & Innovation</span>
              </h2>
            </div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {certificates.map((cert, index) => (
                <div key={index} className="relative aspect-[3/4]">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AwardsSection;
