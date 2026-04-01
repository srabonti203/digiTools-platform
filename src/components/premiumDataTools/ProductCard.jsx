import React, { use } from "react";
import Card from "./Card";
import YourCart from "./YourCart";

const ProductCard = ({
  productPromise,
  isProductSelected,
  setSelectedCart,
  selectedCart,
  totalPrice,
}) => {
  const productData = use(productPromise);
  console.log(productData);
  return (
    <div className="w-10/12 flex items-center justify-center">
      {isProductSelected == "products" ? (
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productData.map((product) => (
            <Card
              key={product.id}
              product={product}
              setSelectedCart={setSelectedCart}
              selectedCart={selectedCart}
            ></Card>
          ))}
        </div>
      ) : (
        <div className="w-10/12 mx-auto">
          <YourCart
            selectedCart={selectedCart}
            setSelectedCart={setSelectedCart}
            totalPrice={totalPrice}
          ></YourCart>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
