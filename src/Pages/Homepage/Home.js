import React from "react";
import Reviews from "../../Reviews/Reviews";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroBanner/>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
