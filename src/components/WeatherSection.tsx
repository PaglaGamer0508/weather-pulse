"use client";

import MainWeatherSection from "@/components/MainWeatherSection";
import TodayForecastCard from "@/components/TodayForecastCard";
import { lato } from "@/fonts/lato";
import React from "react";

interface WeatherSectionProps {
  weatherData: WeatherData;
}

const WeatherSection: React.FC<WeatherSectionProps> = ({ weatherData }) => {
  const { forecast } = weatherData;

  return (
    <div className="h-full flex flex-col gap-y-3">
      <div className="flex-1 lg:flex lg:gap-x-5 overflow-y-scroll lg:overflow-hidden">
        {/* main section */}
        <MainWeatherSection weather={weatherData} />

        {/* forecast section */}
        <div className="bg-[var(--primary-bg-color)] h-fit flex-1 rounded-[var(--primary-border-radius)] p-8 mt-3 lg:h-auto lg:overflow-y-scroll space-y-5">
          <h1
            className={`${lato.className} text-[var(--gray-text-color)]`}
          >{`Today's forecast`}</h1>
          {forecast.forecastday[0].hour.map((everyHour, index) => {
            if (index % 3 === 0) {
              return (
                <div key={index}>
                  <TodayForecastCard
                    time={everyHour.time}
                    icon={everyHour.condition.icon}
                    text={everyHour.condition.text}
                    temp={everyHour.temp_c}
                  />
                  <hr className="border-none h-[1px] bg-gray-700" />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherSection;
