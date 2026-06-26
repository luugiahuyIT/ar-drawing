import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface StudioState {
  images: string[];
  addImage: (dataUrl: string) => void;
  removeImage: (index: number) => void;
  clearImages: () => void;
}

export const useStudioStore = create<StudioState>()(
  persist(
    (set) => ({
      images: [],
      addImage: (dataUrl) =>
        set((state) => ({ images: [dataUrl, ...state.images] })),
      removeImage: (index) =>
        set((state) => ({
          images: state.images.filter((_, i) => i !== index),
        })),
      clearImages: () => set({ images: [] }),
    }),
    {
      name: 'studio-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // Use sessionStorage to clear on tab close but persist on reload
    }
  )
);
