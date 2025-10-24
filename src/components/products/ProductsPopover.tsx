'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import Image from 'next/image'
import { categories ,products } from '@/components/products/products'

interface ProductsPopoverProps {
    textColorClass?: string
}

export default function ProductsPopover({ textColorClass }: ProductsPopoverProps) {
    const [breadcrumb, setBreadcrumb] = useState(['Categories'])
    const router = useRouter()

    const current = breadcrumb[breadcrumb.length - 1]
    const isCategory = current === 'Categories'

    const handleSelect = (item: string) => {
        if (isCategory) {
            setBreadcrumb([...breadcrumb, item])
        } else {
            const productSlug = item.toLowerCase().replace(/\s+/g, '-')
            
            router.push(`/products/${productSlug}`)
        }
    }

    const options: (string | { name: string; icon?: string })[] = isCategory
        ? categories
        : products.filter((p) => p.categoryId == (categories.find((c) => c.name == current)?.id)).map((p) => p.title) || []

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className={`${textColorClass} font-normal`}>Products</button>
            </PopoverTrigger>
            <PopoverContent className="bg-white border shadow-lg px-6 py-4 w-[80vw] rounded-lg mt-[34px] mr-5 z-50">
                {/* Breadcrumb */}
                <div className="text-[13px] text-gray-500 mb-4 font-medium flex gap-1">
                    {breadcrumb.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <p
                                onClick={() =>
                                    setBreadcrumb(breadcrumb.slice(0, index + 1))
                                }
                                className={`${index === breadcrumb.length - 1
                                    ? 'text-[#400043] font-semibold'
                                    : 'cursor-pointer hover:text-gray-700'
                                    }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                            </p>
                            {index !== breadcrumb.length - 1 && <span className="mx-1">{'>'}</span>}
                        </div>
                    ))}
                </div>

                {/* Options */}
                <div className="grid grid-cols-4 gap-2">
                    {options.map((item, index) => {
                        const name = typeof item === 'string' ? item : item.name
                        const icon = typeof item === 'string' ? '/assets/products/icons/tag.png' : item.icon

                        return (
                            <div
                                key={index}
                                className="cursor-pointer flex px-3 py-3 rounded-md items-center hover:bg-gray-200 transition-colors"
                                onClick={() => handleSelect(name)}
                            >
                                <div className="min-w-[26px] min-h-[26px]">
                                    <Image
                                        src={icon || '/assets/products/icons/tag.png'}
                                        alt={name}
                                        width={26}
                                        height={26}
                                    />
                                </div>
                                <div className="text-[13px] text-black ml-3 font-medium">{name}</div>
                            </div>
                        )
                    })}
                </div>
            </PopoverContent>
        </Popover>
    )
}
