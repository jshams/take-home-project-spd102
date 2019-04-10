import React from 'react'
import './Weather.css'


const Weather = (props) => {
    return (
        <div className="weather">
            <h2><strong>Title: </strong>{props.main}</h2>
            <p><strong>Description: </strong> {props.desc}</p>
            <p><strong>Icon: </strong>{props.icon}</p>
            <p><strong>Temp: </strong>{props.temp}</p>
            <p><strong>Pressure: </strong>{props.pressure}</p>
            <p><strong>Humidity: </strong>{props.humidity}</p>
            <p><strong>Temp Min: </strong>{props.temp_min} Max:{props.temp_max}</p>
        </div>
    )
}

export default Weather