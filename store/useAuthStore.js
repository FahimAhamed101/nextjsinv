
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";







export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));