"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const TestimonialCard = ({ testimonial }: any) => {
  return (
    <div className="w-full bg-[#FAE8FF] p-8 rounded-3xl relative h-[330px] flex flex-col justify-between">
      <div>
        <div className="text-purple-900 text-6xl font-serif mb-4">
          <Image
            src="/assets/home/quotes.svg"
            alt="quote mark"
            width={30}
            height={30}
            layout="intrinsic"
            priority
          />
        </div>
        <div className="">
          <p className="text-[#090914] text-[20px] font-medium leading-snug">
            {testimonial.text}
          </p>
        </div>
      </div>
      <div className="border-l-4 border-purple-900 pl-4 mt-auto">
        <h3 className="text-lg font-semibold text-black">{testimonial.name}</h3>
        {/* <p className="text-gray-600 text-sm">{testimonial.role}</p> */}
        {/* <p className="text-gray-600 text-sm">{testimonial.location}</p> */}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contactus";
  const isProjectPage = pathname === "/projects";

  const testimonials = [
    {
      id: 1,
      name: "Arun",
      role: "Senior Product Designer, Inhive Space",
      location: "New York City",
      text: "Our store's new layout looks amazing! Customers find items more easily, and we've noticed a real boost in sales.",
      profileImage: "/assets/home/profile.svg",
    },
    {
      id: 2,
      name: "Priya Balakrishnan",
      role: "Operations Manager, Inhive Space",
      location: "New York City",
      text: "We needed a quick turnaround, and Inspace delivered on time. Now our aisles feel bright, organized, and more welcoming.",
      profileImage: "/assets/home/profile.svg",
    },
    {
      id: 3,
      name: "Kannan Subramanian",
      role: "Marketing Director, Inhive Space",
      location: "New York City",
      text: "Inspace helped make our produce section the highlight of the store. It's eye-catching, and customers love the fresh look.",
      profileImage: "/assets/home/profile.svg",
    },
    {
      id: 4,
      name: "Meera Rajan",
      role: "Chief Technology Officer, Inhive Space",
      location: "New York City",
      text: "The new digital signage solution is a game changer. It keeps our customers engaged and informed effortlessly.",
      profileImage: "/assets/home/profile.svg",
    },
    {
      id: 5,
      name: "Vikram Anand",
      role: "Retail Consultant, Inhive Space",
      location: "New York City",
      text: "The store design aligns perfectly with our brand identity. It's modern, stylish, and improves the shopping experience.",
      profileImage: "/assets/home/profile.svg",
    },
    {
      id: 6,
      name: "Sonia Kapoor",
      role: "Customer Experience Head, Inhive Space",
      location: "New York City",
      text: "Inspace has transformed our checkout process. Customers love the smooth flow, and wait times are much shorter.",
      profileImage: "/assets/home/profile.svg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mb-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl mt-20 md:text-4xl px-7 text-start sm:text-center  mb-5 sm:mb-16 font-semibold text-[#4A044E]"
      >
        Hear from Those Who&apos;ve Experienced the Inspace Difference
      </motion.h1>

      {/* 
      <p className="text-black text-center text-[11px] md:text-base mt-2 !mb-10">
        We provide world-class services that help you 10x your speed.
      </p> */}

      <div className="relative px-8">
        {/* Custom Navigation Buttons */}
        <button className="custom-prev-button absolute -left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full flex items-center justify-center">
          <ChevronLeft className="w-8 h-8 text-purple-900" />
        </button>
        <button className="custom-next-button absolute -right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full flex items-center justify-center">
          <ChevronRight className="w-8 h-8 text-purple-900" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
      </div>
    </div>
  );
};

export default TestimonialSection;
