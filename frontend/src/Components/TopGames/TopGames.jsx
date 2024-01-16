import React from "react";
import "./TopGames.css";
import Top_games from "../Assets/Topgames";
import TopGameLink from "../TopGameLink/TopGameLink";
const TopGames = () => {
  return (
    <div className="container-fuild top_game_bg">
      <div className="container-auto pt-20  !mt-20">
        <h4 className="tag-name">TOP GAMES</h4>
        <div className="flex justify-between mt-4 items-center">
          <h2 className="font-bold text-4xl">Most Played</h2>
          <a href="/">
            <button className="bg-[#ee626b] text-white text-sm font-medium px-5 py-3 rounded-[70px] view-all-btn">
              VIEW ALL
            </button>
          </a>
        </div>
        <div className="top_game_cards mt-10 flex gap-4">
          {Top_games.map((item, i) => {
            return <TopGameLink key={i} image={item.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TopGames;
