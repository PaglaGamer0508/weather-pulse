import WeatherSection from "@/components/WeatherSection";
import { fetchWeatherData } from "@/lib/fetchWeatherData";

const page: React.FC = async () => {
  const location = "dhaka";

  const weatherData = await fetchWeatherData(location);

  if (!weatherData) {
    return (
      <div className="grid place-items-center h-full">
        <h1 className="text-blue-500 text-2xl font-bold text-center">
          City Not Found, Please reload.
        </h1>
      </div>
    );
  }

  return <WeatherSection weatherData={weatherData} />;
};

export default page;
