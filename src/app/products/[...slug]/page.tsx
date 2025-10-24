import Breadcrumbs from "@/components/products/Breadcrumbs";
import { Products, products } from "@/components/products/products";
import { Product } from "@/components/products/types";
import Image from "next/image";
import React, { JSX } from "react";
import { SendHorizontal } from 'lucide-react';
import ProductCarousel from "@/components/products/ProductCarousel";
import ProductDetailsClient from "@/components/products/ProductPage";


type Props = {
    params: Promise<{ slug: string[] }>;
};

export default async function ProductPage({ params }: Props): Promise<JSX.Element> {
    const { slug } = await params;
    const categorySlug = slug?.[0];
    const productId = slug?.[1];

    const productCategory: Products | undefined = products.find(
        (p) => p.slug === categorySlug
    );


    const item = productCategory?.products.find((p) => p.id === productId);



    return (
        <div className="max-w-[99vw] overflow-hidden px-4 sm:px-8 mt-24  mb-24">
            <Breadcrumbs />

            {/* ✅ Product Detail View */}
            {productId && item ?
                (
                    // ProductPage.tsx (server)
                    <ProductDetailsClient item={item as Product} />

                ) : (
                    /* ✅ Category Listing View */
                    <div className="mb-8 max-w-[98%] mx-auto">
                        {/* product heading */}
                        <h1 className="font-semibold text-[19px] md:text-2xl py-2">{productCategory?.head}</h1>
                        <div className="relative w-full h-[65vh] md:h-[75vh] md:mt-2 overflow-hidden rounded-md">
                            <Image src={productCategory?.image as string} alt={productCategory?.title as string} fill className="object-cover" />
                        </div>

                        {/* products card */}
                        <div className="w-full mt-12 mb-12">
                            <div className="mt-8">
                                <h1 className="font-semibold text-[17px] md:text-xl py-2 md:py-4 max-w-5xl !leading-relaxed  sm:!leading-loose">{productCategory?.subHead}:</h1>
                            </div>
                            <ProductCarousel categorySlug={categorySlug} />
                            <p className="text-sm md:text-[16px] text-gray-600 mt-8 !leading-relaxed  sm:!leading-loose font-normal">{productCategory?.description}</p>
                        </div>

                        {/* use case */}
                        <div>
                            <h1 className="font-semibold text-xl py-2" >Use Case :</h1>
                            {productCategory?.useCase.map((use, index) =>
                                <p key={index} className="py-1 flex items-center text-base md:text-[16px]  text-gray-700 ml-2 !leading-relaxed  sm:!leading-loose"><SendHorizontal className="mr-2" color="#400043" size={13} />{use}</p>
                            )}
                        </div>

                        {/* for more */}
                        <div>

                        </div>
                        <p className="w-full text-center text-[11px] md:text-xs text-gray-500 mt-16">{productCategory?.footerContent}</p>
                    </div>
                )}
        </div>
    );
}
