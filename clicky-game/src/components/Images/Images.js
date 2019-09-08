import React from "react";
import "./Images.css";


const ImageCard = (props) => {

    return (
        <img
        className="image-card"
        src={props.image}
        alt={props.name}
        name={props.name}
        onClick={() => props.handleClick(props.id, props.clicked)}
    />
   )
}

export default ImageCard;