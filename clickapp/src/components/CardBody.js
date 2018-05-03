import React from "react";
import "./card.css"
//the clicks
    let picture = {
        width: "100%",
        backgroundImage: `url()`
    }

const CardBody = props => (
    //<div>
    // <div className="card" id="pC">
        <div role="img" aria-label="click item" className="click-item" style={{backgroundImage: `url(${props.image})`}} onClick={() => props.handle(props.id)}></div>
    // </div>
);
export default CardBody;