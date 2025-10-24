import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { categories ,products } from "@/components/products/products";
import { ArrowBigRightDash, BadgeMinus, BadgePlus } from 'lucide-react';

interface MobileNavItemsProps {
  toggleMenu: () => void;
}

const MobileNavItems: React.FC<MobileNavItemsProps> = ({ toggleMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);

  const toggleCategory = (catId: string) => {
    setExpandedCategoryId((prev) => (prev === catId ? null : catId));
  };
  const containerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      backgroundColor: "#f3f3f3",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 !bg-black text-white flex flex-col items-end space-y-8 z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      transition={{ type: "spring", stiffness: 75, damping: 15 }}
    >
      {/* Logo in Top Left */}
      <motion.div
        className="absolute top-5 left-5 bg-black"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={linkVariants}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Link
          href="/"
          onClick={toggleMenu}
          className="text-4xl font-medium tracking-wider"
        >
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={150}
            height={150}
            priority
          />
        </Link>
      </motion.div>

      {/* Close Button */}
      <motion.button
        onClick={toggleMenu}
        className="absolute  right-5 text-white"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Close Menu"
      >
        <h1>Close</h1>
      </motion.button>

      {/* Navigation Links */}
      <div className="flex-1 w-full overflow-y-auto pt-[30%] pl-6 pr-6 pb-24">
        {["Home", "Projects", "Insights", "About Us", "Contact Us"].map(
          (item, index) => (
            <motion.div
              key={item}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={linkVariants}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="py-1"
            >
              <Link
                href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                onClick={toggleMenu}
                className="text-[30px] font-semibold tracking-wider"
              >
                {item}
              </Link>
            </motion.div>
          )
        )}

        {/* Products Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={linkVariants}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full"
        >
          <div
            className="text-[30px] font-semibold cursor-pointer flex items-center"
            onClick={() => setActiveCategory(activeCategory ? null : "open")}
          >
            Products{" "}
            <span className="pl-2 pt-1 text-[18px]">
              {activeCategory ? "[-]" : "[+]"}
            </span>
          </div>

          {activeCategory && (
            <div className="pl-4 mt-2">
              {categories.map((cat) => {
                const isExpanded = expandedCategoryId === cat.id;
                return (
                  <div key={cat.id} className="mb-3">
                    <div
                      className="text-[18px] font-medium cursor-pointer flex gap-2 items-center whitespace-nowrap"
                      onClick={() => toggleCategory(cat.id)}
                    >
                      {cat.name}
                      <span className="text-[13px] ">
                        {isExpanded ? <BadgeMinus size={18} /> : <BadgePlus size={18} />}
                      </span>
                    </div>

                    {isExpanded && (
                      <div className="pl-4 space-y-2 mt-2">
                        {products
                          .filter((prods) => prods.categoryId == cat.id)
                          .map((prod) => (
                            <Link
                              key={prod.id}
                              href={`/products/${prod.slug}`}
                              onClick={toggleMenu}
                              className="text-[15px] flex items-center"
                            >
                              <ArrowBigRightDash size={18} className="mr-1" />{prod.title}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>


      {/* Social Links and Collaborate Button */}
      <div className="flex flex-col gap-2 absolute bottom-10 right-7 ">
        <div className="flex flex-row gap-2 justify-end">
          {[
            {
              icon: <FaInstagram className="text-white text-3xl " />,
              label: "Instagram",
              url: "https://www.instagram.com/inspacestore.in/?igsh=dmtnbnhpazl4M2Zr#",
            },
            {
              icon: <FaFacebook className="text-white text-3xl" />,
              label: "LinkedIn",
              url: "https://www.facebook.com/inspacestores.in",
            },
            {
              icon: <FaYoutube className="text-white text-3xl" />,
              label: "LinkedIn",
              url: "https://www.youtube.com/@inspace_store",
            },
          ].map((button, index) => (
            <motion.a
              key={button.label}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white shadow-md rounded-md"
              whileHover={buttonHover.hover}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={linkVariants}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <span>{button.icon}</span>
              {/* <span className="ml-2 text-black font-semibold text-xs">
                {button.label}
              </span> */}
            </motion.a>
          ))}
        </div>
        {/* <motion.button
          className="flex items-center text-center justify-center gap-2 bg-white shadow-md rounded-md p-2 cursor-pointer"
          whileHover={buttonHover.hover}
          whileTap={{ scale: 0.95 }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={linkVariants}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={() => setIsModalOpen(true)}
        >
          <HiCalendar className="text-black" />
          <span className="text-black font-semibold text-xs">Let's Collaborate</span>
        </motion.button> */}
      </div>

      {/* Modal for Calendly */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-60">
          <div className="bg-white w-[90%] md:w-[600px] p-5 rounded-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-black text-2xl"
              aria-label="Close Modal"
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-xl font-semibold mb-4 text-center">
              Schedule a Collaboration Call
            </h2>

            {/* Calendly iframe */}
            <iframe
              src="https://calendly.com/yardstickdigital-support/30min"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MobileNavItems;
