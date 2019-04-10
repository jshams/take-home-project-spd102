import React from 'react'
import './Weather.css'
import ErrorMessage from './ErrorMessage'


const Weather = (props) => {
    if (props.weatherData === null) {
        return (
            <h1>WELCOME!</h1>
        )
    }
    else if ((props.weatherData.cod === '404') || (props.weatherData.cod === '400')) {
        return (
            <ErrorMessage
                message={props.weatherData.message}
            />
        )
    }

    const { main, description, icon } = props.weatherData.weather[0]
    const { temp, pressure, humidity, temp_min, temp_max } = props.weatherData.main

    return (
        <div className="weather">
            <h2><strong>Title: </strong>{main}</h2>
            <p><strong>Description: </strong> {description}</p>
            <p><strong>Icon: </strong>{icon}</p>
            <p><strong>Temp: </strong>{temp}</p>
            <p><strong>Pressure: </strong>{pressure}</p>
            <p><strong>Humidity: </strong>{humidity}</p>
            <p><strong>Temp Min: </strong>{temp_min} Max:{temp_max}</p>
        </div>
    )
}

export default Weather