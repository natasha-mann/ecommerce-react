import { RiDeleteBin6Line } from "react-icons/ri";

import "./BasketItem.css";

const product = {
  type: "women",
  name: "Leather Ankle Boots",
  style: ["boots", "leather", "heels"],
  color: "black",
  image:
    "https://images.unsplash.com/photo-1494955464529-790512c65305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
  price: 49.99,
  sizes: [
    { size: 2, stock: 2 },
    { size: 3, stock: 2 },
    { size: 4, stock: 4 },
    { size: 5, stock: 1 },
    { size: 6, stock: 3 },
    { size: 7, stock: 4 },
    { size: 8, stock: 0 },
  ],
};

const BasketItem = ({ size }) => {
  return (
    <div className="basket-item-container">
      <div className="basket-item">
        <div
          className={`basket-image-container basket-image-container--${size}`}
        >
          <img
            className={`basket-product-image basket-product-image--${size}`}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="text-container">
          <div className="header">{product.name}</div>
          <div className="item">£{product.price}</div>
          <div className="item">SIZE: {product.sizes[0].size} </div>
          <div className="item">Qty: 1 </div>

          <div className="bin">
            <RiDeleteBin6Line fontSize="1.5em" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
