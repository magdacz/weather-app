import React from 'react';

const Result = (props) => {
    const {err, city, temp, sunrise, sunset, wind, pressure} = props.weather;
    return (
    <div>
        <div>Pogoda dla: {city}</div>
        <div>Temperatura: {temp}</div>
    </div>
    )
}

export default Result;
