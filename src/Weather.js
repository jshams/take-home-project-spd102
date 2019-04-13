import React from 'react'
import './Weather.css'
import ErrorMessage from './ErrorMessage'
import Temp from './Temp'
import Description from './Description';
import Atmosphere from './Atmosphere';


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

    const { main, description } = props.weatherData.weather
    const { temp, pressure, humidity, temp_min, temp_max } = props.weatherData.main

    return (
        <div className="weather">
            <Description
                title={main}
                description={description}
            />
            <Atmosphere
                pressure={pressure}
                humidity={humidity}
            />
            <Temp
                temp={temp}
                temp_min={temp_min}
                temp_max={temp_max}
            />
        </div>
    )
}

export default Weather