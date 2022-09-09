import {useState, useEffect} from "react";


const Weather = (props) => {
    const [weather, setWeather] = useState([]);

    const loadData = () => {
        fetch("http://localhost:1212/api/weather")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setWeather(data);
        });
    };


    useEffect(()=>{
        loadData();
    }, []);


    return (
        <div>
                    <p>
                        City Name: {weather.name} 
                       { /* Latitude {weather.lat} <br></br>
                        Longitude {weather.lon} <br></br>
                       Humidity {weather.current.humidity}<br></br>
                       Temperature {weather.current.temp} F<br></br>
                       Feels Like {weather.current.feels_like} F<br></br>
                       Wind Speed {weather.current.wind_speed} mph<br></br>
                       Decription {weather.current.weather.description} <br></br>
                       <img src ={` http://openweathermap.org/img/wn/09d@2x.png`}
         alt="wthr img" /> */}
                    </p>  
                    <p>
                        Longitude: {weather.coord.lon} 
                    </p>
                    <p>
                        Latitude: {weather.coord.lat}
                    </p>
                    <p>
                        Temp: {weather.main.temp}
                    </p>
                    <p>
                        Humidity: {weather.main.humidity}
                    </p>
                    <p>
                        Description: {weather.weather[0].description}
                    </p>
                    <p>
                    <img src ={" http://openweathermap.org/img/wn/09d@2x.png"}
         alt="wthr img" />
                    </p>
               </div>     
       
    );
};

export default Weather;