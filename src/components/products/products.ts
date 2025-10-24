import { Product } from "./types";


export interface Products {
    id: string;
    title: string;
    categoryId: string
    slug: string;
    head: string;
    subHead: string;
    description: string;
    image: string;
    useCase: string[];
    footerContent: string;
    products: Product[];
}

export interface Category {
    id: string;
    name: string;
    icon?: string;
}

export const colors = {
    "frosty-white": "/assets/products/colors/frosty-white.jpg",
    "graphite-grey": "/assets/products/colors/graphite-grey.jpg",
    "matte-black": "/assets/products/colors/matte-black.jpg",
    "matte-white": "/assets/products/colors/matte-white.jpg",
    "oak-nottingham": "/assets/products/colors/oak-nottingham.jpg",
    "teak-exotica": "/assets/products/colors/teak-exotica.jpg",
}
export const categories: Category[] = [
    {
        id: "1",
        name: "APPAREL",
        icon: "/assets/products/icons/apparel.png",
    },
    // {
    //   id: "2",
    //   name: "BAKERY",
    //   icon: "/assets/products/icons/bakery.png",
    // },
    // {
    //     id: "3",
    //     name: "SUPERMARKET",
    //     icon: "/assets/products/icons/supermarket.png",
    // },
    // {
    //   id: "4",
    //   name: "FRUITS & VEGETABLES",
    //   icon: "/assets/products/icons/fruits-vegetables.png",
    // },
    // {
    //   id: "5",
    //   name: "HEALTH CARE",
    //   icon: "/assets/products/icons/health-care.png",
    // },
    // {
    //   id: "6",
    //   name: "SPORTS & TRAVEL",
    //   icon: "/assets/products/icons/sports-travel.png",
    // },
    // {
    //   id: "7",
    //   name: "KIDS & TOYS",
    //   icon: "/assets/products/icons/kids-toys.png",
    // },
    // {
    //   id: "8",
    //   name: "ELECTRONICS & APPLIANCES",
    //   icon: "/assets/products/icons/electronics-appliances.png",
    // },
    // {
    //   id: "9",
    //   name: "WAREHOUSE RACKS",
    //   icon: "/assets/products/icons/warehouse-racks.png",
    // },
    // {
    //   id: "10",
    //   name: "HOME & DÉCOR",
    //   icon: "/assets/products/icons/home.png",
    // },
    // {
    //   id: "11",
    //   name: "POINT OF SALE",
    //   icon: "/assets/products/icons/point-of-sale.png",
    // },
];

export const products: Products[] = [
    {
        id: "1",
        title: "FLOOR DISPLAY UNIT",
        categoryId: "1",
        slug: "floor-display-unit",
        head: "Durable Floor-Mounted Furniture for Efficient Apparel Displays",
        subHead: "Explore our range of sturdy, space-optimized fixtures designed to enhance visibility, accessibility, and brand aesthetics in retail environments",
        description: "Designed to seamlessly integrate into retail floors, our floor-mounted fixtures provide a strong foundation for product displays in apparel stores. Whether you're showcasing folded garments, accessories, or seasonal promotions, these units offer stability, flexibility, and a clean visual flow.",
        image: "/assets/products/FloorUnitDisplay/fudimg.jpg",
        useCase: ["Department stores", "Branded retail showrooms", "Large-format outlets", "Apparel outlets with modular layouts"],
        footerContent: "floor-mounted retail furniture, commercial apparel fixtures, store display systems, heavy-duty garment racks, modular clothing shelves",
        products: [
            {
                id: "1",
                title: "FUD – 001",
                description: "The FLOOR UNIT DISPLAY – 001 (FUD – 001) is a sleek and modern retail fixture crafted to enhance product visibility while maintaining a minimalist aesthetic. Designed with dual display functionality, it features a hanging rail on one side for garments and spacious laminated wooden shelves on the other for folded apparel or merchandise. The 12mm clear glass top adds a sophisticated touch, offering additional space to highlight accessories or promotional items. Built with a durable powder-coated steel frame, this unit is ideal for creating an organized and visually appealing shopping experience in any retail setting.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-1/FUD1-(1).png",
                    "/assets/products/FloorUnitDisplay/FUD-1/FUD1-(2).png",
                    "/assets/products/FloorUnitDisplay/FUD-1/FUD1-(3).png",
                    "/assets/products/FloorUnitDisplay/FUD-1/FUD1-(4).png",
                    "/assets/products/FloorUnitDisplay/FUD-1/FUD1-(5).png"


                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel for enhanced strength and durability" },
                    { name: "Shelves", description: "Commercial-grade laminated MDF with a smooth finish" },
                    { name: "Top Surface", description: "12mm thick clear glass for premium presentation" },
                    { name: "Hanging Rod", description: "Integrated steel tube, securely welded for stability" },

                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "1200", width: "600", height: "1050" },
                usability: [
                    "Dual-function layout for hanging and folded displays",
                    "Maximizes floor space and improves product organization",
                    "Glass top offers space for accessories, branding, or featured items",
                    "Durable structure suitable for everyday retail use"
                ],
                idealUseCase: [
                    "Fashion boutiques and designer stores",
                    "Department store apparel sections",
                    "Pop-up shops and lifestyle exhibitions",
                    "Multi-brand garment outlets",
                    "Showrooms and concept retail environments"
                ]
            },
            {
                id: "2",
                title: "FUD – 002",
                description: "The FLOOR UNIT DISPLAY – 002 (FUD – 002) is a versatile retail fixture designed to optimize product presentation and enhance customer engagement. This unit features a dual display system with a hanging rail on one side for garments and spacious laminated wooden shelves on the other for folded apparel or merchandise. The 12mm clear glass top adds a touch of elegance, providing additional space to showcase accessories or promotional items. Constructed with a robust powder-coated steel frame, this display unit is perfect for creating an organized and visually appealing shopping experience in any retail environment.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-2/FUD2-(1).png",
                    "/assets/products/FloorUnitDisplay/FUD-2/FUD2-(2).png",
                    "/assets/products/FloorUnitDisplay/FUD-2/FUD2-(3).png",
                    "/assets/products/FloorUnitDisplay/FUD-2/FUD2-(4).png",
                    "/assets/products/FloorUnitDisplay/FUD-2/FUD2-(5).png"

                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel for enhanced strength and durability" },
                    { name: "Shelves", description: "Commercial-grade laminated MDF with a smooth finish" },
                    { name: "Top Surface", description: "12mm thick clear glass for premium presentation" },
                    { name: "Hanging Rod", description: "Integrated steel tube, securely welded for stability" },

                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "1200", width: "600", height: "1050" },
                usability: [
                    "Dual-function layout for hanging and folded displays",
                    "Maximizes floor space and improves product organization",
                    "Glass top offers space for accessories, branding, or featured items",
                    "Durable structure suitable for everyday retail use"
                ],
                idealUseCase: [
                    "Fashion boutiques and designer stores",
                    "Department store apparel sections",
                    "Pop-up shops and lifestyle exhibitions",
                    "Multi-brand garment outlets",
                    "Showrooms and concept retail environments"
                ]
            },
            {
                id: "3",
                title: "FUD – 003",
                description:
                    "The FLOOR UNIT DISPLAY – 003 (FUD – 003) is a streamlined retail fixture built for modern visual merchandising. It features a slim powder-coated steel frame with a center-mounted hanging rail for showcasing garments on hangers. The 12mm clear glass top adds a refined look while doubling as a display platform for folded merchandise or accessories. With its open design and stable base, this unit maximizes visibility and accessibility, making it ideal for highlighting featured collections or promotional pieces in high-traffic retail areas.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-3/FUD3- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-3/FUD3- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-3/FUD3- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-3/FUD3- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-3/FUD3- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel for a sturdy, long-lasting structure" },
                    { name: "Top Surface", description: "12mm thick clear glass" },
                    { name: "Hanging Rod", description: "Center-mounted integrated steel tube, securely welded" },
                    { name: "Base Legs", description: "T-stand profile for enhanced stability" }
                ],
                color: [
                    {
                        name: "Frame",
                        option: ["Matte Black", "Matte White", "Graphite Grey"]
                    }
                ],
                dimension: {
                    length: "1200",
                    width: "600",
                    height: "1050"
                },
                usability: [
                    "Designed for efficient single-rail garment display",
                    "Transparent glass top adds utility for light folded displays or signage",
                    "Lightweight and easy to reposition within retail floors",
                    "Minimal footprint ideal for smaller or modular store formats"
                ],
                idealUseCase: [
                    "Fashion boutiques and designer apparel stores",
                    "Pop-up retail zones and trade shows",
                    "Visual merchandising displays",
                    "Premium sections of department stores",
                    "Studio showrooms and lifestyle concept stores"
                ]
            },
            {
                id: "4",
                title: "FUD – 004",
                description: "The FLOOR UNIT DISPLAY – 004 (FUD – 004) is a robust and visually balanced double-sided garment display fixture designed for optimal clothing presentation. With its twin hanging rods integrated into a durable mild steel frame, this unit provides ample space for displaying clothing on both sides—perfect for maximizing visibility in central floor areas. The clear 12mm glass top adds an upscale finish while offering an additional flat surface for featured items or folded apparel. Its symmetrical layout ensures a clean, professional look suited for modern retail environments.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-4/FUD4- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-4/FUD4- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-4/FUD4- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-4/FUD4- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-4/FUD4- (5).png"
                ],
                material: [
                    { name: "Frame", description: "High-strength powder-coated mild steel" },
                    { name: "Top Surface", description: "12mm clear glass" },
                    { name: "Hanging Rods", description: "Dual integrated steel tubes welded securely for heavy-duty use" },
                    { name: "Support Base", description: "Reinforced square frame for structural stability" }
                ],
                color: [
                    { name: "Frame", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: { length: "1200", width: "600", height: "1050" },
                usability: [
                    "Dual-sided hanging display for showcasing front-facing collections",
                    "Space-saving design ideal for aisle and center-floor placement",
                    "Transparent top surface usable for folded items or merchandise props",
                    "Strong structure supports weight of heavy apparel"
                ],
                idealUseCase: [
                    "Mid-floor garment displays in fashion stores",
                    "Department store central racks",
                    "Apparel showrooms and exhibitions",
                    "Lifestyle concept retail environments",
                    "Pop-up and multi-brand garment stores"
                ]
            },
            {
                id: "5",
                title: "FUD – 005",
                description: "The FUD – 005 is a compact, double-sided shelving unit designed for organized, high-volume folded garment display. Featuring six wide wooden shelves (three on each side) supported by a matte black mild steel frame, it provides practical visibility and easy accessibility to apparel like jeans, T-shirts, sweaters, and folded merchandise. This unit is ideal for maximizing vertical space in compact store layouts while maintaining a clean and structured presentation.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-5/FUD5- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-5/FUD5- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-5/FUD5- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-5/FUD5- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-5/FUD5- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel for durability" },
                    { name: "Shelves", description: "High-density laminated MDF boards in natural wood finish" },
                    { name: "Base Support", description: "Sturdy \"T\" shaped legs for enhanced ground grip" }
                ],
                color: [
                    { name: "Frame", option: ["Matte Black", "Matte White", "Graphite Grey"] },
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "1200", width: "600", height: "1350" },
                usability: [
                    "Efficient vertical shelving for neatly folded garments",
                    "Two-sided access ideal for walk-through aisles",
                    "Stable design suitable for medium to heavy clothing loads",
                    "Easy refilling and visual merchandising"
                ],
                idealUseCase: [
                    "Display of folded apparel in fashion stores",
                    "Jeans, tees, and winter wear arrangement",
                    "Mid-floor display in department stores",
                    "Apparel pop-ups and small-format retail setups"
                ]
            },
            {
                id: "6",
                title: "FUD – 006",
                description: "The FUD – 006 is a sleek, single-column mobile shelving unit designed for folded garments. With four display shelves and a minimal footprint, this model is perfect for spotlighting smaller quantities of apparel in flexible retail setups. Equipped with wheels and side hooks for additional hanging or signage options, it’s an excellent choice for adaptive merchandising and promotional zones.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-6/FUD6- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-6/FUD6- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-6/FUD6- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-6/FUD6- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-6/FUD6- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel" },
                    { name: "Shelves", description: "Laminated MDF board" },
                    { name: "Base", description: "Castor wheels for easy mobility" }
                ],
                color: [
                    { name: "Frame", option: ["Matte Black", "Matte White", "Graphite Grey"] },
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "600", width: "600", height: "1300" },
                usability: [
                    "Best for small merchandise zones or compact spaces",
                    "Easy-to-move unit ideal for seasonal or rotating displays",
                    "Can hold jeans, T-shirts, knitwear, or accessories",
                    "Side rods for hooks, tags, or branding"
                ],
                idealUseCase: [
                    "Display for entryway or promotional sections",
                    "Kidswear or folded clothing highlights",
                    "Mobile pop-up displays in retail stores",
                    "Island setups in boutique stores"
                ]
            },
            {
                id: "7",
                title: "FUD – 007",
                description: "The FUD – 007 is a double-sided mid-height floor display rack, perfect for organizing and showcasing folded garments. With an open-frame design and sturdy shelves, it offers maximum visibility and access from both sides—making it ideal for island placements in retail floors.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-7/FUD7- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-7/FUD7- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-7/FUD7- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-7/FUD7- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-7/FUD7- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel" },
                    { name: "Shelves", description: "Pre-laminated MDF board" }
                ],
                color: [
                    { name: "Frame", option: ["Matte Black", "Matte White", "Graphite Grey"] },
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "1200", width: "600", height: "1200" },
                usability: [
                    "Optimized for mid-floor positioning",
                    "Excellent for folded apparel like jeans, t-shirts, sweaters",
                    "Provides double-side access for better space utilization",
                    "Clean, modular form suited for both modern and minimalist stores"
                ],
                idealUseCase: [
                    "Garment displays in fashion retail stores",
                    "Centerpiece for open floor retail zones",
                    "Kidswear or denim stacking section",
                    "Works in both boutique and departmental layouts"
                ]
            },
            {
                id: "8",
                title: "FUD – 008",
                description: "The FUD – 008 is a double-sided mid-height slatwall display unit with multiple hanging arms, ideal for presenting apparel such as shirts, tops, or jackets. Designed for center-floor placement, it offers convenient dual-side access and modern aesthetics, enhancing product visibility and accessibility in retail environments.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-8/FUD8- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-8/FUD8- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-8/FUD8- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-8/FUD8- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-8/FUD8- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel" },
                    { name: "Panels & Base", description: "Pre-laminated MDF board" }
                ],
                color: [
                    { name: "Frame", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: { length: "1200", width: "600", height: "1300" },
                usability: [
                    "Suited for mid-floor or aisle placement",
                    "Excellent for hanging garments like shirts, jackets, and tops",
                    "Dual-side layout improves space usage and customer access",
                    "Clean and modular design for premium retail spaces"
                ],
                idealUseCase: [
                    "Fashion retail stores (men’s, women’s, or kidswear)",
                    "Central display in open retail layouts",
                    "Seasonal or new collection highlighting",
                    "Departmental or boutique apparel presentation"
                ]
            },
            {
                id: "9",
                title: "FUD – 009",
                description: "The FUD – 009 is a refined double-sided floor display rack equipped with integrated slatwall panels and straight display arms. Designed to maximize vertical space while maintaining accessibility, it is ideal for neatly presenting tops, jackets, and kidswear on hangers.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-9/FUD9- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-9/FUD9- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-9/FUD9- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-9/FUD9- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-9/FUD9- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel" },
                    { name: "Panels & Base", description: "Pre-laminated MDF board" }
                ],
                color: [
                    { name: "Frame", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: { length: "1200", width: "600", height: "1300" },
                usability: [
                    "Designed for center-of-store floor placement",
                    "Ideal for hanging garments with structured visibility",
                    "Efficient dual-access layout to enhance walk-around shopping",
                    "Minimalist and elegant to match modern retail interiors"
                ],
                idealUseCase: [
                    "Apparel stores showcasing shirts, t-shirts, or jackets",
                    "Kidswear collections in departmental stores",
                    "Highlight zones for seasonal fashion pieces",
                    "Suitable for both luxury boutiques and high-footfall outlets"
                ]
            },
            {
                id: "10",
                title: "FUD – 010",
                description: "The FLOOR UNIT DISPLAY – 010 (FUD – 010) is a compact yet impactful retail fixture designed for maximum product exposure within a minimal footprint. Featuring a unique cross-style configuration, this unit supports four individual hanging zones, making it ideal for displaying garments in a high-density, easy-access format. Crafted with contemporary finishes and strong structural integrity, it enables efficient merchandise presentation from all angles, enhancing customer interaction and store aesthetics.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-10/FUD10- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-10/FUD10- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-10/FUD10- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-10/FUD10- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-10/FUD10- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel for robust, long-term use" },
                    { name: "Panels", description: "High-quality laminated plywood with slat wall grooves for customizable hanging positions" },
                    { name: "Hanging Rods", description: "Heavy-duty steel arms with welded supports for secure garment display" }
                ],
                color: [
                    { name: "Frame", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: { length: "900", width: "900", height: "1300" },
                usability: [
                    "Quad-sided hanging design for showcasing up to four distinct product ranges",
                    "Slat wall flexibility allows for varying display accessories such as hooks, arms, or shelves",
                    "Elevated base platform adds product prominence while ensuring structural balance",
                    "Tool-free rearrangement of hooks for dynamic visual merchandising"
                ],
                idealUseCase: [
                    "Fashion and lifestyle retail stores",
                    "Seasonal collections and promotional zones",
                    "Pop-up fashion stalls and mobile displays",
                    "Concept boutiques and curated apparel spaces",
                    "Retail chains aiming for uniform, modular display solutions"
                ]
            },
            {
                id: "11",
                title: "FUD – 011",
                description: "The FLOOR UNIT DISPLAY – 011 (FUD – 011) is a compact, high-utility display solution tailored for modern retail spaces. Featuring a symmetrical four-way hanging configuration, this unit ensures efficient product rotation and visibility from every angle. Its clean, vertical design optimizes floor space while enabling high-volume garment presentation. With sleek finishes and a sturdy construction, this display stand brings both form and function to the forefront of in-store merchandising.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-11/FUD11- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-11/FUD11- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-11/FUD11- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-11/FUD11- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-11/FUD11- (5).png"
                ],
                material: [
                    { name: "Frame & Panels", description: "Engineered with commercial-grade laminated plywood, precision-grooved to accommodate various slat-wall accessories" },
                    { name: "Base", description: "Reinforced pedestal for structural stability" },
                    { name: "Hanging Arms", description: "Powder-coated steel hang rails, securely fixed with load-bearing mounts" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: { length: "600", width: "600", height: "1300" },
                usability: [
                    "Four-directional hanging arms for maximum SKU display in compact space",
                    "Ideal for tops, outerwear, and seasonal promotions",
                    "Modular slat-wall system allows easy accessory repositioning",
                    "Space-saving design perfect for both small boutiques and large-format stores"
                ],
                idealUseCase: [
                    "Mid-floor highlights in fashion outlets",
                    "Seasonal clothing rotations in department stores",
                    "Display units in promotional or discount zones",
                    "Capsule collections and curated product launches",
                    "Pop-up and kiosk-style retail settings"
                ]
            },
            {
                id: "12",
                title: "FUD – 012",
                description: "The FLOOR UNIT DISPLAY – 012 (FUD – 012) is a wide-format garment display fixture designed for high-capacity retail presentation while maintaining a streamlined, open layout. Featuring double-sided slat-wall panels and precision-mounted display arms, this unit allows for optimal front-facing visibility of apparel. Its flat base and balanced form make it a reliable choice for busy shop floors where accessibility, durability, and design coherence are key.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-12/FUD12- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-12/FUD12- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-12/FUD12- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-12/FUD12- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-12/FUD12- (5).png"
                ],
                material: [
                    { name: "Main Structure", description: "High-grade laminated plywood with durable edge finishes" },
                    { name: "Hanging Arms", description: "Powder-coated steel with anti-slip notches" },
                    { name: "Base Platform", description: "Stabilized MDF with protective underside layering" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: { length: "1200", width: "600", height: "1300" },
                usability: [
                    "Dual-sided slat-wall configuration for increased merchandising capacity",
                    "Supports a variety of display accessories including arms, hooks, and shelving",
                    "Ideal for long garment rows such as t-shirts, blouses, and outerwear",
                    "Clean base design allows for easy placement and movement across retail layouts"
                ],
                idealUseCase: [
                    "Fashion chains and high-footfall retail outlets",
                    "Featured collection displays or seasonal rotations",
                    "Central aisle placements in department stores",
                    "Promotional or sale item displays",
                    "Pop-up retail where maximum SKU density is needed in minimal space"
                ]
            },
            {
                id: "13",
                title: "FUD – 013",
                description: "The FLOOR UNIT DISPLAY – 013 (FUD – 013) is a high-capacity, dual-function retail fixture designed to showcase folded apparel and accessories in an efficient, accessible format. With open front-facing shelves and side-mounted hooks, it maximizes storage and display potential without compromising space. This unit is perfect for merchandising jeans, sweaters, and boxed accessories in an organized, attractive manner.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-13/FUD13- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-13/FUD13- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-13/FUD13- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-13/FUD13- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-13/FUD13- (5).png"
                ],
                material: [
                    { name: "Main Body", description: "Laminated engineered wood panels with heavy-load bearing capacity" },
                    { name: "Shelves", description: "Reinforced MDF with front-lip support to prevent product spillage" },
                    { name: "Side Hooks", description: "Powder-coated steel with anti-slip ends" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "1200", width: "800", height: "1300" },
                usability: [
                    "5-tier open shelving on both sides for folded garments",
                    "Side peg hooks for bagged items or accessories",
                    "Excellent choice for denim, tees, sweatshirts, or bundled products",
                    "Optimized for middle-of-floor placement or against walls"
                ],
                idealUseCase: [
                    "Denim and casualwear zones in fashion stores",
                    "Seasonal or clearance displays",
                    "Central promotional islands",
                    "Lifestyle section merchandising",
                    "Department store clothing sections"
                ]
            },
            {
                id: "14",
                title: "FUD – 014",
                description: "The FLOOR UNIT DISPLAY – 014 (FUD – 014) is a compact, shelf-based display system ideal for merchandising folded garments and packaged accessories. Featuring transparent shelving, it allows full visibility of products while maintaining a clean and modern retail aesthetic. The side-mounted hooks add extra functionality, making it a perfect unit for small-format or high-turnover zones.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-14/FUD14- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-14/FUD14- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-14/FUD14- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-14/FUD14- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-14/FUD14- (5).png",
                    "/assets/products/FloorUnitDisplay/FUD-14/FUD14- (6).png"
                ],
                material: [
                    { name: "Structure", description: "Engineered wood in laminated finish" },
                    { name: "Shelves", description: "Transparent acrylic for clear visibility and modern appeal" },
                    { name: "Hooks", description: "Powder-coated steel for durability and load capacity" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "1200", width: "800", height: "1300" },
                usability: [
                    "5 transparent shelves per side for folded display",
                    "Side hooks for bagged items or accessories",
                    "Ideal for displaying t-shirts, jeans, hoodies, or sweaters",
                    "Compact footprint with high vertical storage"
                ],
                idealUseCase: [
                    "Lifestyle apparel zones",
                    "End-of-aisle or promo displays",
                    "Footwear stores (for boxed items and apparel)",
                    "Department and discount retail setups",
                    "Pop-up stores or mall kiosks"
                ]
            },
            {
                id: "15",
                title: "FUD – 015",
                description: "The FLOOR UNIT DISPLAY – 015 (FUD – 015) is a wide-format, double-sided shelving unit designed for efficient folded garment presentation. Its structured and segmented compartments ensure neatness, visibility, and high product capacity—making it ideal for busy retail environments.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-15/FUD15- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-15/FUD15- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-15/FUD15- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-15/FUD15- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-15/FUD15- (5).png"
                ],
                material: [
                    { name: "Structure", description: "Engineered wood with a smooth laminate finish" },
                    { name: "Shelving Brackets", description: "Adjustable metal inserts for flexible shelf placement" },
                    { name: "Base", description: "Raised plinth design for easy cleaning and product visibility" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "2400", width: "800", height: "1300" },
                usability: [
                    "3 vertical columns with 4 adjustable shelves per side",
                    "Double-sided for central floor placement",
                    "Designed for high SKU visibility and restocking convenience",
                    "Perfect for jeans, hoodies, sweatshirts, or folded outerwear"
                ],
                idealUseCase: [
                    "High-traffic fashion retail stores",
                    "Seasonal bulk merchandising areas",
                    "Department store central zones",
                    "Multi-brand retail floors",
                    "Flagship stores and visual merchandising focal points"
                ]
            },
            {
                id: "16",
                title: "FUD – 016",
                description: "The FLOOR UNIT DISPLAY – 016 (FUD – 016) is a compact and modern multi-functional display rack combining shelving and hanging space. Designed with a durable steel frame and wood panels, it offers flexibility for showcasing both folded and hanging apparel in a minimal footprint.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-16/FUD16- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-16/FUD16- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-16/FUD16- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-16/FUD16- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-16/FUD16- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated steel for enhanced stability and durability" },
                    { name: "Shelves", description: "Engineered wood with matte laminate finish" },
                    { name: "Hanging Rails", description: "Reinforced steel rods with adjustable height positioning" }
                ],
                color: [
                    { name: "Frame", option: ["Matte Black", "Matte White", "Graphite Grey"] },
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "1200", width: "600", height: "1200" },
                usability: [
                    "Dual-side functionality with open access shelving",
                    "Center hanging zone for shirts, outerwear, or dresses",
                    "Ideal for limited-space floor plans or small product clusters",
                    "Easy to reposition or rearrange within the retail layout"
                ],
                idealUseCase: [
                    "Boutique stores with space constraints",
                    "New arrival or feature product zones",
                    "Pop-up or promotional display sections",
                    "Center aisle displays in lifestyle or casual wear sections"
                ]
            },
            {
                id: "17",
                title: "FUD – 017",
                description: "The FLOOR UNIT DISPLAY – 017 (FUD – 017) is a high-capacity vertical shelving unit designed to showcase folded apparel with optimal visibility and accessibility. Its symmetrical, double-sided structure is ideal for maximizing space efficiency in busy retail floors.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-17/FUD17- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-17/FUD17- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-17/FUD17- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-17/FUD17- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-17/FUD17- (5).png"
                ],
                material: [
                    { name: "Shelves", description: "High-density engineered wood with matte laminate and edge-banded detailing" },
                    { name: "Base Platform", description: "Reinforced for weight-bearing and structural stability" }
                ],
                color: [
                    { name: "Shelf Finishes", option: ["Frosty White", "Matte Black", "Teak Exotica", "Oak Nottingham"] }
                ],
                dimension: { length: "1200", width: "800", height: "1300" },
                usability: [
                    "Dual-sided shelving for increased display volume",
                    "Ideal for organizing denim, sweaters, t-shirts, or folded garments",
                    "Clean lines support visual merchandising strategies",
                    "Slightly elevated base for ease of access and cleanliness"
                ],
                idealUseCase: [
                    "Center-floor display rows",
                    "High-traffic casualwear or denim zones",
                    "Seasonal sale or product bundle highlights",
                    "Mid-store navigation markers or zoning separators"
                ]
            },
            {
                id: "18",
                title: "FUD – 018",
                description: "The FLOOR UNIT DISPLAY – 018 (FUD – 018) is a compact, dual-purpose retail fixture designed to efficiently display boxed merchandise and hanging apparel. Its vertical orientation and peg system maximize product density in a small footprint.",
                image: [
                    "/assets/products/FloorUnitDisplay/FUD-18/FUD18- (1).png",
                    "/assets/products/FloorUnitDisplay/FUD-18/FUD18- (2).png",
                    "/assets/products/FloorUnitDisplay/FUD-18/FUD18- (3).png",
                    "/assets/products/FloorUnitDisplay/FUD-18/FUD18- (4).png",
                    "/assets/products/FloorUnitDisplay/FUD-18/FUD18- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated metal for industrial strength" },
                    { name: "Back Panel", description: "Medium-density fiberboard (MDF) core with matte laminate" },
                    { name: "Fixtures", description: "Modular steel hooks and hanging bars" }
                ],
                color: [
                    { name: "Frame", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: { length: "600", width: "600", height: "1300" },
                usability: [
                    "Pegboard-style hook system ideal for boxed goods or accessories",
                    "Side-mounted rail for garment hanging",
                    "Minimal footprint with maximum vertical utilization",
                    "Stable base for high-traffic zones"
                ],
                idealUseCase: [
                    "Underwear, socks, or boxed accessories",
                    "Small electronic or lifestyle products",
                    "Capsule collections or impulse-buy zones",
                    "Narrow aisle endcaps or corner fill-ins"
                ]
            }

        ]
    },
    {
        id: "2",
        title: "RACK AND RAILS",
        categoryId: "1",
        slug: "rack-and-rails",
        head: "Racks and Rails for Commercial Display Efficiency",
        subHead: "Versatile solutions to showcase garments with style, structure, and stability ",
        description: "Our Racks and Rails collection is designed to meet the evolving needs of modern retail spaces. Whether you're organizing clothing by type, season, or size, these fixtures offer functional elegance and ease of access. Built for durability and designed for visibility, they help optimize your floor layout while enhancing the overall customer experience.",
        image: "/assets/products/RacksAndRails/rrimg.jpg",
        useCase: ["Fashion retail chains", "Boutique apparel stores", "Warehouse outlets", "Visual merchandising zones", "Pop-up stores and exhibitions",],
        footerContent: "Browse our full range of commercial-grade garment racks, adjustable clothing rails, retail pipe systems, and steel display structures. Whether you're planning a minimalist boutique layout or a high-capacity retail rollout, our racks and rails provide the backbone for a well-organized apparel environment.",
        products: [
            {
                id: "1",
                title: "RR - 001",
                description: "The RACKS AND RAILS – 001 (RR – 001) is a robust and versatile garment display fixture designed to optimize apparel presentation in retail environments. Featuring a double-rail hanging system, this unit allows for tiered display of garments—perfect for highlighting collections by style, size, or season. The angled upper rail not only enhances product visibility but also adds visual dynamism to your display. With a compact footprint and durable construction, it’s engineered for both functionality and aesthetics, offering maximum garment capacity without compromising floor space.",
                image: [
                    "/assets/products/RacksAndRails/RR-1/RR1- (1).png",
                    "/assets/products/RacksAndRails/RR-1/RR1- (2).png",
                    "/assets/products/RacksAndRails/RR-1/RR1- (3).png",
                    "/assets/products/RacksAndRails/RR-1/RR1- (4).png",
                    "/assets/products/RacksAndRails/RR-1/RR1- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Heavy-duty powder-coated mild steel for long-lasting structural integrity" },
                    { name: "Rails", description: "Reinforced steel tubing, securely fastened with precision welds" },
                    { name: "Connectors", description: "Industrial-grade hardware for seamless assembly" },
                    { name: "Feet/Base", description: "Non-slip stabilizing feet for added support and safety" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: {
                    length: "1200",
                    width: "600",
                    height: "1800"
                },
                usability: [
                    "Dual-rail configuration for maximizing hanging capacity",
                    "Slanted top bar for elevated visual merchandising",
                    "Sturdy base ensures stability even under full load",
                    "Easy to disassemble and reposition as per layout changes",
                    "Compatible with standard-size hangers"
                ],
                idealUseCase: [
                    "Retail fashion chains and department stores",
                    "Seasonal pop-up stores and lifestyle events",
                    "Garment showrooms and trade displays",
                    "Outlet stores and discount retailers",
                    "Studio setups for lookbook presentations"
                ]
            },
            {
                id: "2",
                title: "RR - 002",
                description: "The RACKS AND RAILS – 002 (RR – 002) is a compact quad-arm garment display unit designed for efficient 360-degree merchandising. Its four extended arms, arranged in a cross pattern, offer high garment visibility and easy accessibility from all directions. Supported by vertical steel posts anchored into a laminated wooden base with castor wheels, this mobile unit is ideal for high-traffic retail environments. Whether used for new arrivals, featured collections, or sale items, it ensures maximum exposure in minimal floor space.",
                image: [
                    "/assets/products/RacksAndRails/RR-2/RR2- (1).png",
                    "/assets/products/RacksAndRails/RR-2/RR2- (2).png",
                    "/assets/products/RacksAndRails/RR-2/RR2- (3).png",
                    "/assets/products/RacksAndRails/RR-2/RR2- (4).png",
                    "/assets/products/RacksAndRails/RR-2/RR2- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Powder-coated mild steel with anti-corrosion finish" },
                    { name: "Base", description: "Commercial-grade laminated plywood for sturdy foundation" },
                    { name: "Arms", description: "Welded steel rods for secure and balanced support" },
                    { name: "Wheels", description: "Industrial swivel castors with brakes for smooth mobility and stability" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: {
                    length: "600",
                    width: "600",
                    height: "1800"
                },
                usability: [
                    "Four-arm layout for categorized garment display",
                    "Ideal for center-floor or aisle-end presentation",
                    "Easy to reposition with lockable castor wheels",
                    "Quick-access configuration for customer browsing",
                    "Stable base supports evenly distributed weight"
                ],
                idealUseCase: [
                    "Department store fashion floors",
                    "Mall kiosks and fashion pop-ups",
                    "Garment clearance and promotional zones",
                    "Boutique and outlet corner arrangements",
                    "Lifestyle stores with dynamic layout needs"
                ]
            },
            {
                id: "3",
                title: "RR - 003",
                description: "The RACKS AND RAILS – 003 (RR – 003) is a double-tiered 4-way garment display rack designed for high-density, all-angle merchandising. Each quadrant of the unit supports dual-height arms, allowing for the simultaneous display of tops and bottoms or multiple garment styles in one compact footprint. Mounted on a sturdy wooden base with lockable castor wheels, this versatile rack ensures both stability and maneuverability. It’s a space-efficient solution for maximizing inventory exposure in busy retail environments.",
                image: [
                    "/assets/products/RacksAndRails/RR-3/RR3- (1).png",
                    "/assets/products/RacksAndRails/RR-3/RR3- (2).png",
                    "/assets/products/RacksAndRails/RR-3/RR3- (3).png",
                    "/assets/products/RacksAndRails/RR-3/RR3- (4).png",
                    "/assets/products/RacksAndRails/RR-3/RR3- (5).png"

                ],
                material: [
                    { name: "Frame", description: "Precision-welded mild steel with powder-coated finish" },
                    { name: "Base", description: "Heavy-duty laminated plywood platform for optimal weight distribution" },
                    { name: "Display Arms", description: "Reinforced tubular steel rods, aligned for even garment spacing" },
                    { name: "Wheels", description: "Smooth-rolling industrial castors with integrated locking mechanism" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: {
                    length: "800",
                    width: "800",
                    height: "1800"
                },
                usability: [
                    "8-arm configuration for maximum garment capacity",
                    "Dual-height bars ideal for varied garment types",
                    "Fully mobile with lockable castors for flexible retail zoning",
                    "Compact, space-saving structure for high-traffic areas",
                    "Designed for quick product rotation and easy shopper navigation"
                ],
                idealUseCase: [
                    "Fast fashion stores and seasonal retail setups",
                    "Multi-brand apparel outlets",
                    "Mall kiosks and standalone promotional zones",
                    "Department store cross-merchandising",
                    "Fashion exhibitions and lifestyle fairs"
                ]
            },
            {
                id: "4",
                title: "RR - 004",
                description: "The RACKS AND RAILS – 004 (RR – 004) is a compact, twin-rail garment display rack designed for linear visibility and streamlined presentation. Its sleek vertical profile supports two horizontal arms, offering an organized display for tops, shirts, or jackets. Mounted on a durable laminated wood base with castor wheels, this unit provides stability with the flexibility of easy relocation. Ideal for narrow aisles or smaller display zones, it balances simplicity and functionality without compromising on capacity.",
                image: [
                    "/assets/products/RacksAndRails/RR-4/RR4- (1).png",
                    "/assets/products/RacksAndRails/RR-4/RR4- (2).png",
                    "/assets/products/RacksAndRails/RR-4/RR4- (3).png",
                    "/assets/products/RacksAndRails/RR-4/RR4- (4).png",
                    "/assets/products/RacksAndRails/RR-4/RR4- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Mild steel construction with industrial powder-coated finish" },
                    { name: "Base", description: "High-strength laminated plywood platform" },
                    { name: "Hanging Rods", description: "Solid tubular steel, precision-mounted" },
                    { name: "Wheels", description: "Four smooth-glide castors with locking feature for stability" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: {
                    length: "600",
                    width: "600",
                    height: "1800"
                },
                usability: [
                    "Dual-side arms for front-facing garment display",
                    "Mobile base ideal for flexible merchandising layouts",
                    "Space-saving design for use in compact floorplans",
                    "Easy to load, rotate, and reorganize merchandise",
                    "Supports a wide range of garment types"
                ],
                idealUseCase: [
                    "Retail outlets with space-conscious layouts",
                    "Capsule collections or promotional launches",
                    "Pop-up fashion stores",
                    "Specialty apparel sections",
                    "High-turnover display zones in shopping malls"
                ]
            },
            {
                id: "5",
                title: "RR - 005",
                description: "The RACKS AND RAILS – 005 (RR – 005) is a high-density, 360-degree merchandise display rack optimized for compact presentation of folded apparel or packaged items. Featuring a grid of twelve forward-facing arms, this rack creates maximum visual impact from all sides. Its open-frame design promotes airiness while maintaining structural strength, making it perfect for mid-floor or promotional hotspot placements. Engineered to accommodate repeated re-merchandising, this unit stands as a resilient and versatile retail performer.",
                image: [
                    "/assets/products/RacksAndRails/RR-5/RR5- (1).png",
                    "/assets/products/RacksAndRails/RR-5/RR5- (2).png",
                    "/assets/products/RacksAndRails/RR-5/RR5- (3).png",
                    "/assets/products/RacksAndRails/RR-5/RR5- (4).png",
                    "/assets/products/RacksAndRails/RR-5/RR5- (5).png",
                ],
                material: [
                    { name: "Structure", description: "Powder-coated mild steel" },
                    { name: "Arms", description: "Welded steel tubing with secure end caps" },
                    { name: "Frame Joinery", description: "Precision MIG welding for lasting strength" },
                    { name: "Feet", description: "Anti-slip base pads for floor protection and rack stability" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] }
                ],
                dimension: {
                    length: "500",
                    width: "500",
                    height: "1300"
                },
                usability: [
                    "12-arm layout for categorized or color-coded arrangement",
                    "All-around access ideal for central floor positioning",
                    "Excellent for flat-pack garments, bags, scarves, or boxed goods",
                    "Durable steel arms resist sagging under weight",
                    "Quick to stock, with high merchandise visibility"
                ],
                idealUseCase: [
                    "Department stores and discount outlets",
                    "Seasonal or promotional product rollouts",
                    "Central aisle attraction points",
                    "Accessories and small garments",
                    "Value stackers for high-turnover SKUs"
                ]
            },
            {
                id: "6",
                title: "RR - 006",
                description: "The RACKS AND RAILS – 006 (RR – 006) is a tall, high-capacity multiprong garment and accessory display rack. With 16 extended display arms arranged around a dual-column open steel frame, this rack is purpose-built for efficient vertical merchandising. Its clean, industrial design and high visibility angles make it ideal for larger retail floors aiming to maximize display surface without occupying excess footprint. Perfect for showcasing items in tiered or theme-based collections.",
                image: [
                    "/assets/products/RacksAndRails/RR-6/RR6- (1).png",
                    "/assets/products/RacksAndRails/RR-6/RR6- (2).png",
                    "/assets/products/RacksAndRails/RR-6/RR6- (3).png",
                    "/assets/products/RacksAndRails/RR-6/RR6- (4).png",
                    "/assets/products/RacksAndRails/RR-6/RR6- (5).png",
                ],
                material: [
                    { name: "Frame", description: "Industrial-grade powder-coated mild steel" },
                    { name: "Arms", description: "Tubular steel with welded brackets and secure stops" },
                    { name: "Joinery", description: "Fully welded joints for enhanced durability" },
                    { name: "Feet", description: "Non-slip stabilizing footings or optional caster-ready base" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] }
                ],
                dimension: {
                    length: "500",
                    width: "500",
                    height: "1300"
                },
                usability: [
                    "16 arm slots offer layered category merchandising",
                    "Suits bulk-display of accessories, folded garments, or flat-packed SKUs",
                    "Tall structure enhances visibility from afar",
                    "Easily accessible layout on all four sides",
                    "Sturdy design suitable for busy store floors or promotional zones"
                ],
                idealUseCase: [
                    "Fashion retail chains and anchor outlets",
                    "Multi-category accessories: scarves, belts, pouches",
                    "Value display for bundled or multipack products",
                    "Great for clearance, impulse, or mid-season promotions"
                ]
            },
            {
                id: "7",
                title: "RR - 007",
                description: "The RACKS AND RAILS – 007 (RR – 007) is a symmetrical 4-way garment rack designed for high-volume apparel display. With four extended arms radiating from a central steel spine, it provides easy visibility and access to all hanging garments. Its grid-like base structure enhances stability, while the open design encourages customer interaction from any direction. A go-to solution for dynamic fashion presentations.",
                image: [
                    "/assets/products/RacksAndRails/RR-7/RR7- (1).png",
                    "/assets/products/RacksAndRails/RR-7/RR7- (2).png",
                    "/assets/products/RacksAndRails/RR-7/RR7- (3).png",
                    "/assets/products/RacksAndRails/RR-7/RR7- (4).png",
                    "/assets/products/RacksAndRails/RR-7/RR7- (5).png",
                ],
                material: [
                    { name: "Frame", description: "Heavy-duty mild steel with matte powder coating" },
                    { name: "Arms", description: "Fixed-length tubular arms with hanger-friendly notches" },
                    { name: "Base", description: "Cross-legged base with anti-tip support" },
                    { name: "Finish", description: "Scratch-resistant, corrosion-protected" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] }
                ],
                dimension: {
                    length: "600",
                    width: "600",
                    height: "1800"
                },
                usability: [
                    "Ideal for hanging apparel like shirts, blouses, jackets",
                    "Optimized for mid-floor use and front-of-store campaigns",
                    "Uniform load distribution prevents sagging or bending",
                    "Allows four-sided browsing for high footfall areas",
                    "Simple and tool-free maintenance"
                ],
                idealUseCase: [
                    "Men’s and women’s casualwear zones",
                    "Launch zones for new clothing collections",
                    "Clearance and promo areas",
                    "Works well near trial room entries or exits"
                ]
            },
            {
                id: "8",
                title: "RR - 008",
                description: "The RACKS AND RAILS – 008 (RR – 008) is a streamlined, elevated 4-arm garment rack designed to maximize vertical display space while minimizing its floor footprint. Its raised arms are ideal for showcasing longer garments or high-visibility pieces. The modern industrial styling, with sharp angles and clean lines, makes it a perfect fit for premium or minimalist retail interiors.",
                image: [
                    "/assets/products/RacksAndRails/RR-8/RR8- (1).png",
                    "/assets/products/RacksAndRails/RR-8/RR8- (2).png",
                    "/assets/products/RacksAndRails/RR-8/RR8- (3).png",
                    "/assets/products/RacksAndRails/RR-8/RR8- (4).png",
                    "/assets/products/RacksAndRails/RR-8/RR8- (5).png",
                ],
                material: [
                    { name: "Frame", description: "Reinforced mild steel" },
                    { name: "Arms", description: "Precision-welded rectangular tubes with stopper ends" },
                    { name: "Base", description: "Interlocking square-tube frame for stability" },
                    { name: "Finish", description: "Durable matte powder coating" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] }
                ],
                dimension: {
                    length: "600",
                    width: "600",
                    height: "1800"
                },
                usability: [
                    "Four individual arms support high-density display",
                    "Each arm has elevated spacing to reduce garment overlap",
                    "Open structure supports browsing from all directions",
                    "Especially effective for longline tops, cardigans, and light outerwear",
                    "Easy to assemble, disassemble, and relocate"
                ],
                idealUseCase: [
                    "Capsule collections or curated pieces",
                    "Front-of-store fashion statements",
                    "Highlighting premium or seasonal items",
                    "Narrow aisle-friendly retail layouts"
                ]
            },
            {
                id: "9",
                title: "RR - 009",
                description: "The RACKS AND RAILS – 009 (RR – 009) is a sleek, minimal single-bar garment rail with a soft U-frame design. Its elegant silhouette and practical proportions make it a versatile display unit for a wide variety of apparel, from casualwear to formal collections. Ideal for both central and wall-adjacent placement, this rail delivers maximum garment visibility with understated charm.",
                image: [
                    "/assets/products/RacksAndRails/RR-9/RR9- (1).png",
                    "/assets/products/RacksAndRails/RR-9/RR9- (2).png",
                    "/assets/products/RacksAndRails/RR-9/RR9- (3).png",
                    "/assets/products/RacksAndRails/RR-9/RR9- (4).png",
                    "/assets/products/RacksAndRails/RR-9/RR9- (5).png",
                ],
                material: [
                    { name: "Frame", description: "Mild steel tubular structure" },
                    { name: "Crossbar", description: "Welded horizontal steel rail with hanger stoppers" },
                    { name: "Finish", description: "Smooth matte powder coating" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] }
                ],
                dimension: {
                    length: "1200",
                    width: "600",
                    height: "1500"
                },
                usability: [
                    "Simple single-bar layout for easy garment browsing",
                    "Ideal for shirts, blouses, tops, dresses, and jackets",
                    "Low-profile base offers high stability with minimal footprint",
                    "Lightweight and portable — perfect for store reconfiguration or pop-ups"
                ],
                idealUseCase: [
                    "Center-floor or wall-adjacent clothing display",
                    "Capsule wardrobes or curated style drops",
                    "Minimalist or boutique-style store interiors",
                    "Displaying new arrivals or seasonal lines"
                ]
            },
            {
                id: "10",
                title: "RR - 010",
                description: "The RACKS AND RAILS – 010 (RR – 010) is a 360° square rail unit designed to optimize garment display from every angle. With a clean square overhead frame and four accessible hanging sides, this unit offers high-capacity display in a compact footprint. Its modern industrial structure adds visual interest while maintaining full product accessibility for shoppers.",
                image: [
                    "/assets/products/RacksAndRails/RR-10/RR10- (1).png",
                    "/assets/products/RacksAndRails/RR-10/RR10- (2).png",
                    "/assets/products/RacksAndRails/RR-10/RR10- (3).png",
                    "/assets/products/RacksAndRails/RR-10/RR10- (4).png",
                    "/assets/products/RacksAndRails/RR-10/RR10- (5).png"
                ],
                material: [
                    { name: "Structure", description: "Mild steel box-section framework" },
                    { name: "Hanging Bars", description: "Integrated square loop design with fixed supports" },
                    { name: "Finish", description: "Matte powder-coated finish for durability and elegance" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] }
                ],
                dimension: {
                    length: "1200",
                    width: "600",
                    height: "1800"
                },
                usability: [
                    "Four-sided hanging access for high-traffic areas",
                    "Suitable for a wide range of garments including tops, trousers, dresses, and outerwear",
                    "Elevated square frame enhances product visibility",
                    "Robust steel construction suitable for heavy loads"
                ],
                idealUseCase: [
                    "Central floor feature display",
                    "Seasonal highlights and promotional selections",
                    "Multi-style or colorway groupings",
                    "Concept stores and modern retail environments"
                ]
            },
            {
                id: "11",
                title: "RR - 011",
                description: "The RACKS AND RAILS – 011 (RR – 011) offers a clean and minimal single-bar rail mounted directly into a wooden platform base. This unit blends raw metal and natural textures for a warm-industrial aesthetic, making it a refined choice for curated retail spaces. The single horizontal rail provides excellent garment presentation with front-facing clarity and ease of access.",
                image: [
                    "/assets/products/RacksAndRails/RR-11/RR11- (1).png",
                    "/assets/products/RacksAndRails/RR-11/RR11- (2).png",
                    "/assets/products/RacksAndRails/RR-11/RR11- (3).png",
                    "/assets/products/RacksAndRails/RR-11/RR11- (4).png",
                    "/assets/products/RacksAndRails/RR-11/RR11- (5).png",
                ],
                material: [
                    { name: "Structure", description: "Mild steel verticals with fixed top bar" },
                    { name: "Base", description: "Laminated or veneered wooden platform" },
                    { name: "Finish", description: "Matte powder-coated metal with natural wood grain or custom finish" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: {
                    length: "1200",
                    width: "600",
                    height: "1800"
                },
                usability: [
                    "Ideal for showcasing capsule collections or feature garments",
                    "Easy repositioning with secure wooden base",
                    "Clean presentation with limited visual clutter",
                    "Supports medium-to-heavy hanging garments"
                ],
                idealUseCase: [
                    "Pop-up boutiques or seasonal edits",
                    "Feature rail in entry zones",
                    "Designer corners or premium rails",
                    "Visual merchandising displays that balance warmth and minimalism"
                ]
            },
            {
                id: "12",
                title: "RR - 012",
                description: "The RACKS AND RAILS – 012 (RR – 012) is a 4-way rail system designed for compact yet high-capacity garment display. This piece is built around a central upright structure with four perpendicular arms, allowing customers to approach and browse from all directions. Its small footprint and smart layout make it ideal for high-traffic zones or tight merchandising areas.",
                image: [
                    "/assets/products/RacksAndRails/RR-12/RR12- (1).png",
                    "/assets/products/RacksAndRails/RR-12/RR12- (2).png",
                    "/assets/products/RacksAndRails/RR-12/RR12- (3).png",
                    "/assets/products/RacksAndRails/RR-12/RR12- (4).png",
                    "/assets/products/RacksAndRails/RR-12/RR12- (5).png",

                ],
                material: [
                    { name: "Structure", description: "Mild steel body with welded joint arms" },
                    { name: "Finish", description: "Powder-coated matte texture" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] }
                ],
                dimension: {
                    length: "600",
                    width: "600",
                    height: "1800"
                },
                usability: [
                    "Excellent for feature pieces or segmented color/size display",
                    "Ideal for maximizing vertical visibility in tight spaces",
                    "Easy to reposition and re-merchandise",
                    "Suitable for both lightweight and mid-weight garments"
                ],
                idealUseCase: [
                    "Central floor placement in boutiques or department stores",
                    "Seasonal edits or themed capsule presentations",
                    "End-of-aisle displays",
                    "Promotional or best-seller zones"
                ]
            },
            {
                id: "13",
                title: "RR - 013",
                description: "The RACKS AND RAILS – 013 (RR – 013) is a 4-arm rolling garment rail built for flexible, short-height displays. It’s mounted on a sturdy square base with lockable caster wheels, allowing effortless repositioning without compromising stability. This compact, mobile unit is ideal for dynamic retail layouts or promotional corners.",
                image: [
                    "/assets/products/RacksAndRails/RR-13/RR13- (1).png",
                    "/assets/products/RacksAndRails/RR-13/RR13- (2).png",
                    "/assets/products/RacksAndRails/RR-13/RR13- (3).png",
                    "/assets/products/RacksAndRails/RR-13/RR13- (4).png",
                    "/assets/products/RacksAndRails/RR-13/RR13- (5).png",
                ],
                material: [
                    { name: "Structure", description: "Mild steel with welded arm joints" },
                    { name: "Base", description: "Laminated engineered wood" },
                    { name: "Wheels", description: "Heavy-duty castors with brake function" },
                    { name: "Finish", description: "Powder-coated steel frame and sealed wood base" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: {
                    length: "600",
                    width: "600",
                    height: "1300"
                },
                usability: [
                    "Perfect for mobile floor setups",
                    "Height is optimal for children’s wear, accessories, or folded garments on hangers",
                    "Easy maneuverability for in-store repositioning or end-of-day clearance zones",
                    "Can be nested with similar units for modular merchandising"
                ],
                idealUseCase: [
                    "Pop-up stores",
                    "Entrance and exit zones",
                    "Sale or clearance corners",
                    "Compact store formats or kidswear departments"
                ]
            },
            {
                id: "14",
                title: "RR - 014",
                description: "The RACKS AND RAILS – 014 (RR – 014) is a two-tiered 4-arm circular garment display rack designed for high-density merchandising. With 360-degree visibility and dual hanging levels, this rotating unit maximizes product exposure in compact retail footprints. Casters at the base ensure effortless mobility across the floor.",
                image: [
                    "/assets/products/RacksAndRails/RR-14/RR14- (1).png",
                    "/assets/products/RacksAndRails/RR-14/RR14- (2).png",
                    "/assets/products/RacksAndRails/RR-14/RR14- (3).png",
                    "/assets/products/RacksAndRails/RR-14/RR14- (4).png",
                    "/assets/products/RacksAndRails/RR-14/RR14- (5).png",
                ],
                material: [
                    { name: "Frame", description: "Mild steel center column and radial arms" },
                    { name: "Base", description: "Laminated engineered wood base panel" },
                    { name: "Wheels", description: "Lockable caster wheels for mobility" },
                    { name: "Finish", description: "Powder-coated matte frame with laminated base" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: {
                    length: "750",
                    width: "750",
                    height: "1300"
                },
                usability: [
                    "Dual-level hanging increases capacity per footprint",
                    "Excellent for showcasing size ranges or color stories",
                    "Works well in fast fashion, children’s wear, or clearance zones",
                    "Easy to roll out for seasonal or promotional transitions"
                ],
                idealUseCase: [
                    "Value retail chains",
                    "Fast fashion outlets",
                    "Clearance and sale areas",
                    "Compact clothing zones or mid-floor highlights"
                ]
            },
            {
                id: "15",
                title: "RR - 015",
                description: "The RACKS AND RAILS – 015 (RR – 015) is a circular single-tier hanging display rack mounted on a robust round base. Designed for central floor placement, it offers full perimeter display while creating a visually appealing, accessible ring of merchandise. The elevated, open design encourages browsing from all directions.",
                image: [
                    "/assets/products/RacksAndRails/RR-15/RR15- (1).png",
                    "/assets/products/RacksAndRails/RR-15/RR15- (2).png",
                    "/assets/products/RacksAndRails/RR-15/RR15- (3).png",
                    "/assets/products/RacksAndRails/RR-15/RR15- (4).png",
                    "/assets/products/RacksAndRails/RR-15/RR15- (5).png"
                ],
                material: [
                    { name: "Frame", description: "Mild steel circular rail with vertical support posts" },
                    { name: "Base", description: "Engineered wood with a round laminated surface" },
                    { name: "Finish", description: "Powder-coated black metal with light wood grain base" }
                ],
                color: [
                    { name: "Frame Colors", option: ["Matte Black", "Matte White", "Graphite Grey"] },

                ],
                dimension: {
                    length: "1200",
                    width: "1200",
                    height: "1300"
                },
                usability: [
                    "Ideal for full-circle browsing",
                    "Excellent visibility for promotional or hero garments",
                    "Stable base prevents tipping under full load",
                    "Suitable for circular aisle islands or high-traffic zones"
                ],
                idealUseCase: [
                    "Department stores",
                    "Brand launch corners",
                    "Seasonal or themed merchandise",
                    "Childrenswear or light outerwear"
                ]
            }


        ]
    }


];
