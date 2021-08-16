import { useState } from "react";
import BasketItem from "../../components/BasketItem";
import Title from "../../components/Title";
import calculateSubtotal from "../../utils/calculateSubtotal";
import "./Basket.css";

const Basket = () => {
  const [isValidDiscount, setIsValidDiscount] = useState(null);
  const [discountedTotal, setDiscountedTotal] = useState();
  const products = JSON.parse(localStorage.getItem("cart")) || [];

  const renderBasket = () => {
    const subtotal = calculateSubtotal(products);

    const handleApplyDiscount = (event) => {
      event.preventDefault();

      if (event.currentTarget.discount.value === "NEW15") {
        const discountedSubtotal = (subtotal / 100) * 85;
        setDiscountedTotal(discountedSubtotal);
        setIsValidDiscount(true);
      } else if (event.currentTarget.discount.value === "NEW20") {
        const discountedSubtotal = (subtotal / 100) * 80;
        setDiscountedTotal(discountedSubtotal);
        setIsValidDiscount(true);
      } else {
        setDiscountedTotal(subtotal);
        setIsValidDiscount(false);
        return <div>Total: £ {subtotal}</div>;
      }
    };

    if (products.length) {
      const cards = products.map((product) => (
        <BasketItem
          product={product}
          key={`${product.id}-${product.size}`}
          size="large"
        />
      ));

      return (
        <>
          <div className="basket-detail-container">{cards}</div>
          <div className="basket-summary-container">
            <div className="basket-summary">
              <div className="summary-title text-center">TOTAL</div>

              <hr />

              <div className="summary-info">
                <div>Subtotal: £ {subtotal}</div>
                {isValidDiscount && <div>Total: £ {discountedTotal}</div>}
                <div>Shipping: FREE!</div>
                <div>Estimated Delivery Time: 3 days</div>
              </div>

              <form
                onSubmit={handleApplyDiscount}
                className="discount-container text-center"
              >
                {isValidDiscount === false && (
                  <div className="invalid-discount">
                    Oops, invalid discount code!
                  </div>
                )}
                <div className="my-2">ENTER DISCOUNT CODE:</div>
                <div className="discount-input-group">
                  <input
                    name="discount"
                    className="discount-input"
                    type="text"
                  ></input>
                  <button className="apply-button" type="submit">
                    APPLY
                  </button>
                </div>
              </form>

              <div className="confirm-button-div text-center">
                <button className="confirm-button">CHECKOUT</button>
              </div>
            </div>
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
    <div>
      <Title text="MY BASKET" />

      <div className="basket-container"> {renderBasket()}</div>
    </div>
  );
};

export default Basket;
