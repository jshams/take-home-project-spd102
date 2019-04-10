import React from 'react'


const Description = (props) => {

    return (
        <div className="description">
            <h2><strong>Title: </strong>{props.title}</h2>
            <p><strong>Description: </strong> {props.description}</p>
        </div>
    )
}

export default Description