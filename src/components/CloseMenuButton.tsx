"use client";

import { useMenuBarStore } from "@/state/MenuBarState";
import { X } from "lucide-react";
import React, { HTMLAttributes } from "react";

interface CloseMenuButtonProps extends HTMLAttributes<HTMLDivElement> {}

const CloseMenuButton: React.FC<CloseMenuButtonProps> = ({ ...props }) => {
  const { closeMenu } = useMenuBarStore();

  return (
    <div {...props}>
      <button className="outline-none" onClick={() => closeMenu()}>
        <X className="w-10 h-10" />
      </button>
    </div>
  );
};

export default CloseMenuButton;
