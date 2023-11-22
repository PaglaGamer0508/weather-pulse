"use client";

import React, { HTMLAttributes } from "react";
import OpenMenuButton from "./OpenMenuButton";
import SeachInput from "./SeachInput";

interface TaskBarProps extends HTMLAttributes<HTMLDivElement> {}

const TaskBar: React.FC<TaskBarProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <div className="flex h-full w-full lg:w-[65%]">
        <div className="sm:hidden">
          <OpenMenuButton className="flex items-center" />
        </div>
        <div className="h-full w-full">
          <SeachInput />
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
