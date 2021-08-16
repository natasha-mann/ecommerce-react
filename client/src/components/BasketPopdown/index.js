import { RiCloseFill } from "react-icons/ri";
import Backdrop from "../Backdrop";
import BasketItem from "../BasketItem";

import "./BasketPopdown.css";

const BasketPopdown = ({ handleBasketVisibility }) => {
  return (
    <>
      {/* <Backdrop /> */}
      <div className="popdown-container">
        <div className="popdown-header">
          <div className="popdown-title">My Basket | 4 Items</div>
          <div className="icon" onClick={handleBasketVisibility}>
            <RiCloseFill />
          </div>
        </div>
        <div className="popdown-container-inner">
          <div>
            <BasketItem />
            <BasketItem />
            <BasketItem />

            <div className="sub-total">Subtotal: £</div>
            <div className="delivery-text text-center">
              ** FREE DELIVERY ON ALL ORDERS **
            </div>
            <div className="button-div text-center d-flex gap-2 p-3">
              <a
                className="checkout-button w-50"
                href="/basket"
                onClick={handleBasketVisibility}
              >
                VIEW BASKET
              </a>
              <a
                className="checkout-button w-50"
                href="/checkout"
                onClick={handleBasketVisibility}
              >
                CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketPopdown;
