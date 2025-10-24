'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';
type CartItem = {
    title: string;
    selectedColors: { [group: string]: string };
    image:string;
};

type CartContextType = {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (item: CartItem) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        const exists = items.some(
            (i) =>
                i.title === item.title &&
                JSON.stringify(i.selectedColors) === JSON.stringify(item.selectedColors)
        );
        if (!exists) {
            setItems([...items, item]);
            toast.success('Added to cart!', { duration: 600 })
        }
        else {
            toast.error('Already added to cart!', { duration: 600 })
        }
    };

    const removeFromCart = (item: CartItem) => {
        const updatedItems = items.filter(
            (i) =>
                i.title !== item.title ||
                JSON.stringify(i.selectedColors) !== JSON.stringify(item.selectedColors)
        );
        setItems(updatedItems);
    };

    const clearCart = () => setItems([]);

    return (
        <CartContext.Provider value={{ items, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
}
