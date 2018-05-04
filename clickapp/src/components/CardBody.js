import React from "react";
import "./card.css";
import "../images";
//the clicks

const CardBody = props => (

    <div className="image" onClick={props.handle(props.id)}>
        <div className="img-container">
            <img alt="pokemon" src={props.image} />
        </div>
    </div>

);
export default CardBody;