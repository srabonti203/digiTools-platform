import React from "react";
import bannerimage from "../../assets/banner.png";
import roundicon from "../../assets/Group 5.png";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-100 h-5/12 w-10/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerimage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <button className="btn bg-indigo-800/20 rounded-full text-indigo-800">
              <img src={roundicon} alt="" /> New: AI-Powered Tools Available
            </button>
            <h1 className="text-7xl font-bold">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="space-x-8">
              <button className="btn btn-primary rounded-full bg-linear-to-r from-[#4F39F6] to-purple-500 text-white">
                Explore Products
              </button>
              <button className="btn btn-primary btn-outline rounded-full">
                <CiPlay1></CiPlay1>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
