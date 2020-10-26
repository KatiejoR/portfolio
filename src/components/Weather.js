import React, { useState } from "react";
import axios from "axios";
import "../css/weather_component.css";

export default function Weather() {

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [weather, setWeather] = useState({});

    const handleLocation = event => {
        setCity(event.target.value);
        setState(event.target.value);
        setCountry(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=0ce249d08a8d15ad82be9ce670c9c5f3&units=imperial`).then((res) => {
            setWeather({
                temp: res.data.main.temp,
                name: res.data.name,
                country: res.data.sys.country,
                tempMax: res.data.main.temp_max,
                tempMin: res.data.main.temp_min
            });
        });
    };

    return (
        <div class="bg">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    placeholder="City, State, Country"
                    onChange={handleLocation}
                />
                <input 
                    type="submit"
                    value="Get Weather"
                    className="btn btn-primary mb-2"
                />
            </form>
            <div>
                <h4>
                    The current temperature at{" "}{" "}
                    <small className="text-muted">{weather.name}, {weather.country}</small> is{" "}
                    <small className="text-primary">{weather.temp}&deg;F</small>.
                    <br />
                    High: <small className="text-success">{Math.ceil(weather.tempMax)}&deg;F</small>
                    <br />
                    Low: <small className="text-danger">{Math.floor(weather.tempMin)}&deg;F</small>
                </h4>
            </div>
        </div>
    )
}