import React from "react";

const FeaturedLink = (props) => {
  return (
    <div className="hero-card w-1/4 bg-white py-10 shadow-2xl text-center rounded-[30px]">
      <div className="hero-card-img bg-[#0171f8] w-[80px] h-[80px] rounded-full flex items-center justify-center mx-auto">
        <img src={props.image} alt="" />
      </div>
      <h4 className="mt-5 font-bold">{props.title}</h4>
    </div>
  );
};

export default FeaturedLink;
