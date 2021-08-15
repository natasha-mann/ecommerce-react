import { useQuery } from "@apollo/client";
import { useState } from "react";

import "./Womens.css";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { WOMENS_PRODUCTS } from "../../graphql/queries";

const Womens = () => {
  const [filters, setFilters] = useState();

  const { data: womensProducts, loading, error } = useQuery(WOMENS_PRODUCTS, {
    variables: {
      womensProductsFilters: filters,
    },
  });

  if (error) {
    return <div>error...</div>;
  }

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

  const fetchBoots = () => {
    setFilters({ style: "boots" });
    console.log(filters);
  };
  const fetchTrainers = () => {
    setFilters({ style: "trainers" });
  };
  const fetchHighHeels = () => {
    setFilters({ style: "heels" });
  };
  const fetchBootsSandals = () => {
    setFilters({ style: "sandals" });
  };
  const fetchAll = () => {
    setFilters(null);
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
        <button className="category-button" onClick={fetchBoots}>
          Boots
        </button>{" "}
        |{" "}
        <button className="category-button" onClick={fetchTrainers}>
          Trainers
        </button>{" "}
        |{" "}
        <button className="category-button" onClick={fetchHighHeels}>
          High Heels
        </button>{" "}
        |{" "}
        <button className="category-button" onClick={fetchBootsSandals}>
          Sandals
        </button>{" "}
        |{" "}
        <button className="category-button" onClick={fetchAll}>
          All Shoes
        </button>
      </div>
      {loading && <LoadingSpinner />}
      {womensProducts && <div className="product-container">{cards}</div>}
    </>
  );
};

export default Womens;
