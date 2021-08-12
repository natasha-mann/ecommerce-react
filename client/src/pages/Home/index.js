import { useQuery } from "@apollo/client";

import Title from "../../components/Title";
import CardsCarousel from "../../components/CardsCarousel";
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
      <div className="carousel-container">
        <Title text="WE THINK YOU'LL LOVE" />
        <CardsCarousel cardData={cardData} />
      </div>
    );
  }
};

export default Home;
