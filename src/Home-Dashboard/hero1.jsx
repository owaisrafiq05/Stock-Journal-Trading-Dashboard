import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChartComponent from "./ChartComponent";

const percentage = 67;
const percentage2 = 33;
const percentage3 = 0;
const percentage4 = 0;
const percentage5 = 10;
const percentage6 = 4;

const hero1 = () => {
  return (
    <section className="flex items-center justify-center flex-wrap">
      <div className="w-[100%] lg:w-[25%] xl:w-[30%] hidden sm:flex">
        <ChartComponent />
      </div>
      <div className="w-[98%] lg:w-[70%] xl:w-[50%] flex flex-wrap gap-3 text-[0.8rem] mt-3 justify-center">
        <div className="flex flex-wrap gap-3 lg:gap-9 ">
          <div className="flex flex-col gap-3">
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-[#2E313F] py-2 ps-2 pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full text-lg text-[#9C9FAF] font-bold">
                WINS <span className="text-xl text-[#52CA96] font-semibold">2</span>
              </div>
              <div className="w-fit h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%]"
                  value={`${percentage}`}
                  text={`${percentage}%`}
                  styles={{
                    root: {},
                    path: {
                      stroke: `#52CA96`,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      transformOrigin: "center center",
                    },
                    counterClockwise: "true",
                    trail: {
                      stroke: "#2E313F",
                      strokeLinecap: "butt",
                      transformOrigin: "center center",
                    },
                    text: {
                      fill: "#9C9FAF",
                      fontSize: "30px",
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
                ;{/* // */}
              </div>
            </div>
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-[#2E313F] py-2 ps-2 pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full text-lg text-[#9C9FAF] font-bold">
                LOSSES <span className="text-xl text-[#EB4B68] font-semibold">1</span>
              </div>
              <div className="w-fit h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%]"
                  value={`${percentage2}`}
                  text={`${percentage2}%`}
                  styles={{
                    root: {},
                    path: {
                      stroke: `#EB4B68`,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      transformOrigin: "center center",
                    },
                    counterClockwise: "true",
                    trail: {
                      stroke: "#2E313F",
                      strokeLinecap: "butt",
                      transformOrigin: "center center",
                    },
                    text: {
                      fill: "#9C9FAF",
                      fontSize: "30px",
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
                ;{/* // */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-[#2E313F] py-2 ps-2 pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full text-lg text-[#9C9FAF] font-bold">
                OPEN <span className="text-xl text-[#52CA96] font-semibold">0</span>
              </div>
              <div className="w-fit h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%]"
                  value={`${percentage3}`}
                  text={`${percentage3}%`}
                  styles={{
                    root: {},
                    path: {
                      stroke: `#52CA96`,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      transformOrigin: "center center",
                    },
                    counterClockwise: "true",
                    trail: {
                      stroke: "#2E313F",
                      strokeLinecap: "butt",
                      transformOrigin: "center center",
                    },
                    text: {
                      fill: "#9C9FAF",
                      fontSize: "30px",
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
                ;{/* // */}
              </div>
            </div>
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-[#2E313F] py-2 ps-2 pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full text-lg text-[#9C9FAF] font-bold">
                WASH <span className="text-xl text-[#52CA96] font-semibold">0</span>
              </div>
              <div className="w-fit h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%]"
                  value={`${percentage4}`}
                  text={`${percentage4}%`}
                  styles={{
                    root: {},
                    path: {
                      stroke: `#EB4B68`,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      transformOrigin: "center center",
                    },
                    counterClockwise: "true",
                    trail: {
                      stroke: "#2E313F",
                      strokeLinecap: "butt",
                      transformOrigin: "center center",
                    },
                    text: {
                      fill: "#9C9FAF",
                      fontSize: "30px",
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
                ;{/* // */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-[#2E313F] py-2 ps-2 pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full text-lg text-[#9C9FAF] font-bold">
                AVG W<span className="text-xl text-[#52CA96] font-semibold">$146</span>
              </div>
              <div className="w-fit h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%]"
                  value={`${percentage5}`}
                  text={`${percentage5}%`}
                  styles={{
                    root: {},
                    path: {
                      stroke: `blue`,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      transformOrigin: "center center",
                    },
                    counterClockwise: "true",
                    trail: {
                      stroke: "#2E313F",
                      strokeLinecap: "butt",
                      transformOrigin: "center center",
                    },
                    text: {
                      fill: "#9C9FAF",
                      fontSize: "30px",
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
                ;{/* // */}
              </div>
            </div>
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-[#2E313F] py-2 ps-2 pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full text-lg text-[#9C9FAF] font-bold">
                AVG L<span className="text-xl text-[#EB4B68] font-semibold">-198</span>
              </div>
              <div className="w-fit h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%]"
                  value={`${percentage6}`}
                  text={`-${percentage6}%`}
                  styles={{
                    root: {},
                    path: {
                      stroke: `#EB4B68`,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      transformOrigin: "center center",
                    },
                    counterClockwise: "true",
                    trail: {
                      stroke: "#2E313F",
                      strokeLinecap: "butt",
                      transformOrigin: "center center",
                    },
                    text: {
                      fill: "#9C9FAF",
                      fontSize: "30px",
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
                ;{/* // */}
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 border-2 border-gray-700 rounded-3xl bg-[#2E313F]">
          <div className="text-xl text-[#9C9FAF] font-semibold">PnL</div>
          <div className="p-3">
            <div className="text-2xl font-semibold text-[#52CA96] text-center ">$94.00</div>
            <div className="py-1 px-9 bg-[#52CA9633] rounded-full text-white font-semibold text-center">0.0%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero1;
