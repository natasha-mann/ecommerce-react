import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { GrFacebook } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";

import "./Product.css";
import Title from "../../components/Title";
import SizeButton from "../../components/SizeButton";
import { PRODUCT, PRODUCTS } from "../../graphql/queries";
import CardsCarousel from "../../components/CardsCarousel";
import ImageSlider from "../../components/ImageSlider";
import fitFinderImage from "../../images/fit_finder.png";
import { useBasketContext } from "../../contexts/BasketProvider";
import LoadingSpinner from "../../components/LoadingSpinner";

const Product = () => {
  const { id } = useParams();
  const { dispatch } = useBasketContext();

  const [productStock, setProductStock] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSizeId, setSelectedSizeId] = useState(null);

  const [sizeError, setSizeError] = useState("");
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

  let carouselCards;

  if (allProductsData) {
    carouselCards = allProductsData.products;
  }

  const handleAddToBasket = (event) => {
    event.preventDefault();
    if (selectedSize) {
      const product = productData.product;

      dispatch({
        type: "ADD_ITEM_TO_BASKET",
        payload: {
          product: {
            id: product.id,
            name: product.name,
            color: product.color,
            image: product.image,
            size: selectedSize,
            price: product.price,
            sizeId: selectedSizeId,
          },
        },
      });
    } else {
      setSizeError("Please select a size");
    }
  };

  const handleSizeClick = (event) => {
    const stockNumber = parseInt(event.target.getAttribute("data-stock"));
    const size = parseInt(event.target.innerHTML);
    const sizeId = event.target.getAttribute("data-sizeid");

    setProductStock(stockNumber);
    setSelectedSize(size);
    setSelectedSizeId(sizeId);
    setSizeError("");
    setActiveButton(parseInt(event.target.id));
  };

  let productInfo;
  let styles;
  let productImages;
  let sizeButtons;

  if (productData) {
    productInfo = productData.product;

    styles = productInfo.style.map((style) => {
      return style.charAt(0).toUpperCase() + style.slice(1);
    });

    sizeButtons = productInfo.sizes.map((size) => {
      return (
        <SizeButton
          key={size.size}
          size={size.size}
          sizeId={size.id}
          stock={size.stock}
          onClick={handleSizeClick}
          activeButton={activeButton}
        />
      );
    });

    productImages = [
      {
        original: productInfo.image,
        thumbnail: productInfo.image,
        originalAlt: productInfo.name,
        originalHeight: "400",
        thumbnailHeight: "92",
        thumbnailWidth: "120",
      },
      {
        original: productInfo.image,
        thumbnail: productInfo.image,
        originalAlt: productInfo.name,
        originalHeight: "400",
        thumbnailHeight: "92",
        thumbnailWidth: "120",
      },
      {
        original: productInfo.image,
        thumbnail: productInfo.image,
        originalAlt: productInfo.name,
        originalHeight: "400",
        thumbnailHeight: "92",
        thumbnailWidth: "120",
      },
      {
        original: productInfo.image,
        thumbnail: productInfo.image,
        originalAlt: productInfo.name,
        originalHeight: "400",
        thumbnailHeight: "92",
        thumbnailWidth: "120",
      },
    ];
  }

  return (
    <>
      <div className="product-container">
        {productInfo && (
          <>
            <div className="mobile-display">
              {" "}
              <Title text={productInfo.name} />
              <div className="text-center product-styles">
                {styles.join(" | ")}
              </div>
              <div className="mt-3 text-center product-price">
                £{productInfo.price}
              </div>
              <div className="icons-container text-center mt-3">
                <AiFillStar className="icons" />
                <AiFillStar className="icons" />
                <AiFillStar className="icons" />
                <AiFillStar className="icons" />
                <AiFillStar className="icons" />
                <p>Out of 38 reviews</p>
              </div>
            </div>
            <div className="product-image-container">
              <ImageSlider
                items={productImages}
                showThumbnails={true}
                autoPlay={false}
                showBullets={true}
                showNav={true}
              />
              <div className="fit-finder text-center mt-3">
                <img src={fitFinderImage} alt="" />
              </div>
            </div>
            <div className="product-info-container">
              <div className="desktop-display">
                {" "}
                <Title text={productInfo.name} />
                <div className="text-center product-styles">
                  {styles.join(" | ")}
                </div>
                <div className="mt-3 text-center product-price">
                  £{productInfo.price}
                </div>
                <div className="icons-container text-center mt-3">
                  <AiFillStar className="icons" />
                  <AiFillStar className="icons" />
                  <AiFillStar className="icons" />
                  <AiFillStar className="icons" />
                  <AiFillStar className="icons" />
                  <p>Out of 38 reviews</p>
                </div>
              </div>

              <form>
                <div>
                  <div className="mt-3">SELECT SIZE:</div>
                  <div className="buttons-div">{sizeButtons}</div>
                </div>
                {sizeError && (
                  <div className="size-error">Please select a size</div>
                )}

                {productStock === 0 && (
                  <>
                    <div className="stock-info">
                      Sorry, this size is out of stock!
                    </div>

                    <button className="cart-button-email" type="submit">
                      EMAIL ME WHEN AVAILABLE
                    </button>
                  </>
                )}
                {productStock !== 0 && productStock && (
                  <>
                    <div className="stock-info">
                      Only {productStock} remaining in stock!
                    </div>
                    <button className="cart-button" onClick={handleAddToBasket}>
                      ADD TO CART
                    </button>
                  </>
                )}
                <div className="social-icons mx-auto">
                  <div>
                    <GrFacebook />
                  </div>
                  <div>
                    <ImWhatsapp />
                  </div>
                  <div>
                    <SiInstagram />
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
        {productLoading && (
          <div className="mx-auto pb-5">
            <LoadingSpinner />
          </div>
        )}
        {productError && (
          <div className="data-error text-center mx-auto w-75">
            Oops there seems to be a problem with this product! Please try again
            later!
          </div>
        )}
      </div>
      <div className="carousel-container">
        {allProductsData && (
          <>
            <Title text="YOU MAY ALSO LIKE" />
            <CardsCarousel cardData={carouselCards} />
          </>
        )}

        {allProductsLoading && (
          <div className="mx-auto pb-5">
            <LoadingSpinner />
          </div>
        )}

        {allProductsError && (
          <div className="data-error text-center mx-auto w-75">
            Oops there seems to be a problem with showing our products! Try
            again later!
          </div>
        )}
      </div>
    </>
  );
};
export default Product;
