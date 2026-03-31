import React from "react";

const State = () => {
  return (
    <>
      <div className="w-10/12 mx-auto flex items-center justify-evenly bg-linear-to-r from-[#4F39F6] to-purple-500 h-25 text-white">
        <div>
          <h2 className="text-2xl font-bold ">50K+</h2>
          <p>Active Users</p>
        </div>
        <div className="border-white border h-10"></div>
        <div>
          <h2 className="text-2xl font-bold">200+</h2>
          <p>Premium Tools</p>
        </div>
        <div className="border-white border h-10"></div>
        <div>
          <h2 className="text-2xl font-bold">4.9</h2>
          <p>Ratings</p>
        </div>
      </div>
    </>
  );
};

export default State;
