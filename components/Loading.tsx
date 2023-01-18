import React from "react";
import { PropagateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className={
        "bg-[#091b18] h-screen flex flex-col items-center justify-center"
      }
    >
      <div className={"flex items-center space-x-2 mb-10"}>
        <img
          className={"rounded-full h-20 w-20"}
          src="https://images.unsplash.com/photo-1673648954665-1c2f92df03f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <h1 className={"text-lg text-white font-bold"}>Loading the Draw</h1>
      </div>
      <PropagateLoader color={"white"} size={30} />
    </div>
  );
};

export default Loading;
