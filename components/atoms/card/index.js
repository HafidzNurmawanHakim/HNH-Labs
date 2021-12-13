import React from "react";
import { Gap } from "../..";
import "./card.css";

const BigCard = ({ title, image, width, height, maxHeight, maxWidth }) => {
  return (
    <div className="Big-card" style={{ width, height, maxHeight, maxWidth }}>
      <img id="img-card" src={image} alt="img" />
      <div className="card-caption">
        <h3 className="big-card-title">{title}</h3>
        <Gap height={10} />
        <p>ndidvio dvnsdnv dkl dvn dkvdsd ds k oen e woe kvo k ekv </p>
      </div>
    </div>
  );
};

export default BigCard;
