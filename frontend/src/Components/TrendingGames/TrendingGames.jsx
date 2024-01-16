import React from "react";
import Tr_list from "../Assets/Trendinggames";
import TrLink from "../TrLink/TrLink";

const TrendingGames = () => {
  return (
    <div className="pt-56 container-auto">
      <h4 className="tag-name">TRENDING</h4>
      <div className="flex justify-between mt-4 items-center">
        <h2 className="font-bold text-4xl">Trending Games</h2>
        <a href="/">
          <button className="bg-[#ee626b] text-white text-sm font-medium px-5 py-3 rounded-[70px] view-all-btn">
            VIEW ALL
          </button>
        </a>
      </div>
      <div className="tr-game-cards mt-10 flex gap-5">
        {Tr_list.map((item, i) => {
          return (
            <TrLink
              key={i}
              new_price={item.new_price}
              old_price={item.old_price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingGames;
