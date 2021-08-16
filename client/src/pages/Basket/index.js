import BasketItem from "../../components/BasketItem";
import Title from "../../components/Title";
import "./Basket.css";

const Basket = () => {
  const products = JSON.parse(localStorage.getItem("cart"));

  return (
    <div>
      <Title text="MY BASKET" />
      <div className="basket-container">
        <div className="basket-detail-container">
          {products &&
            products.map((product) => (
              <BasketItem
                product={product}
                key={`${product.id}-${product.size}`}
                size="large"
              />
            ))}

          {!products.length && (
            <div className="empty-basket text-center">
              You haven't added anything to your basket yet!
            </div>
          )}
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
              <button className="confirm-button">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
