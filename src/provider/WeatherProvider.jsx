import { WeatherContex } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { loading, error, weatherData } = useWeather();
  {
    /* composition pattern */
  }
  return (
    <WeatherContex.Provider value={{ loading, error, weatherData }}>
      {children}
    </WeatherContex.Provider>
  );
};

export default WeatherProvider;
