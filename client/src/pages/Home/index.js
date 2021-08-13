import { useQuery } from "@apollo/client";

import "./Home.css";
import Title from "../../components/Title";
import CardsCarousel from "../../components/CardsCarousel";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS } from "../../graphql/queries";

const Home = () => {
  const { data, loading, error } = useQuery(PRODUCTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  if (data) {
    const cardData = data.products;
    console.log(cardData);

    return (
      <>
        <div className="carousel-container">
          <Title text="WE THINK YOU'LL LOVE" />
          <CardsCarousel cardData={cardData} />
        </div>
        <Title text="SHOP BY CATEGORY" />
        <div className="main-card-container">
          <ProductCard
            key="women"
            name="WOMEN"
            image="https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            message="SHOP WOMEN"
            size="large"
            link="/womens"
          />
          <ProductCard
            key="men"
            name="men"
            image="https://images.unsplash.com/photo-1539874202413-c1f47b33169f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            message="SHOP MEN"
            size="large"
            link="/men"
          />
          <ProductCard
            key="children"
            name="CHILDREN"
            image="https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
            message="SHOP CHILDREN"
            size="large"
            link="/children"
          />
        </div>
      </>
    );
  }
};

export default Home;
