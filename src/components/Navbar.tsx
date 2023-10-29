"use client";

import { CloudSunRain, List, SlidersHorizontal, Wind } from "lucide-react";
import { Lato } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// fonts
const lato = Lato({ weight: "400", subsets: ["latin"] });

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const url = pathname.split("/")[2];

  return (
    <div className="flex flex-col items-center bg-[var(--primary-bg-color)] h-full px-1 py-3 lg:px-3 lg:py-5 rounded-2xl md:rounded-[var(--primary-border-radius)]">
      {/* logo */}
      <div className="bg-[var(--secondary-bg-color)] aspect-square p-1 rounded-xl">
        <Wind className="w-8 h-8" />
      </div>

      <div
        className={`${lato.className} text-[var(--gray-text-color)] text-sm space-y-7 mt-10`}
      >
        {/* Weather */}
        <Link
          href={"/app/weather"}
          className={`flex flex-col items-center ${
            url === "weather"
              ? `text-[var(--selected-text-color)] font-semibold`
              : ""
          }`}
        >
          <CloudSunRain className="w-5 h-5" />
          <p>Weather</p>
        </Link>
        {/* Cities */}
        <Link
          href={"/app/cities"}
          className={`flex flex-col items-center ${
            url === "cities"
              ? `text-[var(--selected-text-color)] font-semibold`
              : ""
          }`}
        >
          <List className="w-5 h-5" />
          <p>Cities</p>
        </Link>
        {/* Settings */}
        <Link
          href={"/app/settings"}
          className={`flex flex-col items-center ${
            url === "settings"
              ? `text-[var(--selected-text-color)] font-semibold`
              : ""
          }`}
        >
          <SlidersHorizontal className="w-5 h-5" />
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
