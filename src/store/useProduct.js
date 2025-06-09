import { create } from "zustand";
import { products } from "../utils/products";

const useProduct = create((set) => ({
  products: products,
  setProducts: (products) => set({ products }),
}));

export default useProduct;
