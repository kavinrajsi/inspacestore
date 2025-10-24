import React, { JSX } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { projects } from "@/components/projects/projects";
import BentoBox from "@/components/projects/BentoBox";
import Slideshow from "@/components/projects/SlideShow";
import RandomProjectsPage from "@/components/projects/RandomProjects";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const metadata: Metadata = {
  title: "Projects | Inspace Store",
  description: "Projects page",
};

export default async function ProjectDetail({
  params,
}: Props): Promise<JSX.Element> {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    notFound();
  }

  // Extract project details with fallbacks
  const client = project.client || "Saravana Stores";
  const categoryPrimary = project.category?.[0] || "Strategy & Design";
  const location = project?.location || "";

  return (
    <>
      <div className="max-w-[99vw] overflow-hidden">
        {/* Header Section */}
        {/* Header Section */}
        <div className="px-4 sm:px-8 mt-24">
          <h1 className="text-[#4A044E] mt-5 mb-3 font-bold text-2xl">
            {project.title}
          </h1>

          {/* Slideshow & Title Content Layout */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Slideshow (75%) */}
            <div className="w-full md:w-1/2">
              <Slideshow images={project.image} />
            </div>

            {/* Title Content (25%) */}
            <div className="w-full md:w-1/2 flex items-center sm:px-10 px-0">
              <p className="text-gray-700 !leading-loose sm:text-base text-xs">
                {project.titleContent}
              </p>
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="px-2 sm:px-8 lg:px-16 xl:px-48 mt-24 md:mt-36">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-28">
            {/* Project Info Section - Mobile View */}
            <div className="md:hidden w-full -mt-16">
              <div className="grid grid-cols-3 gap-2 p-4 pb-6">
                <div className="text-[#400043] font-bold text-sm">Client</div>
                <div className="text-[#400043] font-bold text-sm">Category</div>
                <div className="text-[#400043] font-bold text-sm">Location</div>

                <div className="text-xs  mr-5">{client}</div>
                <div className="text-xs  mr-3">{categoryPrimary}</div>
                <div className="text-xs">{location}</div>
              </div>
            </div>

            {/* Project Info Section - Desktop View */}
            <div className="hidden md:block w-full md:w-[250px] lg:w-[180px] flex-shrink-0">
              <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 p-4">
                <div className="mb-10">
                  <h3 className="font-bold text-lg mb-2 text-[#400043]">
                    Client
                  </h3>
                  <p className="text-sm">{client}</p>
                </div>

                <div className="mb-10">
                  <h3 className="font-bold text-lg mb-2 text-[#400043]">
                    Category
                  </h3>
                  <p className="text-sm mb-1">{categoryPrimary}</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2  text-[#400043]">
                    Location
                  </h3>
                  <p className="text-sm">{location}</p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="flex-grow">
              {/* Inspace's Solution Section */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold px-3 sm:px-0 text-[#400043] mb-4">
                  Inspace&apos;s Solution
                </h2>
                <p className="text-gray-700 !leading-relaxed sm:!leading-loose text-xs sm:text-base px-3 sm:px-0 tracking-wide">
                  {project.inspaceContent}
                </p>
              </div>

              {/* Outcomes Section */}
              <div className="-mt-8 sm:mt-0">
                <h2 className="text-2xl font-bold px-3 sm:px-0 text-[#400043] mb-4">
                  Outcomes
                </h2>
                <p className="text-gray-700 !leading-relaxed sm:!leading-loose tracking-wide px-3 sm:px-0 text-xs sm:text-base">
                  {project.outcomesContent}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="-mt-3 sm:mt-12">
          <div className="text-start sm:text-center mx-4 sm:!mx-0 font-bold mt-20 md:mt-40 max-w-full mb-10 text-2xl md:text-3xl text-[#400043]">
            Gallery
          </div>
          <BentoBox images={project.scrollingImages} />
        </div>

        <div className="mb-40 sm:mb-0">
          <RandomProjectsPage />
        </div>
      </div>
    </>
  );
}
