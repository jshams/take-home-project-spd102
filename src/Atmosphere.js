import React from 'react'

const Atmosphere = (props) => {

    return (
        <div className="atmosphere">
            <p><strong>Air Pressure: </strong>{props.pressure}</p>
            <p><strong>Humidity: </strong>{props.humidity}</p>
        </div>
    )
}

export default Atmosphere