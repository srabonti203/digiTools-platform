import React, { use } from "react";
import Card from "./Card";

const ProductCard = ({ productPromise }) => {
  const productData = use(productPromise);
  console.log(productData);
  return (
    <div className="w-10/12 mx-auto">
      {productData.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default ProductCard;
