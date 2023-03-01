import React from "react";
import Electronics from "./categories/Electronics";
import Jewelery from "./categories/Jewelery";
import MensClothing from "./categories/MensClothing";
import WomensClothing from "./categories/WomensClothing";

function Categories() {
  return (
    <div className="Categories__sec-wrapper">
      <div className="row">
        <h1 className="section__title">Categories</h1>
        <div className="Categories__wrapper">
          <div className="M__cloth">
            <h2 className="catg__h2">Men's clothing </h2>
            <MensClothing />
          </div>
          <div className="Ms__cloth">
            <h2 className="catg__h2">Women's clothing </h2>
              <WomensClothing />
          
          </div>

          <div className="jwe">
            <h2 className="catg__h2">Jewelery </h2>
            <Jewelery/>
          </div>
          <div className="electro">
            <h2 className="catg__h2">Electronics </h2>
            <Electronics/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
