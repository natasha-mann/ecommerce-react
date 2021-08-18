import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import BasketItem from "../../components/BasketItem";
import Title from "../../components/Title";
import { useBasketContext } from "../../contexts/BasketProvider";
import { UPDATE_PRODUCTS } from "../../graphql/queries";
import calculateSubtotal from "../../utils/calculateSubtotal";
import "./Basket.css";

const Basket = () => {
  let history = useHistory();
  const [isValidDiscount, setIsValidDiscount] = useState(null);
  const [discountedTotal, setDiscountedTotal] = useState();

  const { state, dispatch } = useBasketContext();
  const products = state.cart;

  useEffect(() => {
    if (!products.length) {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      if (savedCart.length) {
        dispatch({
          type: "LOAD_SAVED_BASKET",
          payload: { products: savedCart },
        });
      }
    }
  }, [products.length, dispatch]);

  const [checkout] = useMutation(UPDATE_PRODUCTS, {
    onCompleted: (data) => {
      history.push("/success");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const renderBasket = () => {
    const handleCheckout = async () => {
      const input = products.map((product) => {
        return {
          sizeId: product.sizeId,
          qty: product.qty,
          id: product.id,
        };
      });
      await checkout({
        variables: {
          updateStockInput: input,
        },
      });
    };

    const subtotal = calculateSubtotal(products);

    const handleApplyDiscount = (event) => {
      event.preventDefault();

      if (event.currentTarget.discount.value === "NEW15") {
        const discountedSubtotal = (subtotal / 100) * 85;
        setDiscountedTotal(discountedSubtotal.toFixed(2));
        setIsValidDiscount(true);
      } else if (event.currentTarget.discount.value === "NEW20") {
        const discountedSubtotal = (subtotal / 100) * 80;
        setDiscountedTotal(discountedSubtotal.toFixed(2));
        setIsValidDiscount(true);
      } else {
        setDiscountedTotal(subtotal.toFixed(2));
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
                <button className="confirm-button" onClick={handleCheckout}>
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="empty-basket empty-basket-page text-center">
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
