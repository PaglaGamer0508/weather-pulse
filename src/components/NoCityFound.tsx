import NotFound from "@/../public/not-found.png";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NoCityFound: React.FC = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="w-fit mx-auto py-3 px-2 space-y-2">
        <Image
          src={NotFound}
          alt="Not Found"
          height={410}
          width={512}
          className="w-[80%] md:w-[60%] mx-auto"
        />
        <h1 className="text-blue-500 text-2xl font-bold text-center">
          City Not Found
        </h1>
        <div className="grid place-items-center">
          <Link
            href="/"
            className="flex items-center bg-blue-600 text-black text-lg font-semibold rounded px-2 py-1 space-x-1 mx-auto"
          >
            <MoveLeft />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoCityFound;
