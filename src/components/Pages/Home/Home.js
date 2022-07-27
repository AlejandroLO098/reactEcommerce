import React from "react";
import Hero from "./Hero";
import Upcoming from "./Upcoming";
import { productData } from "./data";
import StarWars from "./StarWars/StarWars";
import Carasoul from "./Carasoul/Carasoul";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carasoul />
      <StarWars />
      <Upcoming heading="COMING SOON!" data={productData} />
    </div>
  );
};

export default Home;
