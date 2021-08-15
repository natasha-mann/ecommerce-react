import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import "./Product.css";
import Title from "../../components/Title";
import SizeButton from "../../components/SizeButton";
import { PRODUCT, PRODUCTS } from "../../graphql/queries";
import CardsCarousel from "../../components/CardsCarousel";
import { useState } from "react";

const Product = (props) => {
  const [productStock, setProductStock] = useState(1);

  const { id } = useParams();
  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useQuery(PRODUCT, {
    variables: { productId: id },
  });

  const {
    data: allProductsData,
    loading: allProductsLoading,
    error: allProductsError,
  } = useQuery(PRODUCTS);

  if (productLoading) {
    return <div>Loading...</div>;
  }

  if (productError) {
    return <div>error...</div>;
  }

  if (allProductsLoading) {
    return <div>Loading...</div>;
  }

  if (allProductsError) {
    return <div>error...</div>;
  }

  let carouselCards;

  if (allProductsData) {
    carouselCards = allProductsData.products;
  }

  if (productData) {
    const productInfo = productData.product;

    const styles = productInfo.style.map((style) => {
      return style.charAt(0).toUpperCase() + style.slice(1);
    });

    const displayStock = (event) => {
      const stockNumber = parseInt(event.target.getAttribute("data-stock"));

      setProductStock(stockNumber);
    };

    const sizeButtons = productInfo.sizes.map((size) => {
      return (
        <SizeButton
          key={size.size}
          size={size.size}
          stock={size.stock}
          onClick={displayStock}
        />
      );
    });

    return (
      <>
        <div className="product-container">
          <div className="product-image-container">
            <img src={productInfo.image} alt={productInfo.name} />
          </div>
          <div className="product-info-container">
            <Title text={productInfo.name} />
            <div className="text-center product-styles">
              {styles.join(" | ")}
            </div>
            <div className="mt-3 text-center product-price">
              £{productInfo.price}
            </div>
            <form>
              <div>
                <div className="mt-3">SELECT SIZE:</div>
                <div className="buttons-div">{sizeButtons}</div>
              </div>

              {productStock === 0 && (
                <>
                  <div className="stock-info">
                    Sorry, this size is out of stock!
                  </div>
                  <button
                    className="cart-button-disabled"
                    type="submit"
                    disabled
                  >
                    ADD TO CART
                  </button>
                </>
              )}
              {productStock !== 0 && productStock && (
                <>
                  <div className="stock-info">
                    Only {productStock} remaining in stock!
                  </div>
                  <button className="cart-button" type="submit">
                    ADD TO CART
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
        <div className="carousel-container">
          <Title text="YOU MAY ALSO LIKE" />
          <CardsCarousel cardData={carouselCards} />
        </div>
      </>
    );
  }
};

export default Product;
