import BasketItem from "../../components/BasketItem";
import Title from "../../components/Title";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div>
      <Title text="MY BASKET" />
      <div className="checkout-container">
        <div className="checkout-detail-container">
          <BasketItem size="large" />
          <BasketItem size="large" />
          <BasketItem size="large" />
        </div>
        <div className="checkout-summary-container">
          <div className="checkout-summary">
            <div className="summary-title text-center">TOTAL</div>

            <hr />

            <div className="summary-info">
              <div>Subtotal: </div>
              <div>Shipping: </div>
              <div>Estimated Delivery Time: 3 days</div>
            </div>

            <div className="confirm-button-div text-center">
              <button className="confirm-button">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
