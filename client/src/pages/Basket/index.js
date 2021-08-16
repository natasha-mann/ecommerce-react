import BasketItem from "../../components/BasketItem";
import Title from "../../components/Title";
import "./Basket.css";

const Basket = () => {
  return (
    <div>
      <Title text="MY BASKET" />
      <div className="basket-container">
        <div className="basket-detail-container">
          <BasketItem size="large" />
          <BasketItem size="large" />
          <BasketItem size="large" />
        </div>
        <div className="basket-summary-container">
          <div className="basket-summary">
            <div className="summary-title text-center">TOTAL</div>

            <hr />

            <div className="summary-info">
              <div>Subtotal: </div>
              <div>Shipping: </div>
              <div>Estimated Delivery Time: 3 days</div>
            </div>

            <div className="confirm-button-div text-center">
              <button className="confirm-button">Basket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
