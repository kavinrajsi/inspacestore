"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const FAQPage = () => {
  const pathname = usePathname();
  const isProjectPage = pathname === "/projects";
  const [openQuestion, setOpenQuestion] = useState<string | null>("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  const faqs = [
    {
      category: "Category goes here",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit et phasellus ullamcorper at.",
      questions: [
        {
          question: "What types of projects does Inspace handle?",
          answer:
            "We specialize in commercial interiors, including supermarkets, department stores, offices, and more. Our services cover everything from design consulting to manufacturing and installation.",
        },
        {
          question: "Do you offer custom sizes and finishes for display racks?",
          answer:
            "Absolutely. All our fixtures and racks can be tailored to fit your space and aesthetic preferences—whether it’s color, material, or overall design.",
        },
        {
          question: "How long does it typically take to complete a project?",
          answer:
            "The timeline depends on the project scope. After an initial consultation, we provide a detailed plan with clear milestones, ensuring transparency from start to finish.",
        },
        {
          question: "Can you handle large-scale orders and pan-India delivery?",
          answer:
            "Yes. Our logistics network enables us to deliver and install across India, so we can easily manage multiple locations or large retail chains.",
        },
        {
          question: "What if I need to update or reconfigure my fixtures later?",
          answer:
            "Our solutions are modular, so you can easily add, remove, or rearrange components to adapt to changing inventory or layout needs.",
        },
        {
          question: "How do I get started with an Inspace project?",
          answer:
            "Simply reach out to our team with your requirements. We’ll set up a consultation, discuss your vision, and propose a tailored solution to meet your goals.",
        },
      ],
    },
  ];

  return (
    <div className="p-6 mb-20 mt-10">
      <div className="max-w-5xl mx-auto">
        {/* {isProjectPage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full mt-10"
          >
            <button className="px-6 py-2  bg-[#F5D0FE] border border-[#4A044E] text-[#4A044E] rounded-full text-sm">
              Caption
            </button>
          </motion.div>
        )} */}

        <motion.h2
          className="text-[20px] text-[#400043] sm:text-[34px] px-1 sm:px-0 text-start sm:text-center font-semibold my-2 "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sm:text-[14px] text-start sm:text-center px-1 sm:px-0 text-gray-600 mb-8 text-[12px]"
        >
          Still you have any questions? Contact our Team via{" "}
          <a
            href="mailto:support@inspacestore.in"
            className="text-blue-600 hover:underline"
          >
            support@inspacestore.in
          </a>
        </motion.p>

        <>
          {faqs.map((section) => (
            <div
              key={section.category}
              className="bg-[#FAE8FF] rounded-lg shadow-sm sm:p-8 mb-6 pb-12 p-2"
            >
              {/* <h2 className="text-xl font-medium mb-2 pl-3">
                  {section.category}
                </h2>
                <p className="text-gray-600 text-sm mb-6 pl-3">
                  {section.description}
                </p> */}

              <div className="space-y-2">
                {section.questions.map(({ question, answer }) => (
                  <div
                    key={question}
                    className="border-b border-[#F1D4FF] rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-[#FAE8FF]"
                      onClick={() =>
                        setOpenQuestion(
                          openQuestion === question ? null : question
                        )
                      }
                    >
                      <span className="font-medium sm:text-[16px] text-[14px]">
                        {question}
                      </span>
                      {openQuestion === question ? (
                        <Image
                          src="/assets/home/Wrong.png"
                          alt="inspace store"
                          width={30}
                          height={30}
                          layout="intrinsic"
                          priority
                        />
                      ) : (
                        <Image
                          src="/assets/home/plus.png"
                          alt="inspace store"
                          width={30}
                          height={30}
                          layout="intrinsic"
                          priority
                        />
                      )}
                    </button>

                    {openQuestion === question && (
                      <div className="pb-4 px-4 bg-[#FAE8FF]">
                        <p className="text-gray-600 text-[12px] bg-[#FAE8FF]">
                          {answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default FAQPage;
