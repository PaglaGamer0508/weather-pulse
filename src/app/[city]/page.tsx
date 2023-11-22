import NoCityFound from "@/components/NoCityFound";
import WeatherSection from "@/components/WeatherSection";
import { fetchWeatherData } from "@/lib/fetchWeatherData";
import React from "react";

interface PageProps {
  params: {
    city: string;
  };
}

const page: React.FC<PageProps> = async ({ params }) => {
  const location = params.city;

  const weatherData = await fetchWeatherData(location);
  if (!weatherData) {
    return <NoCityFound />;
  }

  return <WeatherSection weatherData={weatherData} />;
};

export default page;
