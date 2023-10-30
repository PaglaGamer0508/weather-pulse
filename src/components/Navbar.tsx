"use client";

import { useMenuBarStore } from "@/state/MenuBarState";
import { CloudSunRain, List, Settings, Wind } from "lucide-react";
import { Lato } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { HTMLAttributes } from "react";

// fonts
const lato = Lato({ weight: "400", subsets: ["latin"] });

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
  const pathname = usePathname().split("/")[2];
  const { closeMenu } = useMenuBarStore();

  return (
    <div
      {...props}
      className="flex flex-col items-center bg-[var(--primary-bg-color)] h-full px-1 py-3 lg:px-3 lg:py-5 rounded-2xl md:rounded-[var(--primary-border-radius)]"
    >
      {/* logo */}
      <div className="bg-[var(--secondary-bg-color)] aspect-square p-1 rounded-xl">
        <Wind className="w-8 h-8" />
      </div>

      <div
        className={`${lato.className} text-[var(--gray-text-color)] text-sm space-y-7 mt-10`}
      >
        {/* Weather */}

        <div
          onClick={() => closeMenu()}
        >
          <Link
            href={"/app/weather"}
            className={`flex flex-col items-center ${
              pathname === "weather"
                ? `text-[var(--selected-text-color)] font-semibold`
                : ""
            }`}
          >
            <CloudSunRain className="w-5 h-5" />
            <p>Weather</p>
          </Link>
        </div>

        {/* Cities */}
        <div onClick={() => closeMenu()}>
          <Link
            href={"/app/cities"}
            className={`flex flex-col items-center ${
              pathname === "cities"
                ? `text-[var(--selected-text-color)] font-semibold`
                : ""
            }`}
          >
            <List className="w-5 h-5" />
            <p>Cities</p>
          </Link>
        </div>

        {/* Settings */}
        <div onClick={() => closeMenu()}>
          <Link
            href={"/app/settings"}
            className={`flex flex-col items-center ${
              pathname === "settings"
                ? `text-[var(--selected-text-color)] font-semibold`
                : ""
            }`}
          >
            <Settings className="w-5 h-5" />
            <p>Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
