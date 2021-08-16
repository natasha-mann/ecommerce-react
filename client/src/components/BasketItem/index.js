import { RiDeleteBin6Line } from "react-icons/ri";

import { useBasketContext } from "../../contexts/BasketProvider";

import "./BasketItem.css";

const BasketItem = ({ product, size }) => {
  const { removeItemFromBasket } = useBasketContext();
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
          <div className="item">SIZE: {product.size} </div>
          <div className="item">Qty: 1 </div>

          <div className="bin">
            <RiDeleteBin6Line
              fontSize="1.5em"
              onClick={() => {
                removeItemFromBasket(product);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
