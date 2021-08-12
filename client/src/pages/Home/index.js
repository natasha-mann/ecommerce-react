import Title from "../../components/Title";

import CardsCarousel from "../../components/CardsCarousel";

const Home = () => {
  const cardData = [
    {
      name: "Leather Ankle Boots",
      image:
        "https://images.unsplash.com/photo-1494955464529-790512c65305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      price: 49.99,
    },
    {
      name: "Leather Ankle Boots",
      image:
        "https://images.unsplash.com/photo-1494955464529-790512c65305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      price: 49.99,
    },
    {
      name: "Leather Ankle Boots",
      image:
        "https://images.unsplash.com/photo-1494955464529-790512c65305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      price: 49.99,
    },
    {
      name: "Leather Ankle Boots",
      image:
        "https://images.unsplash.com/photo-1494955464529-790512c65305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      price: 49.99,
    },
    {
      name: "Leather Ankle Boots",
      image:
        "https://images.unsplash.com/photo-1494955464529-790512c65305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
      price: 49.99,
    },
  ];

  return (
    <div className="carousel-container">
      <Title text="WE THINK YOU'LL LOVE" />
      <CardsCarousel cardData={cardData} />
    </div>
  );
};

export default Home;
