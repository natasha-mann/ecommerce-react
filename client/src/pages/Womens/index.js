import { useQuery } from "@apollo/client";
import { useState } from "react";

import "./Womens.css";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { WOMENS_PRODUCTS } from "../../graphql/queries";
import FilterAccordion from "../../components/FilterAccordion";
import MobileFilters from "../../components/MobileFilters";

const Womens = () => {
  const [filters, setFilters] = useState();
  const [, setSortBy] = useState();
  const [, setProducts] = useState([]);

  const { data: womensProducts, loading, error } = useQuery(WOMENS_PRODUCTS, {
    variables: {
      womensProductsFilters: filters,
    },
    onCompleted: () => {
      setProducts(productData);
    },
  });

  let productData;
  let cards;

  if (womensProducts) {
    productData = womensProducts.womensProducts;

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
      <Title text="WOMENS" />
      <p className="text-center">
        Up your shoe game this season with women’s shoes that meet all your
        needs. From heels, to boots, to sandals and trainers, we have everything
        you need to updated your wardrobe.
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
          data-value="trainers"
          onClick={handleSetFilters}
        >
          Trainers
        </button>
        |
        <button
          className="category-button"
          data-key="style"
          data-value="heels"
          onClick={handleSetFilters}
        >
          High Heels
        </button>{" "}
        |
        <button
          className="category-button"
          data-key="style"
          data-value="sandals"
          onClick={handleSetFilters}
        >
          Sandals
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
        {womensProducts && <div className="product-container">{cards}</div>}
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

export default Womens;
