import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-full gap-y-3 lg:gap-y-5">
      <div className="flex gap-x-5">
        <div className="bg-[var(--primary-bg-color)] lg:w-[65%] h-full rounded-[var(--primary-border-radius)]">
          settings
        </div>
        <div className="flex-1 bg-[var(--primary-bg-color)] rounded-[var(--primary-border-radius)]"></div>
      </div>
    </div>
  );
};

export default page;
