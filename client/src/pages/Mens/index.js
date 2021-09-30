import { useQuery } from "@apollo/client";
import { useState } from "react";

import "./Mens.css";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { MENS_PRODUCTS } from "../../graphql/queries";
import FilterAccordion from "../../components/FilterAccordion";
import MobileFilters from "../../components/MobileFilters";

const Mens = () => {
  const [filters, setFilters] = useState();
  const [, setSortBy] = useState();
  const [, setProducts] = useState([]);

  const { data: mensProducts, loading, error } = useQuery(MENS_PRODUCTS, {
    variables: {
      mensProductsFilters: filters,
    },
    onCompleted: () => {
      setProducts(productData);
    },
  });

  let productData;
  let cards;

  if (mensProducts) {
    productData = mensProducts.mensProducts;

    cards = productData.map((product) => {
      return (
        <ProductCard
          key={product.name}
          name={product.name}
          price={product.price}
          image={product.image}
          message="VIEW"
          size="small"
          link={`/product/${product.id}`}
        />
      );
    });
  }

  const handleSetFilters = (event) => {
    const key = event.target.getAttribute("data-key");
    const value = event.target.getAttribute("data-value");

    if (key && value) {
      setFilters({ [key]: value });
    } else {
      setFilters(null);
    }
  };

  const handleSort = (event) => {
    const sortBy = event.target.getAttribute("data-sort");

    if (sortBy === "highest") {
      setSortBy("asc");
    } else {
      setSortBy("desc");
    }
  };

  return (
    <>
      <Title text="MENS" />
      <p className="text-center mx-2">
        Up your shoe game this season with men’s shoes that meet all your needs.
        From brogues, to boots, to sliders and trainers, we have everything you
        need to updated your wardrobe.
      </p>
      <div className="category-list text-center">
        <button
          className="category-button"
          data-key="style"
          data-value="boots"
          onClick={handleSetFilters}
        >
          Boots
        </button>{" "}
        |
        <button
          className="category-button"
          data-key="style"
          data-value="brogues"
          onClick={handleSetFilters}
        >
          Brogues
        </button>{" "}
        |
        <button
          className="category-button"
          data-key="style"
          data-value="trainers"
          onClick={handleSetFilters}
        >
          Trainers
        </button>
        |
        <button
          className="category-button"
          data-key="style"
          data-value="sliders"
          onClick={handleSetFilters}
        >
          Sliders
        </button>{" "}
        |
        <button
          className="category-button"
          data-key="style"
          data-value="loafers"
          onClick={handleSetFilters}
        >
          Loafers
        </button>{" "}
        |
        <button className="category-button" onClick={handleSetFilters}>
          All Shoes
        </button>
        <MobileFilters
          handleFilter={handleSetFilters}
          handleSort={handleSort}
        />
      </div>
      <div className="products-body">
        <div className="filters-div">
          <div className="filters-header text-center">FILTERS</div>
          <FilterAccordion
            handleFilter={handleSetFilters}
            handleSort={handleSort}
          />
        </div>
        {mensProducts && (
          <div className="product-container">
            {cards}
            {!cards.length && (
              <div className="no-results text-center">No results!</div>
            )}
          </div>
        )}
        {loading && (
          <div className="product-container">
            <LoadingSpinner />
          </div>
        )}
        {error && (
          <div className="product-container">
            <div className="data-error text-center">
              Oops there seems to be a problem! Try again later!
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Mens;
