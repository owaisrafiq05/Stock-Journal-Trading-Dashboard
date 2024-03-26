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
    <div className="min-h-[100vh] bg-[#2E313F] w-100">
      <div className="bg-blue-gray-800 p-6 rounded-lg shadow-lg flex flex-wrap gap-6">
        {cardsData.map((element, index) => {
          return <StatCard title={element.title} value="67%" streak="win" />;
        })}

        <StatCard title="EXPECTANCY" value="31" />
        <StatCard title="WIN STREAK" value="2" streak="win" />
        <StatCard title="LOSS STREAK" value="1" streak="loss" />
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-5 w-[90%] ">
        <div className="w-[100%] md:w-[50%]  overflow-hidden ">
          <MyBarChart
            title="PERFORMANCE BY DAY OF WEEK"
            data={[-65, 59, -80, 81, -56, 55, 40]}
          />
        </div>
        <div className="w-[100%] md:w-[50%] overflow-hidden">
          <MyBarChart title="PERFORMANCE BY Hour" data={[81, -56, 55, 40]} />
        </div>
      </div>
      <Dashboard />
    </div>
  );
};

export default dash2;
