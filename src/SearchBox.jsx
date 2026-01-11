import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "53cbf27c3b80207ffa61bab995535634";

    let getWeather = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            console.log(data);

            let result = {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            }
            console.log("Result is : ", result);
            return result;

        } catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
         event.preventDefault();
        console.log("Searching weather for:", city);
        setCity("");
        let newInfo = await getWeather();
        updateInfo(newInfo);   
        } catch (error) {
         setError(true);   
        }
    }

  return (
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>           
            <br></br><br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color: "red"}}>No such place exist</p>}
        </form>
    </div>
  )
}