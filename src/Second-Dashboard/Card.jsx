import React from "react";

const Card = ({ title, value, streak }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md sm:p-3 ">
      <div
        className={`flex flex-col justify-center items-center px-5 md:px-12  ${
          streak ? "border-l-4" : ""
        } ${streak === "win" ? "border-blue-400" : "border-red-400"}`}
      >
        <h4 className="text-blue-300 text-[0.8rem] uppercase">{title}</h4>
        <p className="text-white text-3xl font-semibold text-[1rem]">{value}</p>
      </div>
    </div>
  );
};
export default Card;
