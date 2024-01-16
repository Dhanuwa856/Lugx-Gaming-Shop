import React from "react";
import Categories_list from "../Assets/TopCategories";
import CategoriesLink from "../CategoriesLink/CategoriesLink";

const Categories = () => {
  return (
    <div className="container-auto mt-36">
      <h4 className="tag-name text-center">CATEGORIES</h4>
      <h2 className="text-center font-bold text-4xl">Top Categories</h2>
      <div className="categories-cards flex gap-4 mt-10">
        {Categories_list.map((item, i) => {
          return (
            <CategoriesLink
              key={i}
              image={item.Image}
              categorie={item.categorie}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
