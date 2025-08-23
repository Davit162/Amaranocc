import { create } from "zustand";

interface MarzData {
  name: string;
  qanak: number | string;
}

interface MarzState {
  selected: string[];
  toggle: (name: string) => void;
  clear: () => void;
}

export const useMarzStore = create<MarzState>((set) => ({
  selected: [],
  toggle: (name) =>
    set((state) => ({
      selected: state.selected.includes(name)
        ? state.selected.filter((n) => n !== name)
        : [...state.selected, name],
    })),
  clear: () => set({ selected: [] }),
}));
