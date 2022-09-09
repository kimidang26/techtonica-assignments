import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
// import { config } from "dotenv"; config();

const app = express();
const PORT = 1212;

app.get('/', (req, res) =>{
    res.json("Weather App Information")
})

app.use(cors());

app.get("/api/weather", (req, res) => {
    const WEATHER = [{
    "lat": 39.31,
    "lon": -74.5,
    "timezone": "New York City, New York",
    "timezone_offset": -18000,
    "current": {
      "dt": 1646318698,
      "sunrise": 1646306882,
      "sunset": 1646347929,
      "temp": 48 ,
      "feels_like": 41,
      "pressure": 1014,
      "humidity": 65,
      "dew_point": 275.99,
      "uvi": 2.55,
      "clouds": 40,
      "visibility": 10000,
      "wind_speed": 8.75,
      "wind_deg": 360,
      "wind_gust": 13.89,
      "weather": 
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        },
      
    },
 }];
 res.json(WEATHER);
});


// const url = "http://api.openweathermap.org/data/2.5/"

// app.get('/api/weather')


app.listen(PORT, () => console.log(`Hello! Server is running on port http://localhost${PORT}`));