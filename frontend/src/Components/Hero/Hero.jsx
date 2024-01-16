import React from "react";
import "./Hero.css";
import NavBar from "../NavBar/NavBar";
import Caption_underline from "../Assets/caption-dec.png";
import Hero_Img from "../Assets/banner-image.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero-bg container-fuild">
        <NavBar />
        <div className="hero-content container-auto  flex justify-between">
          <div className="hero-content-left text-white w-1/2 pt-36">
            <h4 className="text-2xl font-medium">WELCOME TO LUGX</h4>
            <div className="relative">
              <h2 className="mt-5 text-5xl font-bold">
                BEST GAMING SITE EVER!
              </h2>
              <img
                src={Caption_underline}
                alt=""
                className="absolute left-[22%] top-[95%] w-[40%]"
              />
            </div>
            <p className="mt-10 text-[14px] p-text">
              LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
              gaming websites. You can download and use this layout for
              commercial purposes. Please tell your friends about TemplateMo.
            </p>
            <div className="hero-input mt-10 pl-7" action="/">
              <input
                type="text"
                placeholder="Type Something"
                className="bg-transparent"
                required
              />
              <button
                className="px-7 font-medium text-sm text-nowrap"
                type="submit"
              >
                SEARCH NOW
              </button>
            </div>
          </div>
          <div className="hero-content-right pt-24">
            <div className="hero-img relative">
              <img src={Hero_Img} alt="" className="w-[85%]" />
              <div className="hero-img-price absolute top-[2%] bg-[#0171f8] px-5 py-1 rounded-[70px] text-white font-semibold text-xl left-[65%]">
                $22
              </div>
              <div className="percentage-mark absolute bg-[#ee626b] w-[85px] h-[85px] flex items-center justify-center rounded-full text-white text-2xl font-bold top-[85%] -left-[8%] -rotate-[10deg]">
                -40%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
