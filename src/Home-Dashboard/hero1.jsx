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
      <div className="w-[98%] lg:w-[70%] xl:w-[50%] flex sm:flex-wrap gap-5 sm:gap-3 text-[0.8rem] mt-3 justify-center items-center">
        <div className="flex sm:flex-wrap gap-1 lg:gap-9  w-fit ">
          <div className="flex flex-col gap-2 sm:gap-3 ">
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className=" bg-[#2E313F] sm:py-2 ps-2 pe-3 sm:pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full sm:text-lg text-[#9C9FAF] font-bold text-[0.8rem] ">
                WINS{" "}
                <span className="text-[0.8rem] sm:text-xl text-[#52CA96] font-semibold">
                  2
                </span>
              </div>
              <div className="w-fit h-[40px] sm:h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%] hidden sm:flex"
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
            <div className=" bg-[#2E313F] sm:py-2 ps-2 pe-3 sm:pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full sm:text-lg text-[#9C9FAF] font-bold text-[0.8rem] ">
                LOSSES{" "}
                <span className="sm:text-xl text-[#EB4B68] font-semibold">1</span>
              </div>
              <div className="w-fit h-[40px] sm:h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%] hidden sm:flex"
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
                {/* // */}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex  flex-col gap-2 sm:gap-3">
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
            <div className=" bg-[#2E313F] sm:py-2 ps-2 pe-3 sm:pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full sm:text-lg text-[#9C9FAF] font-bold text-[0.8rem] ">
                OPEN{" "}
                <span className="sm:text-xl text-[#52CA96] font-semibold">0</span>
              </div>
              <div className="w-fit h-[40px] sm:h-[50px] overflow-hidden">
                <CircularProgressbar
                   className="h-[100%] hidden sm:flex"
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
                {/* // */}
              </div>
            </div>
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
            <div className=" bg-[#2E313F] sm:py-2 ps-2 pe-3 sm:pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full sm:text-lg text-[#9C9FAF] font-bold text-[0.8rem] ">
                WASH{" "}
                <span className="sm:text-xl text-[#52CA96] font-semibold">0</span>
              </div>
              <div className="w-fit h-[40px] sm:h-[50px] overflow-hidden">
                <CircularProgressbar
                   className="h-[100%] hidden sm:flex"
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
                {/* // */}
              </div>
            </div>
          </div>
          <div className="  flex-col  gap-1 sm:gap-3">
            <div className=" rounded-lg w-fit flex gap-3 mb-2 sm:mb-0 md:gap-3 justify-center h-fit ">
            <div className="bg-[#2E313F] sm:py-2 ps-2 pe-3 sm:pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full sm:text-lg text-[#9C9FAF] font-bold text-[0.8rem] ">
                AVG W
                <span className="sm:text-xl text-[#52CA96] font-semibold">
                  $146
                </span>
              </div>
              <div className="w-fit h-[40px] sm:h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%] hidden sm:flex"
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
            <div className=" bg-[#2E313F] sm:py-2 ps-2 pe-3 sm:pe-9 flex items-center gap-3 border-gray-700 border-2 rounded-full sm:text-lg text-[#9C9FAF] font-bold text-[0.8rem] ">
                AVG L
                <span className="sm:text-xl text-[#EB4B68] font-semibold">
                  -198
                </span>
              </div>
              <div className="w-fit h-[40px] sm:h-[50px] overflow-hidden">
                <CircularProgressbar
                  className="h-[100%] hidden sm:flex"
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
        <div className="sm:p-3 border-2 border-gray-700 rounded-3xl bg-[#2E313F] h-[50%]">
          <div className="text-xl text-[#9C9FAF] font-semibold text-center sm:text-start">PnL</div>
          <div className=" sm:p-3">
            <div className="text-2xl font-semibold text-[#52CA96] text-center ">
              $94.00
            </div>
            <div className="py-1 px-9 bg-[#52CA9633] rounded-full text-white font-semibold text-center">
              0.0%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero1;
