import React from 'react'

const farenheight = (temp) => {
    return Math.floor(((temp - 273.15) * 9 / 5 + 32) * 10) / 10
}

const Temp = (props) => {

    return (
        <div className="temp">
            <p><strong>Temp: </strong>{farenheight(props.temp)}</p>
            <p><strong>Min: </strong>{farenheight(props.temp_min)}</p>
            <p><strong>Max: </strong>{farenheight(props.temp_max)}</p>
        </div>
    )
}

export default Temp