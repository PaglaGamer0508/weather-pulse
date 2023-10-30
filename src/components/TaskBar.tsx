"use client";

import { usePathname } from "next/navigation";
import React, { HTMLAttributes } from "react";
import Input from "./Input";
import OpenMenuButton from "./OpenMenuButton";

interface TaskBarProps extends HTMLAttributes<HTMLDivElement> {}

const TaskBar: React.FC<TaskBarProps> = ({ ...props }) => {
  const pathname = usePathname().split("/")[2];

  const checkWhichPage = (route: string) => {
    if (route === "weather") {
      return <Input />;
    }
    if (route === "cities") {
      return <div>cities</div>;
    }
    if (route === "settings") {
      return <div>settings</div>;
    }
  };

  return (
    <div {...props}>
      <div className="flex h-full w-full lg:w-[65%]">
        <div className="h-full w-full">{checkWhichPage(pathname)}</div>
        <div className="sm:hidden">
          <OpenMenuButton className="flex items-center" />
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
