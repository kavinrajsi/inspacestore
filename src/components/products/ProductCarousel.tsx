'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Products,products } from '@/components/products/products'
import Image from 'next/image'
import Link from 'next/link'
import SlideProduct from './SlideProduct'


type Props = {
    categorySlug: string
}

export default function ProductCarousel({ categorySlug }: Props) {
    const productCategory: Products | undefined = products.find(
        (p) => p.slug === categorySlug
    )

    const items = productCategory?.products

    return (
        <div className="w-full mt-6">
            <div className='grid grid-cols-1 sm:grid-cols-4  gap-7 place-items-center'>
                {
                    items && items.map((item, index) => (
                        <div key={index} className='border-2 border-gray-500 rounded-lg p-4 place-items-center w-full'>
                            <div className='font-semibold text-lg md:text-xl'>
                                {item.title}
                            </div>
                            <div className="relative w-full h-[250px]  md:h-[200px] overflow-hidden rounded-lg mx-1">
                                <SlideProduct images={item.image}/>
                            </div>
                            <div className='w-full'>
                                <Link href={`${categorySlug}/${item.id}`} >
                                    <button className='bg-[#400043] py-2  px-2 md:px-3 text-sm ms:text-[13px] text-white rounded-md mt-2 w-full font-medium'>View Product</button>
                                </Link>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
