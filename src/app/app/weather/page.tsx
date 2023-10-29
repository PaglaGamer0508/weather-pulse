import Input from "@/components/Input";
import MainWeatherSection from "@/components/MainWeatherSection";
import { fetchWeatherData } from "@/lib/fetchWeatherData";
import React from "react";

const page = async () => {
  const location = "mecca";

  const weatherData = await fetchWeatherData(location);
  if (!weatherData) {
    return <div>Nothing to show</div>;
  }

  return (
    <div className="h-full flex flex-col gap-y-3">
      <div className="h-10">
        <Input />
      </div>
      <div className="flex-1 lg:flex lg:gap-x-5">
        {/* main section */}
        <MainWeatherSection weather={weatherData} />

        {/* forecast section */}
        <div className="bg-[var(--primary-bg-color)] flex-1 rounded-[var(--primary-border-radius)]"></div>
      </div>
    </div>
  );
};

export default page;
