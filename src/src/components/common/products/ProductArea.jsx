import { useState } from "react";
import { getProducts } from "../../../service/product/ProductRequests";
import ProductCard from "../productCard/ProductCard";
import "./ProductsStyle.css";
import React, { useEffect } from "react";

function ProductArea() {
  const [products, setProducts] = useState();

  var obj = {
    name: "test2",
    price: "1",
    photos: [
      {
        photoURL:
          "https://www.do-re.com.tr/gibson-les-paul-classic-elektro-gitar-ebony-41cc08c498f0f7ea96e9282500fa57af-1951e0ca02f104e88b3f226a77583edc-max-pp.jpg",
      },
    ],
  };

  useEffect(() => {
    var prods = getProducts({});
    setProducts();
  }, []);

  

  return (
    <div className="productsArea">
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
      <ProductCard product={obj} />
    </div>
  );
}

export default ProductArea;
