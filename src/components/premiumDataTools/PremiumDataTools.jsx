import React from "react";

const PremiumDataTools = ({ isProductSelected, setIsProductSelected }) => {
  return (
    <div className="w-10/12 mx-auto flex flex-col items-center justify-center space-y-4">
      <h2 className="text-3xl font-bold">Premium Digital Tools</h2>
      <p>
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setIsProductSelected("products")}
          className={`btn rounded-full ${isProductSelected == "products" ? "bg-linear-to-r from-[#4F39F6] to-purple-500 text-white" : ""} `}
        >
          Products
        </button>
        <button
          onClick={() => setIsProductSelected("Cart")}
          className={`btn rounded-full ${isProductSelected == "Cart" ? "bg-linear-to-r from-[#4F39F6] to-purple-500 text-white" : ""}`}
        >
          Cart (2)
        </button>
      </div>
    </div>
  );
};

export default PremiumDataTools;
