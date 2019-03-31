import React from 'react';
import './Result.css';

const Result = (props) => {
    const {err, city, temp, sunrise, sunset, wind, pressure, date} = props.weather;
    let content = null;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    if(!err && city) {
        content = (
         <div className='result'>
            <h1>{city.toUpperCase()}</h1>
            <h3>{date}</h3>
            <h2>{temp} &#176;C</h2>
            <h4>Wschód słońca: {sunriseTime}</h4>
            <h4>Zachód słońca: {sunsetTime}</h4>
            <h4>Wiatr: {wind} m/s</h4>
            <h4>Ciśnienie {pressure} hPa</h4>
         </div>
        )
    }
    return (
    <div className='result'>
        {err ? `Nie znaleziono miasta ${city}` : content}
    </div>
    )
}

export default Result;
