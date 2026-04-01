import React from "react";

const Workflow = () => {
  return (
    <div className="w-10/12 mx-auto bg-linear-to-br from-indigo-700 to-purple-700 p-20 space-y-4">
      <h2 className="text-3xl font-bold text-white text-center">
        Ready to Transform Your Workflow?
      </h2>
      <p className="text-white text-center">
        Join thousands of professionals who are already using Digitools to work
        smarter.Start your free trial today.
      </p>
      <div className="space-x-3 text-center">
        <button className="btn btn-soft bg-white text-indigo-600 rounded-full">
          Explore Products
        </button>
        <button className="btn btn-outline text-white rounded-full">
          View Pricing
        </button>
      </div>
      <p className="text-white text-center">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default Workflow;
