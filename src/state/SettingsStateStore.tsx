import { create } from "zustand";

type TempType = "celsius" | "fahrenheit";
type SpeedType = "kilometer" | "miles";

interface UseSettingsStoreType {
  temp: TempType;
  speed: SpeedType;
  setTemp: (tempType: TempType) => void;
  setSpeed: (speedType: SpeedType) => void;
}

export const useSettingsStore = create<UseSettingsStoreType>((set) => ({
  temp: "celsius",
  speed: "kilometer",
  setSpeed: (speedType: SpeedType) => set({ speed: speedType }),
  setTemp: (tempType: TempType) => set({ temp: tempType }),
}));
