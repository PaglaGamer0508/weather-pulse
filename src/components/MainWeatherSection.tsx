"use client";

import { lato } from "@/fonts/lato";
import { formatDateTime } from "@/lib/formatDateTime";
import { replaceImageDimensions } from "@/lib/replaceImageDimensions";
import { CloudRain, Sun, Thermometer, Wind } from "lucide-react";
import Image from "next/image";
import React from "react";
import MoreWeatherInfoCard from "./MoreWeatherInfoCard";

// local icons
import HumidityIcon from "@/../public/humidity.png";
import SunriseIcon from "@/../public/sunrise.png";
import SunsetIcon from "@/../public/sunset.png";
import { usePathname } from "next/navigation";

interface MainWeatherSectionProps {
  weather: WeatherData;
}

const MainWeatherSection: React.FC<MainWeatherSectionProps> = ({ weather }) => {
  const { location } = weather;
  const { current } = weather;
  const { forecast } = weather;
  const chancesOfRain = forecast.forecastday[0].day.daily_chance_of_rain;

  // second section data
  const sunrise = forecast.forecastday[0].astro.sunrise;
  const sunset = forecast.forecastday[0].astro.sunset;
  const humidity = current.humidity;

  // modifiers
  const biggerIcon = replaceImageDimensions(current.condition.icon);

  return (
    <div className="w-full lg:w-[65%] flex flex-col gap-y-4">
      {/* ******************** Weather section ******************** */}
      <div className="h-[30%] flex justify-between rounded-[var(--primary-border-radius)] px-3 py-2 lg:px-12 lg:py-4">
        <div className="flex flex-col justify-between">
          <div>
            <h1
              className={`${lato.className} text-[1.5rem] md:text-[2rem] text-[var(--lightgray-text-color)]`}
            >
              {location.name}
            </h1>
            <p className="text-[var(--lightgray-text-color)] text-sm">{`${
              location.region
            } ${location.region !== "" ? "," : ""} ${location.country}`}</p>
            <p className="text-xs md:text-sm text-[var(--gray-text-color)]">
              {formatDateTime(location.localtime)}
            </p>
          </div>
          <div>
            <h1
              className={`${lato.className} text-[2rem] md:text-[3rem] text-[var(--selected-text-color)]`}
            >
              {/* this is possiblely the issue */}
              {current.temp_c}°
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src={`https:${biggerIcon}`}
            alt="Weather condition"
            width={128}
            height={128}
            className="w-[5rem] md:w-[7rem]"
          />
          <p
            className={`${lato.className} text-[var(--lightgray-text-color)] lg:text-xl`}
          >
            {current.condition.text}
          </p>
        </div>
      </div>

      {/*  ********************more info section ******************** */}
      <div className="flex justify-around h-[25%] bg-[var(--primary-bg-color)] rounded-[var(--primary-border-radius)] px-6 py-4">
        {/* Humidity */}
        <MoreWeatherInfoCard
          icon={HumidityIcon}
          title="Humidity"
          value={`${humidity}%`}
          alt="Humidity"
        />

        {/* Sunrise */}
        <MoreWeatherInfoCard
          icon={SunriseIcon}
          title="Sunrise"
          value={sunrise}
          alt="Sunrise"
        />

        {/* Sunset */}
        <MoreWeatherInfoCard
          icon={SunsetIcon}
          title="Sunset"
          value={sunset}
          alt="Sunset"
        />
      </div>

      {/* ******************** Wind section ******************** */}
      <div className="h-[45%] bg-[var(--primary-bg-color)] rounded-[var(--primary-border-radius)] px-3 py-9 lg:px-6 lg:py-4">
        <h1
          className={`${lato.className} text-sm text-[var(--gray-text-color)] pb-2`}
        >
          AIR CONDITION
        </h1>
        <div className="h-full grid grid-cols-2 grid-rows-2">
          {/* real feel */}
          <div>
            <div className="flex items-center gap-x-2 text-[var(--gray-text-color)] ">
              <Thermometer className="w-6 h-6" />
              <p className="text-sm font-semibold">Real Feel</p>
            </div>
            <h1
              className={`${lato.className} text-[var(--lightgray-text-color)] text-3xl pl-8`}
            >
              {current.feelslike_c}°
            </h1>
          </div>

          {/* Wind */}
          <div>
            <div className="flex items-center gap-x-2 text-[var(--gray-text-color)] ">
              <Wind className="w-6 h-6" />
              <p className="text-sm font-semibold">Wind</p>
            </div>
            <h1
              className={`${lato.className} text-[var(--lightgray-text-color)] text-3xl pl-8`}
            >
              {current.wind_kph}km/h
            </h1>
          </div>

          {/*  Chances of rain  */}
          <div>
            <div className="flex items-center gap-x-2 text-[var(--gray-text-color)] ">
              <CloudRain className="w-6 h-6" />
              <p className="text-sm font-semibold">Chance of Rain</p>
            </div>
            <h1
              className={`${lato.className} text-[var(--lightgray-text-color)] text-3xl pl-8`}
            >
              {chancesOfRain}%
            </h1>
          </div>

          {/* UV index */}
          <div>
            <div className="flex items-center gap-x-2 text-[var(--gray-text-color)] ">
              <Sun className="w-6 h-6" />
              <p className="text-sm font-semibold">UV Index</p>
            </div>
            <h1
              className={`${lato.className} text-[var(--lightgray-text-color)] text-3xl pl-8`}
            >
              {current.uv}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWeatherSection;
