import React from "react";
import Hero from "./Hero";
import Upcoming from "./Upcoming";
import { productData } from "./data";
import StarWars from "./StarWars/StarWars";

const Home = () => {
  return (
    <div>
      <Hero />
      <Upcoming heading="COMING SOON!" data={productData} />
      <StarWars />
    </div>
  );
};

export default Home;
