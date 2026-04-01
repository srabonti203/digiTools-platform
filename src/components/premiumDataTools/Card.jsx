import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";

const Card = ({ product, setSelectedCart, selectedCart }) => {
  // console.log(product);
  const [addedToCart, setAddedToCart] = useState(false);
  let allFeature = product.features;
  return (
    <>
      <div className="w-80 h-auto p-4 shadow-sm rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="shadow-md w-10 h-10 rounded-full flex items-center justify-center">
            <img
              className=" object-cover object-center"
              src={product.icon}
              alt="Product icon"
            />
          </div>
          <button
            className={`btn btn-soft rounded-full ${product.tag == "new" ? "btn-success" : product.tag == "popular" ? "btn-primary" : "btn-warning"}`}
          >
            {product.tag}
          </button>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">
            {product.price}$/{product.period}
          </h2>
          <div className="space-y-2">
            {allFeature.map((feature) => (
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>
                {feature}
              </li>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            setSelectedCart([...selectedCart, product]);
            toast(`${product.name} was selected`);
            setAddedToCart(true);
          }}
          className={`btn  text-white w-full rounded-full ${addedToCart ? "bg-green-600" : "bg-linear-to-r from-[#4F39F6] to-purple-500"}`}
        >
          {addedToCart ? (
            <div className="flex items-center">
              <TiTick></TiTick>
              <p>Added to Cart</p>
            </div>
          ) : (
            "Buy Now"
          )}
        </button>
      </div>
    </>
  );
};

export default Card;
