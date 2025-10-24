"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import NavItem from "./navitem";
import Image from "next/image";
import MobileNavItems from "./mobile-navitem";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import ProductsPopover from "@/components/products/ProductsPopover";
import { ShoppingCart, AlignJustify, Scale } from "lucide-react"
import CartDrawer from "@/components/products/CartDrawer";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useCart } from "@/components/products/CartContext";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const router = useRouter();
  const isMobile = useIsMobile();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/home";
  const isContactPage = pathname === "/contactus";
  const isAboutPage = pathname === "/aboutus";
  const isProjectPage = pathname === "/projects";
  const isinsight = pathname === "/insights";
  const isProductsPage = pathname === "/products";

  const textColorClass = isContactPage ? "text-white" : "!text-[#000000]";

  const navItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: any) => ({

      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 50 },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center py-2 px-[5%] shadow-sm bg-white bg-opacity-10 backdrop-blur-md"
        style={{
          fontFamily: "var(--font-poppins)",
        }}
      >
        {/* Logo Section */}
        <motion.div initial="hidden" animate="visible" variants={logoVariants}>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="inspace store"
              width={150} // Increase width
              height={150} // Adjust height
              layout="intrinsic"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="ml-20 hidden md:flex space-x-8 !font-white">
          {["Home", "About Us", "Projects", "Insights"].map((item, index) => (
            <motion.div
              key={item}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <NavItem href={`/${item.toLowerCase().replace(/\s+/g, "")}`}>
                <span className={`${textColorClass} text-[16px] font-normal`}>
                  {item}
                </span>
              </NavItem>
            </motion.div>
          ))}
          <motion.div custom={4} initial="hidden" animate="visible" variants={navItemVariants}>
            <ProductsPopover textColorClass={textColorClass} />
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <div className="ml-auto">
          <a>
            <motion.h1
              className="relative flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-gray-800 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  duration: 0.5,
                }}
                style={{ originX: 0 }}
              />
              <motion.span
                className="relative md:flex hidden items-center"               
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  className="font-semibold text-lg"
                  variants={navItemVariants}
                >
                  <div className="flex items-center gap-4 ">
                    {/* <button
                      className={`flex items-center px-1.5 py-1.5 border border-white/20 justify-center backdrop-blur-sm rounded-xl transition-colors ${
                        isContactPage || isAboutPage || isProjectPage || isHomePage
                          ? "bg-transparent text-[#4A044E]"
                          : "bg-[#4A044E] text-[#FAE8FF]"
                      }`}
                    >
                      <Image
                        src="/assets/home/Mailbox.svg"
                        alt="inspace store"
                        width={25} // Increase width
                        height={50} // Adjust height
                        layout="intrinsic"
                        priority
                      />
                    </button>

                    <button
                      className={`px-2 py-2 border border-white/20 backdrop-blur-sm rounded-xl transition-colors ${
                        isContactPage || isAboutPage || isProjectPage || isHomePage
                          ? "bg-transparent text-[#4A044E]"
                          : "bg-[#4A044E] text-[#FAE8FF]"
                      }`}
                    >
                      <Image
                        src="/assets/home/Notification.svg"
                        alt="inspace store"
                        width={20} // Increase width
                        height={50}
                        layout="intrinsic"
                        priority
                      />
                    </button> */}
                    <button
                      onClick={() => router.push("/contactus")}
                      className={`px-5 py-1.5 border border-white/20 backdrop-blur-sm rounded-lg transition-colors ${isContactPage || isAboutPage
                        ? "bg-transparent text-[#4A044E]"
                        : "bg-[#4A044E] text-[#FAE8FF]"
                        }`}
                    >
                      <span className="text-white  text-[16px] font-normal">
                        Contact Us
                      </span>
                    </button>

                  </div>
                </motion.span>
              </motion.span>
            </motion.h1>
          </a>

        </div>

        {/* Cart Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          variants={ navItemVariants }
          custom={2}
          initial="hidden"
          animate="visible"
        >
          <button    
            onClick={() => setDrawerOpen(true)}
            className={`relative mr-5 mt-1 md:mt-0 px-3  py-2 border border-white/20 backdrop-blur-sm rounded-lg transition-colors  ${isContactPage || isAboutPage
              ? "bg-transparent text-[#4A044E]"
              : "bg-[#4A044E] text-[#FAE8FF]"
              }`}>
            <span className={`${items.length === 0 ? "hidden" : "block"} absolute -top-2 -right-2 bg-red-600 rounded-full text-[10px] px-[6px] py-[1px]`}>{items.length}</span>
            <ShoppingCart size={20} />
          </button>
        </motion.div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <div
              className={`transition-transform duration-300 group-hover:scale-105 mt-2 ${isinsight ? "filter brightness-0" : "filter brightness-100 "
                }`}
            >
              <AlignJustify color="#4A044E" size={30} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center p-4"
          >
            <MobileNavItems toggleMenu={toggleMobileMenu} />
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-gray-800"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
                whileHover={{ rotate: 90 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
