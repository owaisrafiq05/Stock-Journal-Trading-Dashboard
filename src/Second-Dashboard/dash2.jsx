import React from "react";
import MyBarChart from "./graph";
import StatCard from "./Card";
import { Dashboard } from "./TagsTable";

const dash2 = () => {
  const cardsData = [
    { title: "WIN RATE", perc: "67%" },
    { title: "EXPECTANCY", perc: "31" },
    { title: "WIN STREAK", perc: "1.47" },
    { title: "LOSS STREAK", perc: "1" },
    { title: "PROFIT FACTOR", perc: "$146.00 (10.1%)" },
    { title: "LOSS STREAK", perc: "1" },
    { title: "TOP LOSS", perc: "-$198.00 (-3.7%)" },
    { title: "TOP WIN", perc: "$242.00 (11.0%)" },
    { title: "WIN RATE", perc: "67%" },
    { title: "EXPECTANCY", perc: "31" },
    { title: "WIN STREAK", perc: "1.47" },
  ];

  return (
    <div className="min-h-[100vh] bg-gray-800 border border-red-500 overflow-hidden">
      <div className=" w-[95%] bg-blue-gray-800 p-6 rounded-lg shadow-lg flex flex-wrap gap-6">
        {cardsData.map((element, index) => {
          return <StatCard title={element.title} value="67%" streak="win" />;
        })}

        <StatCard title="EXPECTANCY" value="31" />
        <StatCard title="WIN STREAK" value="2" streak="win" />
        <StatCard title="LOSS STREAK" value="1" streak="loss" />
      </div>
        <div className="flex-col flex lg:flex-row justify-evenly align-center mt-5 w-screen">
        <div className="bg-[#2E313F]  px-4 py-8 rounded-3xl  mx-auto lg:mx-0 lg:w-[45%] border-gray-700 border-2">
          <MyBarChart
            title="PERFORMANCE BY DAY OF WEEK"
            data={[-65, 59, -80, 81, -56, 55, 40]}
          />
        </div>
        <div className=" bg-[#2E313F] mt-8 lg:mt-0 px-4 py-8 rounded-3xl w-80% mx-auto lg:mx-0 lg:w-[45%] border-gray-700 border-2">
          <MyBarChart title="PERFORMANCE BY HOUR" data={[81, -56, 55, 40]} />
        </div>
        </div>
      <br />
      <Dashboard />
    </div>
  );
};

export default dash2;
