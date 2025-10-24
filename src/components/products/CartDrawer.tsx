'use client';

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerClose,
} from '@/components/ui/drawer';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from '@/components/ui/dialog';
import { colors } from './products';
import { useCart } from '@/components/products/CartContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import { X, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function CartDrawer({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    const { items, removeFromCart } = useCart();
    const isMobile = useIsMobile();

    const sendToWhatsApp = () => {
        const message = items
            .map(
                (item, i) =>
                    `🛒 ${i + 1}. *${item.title}*\n` +
                    Object.entries(item.selectedColors)
                        .map(([k, v]) => `• ${k}: ${v}`)
                        .join('\n')
            )
            .join('\n\n');

        const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '91XXXXXXXXXX';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const Content = (
        <>
            {isMobile ?
                <DrawerHeader>
                    <div className="flex justify-between items-center px-4 py-2 border-b">

                        <DrawerTitle className="text-lg font-semibold">Cart</DrawerTitle>

                        <DrawerClose asChild>
                            <button>
                                <X size={18} />
                            </button>
                        </DrawerClose>

                    </div>
                </DrawerHeader> :
                <DialogHeader>
                    <div className="flex justify-between items-center px-4 py-2 border-b">
                        <DialogTitle className="text-lg font-semibold">Cart</DialogTitle>
                    </div>
                </DialogHeader>
            }

            <div className="px-4 py-4 max-h-[70vh] overflow-y-auto mb-10 ">
                {items.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center">Your cart is empty.</p>
                ) : (
                    items.map((item, index) => (
                        <div key={index} className="border-2 border-gray-300 pb-3 mb-3 rounded-lg p-4 md:p-8  w-full max-w-[600px] ">
                            <div className='flex gap-4 md:gap-10 '>
                                {/* Image + Title */}
                                <div className="flex flex-col items-center  md:w-[250px] ">
                                    <div className="relative w-[150px] md:w-[250px] h-[190px] md:h-[250px] overflow-hidden rounded-lg">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>

                                </div>

                                {/* Selected Colors + Remove Button */}
                                <div className="flex flex-col ">
                                    <div className='md:mb-4'>
                                        <p className="font-semibold text-xl ">{item.title}</p>
                                    </div>
                                    <div className=''>
                                        {Object.entries(item.selectedColors).map(([k, v], i) => (
                                            <div key={i} className="mt-2">
                                                <p className="text-xs md:text-[13px] text-gray-500">{k} <span className="font-semibold">:</span></p>
                                                <div className='flex place-items-center mt-2'>
                                                    <div className='relative w-[36px] h-[36px] md:w-[36px] md:h-[36px] mr-1 md:mr-2 border border-gray-500 overflow-hidden rounded-full'>
                                                        <Image src={`${Object.entries(colors).find(([k, _]) => k === v.toLowerCase().replace(/\s+/g, '-'))?.[1]}`} alt='color' fill className='object-cover' />
                                                    </div>
                                                    <p className="text-sm md:text-[18px] font-medium mt-1">{v}</p>
                                                </div>

                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            <div className="pt-2 mb-2 w-full mt-4">
                                <button
                                    onClick={() => removeFromCart(item)}
                                    className="w-full rounded-md bg-red-600 text-white flex items-center gap-2 px-auto py-2 text-sm place-content-center"
                                >
                                    <Trash2 size={16} />
                                    Remove
                                </button>
                            </div>
                        </div>

                    ))
                )}
            </div>

            {items.length > 0 && (
                <div className="px-4 py-3 border-t fixed bottom-0 w-full bg-white">
                    <button
                        className="w-full bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2"
                        onClick={sendToWhatsApp}
                    >
                        Enquire via WhatsApp
                    </button>
                </div>
            )}
        </>
    );

    return isMobile ? (
        <Drawer open={open} onOpenChange={onClose}>
            <DrawerContent className='h-[90vh]'>
                {Content}
            </DrawerContent>
        </Drawer>
    ) : (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl h-[80%] mx-4 ">

                {Content}
            </DialogContent>
        </Dialog>
    );
}
