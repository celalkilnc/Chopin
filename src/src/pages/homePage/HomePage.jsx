import ProductCard from "../../components/common/productCard/ProductCard";
import ProductArea from "../../components/common/products/ProductArea";
import "./HomePageStyle.css";
import React from "react";

function HomePage() {


  return (
    <div className="homePage">
        <div className="filters"></div>
      <div className="products">
       <ProductArea/>
      </div>
    </div>
  );
}

export default HomePage;
