import React from "react";
import "./ProductCardStyle.css";
import { useState } from "react";

function ProductCard({product}) { 

  return (
    <div className="container">
      <div className="imageCon">
        <img src={ `${product?.photos[0]?.photoURL}`}  alt="Product's main image" className="image"/>
      </div>
      <div className="info">
        <h5 className="name">{product?.name}</h5>
        <p className="price">{product?.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
