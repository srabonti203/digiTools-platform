import React from "react";
import { TiTick } from "react-icons/ti";

const TransparantPricing = () => {
  return (
    <>
      <div className="w-10/12 mx-auto text-center space-y-10">
        <h2 className="text-2xl font-bold">Simple, Transparent Pricing</h2>
        <p>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-10">
          <div className="space-y-3 w-80 h-auto p-4 shadow-sm rounded-xl flex flex-col items-start">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold">Starter</h2>
              <p>Perfect for getting started</p>
            </div>
            <div>
              <span className="text-xl font-bold">$0</span>/Month
            </div>
            <div>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>Access to 10 free
                tools
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>Basic templates
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>Community support
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>1 project per month
              </li>
            </div>
            <button className="btn  text-white w-full rounded-full bg-linear-to-r from-[#4F39F6] to-purple-500">
              Get Started Free
            </button>
          </div>

          <div className="space-y-3 w-80 h-auto p-4 shadow-sm rounded-xl flex flex-col items-start bg-linear-to-br from-indigo-700 to-purple-800 relative">
            <div className="btn btn-soft btn-warning rounded-full absolute z-10 bottom-75 left-25">
              Most Popular
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold text-white">Pro</h2>
              <p className="text-white">Best for professionals</p>
            </div>
            <div className="text-white">
              <span className="text-xl font-bold">$29</span>/Month
            </div>
            <div className="text-white">
              <li className="list-none flex items-center">
                <TiTick className="text-white"></TiTick>Access to all premium
                tools
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-white"></TiTick>Unlimited templates
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-white"></TiTick>Priority support
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-white"></TiTick>Unlimited projects
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-white"></TiTick>Cloud sync
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-white"></TiTick>Advanced analytics
              </li>
            </div>
            <button className="btn w-full rounded-full bg-white text-indigo-600">
              Start Pro Trial
            </button>
          </div>

          <div className="space-y-3 w-80 h-auto p-4 shadow-sm rounded-xl flex flex-col items-start">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold">Enterprise</h2>
              <p>For teams and businesses</p>
            </div>
            <div>
              <span className="text-xl font-bold">$99</span>/Month
            </div>
            <div>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>Everything in Pro
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>Team collaboration
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>Custom integrations
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>1 Dedicated support
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>1 SLA guarantee
              </li>
              <li className="list-none flex items-center">
                <TiTick className="text-green-600"></TiTick>1 Custom branding
              </li>
            </div>
            <button className="btn  text-white w-full rounded-full bg-linear-to-r from-[#4F39F6] to-purple-500">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransparantPricing;
