import React from "react";
import MenuLinks from "../MenuLinks/MenuLinks";
import Nav_logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar pt-7 flex items-center justify-between px-10">
      <div className="nav-logo">
        <Link to="/">
          <img src={Nav_logo} alt="logo" className="w-full" />
        </Link>
      </div>
      <div className="nav-menu flex gap-10 items-center">
        <MenuLinks link="/" linkname="Home" />
        <MenuLinks link="/ourshop" linkname="Our Shop" />
        <MenuLinks link="/details" linkname="Product Details" />
        <MenuLinks link="/contactus" linkname="Contact Us" />
        <div className="nav-btn">
          <button className="text-[#eaf2fd] font-semibold bg-[#ee626b] px-5 py-2 rounded-[70px]">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
