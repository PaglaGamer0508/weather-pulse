import { convertTo12HourFormat } from "@/lib/convertTo12HourFormat";
import { extractTimeFromDate } from "@/lib/extractTimeFromDate";
import { replaceImageDimensions } from "@/lib/replaceImageDimensions";
import { lato } from "@/fonts/lato";
import Image from "next/image";
import React from "react";

interface TodayForecastCardProps {
  time: string;
  icon: string;
  text: string;
  temp: number;
}

const TodayForecastCard: React.FC<TodayForecastCardProps> = ({
  time,
  icon,
  text,
  temp,
}) => {
  return (
    <div className={`flex justify-between items-center ${lato.className}`}>
      <p className="min-w-fit text-[var(--gray-text-color)] text-sm">
        {convertTo12HourFormat(extractTimeFromDate(time))}
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={`https:${replaceImageDimensions(icon)}`}
          alt="Weather Icon"
          width={128}
          height={128}
          className="w-12 h-12"
        />
        <h1 className="text-[var(--selected-text-color)] ">{text}</h1>
      </div>
      <p className="text-[var(--selected-text-color)]">{temp}°</p>
    </div>
  );
};

export default TodayForecastCard;
