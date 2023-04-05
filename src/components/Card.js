import React from "react"

function Card(props) {


    return (
        <div className="card">
            <div>
                <img className="image" src={`./images/${props.img}`} />
                <h2 className="card--ingredient">{props.ingredient}</h2>

            </div>
            {/* <div className="card--info"> */}
            <div className="card--location" >
                {/* <p className="card--locale"> <img className="arrow" src="./images/arrow" /> {props.location}</p> */}
                {/* <p><a className="gray" href={props.googleMapsUrl}>View on Google Maps</a></p> */}
                {/* </div> */}
                <p className="card--desc">{props.description}</p>
            </div>

        </div>
    )
}

export default Card;