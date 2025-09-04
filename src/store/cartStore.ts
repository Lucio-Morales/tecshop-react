// Estado global para gestionar el carrito de compras

import { create } from 'zustand';
import type { Product } from '../types/Product';
import type { CartItem } from '../types/Cart';

interface CartState {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (product, quantity = 1) => {
    const items = get().items;
    const existingItem = items.find((item) => item.product.id === product.id);

    if (existingItem) {
      set({
        items: items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        ),
      });
    } else {
      set({
        items: [...items, { product, quantity }],
      });
    }
  },
  removeFromCart: (productId) => {
    set({
      items: get().items.filter((item) => item.product.id !== productId),
    });
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }

    set({
      items: get().items.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
    });
  },

  clearCart: () => set({ items: [] }),

  total: () => get().items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
}));
