import { RiCloseFill } from "react-icons/ri";

import { useBasketContext } from "../../contexts/BasketProvider";
import Backdrop from "../Backdrop";
import BasketItem from "../BasketItem";
import calculateSubtotal from "../../utils/calculateSubtotal";

import "./BasketPopdown.css";

const BasketPopdown = () => {
  const {
    state: { showCart },
    dispatch,
  } = useBasketContext();

  const handleBasketVisibility = () => {
    return dispatch({ type: "TOGGLE_CART", payload: false });
  };

  const displayCart = () => {
    if (showCart) {
      return "open";
    } else {
      return "";
    }
  };

  const products = JSON.parse(localStorage.getItem("cart")) || [];

  const renderBasketHeader = () => {
    const numberOfItems = products.reduce((acc, product) => {
      return acc + product.qty;
    }, 0);
    return (
      <div className="popdown-title">
        My Basket | {numberOfItems}{" "}
        {numberOfItems > 1 || numberOfItems === 0 ? (
          <span>Items</span>
        ) : (
          <span>Item</span>
        )}
      </div>
    );
  };

  const renderBasket = () => {
    if (products.length) {
      const cards = products.map((product) => (
        <BasketItem product={product} key={`${product.id}-${product.size}`} />
      ));

      return (
        <>
          {cards}
          <div className="sub-total">
            Subtotal: £{calculateSubtotal(products)}
          </div>
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
        </>
      );
    } else {
      return (
        <div className="empty-basket text-center">
          You haven't added anything to your basket yet!
        </div>
      );
    }
  };

  return (
    <>
      {showCart && <Backdrop />}
      <div className={`popdown-container ${displayCart()}`}>
        <div className="popdown-header">
          {renderBasketHeader()}
          <div className="icon" onClick={handleBasketVisibility}>
            <RiCloseFill />
          </div>
        </div>
        <div className="popdown-container-inner">{renderBasket()}</div>
      </div>
    </>
  );
};

export default BasketPopdown;
