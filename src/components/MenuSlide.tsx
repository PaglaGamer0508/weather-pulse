"use client";

import { useMenuBarStore } from "@/state/MenuBarState";
import { useEffect, useState } from "react";
import CloseMenuButton from "./CloseMenuButton";
import Navbar from "./Navbar";

const MenuSlide = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [menuSliderIsOpen, setMenuSliderIsOpen] = useState<boolean>(false);
  const { menuState, closeMenu } = useMenuBarStore();

  useEffect(() => {
    if (menuState === "open") {
      setMenuIsOpen(true);
      setTimeout(() => {
        setMenuSliderIsOpen(true);
      }, 100);
    }
    if (menuState === "close") {
      setMenuIsOpen(false);
      setMenuSliderIsOpen(false);
    }
  }, [menuState]);

  return (
    <div
      className={`${
        menuIsOpen ? "block" : "hidden"
      } sm:hidden fixed inset-0 flex bg-gray-900/80 z-[999]`}
    >
      <div
        className={`${
          menuSliderIsOpen ? "" : "-translate-x-full"
        } transition-transform duration-75 flex bg-[var(--bg-color)] h-full w-[80%] p-2`}
      >
        <div className="relative h-full w-fit">
          <Navbar />
        </div>
      </div>
      <div
        className="flex-1 relative"
        onClick={() => closeMenu()}
      >
        <div className="absolute top-3 right-2">
          <CloseMenuButton />
        </div>
      </div>
    </div>
  );
};

export default MenuSlide;
