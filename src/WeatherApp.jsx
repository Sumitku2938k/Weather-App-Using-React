import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 15.46,
    temp: 16.05,
    tempMin: 16.05,
    tempMax: 16.05,
    humidity: 67,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Goutam-Tech</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}