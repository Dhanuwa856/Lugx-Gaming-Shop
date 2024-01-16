import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <div className="container-auto mt-40 relative">
      <div className="cta-bg"></div>
      <div className="cat-left-box absolute top-[15%] bg-[#f7f7f7] px-10 py-16 rounded-[30px]">
        <h4 className="tag-name">OUR SHOP</h4>
        <h2 className="mt-5 font-bold text-4xl">
          Go Pre-Order <br /> Buy & Get <br /> Best
          <span className="text-[#1b7ffa]">Prices</span> <br /> For You!
        </h2>
        <p className="mt-16 text-[#4b4a4a] font-semibold text-[15.5px]">
          Lorem ipsum dolor consectetur <br /> adipiscing, sed do eiusmod tempor
          <br />
          incididunt.
        </p>
        <button className="mt-8 text-[#eaf2fd] font-semibold bg-[#ee626b] px-7 py-4 rounded-[70px]">
          SHOP NOW
        </button>
      </div>
      <div className="cta-right-box absolute left-1/2 bg-[#f7f7f7] px-10 py-16 rounded-[30px] top-[45%]">
        <h4 className="tag-name">NEWSLETTER</h4>
        <h2 className="mt-5 font-bold text-4xl">
          Get Up To $100 Off <br /> Just Buy <br />
          <span className="text-[#1b7ffa]">Subscribe</span> <br /> Newsletter!
        </h2>
        <div className="news-input mt-10 h-[50px] rounded-[70px] bg-white flex items-center pl-5 justify-between">
          <input
            type="email"
            placeholder="Your email..."
            className="bg-transparent"
          />
          <button className="bg-[#ee626b] text-white font-bold rounded-[70px] h-[50px] px-3">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
