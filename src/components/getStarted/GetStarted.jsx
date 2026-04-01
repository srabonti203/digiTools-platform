import React, { use } from "react";
import GetStartedCard from "./GetStartedCard";

const GetStarted = ({ fetchGetStartedPromise }) => {
  const getStartedDatas = use(fetchGetStartedPromise);
  return (
    <div className="w-10/12 mx-auto bg-base-200 flex flex-col items-center justify-center space-y-3 p-8">
      <h2 className="text-2xl font-bold">Get Started in 3 Steps</h2>
      <p>Start using premium digital tools in minutes, not hours.</p>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-20">
        {getStartedDatas.map((data) => {
          return <GetStartedCard key={data.id} data={data}></GetStartedCard>;
        })}
      </div>
    </div>
  );
};

export default GetStarted;
