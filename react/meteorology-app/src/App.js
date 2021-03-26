import React, { useState } from "react";
import "./App.css";

const api = {
  key: `${process.env.REACT_APP_METEOR_API_SECRT}`,
  url: "https://api.openweathermap.org/data/2.5/weather",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);
  console.log(weather);

  const todaysDate = (d) => {
    // const d = new Date();
    const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const daysArray= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day =daysArray[d.getDay()];
    const dayNumber = d.getDate();
    const month = monthsArray[d.getMonth()];
    const year = d.getFullYear();
    const date = `${day}, ${dayNumber} ${month} ${year}`;

    return date;
  };
  // console.log(date);

  const search = (event) => {
    if (event.key === "Enter" || event.key === 13) {
      fetch(`${api.url}?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((data) => {
          setQuery("");
          setWeather(data);
          console.log("here is the data", data);
        });
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="box center">
        <input
          type="text"
          placeholder="Weather forecast..."
          value={query}
          onChange={handleChange}
          onKeyPress={search}
          className='input'
        />
        <img src='/assets/beach.jpg' alt="" className="picture"/>
        {typeof weather.name != "undefined" ? (
          <div className="dataBlock">
            <p className="country">
              {weather.name}, {weather.sys.country}
            </p>
            <p className='date'>{todaysDate(new Date())}</p>

            <p className="temperature">{Math.round(weather.main.temp)}°</p>
            <p className="feelsLike">
              Feels like {Math.round(weather.main.feels_like)}°
            </p>
            <p className="weather">{weather.weather[0].main}</p>
            <p>Humidity:&nbsp;{weather.main.humidity}%</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
