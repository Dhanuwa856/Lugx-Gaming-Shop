import React from "react";
import "./MenuLinks.css";
import { NavLink } from "react-router-dom";

const MenuLinks = (props) => {
  return (
    <>
      <NavLink
        to={props.link}
        className="text-[#eaf2fd] font-normal text-base menulinks px-5 py-2"
      >
        {props.linkname}
      </NavLink>
    </>
  );
};

export default MenuLinks;
