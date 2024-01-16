import React from "react";
import Featured_list from "../Assets/featured";
import FeaturedLink from "../FeaturedLink/FeaturedLink";
const HeroCards = () => {
  return (
    <div className="hero-cards container-auto flex gap-5 absolute">
      {Featured_list.map((item, i) => {
        return <FeaturedLink key={i} title={item.title} image={item.image} />;
      })}
    </div>
  );
};

export default HeroCards;
