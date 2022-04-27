import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className={`card-container card${props.obj.id}`}>
      <img src={`/images/${props.obj.img}`} />
      <div className="caption-oncard">{props.obj.captionOnImg}</div>
      <div className="caption-belowcard">{props.obj.captionBottom}</div>
    </div>
  );
}

export default Card;
