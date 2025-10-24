import React, { JSX } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import FAQPage from "@/components/common/FAQPge";
import { Metadata } from "next";
import RandomBlogs from "@/components/blogs/RandomBlogs";

type Article = {
  title: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  authorImages: string[];
  content: {
    subHeadings: string[];
    content: string[];
  };
  subTitle: string;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const metadata: Metadata = {
  title: "Blogs| Inspace Store",
  description: "Blogs page",
};

//TODO: text align figma check and separate data objects

const articles: Record<string, Article> = {
  "1": {
    title: "How a Well-Designed Store Boosts Customer Experience and Sales",
    subTitle:
      "When setting up or renovating a retail store, choosing the right fixtures is crucial. Quality fixtures not only enhance aesthetics but also improve durability, functionality, and customer experience. Poor-quality fixtures, on the other hand, can lead to frequent replacements, safety issues, and an overall negative impact on your store’s appeal.",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid1.webp",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "Durability & Longevity:",
        "Enhancing Customer Experience:",
        "Brand Perception & Trust:",
        "Material:",
        "Functionality:",
        "Customization:",
        "Conclusion:",
      ],
      content: [
        "High-quality materials ensure that your fixtures last longer, reducing maintenance costs and minimizing disruptions due to replacements.",
        "A well-designed store with sturdy, aesthetically pleasing fixtures creates a positive shopping atmosphere, encouraging customers to spend more time exploring.",
        "Your store’s look influences how customers perceive your brand. Well-crafted fixtures make a lasting impression and reinforce trust in your products.",
        "Opt for durable materials like wood, metal, or high-grade plastic.",
        "Ensure fixtures are designed for efficient product display and accessibility.",
        "Choose fixtures that align with your store’s theme and branding.",
        "Investing in quality fixtures is an investment in your brand’s success. Make informed choices that balance durability, aesthetics, and functionality to create a seamless shopping experience.",
      ],
    },
  },
  "2": {
    title: "How a Well-Designed Store Boosts Customer Experience and Sales",
    subTitle:
      "Retail success is not just about the products you sell—it’s also about how your store is designed. An intuitive, well-organized retail space can significantly improve customer experience, leading to increased sales and repeat business.",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid2.avif",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "First Impressions Matter:",
        "Easy Navigation Encourages Purchases:",
        "Engaging Visual Merchandising:",
        "Use lighting strategically:",
        "Optimize shelf and display heights:",
        "Create a flow:",
        "Conclusion:",
      ],
      content: [
        "Your store’s layout, lighting, and fixtures create an immediate impression. A well-organized space invites customers to explore, while a cluttered or poorly lit store may drive them away.",
        "When customers can easily find what they’re looking for, they are more likely to make a purchase. Clear signage, well-planned aisles, and product categorization improve navigation.",
        "Strategic placement of displays and product arrangements can draw attention to high-margin items and promotions, boosting overall sales.",
        "Highlight key areas and create a welcoming ambiance.",
        "Ensure products are at eye level for easy access.",
        "Guide customers naturally through your store with a logical layout.",
        "A well-designed retail space enhances customer satisfaction and maximizes sales potential. Investing in smart store design is key to long-term success in the competitive retail industry.",
      ],
    },
  },
  "3": {
    title: "The Role of Innovation in Modern Retail Design",
    subTitle:
      "Innovation in retail design goes beyond aesthetics; it transforms how customers interact with your brand. From smart shelving to interactive displays, modern retail spaces leverage technology and creative layouts to improve engagement and efficiency.",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid3.jpg",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "Smart Fixtures & Displays:",
        "Modular & Flexible Store Layouts:",
        "Sustainable Design Practices:",
        "Conclusion:",
      ],
      content: [
        "Interactive screens, digital price tags, and RFID-enabled shelves enhance customer convenience and streamline inventory management.",
        "Retailers now use modular fixtures that can be reconfigured based on seasonal trends and customer preferences.",
        "Eco-friendly materials and energy-efficient lighting contribute to sustainability while maintaining a high-end look.",
        "Retail innovation is essential for staying competitive. By integrating technology and flexible design, you can create an engaging shopping experience that meets the expectations of today’s customers.",
      ],
    },
  },
  "4": {
    title: "5 Key Factors to Consider When Upgrading Your Store Interiors",
    subTitle:
      "Upgrading your store interiors is a crucial investment in enhancing customer experience and increasing sales. Whether it's a full renovation or a minor update, strategic planning is key.",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid4.jpg",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "Space Utilization & Layout:",
        "Lighting & Ambiance:",
        "Branding Consistency:",
        "Durability & Maintenance:",
        "Customer Comfort:",
        "Conclusion:",
      ],
      content: [
        "Optimize your space with an efficient layout that ensures easy navigation and maximizes product visibility.",
        "Proper lighting enhances the shopping experience, draws attention to key areas, and creates a welcoming environment.",
        "Your interior should align with your brand identity, ensuring a cohesive look through colors, materials, and signage",
        "Choose materials and fixtures that are long-lasting, easy to maintain, and cost-effective in the long run",
        "Create a comfortable space with wide aisles, resting areas, and easy checkout points to improve the shopping experience.",
        "Retail innovation is essential for staying competitive. By integrating technology and flexible design, you can create an engaging shopping experience that meets the expectations of today’s customers.",
      ],
    },
  },
  "5": {
    title: "Building a Strong Brand Identity Through Store Design",
    subTitle:
      "Your store design is more than just an arrangement of shelves and display units—it’s a powerful tool for building brand identity. A well-designed retail space creates a lasting impression, reinforces your brand’s personality, and enhances customer experience. Every detail, from color schemes to fixture styles, plays a role in communicating your brand’s message.",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid5.jpeg",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "Creating a Memorable First Impression:",
        "Consistency in Branding Elements:",
        "Strategic Store Layout for Customer Engagement:",
        "Conclusion:",
      ],
      content: [
        "The moment a customer walks into your store, they should immediately sense your brand’s identity. The layout, lighting, and décor should align with your brand’s values and aesthetic.",
        "Consistency is key to building trust. Using your brand’s color palette, typography, and logo placement throughout your store strengthens brand recall and creates a cohesive experience.",
        "A thoughtful store layout ensures customers can easily navigate and interact with your products. Consider focal points, aisle width, and product placements that align with your brand story.",
        "A strong brand identity through store design fosters loyalty and enhances the customer experience. By aligning design elements with your brand’s personality, you create an immersive and recognizable retail environment. Investing in a well-thought-out store design ensures that your brand stands out in a competitive market.",
      ],
    },
  },
  "6": {
    title: "Common Mistakes in Retail Space Planning and How to Avoid Them",
    subTitle:
      "Effective retail space planning is essential for creating a seamless shopping experience, increasing sales, and maintaining brand consistency. However, many retailers make common mistakes that can lead to inefficiencies, lost sales, and poor customer experiences. In this blog, we’ll explore these pitfalls and how to avoid them",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid6.jpg",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "Poor Store Layout & Navigation:",
        "Ineffective Use of Display & Merchandising:",
        "Inconsistent Branding & Store Theme:",
        "Poor Lighting Choices:",
        "Ignoring Customer Flow & Dwell Time:",
        "Conclusion:",
      ],
      content: [
        "A cluttered or confusing layout makes it difficult for customers to navigate the store. Overcrowded aisles, unclear product placements, and a lack of directional signage can frustrate shoppers and drive them away.",
        "Retailers often underutilize or overcrowd displays, making products hard to find or visually unappealing.",
        "A store that lacks a cohesive look and feel can create confusion for customers and weaken brand identity.",
        "Dim lighting can make a store look uninviting, while overly bright lighting can create discomfort.",
        "If customers feel rushed or restricted in movement, they are less likely to explore and make purchases.",
        "Avoiding these common retail space planning mistakes can improve customer experience, strengthen brand identity, and drive higher sales. Thoughtful design, strategic layouts, and consistent branding ensure a welcoming and efficient store environment that keeps customers coming back.",
      ],
    },
  },
  "7": {
    title:
      "Sustainability in Retail: How Eco-Friendly Fixtures Make a Difference",
    subTitle:
      "Sustainability is becoming a key focus in the retail industry as businesses look for ways to reduce their environmental impact while maintaining efficiency and aesthetics. One of the most effective ways to achieve this is by incorporating eco-friendly fixtures. Sustainable retail design not only benefits the environment but also enhances brand reputation and attracts eco-conscious consumers.",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid7.jpg",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "Reducing Environmental Impact:",
        "Enhancing Brand Image:",
        "Cost Savings in the Long Run:",
        "Conclusion:",
      ],
      content: [
        "Traditional store fixtures often involve high energy consumption and non-recyclable materials. Sustainable alternatives help minimize waste and lower carbon footprints.",
        "Consumers today prefer brands that are environmentally responsible. Incorporating eco-friendly fixtures showcases your commitment to sustainability and strengthens customer loyalty.",
        "Energy-efficient lighting, durable recycled materials, and sustainable design choices can lower maintenance and utility costs over time.",
        "Sustainable retail fixtures are a smart investment for businesses looking to align with modern consumer values while improving long-term cost efficiency. By incorporating eco-friendly materials, energy-efficient solutions, and modular designs, retailers can create a stylish yet responsible shopping environment that benefits both the planet and their brand.",
      ],
    },
  },
  "8": {
    title: "The Future of Retail Spaces: Trends That Are Shaping the Industry",
    subTitle:
      "The retail industry is evolving rapidly, with shifting consumer expectations and technological advancements shaping the future of retail spaces. As businesses strive to stay competitive, they must embrace new trends that enhance customer experience, optimize operations, and create engaging environments.",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid8.jpg",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "Omnichannel Shopping Integration:",
        "Personalization & Data-Driven Experiences:",
        "Experiential Retail & Immersive Environments:",
        "Sustainable & Eco-Friendly Design:",
        "Smart Store Technology:",
        "Flexible & Modular Store Layouts:",
        "Conclusion:",
      ],
      content: [
        "Customers now expect a seamless shopping experience across online and offline channels. Retail spaces are adapting by incorporating digital kiosks, self-checkout stations, and interactive displays to bridge the gap between e-commerce and physical stores.",
        "Retailers are using AI and data analytics to understand customer preferences and personalize in-store experiences. Smart displays, mobile apps, and tailored recommendations enhance engagement and improve sales.",
        "Shopping is no longer just about purchasing products; customers seek memorable experiences. Brands are investing in interactive spaces, pop-up events, and in-store activities to engage shoppers in meaningful ways.",
        "Sustainability is a priority, with retailers incorporating eco-friendly materials, energy-efficient lighting, and waste-reduction strategies to align with conscious consumer values and reduce their environmental footprint.",
        "Advancements in technology are transforming retail spaces with innovations such as cashier-less checkout, RFID tracking, augmented reality (AR), and virtual fitting rooms, making shopping faster and more convenient.",
        "Retailers are shifting to adaptable store layouts that can be easily modified to accommodate changing inventory, seasonal trends, and evolving consumer behaviors, ensuring long-term efficiency and relevance.",
        "The future of retail spaces is dynamic and customer-centric, with technology, sustainability, and experiential shopping leading the way. By staying ahead of these trends, retailers can create innovative, engaging environments that meet the evolving needs of modern shoppers.",
      ],
    },
  },
  "9": {
    title:
      "Why Quality Matters: Choosing the Right Fixtures for Your Retail Space",
    subTitle:
      "When setting up or renovating a retail store, choosing the right fixtures is crucial. Quality fixtures not only enhance aesthetics but also improve durability, functionality, and customer experience. Poor-quality fixtures, on the other hand, can lead to frequent replacements, safety issues, and an overall negative impact on your store’s appeal.",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid9.png",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "Durability & Longevity:",
        "Government Support:",
        "The Rise of Grade-A Warehouses:",
        "Future Outlook:",
        "Investor Preferences:",
        "Conclusion:",
      ],
      content: [
        "High-quality materials ensure that your fixtures last longer, reducing maintenance costs and minimizing disruptions due to replacements.",
        "Favorable government policies and initiatives, such as the development of multimodal logistics parks and the National Logistics Policy, are further boosting the warehousing sector's attractiveness to investors.",
        "The demand for high-quality, Grade-A warehouses is on the rise, driven by the need for efficient and technologically advanced facilities. This trend is attracting institutional investors who are seeking to deploy capital in assets that meet global standards.",
        "The demand for warehouse space is expected to remain robust in the coming years, fueled by the continued growth of e-commerce and organized retail. This positive outlook is likely to attract further PE investments in the warehousing sector, making it a key area to watch for investors and developers alike.",
        "While institutional investors are increasingly eyeing warehousing assets, high-net-worth individuals (HNIs) and ultra-high-net-worth individuals (UHNIs) are showing a preference for other real estate segments, such as plotted developments, villa projects, and holiday homes. These segments offer attractive returns and cater to the lifestyle aspirations of affluent investors.",
        "The warehousing sector in India is undergoing a transformation, driven by the growth of e-commerce, organized retail, and the focus on supply chain optimization. The increasing inflow of private equity investments is a testament to the sector's potential and its attractiveness as an asset class. As the sector continues to evolve, it is likely to present lucrative opportunities for investors and developers who are willing to navigate its complexities and capitalize on its growth trajectory.",
      ],
    },
  },
  "10": {
    title:
      "Why Quality Matters: Choosing the Right Fixtures for Your Retail Space",
    subTitle:
      "When setting up or renovating a retail store, choosing the right fixtures is crucial. Quality fixtures not only enhance aesthetics but also improve durability, functionality, and customer experience. Poor-quality fixtures, on the other hand, can lead to frequent replacements, safety issues, and an overall negative impact on your store’s appeal.",
    category: "Interior Design",
    image: "/assets/Blogs/BlogGrid10.png",
    date: "08 Nov 2023, 02:06 PM IST",
    readTime: "5 Minutes Read",
    authorImages: [
      "/assets/Blogs/Author1.png",
      "/assets/Blogs/Author2.png",
      "/assets/Blogs/Author3.png",
    ],
    content: {
      subHeadings: [
        "Durability & Longevity:",
        "Government Support:",
        "The Rise of Grade-A Warehouses:",
        "Future Outlook:",
        "Investor Preferences:",
        "Conclusion:",
      ],
      content: [
        "High-quality materials ensure that your fixtures last longer, reducing maintenance costs and minimizing disruptions due to replacements.",
        "Favorable government policies and initiatives, such as the development of multimodal logistics parks and the National Logistics Policy, are further boosting the warehousing sector's attractiveness to investors.",
        "The demand for high-quality, Grade-A warehouses is on the rise, driven by the need for efficient and technologically advanced facilities. This trend is attracting institutional investors who are seeking to deploy capital in assets that meet global standards.",
        "The demand for warehouse space is expected to remain robust in the coming years, fueled by the continued growth of e-commerce and organized retail. This positive outlook is likely to attract further PE investments in the warehousing sector, making it a key area to watch for investors and developers alike.",
        "While institutional investors are increasingly eyeing warehousing assets, high-net-worth individuals (HNIs) and ultra-high-net-worth individuals (UHNIs) are showing a preference for other real estate segments, such as plotted developments, villa projects, and holiday homes. These segments offer attractive returns and cater to the lifestyle aspirations of affluent investors.",
        "The warehousing sector in India is undergoing a transformation, driven by the growth of e-commerce, organized retail, and the focus on supply chain optimization. The increasing inflow of private equity investments is a testament to the sector's potential and its attractiveness as an asset class. As the sector continues to evolve, it is likely to present lucrative opportunities for investors and developers who are willing to navigate its complexities and capitalize on its growth trajectory.",
      ],
    },
  },
};

export default async function ArticleDetail({
  params,
}: Props): Promise<JSX.Element> {
  // Await the params object before accessing its properties
  const { id } = await params;
  const article = articles[id];

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="max-w-[99vw] overflow-hidden mt-20">
        <div className="sm:ml-[30px] sm:mr-[15px] mx-[20px]">
          <div className="relative w-full h-[60vh] mb-8 rounded-2xl overflow-hidden mt-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="container mx-auto">
                {/* <div className="text-[14px] font-[400] mb-2">
                  {article.category}
                </div> */}
                <div className="text-[18px] font-[500] mb-[10px]">
                  {article.title}
                </div>
                <div className="flex items-center space-x-4 mb-[1 0px]">
                  {/* <div className="flex -space-x-2">
                    {article.authorImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt="Author"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="sm:mx-[30px] mx-[20px]">
          {/* Category Badge */}
          <div className="border border-gray-100 lg:p-[30px] px-2 py-4 mb-6">
            <div className="flex flex-col gap-5 text-left">
              <div className="lg:text-[40px] font-[500] text-[16px] font-montserrat">
                {article.title}
              </div>
              <div className="text-gray-500 leading-relaxed font-[300] lg:text-[20px] text-[15px] font-montserrat">
                <div className="h-[0.5px] bg-[#A0A0A0] mb-4" />
                {article.subTitle}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:p-[30px] text-left border border-gray-100 px-2 py-4">
            {article.content.subHeadings.map(
              (heading: string, index: number) => (
                <div key={index}>
                  <span className="lg:text-[20px] text-[16px] font-[500] font-montserrat">
                    {heading}{" "}
                  </span>
                  <span className="lg:text-[18px] text-[15px] text-gray-500 leading-relaxed font-[300] font-montserrat">
                    {article.content.content[index]}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <RandomBlogs />
      </div>
      <FAQPage />
    </>
  );
}
