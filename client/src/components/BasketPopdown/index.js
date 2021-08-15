import { RiCloseFill } from "react-icons/ri";
import Backdrop from "../Backdrop";
import BasketItem from "../BasketItem";

import "./BasketPopdown.css";

const BasketPopdown = ({ handleBasketVisibility }) => {
  return (
    <>
      {/* <Backdrop /> */}
      <div className="basket-container">
        <div className="basket-header">
          <div className="basket-title">My Basket | 4 Items</div>
          <div className="icon" onClick={handleBasketVisibility}>
            <RiCloseFill />
          </div>
        </div>
        <div className="basket-container-inner">
          <div>
            <BasketItem />
            <BasketItem />
            <BasketItem />

            <div className="sub-total">Subtotal: £</div>
            <div className="delivery-text text-center">
              ** FREE DELIVERY ON ALL ORDERS **
            </div>
            <div className="button-div text-center">
              <a
                className="checkout-button"
                href="/checkout"
                onClick={handleBasketVisibility}
              >
                PROCEED TO CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketPopdown;
