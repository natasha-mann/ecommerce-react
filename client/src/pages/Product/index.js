import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";

import "./Product.css";
import Title from "../../components/Title";
import SizeButton from "../../components/SizeButton";
import { PRODUCT, PRODUCTS } from "../../graphql/queries";
import CardsCarousel from "../../components/CardsCarousel";
import ImageSlider from "../../components/ImageSlider";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

const Product = () => {
  const { id } = useParams();
  const [state, dispatch] = useStoreContext();
  const { cart } = state;

  const [productStock, setProductStock] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeButton, setActiveButton] = useState();

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
    const addToCart = (event) => {
      event.preventDefault();

      const productToAdd = {
        id: productData.id,
        image: productData.image,
        price: productData.price,
        size: selectedSize,
        name: productData.name,
      };
      const itemInCart = cart.find((cartItem) => cartItem.id === id);
      if (itemInCart) {
        dispatch({
          type: UPDATE_CART_QUANTITY,
          id: id,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        });

        // update local storage quantity
      } else {
        dispatch({
          type: ADD_TO_CART,
          product: { ...productToAdd, purchaseQuantity: 1 },
        });

        const newItem = {
          ...productToAdd,
          purchaseQuantity: 1,
        };
        localStorage.setItem("items", JSON.stringify(newItem));
      }
    };

    const productInfo = productData.product;

    const styles = productInfo.style.map((style) => {
      return style.charAt(0).toUpperCase() + style.slice(1);
    });

    const handleSizeClick = (event) => {
      const stockNumber = parseInt(event.target.getAttribute("data-stock"));
      const size = parseInt(event.target.innerHTML);

      setProductStock(stockNumber);
      setSelectedSize(size);
      setActiveButton(parseInt(event.target.id));
    };

    const sizeButtons = productInfo.sizes.map((size) => {
      return (
        <SizeButton
          key={size.size}
          size={size.size}
          stock={size.stock}
          onClick={handleSizeClick}
          activeButton={activeButton}
        />
      );
    });

    const productImages = [
      {
        original: productInfo.image,
        thumbnail: productInfo.image,
        originalAlt: productInfo.name,
        originalWidth: "200px",
        originalHeight: "400",
        thumbnailHeight: "92",
        thumbnailWidth: "120",
      },
      {
        original: productInfo.image,
        thumbnail: productInfo.image,
        originalAlt: productInfo.name,
        originalWidth: "200px",
        originalHeight: "400",
        thumbnailHeight: "92",
        thumbnailWidth: "120",
      },
      {
        original: productInfo.image,
        thumbnail: productInfo.image,
        originalAlt: productInfo.name,
        originalWidth: "200px",
        originalHeight: "400",
        thumbnailHeight: "92",
        thumbnailWidth: "120",
      },
      {
        original: productInfo.image,
        thumbnail: productInfo.image,
        originalAlt: productInfo.name,
        originalWidth: "200px",
        originalHeight: "400",
        thumbnailHeight: "92",
        thumbnailWidth: "120",
      },
    ];

    return (
      <>
        <div className="product-container">
          <div className="product-image-container">
            <ImageSlider images={productImages} />
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
                  <button
                    className="cart-button"
                    type="submit"
                    onClick={addToCart}
                  >
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
