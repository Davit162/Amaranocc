import { create } from "zustand";

interface MarzStore {
  selected: string[];
  count: number;
  setCount: (c: number) => void;
}

export const useMarzStore = create<MarzStore>((set) => ({
  selected: [],
  count: 1,
  setCount: (c) => set({ count: c }),
}));