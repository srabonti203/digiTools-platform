import React from "react";

const Nav1 = ({ selectedCart, totalPrice }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="text-lg">Products</a>
            </li>
            <li>
              <a className="text-lg">Features</a>
            </li>
            <li>
              <a className="text-lg">Pricing</a>
            </li>
            <li>
              <a className="text-lg">Testimonials</a>
            </li>
            <li>
              <a className="text-lg">FAQ</a>
            </li>
          </ul>
        </div>
        <a className="text-2xl bg-linear-to-r from-[#4F39F6] to-purple-500 bg-clip-text text-transparent font-bold">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-xl">Products</a>
          </li>
          <li>
            <a className="text-xl">Features</a>
          </li>
          <li>
            <a className="text-xl">Pricing</a>
          </li>
          <li>
            <a className="text-xl">Testimonials</a>
          </li>
          <li>
            <a className="text-xl">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        <div className="flex items-center justify-between gap-5">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />{" "}
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {selectedCart.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    {selectedCart.length} Items
                  </span>
                  <span className="text-info">Subtotal: ${totalPrice}</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn rounded-full">Login</button>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-purple-500 text-white rounded-full">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Nav1;
