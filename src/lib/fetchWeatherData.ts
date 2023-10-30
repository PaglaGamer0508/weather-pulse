const apiKey = process.env.WEATHER_API_KEY;

export const fetchWeatherData = async (location: string) => {
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&aqi=no`;
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data as WeatherData;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
