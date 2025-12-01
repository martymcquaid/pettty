<CHIPIFY-WRITE file_path="src/context/CartContext.tsx">
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, Product } from '../types';
import { products } from '../data/products';

type CartCtx = {
  items: CartItem[];
  add: (p: Product, q?: number) => void;
  update: (id: string, q: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartCtx | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem('cart');
    if (raw) setItems(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const add = (p: Product, q = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === p.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === p.id ? { ...i, quantity: i.quantity + q } : i
        );
      }
      return [...prev, { product: p, quantity: q }];
    });
  };

  const update = (id: string, q: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.product.id === id ? { ...i, quantity: q } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const remove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== id));
  };

  const clear = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, add, update, remove, clear, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};