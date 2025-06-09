import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCart = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (i) => i.id === item.id && i.size === item.size
          );

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.size === item.size
                  ? { ...i, quantity: Math.min(i.quantity + item.quantity, item.maxQuantity) }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),

      removeItem: (itemId, size) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.id === itemId && i.size === size)
          ),
        })),

      updateQuantity: (itemId, size, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId && item.size === size
              ? { ...item, quantity }
              : item
          ),
        })),

      clearCart: () => set({ items: [] }),

      // Getters
      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ).toFixed(2),
    }),
    {
      name: "shopping-cart",
    }
  )
);

export default useCart;