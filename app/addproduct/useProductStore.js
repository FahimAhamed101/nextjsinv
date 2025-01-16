import axios from "axios";
import { create } from "zustand";



export const useProductStore = create((set, get) => ({
  products: [],
  isLoading: false,
  error: null,
  
  createProduct: async (productData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        `api/addproduct`,
        productData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      set({ isLoading: false });
      return response.data;
    } catch (e) {
      set({ error: "Failed to create product", isLoading: false });
    }
  },
  updateProduct: async (id, productData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.put(
        `/${id}`,
        productData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      set({ isLoading: false });
      return response.data;
    } catch (e) {
      set({ error: "Failed to create product", isLoading: false });
    }
  },
  deleteProduct: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.delete(`/${id}`, {
        withCredentials: true,
      });
      set({ isLoading: false });
      return response.data.success;
    } catch (e) {
      set({ error: "Failed to create product", isLoading: false });
    }
  },
  getProductById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`/${id}`, {
        withCredentials: true,
      });
      set({ isLoading: false });
      return response.data;
    } catch (e) {
      set({ error: "Failed to create product", isLoading: false });
      return null;
    }
  },
}));