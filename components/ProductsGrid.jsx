import React from "react";
import ProductBox from "./ProductBox";

const ProductsGrid = ({ products }) => {
  return (
    <div className="  center grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
      {products.map((product, index) => {
        return <ProductBox key={index} product={product} />;
      })}
    </div>
  );
};

export default ProductsGrid;
