import BasketItem from "../../components/BasketItem";
import Title from "../../components/Title";
import calculateSubtotal from "../../utils/calculateSubtotal";
import "./Basket.css";

const Basket = () => {
  const products = JSON.parse(localStorage.getItem("cart")) || [];

  const renderBasket = () => {
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
                <div>Subtotal: £ {calculateSubtotal(products)}</div>
                <div>Shipping: FREE!</div>
                <div>Estimated Delivery Time: 3 days</div>
              </div>

              <div className="discount-container text-center">
                <div className="my-2">ENTER DISCOUNT CODE:</div>
                <input className="discount-input" type="text"></input>
              </div>

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
