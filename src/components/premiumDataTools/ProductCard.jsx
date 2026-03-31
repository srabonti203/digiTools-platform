import React, { use } from "react";
import Card from "./Card";
import YourCart from "./YourCart";

const ProductCard = ({ productPromise, isProductSelected }) => {
  const productData = use(productPromise);
  console.log(productData);
  return (
    <div className="w-10/12 mx-auto flex items-center justify-center">
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-10">
        {isProductSelected == "products" ? (
          productData.map((product) => (
            <Card key={product.id} product={product}></Card>
          ))
        ) : (
          <YourCart ></YourCart>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
