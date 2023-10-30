"use client";

import React, { useState } from "react";

const Input = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <input
      onChange={(e) => setSearchInput(e.target.value)}
      value={searchInput}
      type="text"
      placeholder="Search for cities"
      className="w-full h-full bg-[var(--primary-bg-color)] rounded-xl focus:outline-none px-3 pb-1 placeholder:text-[var(--selected-text-color)]"
    />
  );
};

export default Input;
