import React from "react";

const Card = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="w-80 h-96 p-4">
        <div className="flex items-center justify-between">
          <div className="">
            <img src={product.icon} alt="Product icon" />
          </div>
          <button
            className={`btn btn-soft rounded-full ${product.tag == "new" ? "btn-primary" : product.tag == "popular" ? "btn-success" : "btn-warning"}`}
          >
            {product.tag}
          </button>
        </div>
        <div>
          <h2></h2>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Card;
