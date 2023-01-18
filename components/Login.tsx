import React from "react";
import { useMetamask } from "@thirdweb-dev/react";

const Login = () => {
  const connectWithMetamask = useMetamask();

  return (
    <div
      className={
        "bg-[#091b18] min-h-screen flex flex-col items-center justify-center text-center"
      }
    >
      <div className={"flex flex-col items-center mb-10"}>
        <img
          className={"h-52 w-52 rounded-full mb-10"}
          src="https://images.unsplash.com/photo-1673648954665-1c2f92df03f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <h1 className={"text-6xl text-white font-bold"}>Draw</h1>
        <h2 className={"text-white"}>
          Get Stargeted by logging in with your MetaMask{" "}
        </h2>

        <button
          onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg"
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
};

export default Login;
