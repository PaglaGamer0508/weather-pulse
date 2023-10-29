import { lato } from "@/fonts/lato";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface MoreWeatherInfoCardProps {
  title: string;
  icon: StaticImageData;
  value: string;
}

const MoreWeatherInfoCard: React.FC<MoreWeatherInfoCardProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className="flex flex-col items-center">
      <p
        className={`${lato.className} text-[var(--gray-text-color)] text-xs md:text-sm`}
      >
        {title}
      </p>
      <Image
        src={icon}
        alt="humidity"
        width={128}
        height={128}
        className="w-10 lg:w-14 h-10 lg:h-14"
      />
      <h1
        className={`${lato.className} text-lg md:text-2xl text-[var(--lightgray-text-color)] text-center`}
      >
        {value}
      </h1>
    </div>
  );
};

export default MoreWeatherInfoCard;
