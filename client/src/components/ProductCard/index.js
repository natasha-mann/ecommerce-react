import React, { useState } from "react";

import "./ProductCard.css";
import "../../App.css";

const ProductCard = (props) => {
  const [display, setDisplay] = useState("hidden");
  const showDiv = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideDiv = (e) => {
    e.preventDefault();
    setDisplay("hidden");
  };

  return (
    <div className="card-container">
      <div
        className="card-image"
        style={{
          backgroundImage: "url(" + props.image + ")",
        }}
        onMouseEnter={(e) => showDiv(e)}
        onMouseLeave={(e) => hideDiv(e)}
      >
        <div className={`${display} image-overlay`}>QUICK BUY</div>
      </div>
      <div className="card-body">
        <a className="card-link" href="/">
          <h3 className="card-title">{props.name}</h3>
        </a>
        <p className="price-text">£{props.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
