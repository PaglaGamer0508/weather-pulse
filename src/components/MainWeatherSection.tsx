import { formatDateTime } from "@/lib/formatDateTime";
import { replaceDimensions } from "@/lib/replaceDimensions";
import { CloudRain, Milestone, Sun, Thermometer, Wind } from "lucide-react";
import { Lato } from "next/font/google";
import Image from "next/image";

interface MainWeatherSectionProps {
  weather: WeatherData;
}

const lato = Lato({ weight: "700", subsets: ["latin"] });
const lato2 = Lato({ weight: "400", subsets: ["latin"] });

const MainWeatherSection: React.FC<MainWeatherSectionProps> = ({ weather }) => {
  const { location } = weather;
  const { current } = weather;
  const { forecast } = weather;
  const chancesOfRain = forecast.forecastday[0].day.daily_chance_of_rain;
  // modifiers
  const biggerIcon = replaceDimensions(current.condition.icon);

  return (
    <div className="w-full lg:w-[65%] flex flex-col gap-y-3">
      {/* ******************** Weather section ******************** */}
      <div className="h-[30%] flex justify-between rounded-[var(--primary-border-radius)] px-3 py-2 lg:px-12 lg:py-4">
        <div className="flex flex-col justify-between">
          <div>
            <h1
              className={`${lato.className} text-[2rem] text-[var(--lightgray-text-color)]`}
            >
              {location.name}
            </h1>
            <p className="text-[var(--lightgray-text-color)] text-sm">{`${
              location.region
            } ${location.region !== "" ? "," : ""} ${location.country}`}</p>
            <p className="text-sm text-[var(--gray-text-color)]">
              {formatDateTime(location.localtime)}
            </p>
          </div>
          <div>
            <h1
              className={`${lato.className} text-[3rem] text-[var(--selected-text-color)]`}
            >
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
            className="w-[5rem]"
          />
          <p className={`${lato.className} text-[var(--lightgray-text-color)]`}>
            {current.condition.text}
          </p>
        </div>
      </div>

      {/*  ********************Today's forecast ******************** */}
      <div className="h-[30%] bg-[var(--primary-bg-color)] rounded-[var(--primary-border-radius)] px-3 py-2 lg:px-6 lg:py-4">
        Child 2
      </div>

      {/* ******************** Wind section ******************** */}
      <div className="h-[40%] bg-[var(--primary-bg-color)] rounded-[var(--primary-border-radius)] px-3 py-9 lg:px-6 lg:py-4">
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
              className={`${lato.className} text-[var(--lightgray-text-color)] text-3xl md:pl-8`}
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
              className={`${lato.className} text-[var(--lightgray-text-color)] text-3xl md:pl-8`}
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
              className={`${lato.className} text-[var(--lightgray-text-color)] text-3xl md:pl-8`}
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
              className={`${lato.className} text-[var(--lightgray-text-color)] text-3xl md:pl-8`}
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
