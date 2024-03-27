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
              <div className="bg-gray-700 py-2 ps-2 pe-9 flex items-center gap-3 border border-gray-800 rounded-lg">
                WINS <span className="text-green-500">2</span>
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
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-gray-700 py-2 ps-2 pe-9 flex items-center gap-3 border border-gray-800 rounded-lg">
                WINS <span className="text-green-500">2</span>
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
          <div className="flex flex-col gap-3">
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-gray-700 py-2 ps-2 pe-9 flex items-center gap-3 border border-gray-800 rounded-lg">
                WINS <span className="text-green-500">2</span>
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
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-gray-700 py-2 ps-2 pe-9 flex items-center gap-3 border border-gray-800 rounded-lg">
                WINS <span className="text-green-500">2</span>
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
          <div className="flex flex-col gap-3">
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-gray-700 py-2 ps-2 pe-9 flex items-center gap-3 border border-gray-800 rounded-lg">
                WINS <span className="text-green-500">2</span>
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
            <div className=" rounded-lg w-fit flex gap-1 md:gap-3 justify-center h-fit ">
              <div className="bg-gray-700 py-2 ps-2 pe-9 flex items-center gap-3 border border-gray-800 rounded-lg">
                WINS <span className="text-green-500">2</span>
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
        <div className="p-3 border-2 border-gray-700 rounded-xl">
          <div className="text-gray-400">PnL</div>
          <div className="p-3">
            <div className="text-green-500 text-[1.2rem] text-center font-bold">$94.00</div>
            <div className="py-1 px-9 bg-gray-500 rounded-lg text-[0.8rem] text-center">0.0%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero1;
