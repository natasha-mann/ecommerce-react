import React, { useState } from "react";

import "./ProductCard.css";
import "../../App.css";

const cardData = {
  name: "Leather Ankle Boots",
  image:
    "https://images.unsplash.com/photo-1494955464529-790512c65305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  price: 49.99,
};

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
          backgroundImage: "url(" + cardData.image + ")",
        }}
        onMouseEnter={(e) => showDiv(e)}
        onMouseLeave={(e) => hideDiv(e)}
      >
        <div className={`${display} image-overlay`}>QUICK BUY</div>
      </div>
      <div className="card-body">
        <a href="/">
          <h3 className="card-title">{cardData.name}</h3>
        </a>
        <p className="price-text">£{cardData.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
