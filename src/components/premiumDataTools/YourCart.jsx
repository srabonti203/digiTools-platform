import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import cartImage from "../../assets/cart.jpg";

const YourCart = ({ selectedCart, setSelectedCart, totalPrice }) => {
  console.log(selectedCart);

  const handleDeleteSelectedCart = (cart) => {
    const filteredCart = selectedCart.filter(
      (filterCart) => filterCart.name != cart.name,
    );
    setSelectedCart(filteredCart);
  };

  const handleProcedCheckout = () => {
    setSelectedCart([]);
  };

  if (selectedCart.length != 0) {
    return (
      <div className="w-full space-y-4 p-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <div className="space-y-4">
          {selectedCart.map((cart) => {
            return (
              <div className="flex items-center justify-between w-full bg-base-200 h-25 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-14 h-14 rounded-full shadow-md flex items-center justify-center">
                    <img src={cart.icon} alt="cart icon" />
                  </div>
                  <div>
                    <h3>{cart.name}</h3>
                    <p>{cart.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteSelectedCart(cart)}
                  className="btn btn-soft btn-error"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between">
          <p>Total</p>
          <div className="text-xl font-bold">${totalPrice}</div>
        </div>
        <button
          onClick={handleProcedCheckout}
          className="btn bg-linear-to-r from-indigo-800 to-purple-800 rounded-full w-full text-white"
        >
          Proced To Checkout
        </button>
      </div>
    );
  } else {
    return (
      <div className="w-10/12 mx-auto bg-base-100 shadow-md h-80 space-y-4 rounded-md p-5 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <div className="w-20 h-20 flex items-center justify-center">
          <img src={cartImage} alt="cart image" />
        </div>
        <p>Your cart is empty.</p>
      </div>
    );
  }
};

export default YourCart;
