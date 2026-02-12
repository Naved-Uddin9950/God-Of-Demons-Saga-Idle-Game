import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useClickStore = create(
  devtools(
    persist(
      (set) => ({
        current: 0,
        total: 0,

        increase: (by = 1) =>
          set((state) => ({
            current: state.current + by,
            total: state.total + by,
          })),

        decrease: (by = 1) => set((state) => ({ current: state.current - by })),
      }),

      {
        name: 'click-storage',
      },
    ),
  ),
);
