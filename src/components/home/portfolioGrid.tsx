"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Grid, ShoppingCart, Shirt } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Saravana Stores",
    imageUrl: "/assets/Thumbnail/SS_TN.JPG",
    category: "Retail",
  },
  {
    id: 2,
    title: "House of clothing",
    imageUrl: "/assets/Thumbnail/HC_TN.JPG",
    category: "Fashion",
  },
  {
    id: 3,
    title: "The Fresh Basket",
    imageUrl: "/assets/Thumbnail/FB_TN.JPG",
    category: "Grocery",
  },
  {
    id: 4,
    title: "Born babies",
    imageUrl: "/assets/Thumbnail/BB_TN.JPG",
    category: "Kids",
  },
  {
    id: 5,
    title: "Kandhan Stores",
    imageUrl: "/assets/Thumbnail/KS_TN.JPG",
    category: "Retail",
  },
  {
    id: 6,
    title: "Global Wear",
    imageUrl: "/assets/Thumbnail/GW_TN.JPG",
    category: "Fashion",
  },
  {
    id: 7,
    title: "Silver lady",
    imageUrl: "/assets/Thumbnail/SL_TN.JPG",
    category: "Fashion",
  },
  {
    id: 8,
    title: "In and out station 1",
    imageUrl: "/assets/Thumbnail/IN1.JPG",
    category: "Retail",
  },
  {
    id: 9,
    title: "In and out station 2",
    imageUrl: "/assets/Thumbnail/IN2.JPG",
    category: "Retail",
  },
  {
    id: 10,
    title: "Naidu Hall",
    imageUrl: "/assets/Thumbnail/NH_TN.JPG",
    category: "Fashion",
  },
];

const supermarketCategories = ["Retail", "Grocery", "Kids"];
const fashion = ["Fashion"];
const categories = ["ALL", "SUPERMARKET", "FASHION"];

const PortfolioGrid = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const pathname = usePathname();
  const isProjectPage = pathname === "/projects";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  useEffect(() => {
    if (activeCategory === "ALL") {
      setFilteredProjects(projects);
    } else if (activeCategory === "SUPERMARKET") {
      const filtered = projects.filter((project) =>
        supermarketCategories.includes(project.category)
      );
      setFilteredProjects(filtered);
    } else if (activeCategory === "FASHION") {
      const filtered = projects.filter((project) =>
        fashion.includes(project.category)
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  // Function to get the icon for each category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ALL":
        return <Grid size={16} className="text-current" />;
      case "SUPERMARKET":
        return <ShoppingCart size={16} className="text-current" />;
      case "FASHION":
        return <Shirt size={16} className="text-current" />;
      default:
        return <Grid size={16} className="text-current" />;
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {isMobile ? (
          <div className="text-start">
            <motion.p
              variants={itemVariants}
              className="text-2xl mt-4 md:text-4xl px-2 font-semibold text-[#4A044E] mb-4"
            >
              Our interior design projects provide a glimpse into our expertise.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="!text-[12px] md:!text-base px-2"
            >
              Click for more to explore our portfolio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-black flex flex-wrap justify-start px-2 gap-3 text-[11px] mt-4 !mb-5"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`text-sm border px-2 rounded-lg py-1 min-w-fit transition-colors flex items-center justify-start gap-2 ${
                    activeCategory === category
                      ? "bg-[#4A044E] text-white border-[#4A044E]"
                      : "text-gray-600 border-[#65558F] hover:text-gray-900"
                  }`}
                >
                  <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                    {getCategoryIcon(category)}
                  </span>
                  <motion.div className="whitespace-nowrap">
                    {category}
                  </motion.div>
                </button>
              ))}
            </motion.div>
          </div>
        ) : (
          <motion.div variants={containerVariants} className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl !max-w-4xl mx-auto md:text-3xl font-semibold text-[#400043] mb-3"
            >
              {isProjectPage ? (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-5"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[20px] sm:text-[34px] px-4"
                  >
                    Step Inside Our Latest Creations
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[20px] sm:text-[34px] font-bold leading-snug text-[#4A044E]  mb-4"
                >
                  Our interior design projects provide a glimpse into our
                  expertise.
                </motion.div>
              )}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-black text-[11px] md:text-base mt-1 !mb-5"
            >
              Click for more to explore our portfolio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-black flex flex-wrap justify-center gap-5 text-[11px] md:text-base mt-1 !mb-5"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`text-sm border px-2 rounded-lg py-1 min-w-fit transition-colors flex items-center gap-2 ${
                    activeCategory === category
                      ? "bg-[#4A044E] text-white border-[#4A044E]"
                      : "text-gray-600 border-[#65558F] hover:text-gray-900"
                  }`}
                >
                  <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">
                    {getCategoryIcon(category)}
                  </span>
                  <motion.div className="whitespace-nowrap">
                    {category}
                  </motion.div>
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                layout
              >
                <Link
                  href={`/projects/${project.id}`}
                  key={project.id}
                  className="group relative !aspect-[16/9] overflow-hidden !rounded-lg"
                >
                  <div className="relative w-full h-[200px] sm:h-[300px] !rounded-xl">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-full !rounded-xl"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <div className="self-end">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-500">
              No projects found in this category.
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioGrid;
