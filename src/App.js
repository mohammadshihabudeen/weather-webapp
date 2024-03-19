import './App.css';
import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL, FORECAST_API_URL } from './api';
import Search from './components/search/search';
import CurrentWeather from './components/currentWeather/currentWeather';
import Forecast from './components/forecast/forecast';
function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  async function searchHandler(searchValue) {
    try {
      const weatherResponse = await fetch(`${WEATHER_API_URL}lat=${searchValue.value[0]}&lon=${searchValue.value[1]}&appid=${WEATHER_API_KEY}&units=metric`);
      const weatherResult = await weatherResponse.json();
      weatherResult.name = searchValue.label
      setCurrentWeather(weatherResult)
      const forecastResponse = await fetch(`${FORECAST_API_URL}lat=${searchValue.value[0]}&lon=${searchValue.value[1]}&appid=${WEATHER_API_KEY}&units=metric`);
      const forecastResult = await forecastResponse.json();
      forecastResult.name = searchValue.label
      setForecast(forecastResult)
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div >
      <Search searchHandler={searchHandler} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast}/>}
      {!currentWeather && <h4>
        Welcome to Weather APP
        Start Exploring..!
        </h4>}
    </div>
  );
}

export default App;
