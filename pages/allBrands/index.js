import React from "react";
import { Title } from "../../components";
import "./allbrands.css";

const AllBrands = () => {
  return (
    <div id="allbrands">
      <div className="all-brands-title">
        <Title title="All Brands" />
      </div>
      <div className="all-brands-wrapper">
        <div className="brand-card">
          <h2>Advan</h2>
          <p>158 Device</p>
        </div>
        <div className="brand-card">
          <h2>Advan</h2>
          <p>158 Device</p>
        </div>
        <div className="brand-card">
          <h2>Advan</h2>
          <p>158 Device</p>
        </div>
        <div className="brand-card">
          <h2>Advan</h2>
          <p>158 Device</p>
        </div>
        <div className="brand-card">
          <h2>Advan</h2>
          <p>158 Device</p>
        </div>
      </div>
    </div>
  );
};

export default AllBrands;
