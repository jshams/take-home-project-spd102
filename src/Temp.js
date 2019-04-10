import React from 'react'

const Temp = (props) => {

    return (
        <div className="temp">
            <p><strong>Temp: </strong>{props.temp}</p>
            <p><strong>Min: </strong>{props.temp_min}</p>
            <p><strong>Max: </strong>{props.temp_max}</p>
        </div>
    )
}

export default Temp