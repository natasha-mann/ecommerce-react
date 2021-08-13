import { useQuery } from "@apollo/client";

import "./Womens.css";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";
import { WOMENS_PRODUCTS } from "../../graphql/queries";

const Womens = () => {
  const { data: womensProducts, loading, error } = useQuery(WOMENS_PRODUCTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  if (womensProducts) {
    const productData = womensProducts.womensProducts;

    const cards = productData.map((product) => {
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

    return (
      <>
        <Title text="WOMENS" />
        <p className="text-center">
          Up your shoe game this season with women’s shoes that meet all your
          needs. From heels, to boots, to sandals and trainers, we have
          everything you need to updated your wardrobe.
        </p>
        <div className="category-list text-center">
          Boots | Trainers | High Heels | Sandals | All Shoes
        </div>
        <div className="product-container">{cards}</div>
      </>
    );
  }
};

export default Womens;
