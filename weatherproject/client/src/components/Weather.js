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
            {weather.map((weather,index)=>{
                return (
                    <p key={index}>
                        City Name: {weather.timezone} <br></br>
                        Latitude {weather.lat} <br></br>
                         Longitude {weather.lon} <br></br>
                       Humidity {weather.current.humidity}<br></br>
                       Temperature {weather.current.temp}<br></br>
                       Feels Like {weather.current.feels_like}<br></br>
                    </p>
                    
                );
            })}
        </div>
    );
};

export default Weather;