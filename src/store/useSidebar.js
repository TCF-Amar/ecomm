import { create } from "zustand";

const useSidebar = create((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidebar;
