import React from "react";
import "./TopGameLink.css";

const TopGameLink = (props) => {
  return (
    <div className="top_game_card bg-white w-1/6 relative pb-5 rounded-[25px]">
      <img
        src={props.image}
        alt=""
        className="w-full rounded-[25px] most-img"
      />
      <p className="text-center text-sm mt-4 text-[#89808a]">Adventure</p>
      <h4 className="text-center font-semibold most-title">Assasing Creed</h4>
      <button className="mx-auto block bg-[#ee626b] text-white font-medium px-4 py-2 rounded-[70px] absolute most-btn">
        EXPLORE
      </button>
    </div>
  );
};

export default TopGameLink;
