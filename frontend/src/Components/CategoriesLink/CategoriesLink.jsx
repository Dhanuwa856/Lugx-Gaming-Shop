import React from "react";

function CategoriesLink(props) {
  return (
    <div className="categories-card w-1/5 bg-[#1b7ffa] rounded-[30px]">
      <h5 className="text-white text-center font-semibold py-5 text-lg ">
        {props.categorie}
      </h5>
      <img
        src={props.image}
        alt=""
        className="w-full rounded-[30px] categories-img"
      />
    </div>
  );
}

export default CategoriesLink;
