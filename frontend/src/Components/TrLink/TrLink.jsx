import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const TrLink = (props) => {
  return (
    <div className="tr-game-card bg-[#eee] pb-5 rounded-[30px]">
      <div className="tr-game-img relative">
        <img src={props.image} alt="" className="rounded-[30px] w-full" />
        <div className="tr-price absolute top-[10%] bg-[#0171f8] px-5 py-2 rounded-[15px] left-[70%]">
          <div className="tr-old-price text-[12px] text-white text-right line-through ">
            {props.old_price}
          </div>
          <div className="tr-new-price text-white font-medium">
            {props.new_price}
          </div>
        </div>
      </div>
      <div className="">
        <div className="game-category mt-6 pl-5 text-sm text-[#89808a]">
          Action
        </div>
        <div className="flex justify-between px-5 items-center">
          <h4 className="font-semibold tr-title">Assasin Creed</h4>
          <span className="bg-[#ee626b] w-[30px] h-[30px] rounded-full flex items-center justify-center text-white tr-cart">
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrLink;
