import React from "react";
import ProductItem from "./ProductItem";

function ProductsList({ productsList }) {
    console.log(productsList)
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10  '>
      {productsList.map(product=> (
        <div key={product.id}> <ProductItem product={product}/></div>
      ))}
    </div>
    
  );
}

export default ProductsList;
