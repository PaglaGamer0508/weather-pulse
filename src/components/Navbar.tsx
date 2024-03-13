"use client";

import { useMenuBarStore } from "@/state/MenuBarState";
import { CloudSunRain, Wind } from "lucide-react";
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import Logo from "@/../public/weather-logo.svg";

// fonts
const lato = Lato({ weight: "400", subsets: ["latin"] });

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

const Navbar: React.FC<NavbarProps> = ({ ...props }) => {
  const { closeMenu } = useMenuBarStore();

  return (
    <div
      {...props}
      className="flex flex-col items-center bg-[var(--primary-bg-color)] h-full px-1 py-3 lg:px-3 lg:py-5 rounded-2xl md:rounded-[var(--primary-border-radius)]"
    >
      {/* logo */}
      <div
        title="Weather Pulse"
        className="bg-[var(--secondary-bg-color)] aspect-square p-1 rounded-xl"
      >
        <Image alt="Logo" src={Logo} className="w-12 h-12" />
      </div>

      <div
        className={`${lato.className} text-[var(--gray-text-color)] text-sm space-y-7 mt-10`}
      >
        {/* Weather */}

        <div onClick={() => closeMenu()}>
          <Link
            href={"/"}
            className="flex flex-col items-center text-[var(--selected-text-color)] font-semibold"
          >
            <CloudSunRain className="w-5 h-5" />
            <p>Weather</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
