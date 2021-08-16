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

const Product = () => {
  const { id } = useParams();
  const { cart, addItemToBasket } = useBasketContext();
  console.log(cart);

  const [productStock, setProductStock] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
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
    const handleAddToBasket = (event) => {
      event.preventDefault();
      if (selectedSize) {
        const product = productData.product;
        const newShoe = {
          id: product.id,
          name: product.name,
          color: product.color,
          image: product.image,
          size: selectedSize,
          price: product.price,
        };
        addItemToBasket(newShoe);
      } else {
        setSizeError("Please select a size");
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
      setSizeError("");
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

    return (
      <>
        <div className="product-container">
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
            <Title text={productInfo.name} />
            <div className="text-center product-styles">
              {styles.join(" | ")}
            </div>
            <div className="mt-3 text-center product-price">
              £{productInfo.price}
            </div>
            <div className="icons-container text-center mt-3">
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <p>Out of 38 reviews</p>
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
