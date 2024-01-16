import React from "react";
import Hero from "../../Components/Hero/Hero";
import HeroCards from "../../Components/HeroCrads/HeroCards";
import TrendingGames from "../../Components/TrendingGames/TrendingGames";
import TopGames from "../../Components/TopGames/TopGames";
import Categories from "../../Components/Categories/Categories";
import Cta from "../../Components/Cta/Cta";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroCards />
      <TrendingGames />
      <TopGames />
      <Categories />
      <Cta />
    </>
  );
};

export default Home;
