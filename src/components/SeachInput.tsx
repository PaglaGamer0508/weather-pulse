"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SeachInput: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${searchInput}`);
  };

  return (
    <>
      <form className="h-full" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          placeholder="Search for cities"
          className="w-full h-full bg-[var(--primary-bg-color)] rounded-xl focus:outline-none px-3 pb-1 placeholder:text-[var(--selected-text-color)]"
        />
      </form>
    </>
  );
};

export default SeachInput;
