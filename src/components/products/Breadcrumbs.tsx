"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Products,products } from "./products";


export default function Breadcrumbs() {
    const { slug } = useParams();
    const router = useRouter();
    const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

    useEffect(() => {
        if (Array.isArray(slug)) {
            const [categorySlug, productId] = slug;

            const formattedCategory = formatName(categorySlug);
            const product: Products | undefined = products.find(
                (p) => p.slug === categorySlug
            );

            if (productId) {
                const item = product?.products.find((p) => p.id === productId);
                if (item) {
                    setBreadcrumb([formattedCategory, item.title]);
                } else {
                    setBreadcrumb([formattedCategory]);
                }
            } else {
                setBreadcrumb([formattedCategory]);
            }
        }
    }, [slug]);

    const formatName = (value: string) =>
        value.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

    const handleBreadcrumbClick = (index: number) => {
        if (!Array.isArray(slug)) return;

        const [categorySlug] = slug;

        if (index === 0 && categorySlug) {
            router.push(`/products/${categorySlug}`);
        }
    };

    return (
        <div className="text-[10px] md:text-[11px] text-gray-500  font-medium flex gap-1  bg-gray-100 w-fit px-3 py-1 rounded-md">
            {breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center">
                    <p
                        onClick={() => handleBreadcrumbClick(index)}
                        className={`${index === breadcrumb.length - 1
                            ? "text-[#400043] font-semibold"
                            : "cursor-pointer hover:text-gray-700"
                            }`}
                    >
                        {item}
                    </p>
                    {index !== breadcrumb.length - 1 && <span className="mx-1">{">"}</span>}
                </div>
            ))}
        </div>
    );
}
