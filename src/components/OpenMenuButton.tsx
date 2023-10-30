"use client";

import { useMenuBarStore } from "@/state/MenuBarState";
import { Menu } from "lucide-react";
import React, { HTMLAttributes } from "react";

interface OpenMenuButtonProps extends HTMLAttributes<HTMLDivElement> {}

const OpenMenuButton: React.FC<OpenMenuButtonProps> = ({ ...props }) => {
  const { openMenu } = useMenuBarStore();

  return (
    <div {...props}>
      <button className="outline-none" onClick={() => openMenu()}>
        <Menu className="w-10 h-10" />
      </button>
    </div>
  );
};

export default OpenMenuButton;
