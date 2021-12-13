import React from "react";
import "./box.css";

const Box = ({ icon, fontSize, ...res }) => {
  return (
    <div id="box">
      <i className={icon} style={{ fontSize }} />

      <p>box</p>
    </div>
  );
};

export default Box;
