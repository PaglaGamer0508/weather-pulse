import { create } from "zustand";

interface useMenuBarStoreType {
  menuState: "open" | "close";
  openMenu: () => void;
  closeMenu: () => void;
}

export const useMenuBarStore = create<useMenuBarStoreType>((set) => ({
  menuState: "close",
  openMenu: () => {
    set({ menuState: "open" });
  },
  closeMenu: () => {
    set({ menuState: "close" });
  },
}));
