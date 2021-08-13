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
    <div
      className={[`card-container-${props.size}`, `card-container`].join(" ")}
    >
      <div
        className={[`card-image-${props.size}`, `card-image`].join(" ")}
        style={{
          backgroundImage: "url(" + props.image + ")",
        }}
        onMouseEnter={(e) => showDiv(e)}
        onMouseLeave={(e) => hideDiv(e)}
      >
        <div className={`${display} image-overlay`}>{props.message}</div>
      </div>
      <div className="card-body">
        <a className="card-link" href="/">
          <h3 className={`card-title-${props.size}`}>{props.name}</h3>
        </a>
        {props.price && <p className="price-text">£{props.price}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
