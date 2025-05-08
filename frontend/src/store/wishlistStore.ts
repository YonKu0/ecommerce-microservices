import { create } from 'zustand';
import { Product } from '../types/Product';

interface WishlistState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  addItem: (product) => {
    const { items } = get();
    if (!items.find((item) => item.id === product.id)) {
      set({ items: [...items, product] });
    }
  },
  removeItem: (id) => {
    set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
  },
  isInWishlist: (id) => {
    return get().items.some((item) => item.id === id);
  }
}));
