// ProductDetailsClient.tsx (client component)
'use client'
import { useState } from 'react';
import ProductView from './ProductView';
import { Product } from './types';
import { SendHorizontal } from 'lucide-react';
import { useCart } from '@/components/products/CartContext';
import Image from 'next/image';
import { colors } from './products';
import { toast } from 'sonner';


export default function ProductDetailsClient({ item }: { item: Product }) {
    const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});
    const { addToCart } = useCart();

    const handleColorSelect = (group: string, color: string) => {
        setSelectedColors((prev) => ({ ...prev, [group]: color }));
    };

    const isColorSelected = Object.keys(selectedColors).length === item.color.length;

    const handleEnquiry = () => {
        const message = `🛍 Product: ${item.title}\n${Object.entries(selectedColors).map(([k, v]) => `• ${k}: ${v}`).join('\n')}`;
        const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col mt-6">
            <h1 className="text-2xl font-semibold text-[#400043] mb-2  md:mb-4">{item.title}</h1>
            <div className="flex flex-col lg:flex-row gap-4 lg:mb-11">
                <div className="w-full mb-8 lg:mb-0 lg:w-1/2">
                    <ProductView images={item.image} />
                </div>
                <div className="w-full lg:w-1/2 flex">
                    <div className="hidden sm:block border-l-[3.5px] border-gray-100 h-full w-fit rounded-lg"></div>
                    <div className="flex flex-col gap-3 lg:gap-24 w-full px-0 pr-2 lg:px-8">
                        <div className="flex flex-col mb-8">
                            <h1 className="font-semibold text-xl  text-[#400043] mb-2 md:mb-3">Product Description</h1>
                            <p className="text-gray-700 !leading-relaxed  sm:!leading-loose text-xs sm:text-[13.5px]  sm:px-0 tracking-wide ml-1">
                                {item.description || "No description available for this product."}
                            </p>
                        </div>
                        <div className="mb-8">
                            <h1 className="font-semibold text-xl text-[#400043] mb-2 md:mb-3">Material</h1>
                            <div className="ml-1">
                                {item.material.map((material, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start mb-2 w-full text-xs sm:text-[13px]"
                                    >
                                        {/* Label Column (fixed width) */}
                                        <div className="w-[100px] font-medium text-[#333] shrink-0">
                                            {material.name}
                                        </div>

                                        {/* Separator */}
                                        <div className="mx-2 font-semibold text-[#555]">:</div>

                                        {/* Description Column (flex-grow) */}
                                        <p className="text-gray-700 tracking-wide leading-relaxed break-words">
                                            {material.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full  lg:mt-16">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <div className="w-full lg:ml-4">
                        <div className="flex flex-col mb-8">
                            <h1 className="font-semibold text-xl text-[#400043] mb-2 md:mb-3">Color Options</h1>
                            <div className="ml-1 flex w-2/3 sm:w-2/5 lg:w-1/2 justify-between gap-5" >
                                {item.color.map((colorGroup, index) => (
                                    <div key={index} className="mb-2 md:mb-6 py-1">
                                        <h1 className="text-xs sm:text-[15px] font-medium whitespace-nowrap mb-2">{colorGroup.name}<span className="px-2 font-medium ">:</span></h1>
                                        <div className="flex flex-col flex-wrap gap-2">
                                            {colorGroup.option.map((option, i) => (
                                                <div
                                                    key={i}
                                                    onClick={() => handleColorSelect(colorGroup.name, option)}
                                                    className={`place-items-center flex cursor-pointer px-2 py-1 border rounded-md text-xs sm:text-[13px] ${selectedColors[colorGroup.name] === option ? 'bg-[#400043]/85 text-white' : 'bg-white text-black border-gray-300'}`}
                                                >
                                                    <div className='relative w-[36px] h-[36px] mr-1 border border-gray-500 rounded-full overflow-hidden'>
                                                        <Image src={`${Object.entries(colors).find(([k, _]) => k === option.toLowerCase().replace(/\s+/g, '-'))?.[1]}`} alt='color' fill className='object-cover' />
                                                    </div>
                                                    <div className='text-nowrap'>
                                                        {option}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mb-8">
                            <h1 className="font-semibold text-xl text-[#400043] mb-2 md:mb-3">Usability</h1>
                            <div className="text-gray-700  text-xs sm:text-[13px] tracking-wide ml-1 ">
                                {item.usability.map((useCase, index) => (
                                    <p key={index} className="py-2 flex leading-relaxed"><SendHorizontal className="mr-2 mt-1" color="#400043" size={13} />{useCase}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex pr-2">
                        <div className="px-0 pr-2 lg:px-9 flex flex-col gap-3">
                            <div className="mb-8 lg:mb-14">
                                <h1 className="font-semibold text-xl text-[#400043] mb-2 md:mb-3">Dimensions</h1>
                                <div className="text-gray-700  text-xs sm:text-[13px] tracking-wide ml-1 py-1">
                                    <p>{item.dimension.length}mm (Length) × {item.dimension.width}mm (Width) × {item.dimension.height}mm (Height)</p>
                                </div>
                            </div>
                            <div className="mb-8 ">
                                <h1 className="font-semibold text-xl text-[#400043] mb-2 md:mb-3">Ideal Use Cases</h1>
                                <div className="text-gray-700  text-xs sm:text-[13px] tracking-wide ml-1 leading-relaxed">
                                    {item.idealUseCase.map((useCase, index) => (
                                        <p key={index} className="py-2 flex items-center"><SendHorizontal className="mr-2" color="#400043" size={13} />{useCase}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">

                    <button

                        onClick={() => {
                            if (!isColorSelected) {
                                toast.error("Please select a color before adding to cart");
                            } else
                                addToCart({ title: item.title, selectedColors, image: item.image[0] })
                        }}

                        className={`rounded-md w-full md:mt-4 flex items-center justify-center py-2 md:py-3 cursor-pointer text-white ${isColorSelected ? 'bg-[#400043]' : 'bg-gray-400 cursor-not-allowed'}`}
                    >
                        Add to Cart
                    </button>



                    <button

                        onClick={() => {
                            if (!isColorSelected) {
                                toast.error("Please select a color before Enquire ");
                            } else { handleEnquiry() }

                        }}
                        className={`rounded-md w-full md:mt-4 flex items-center justify-center py-2 md:py-3 cursor-pointer text-white ${isColorSelected ? 'bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                    >
                        Enquire via WhatsApp
                    </button>


                </div>
            </div>
        </div >
    );
}
