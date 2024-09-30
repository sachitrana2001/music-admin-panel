// components/auth/Login.js
import React from "react";
import SideView from "../Components/Custom/SideView";

const AuthLayout = ({children}) => {
  return (
    <div className="min-h-screen flex  bg-white">
      <div className=" w-[30%] h-full lg:block hidden  ">
        <SideView />
      </div>

      <div className=" lg:w-[70%] w-full col-span-1 bg-white p-8  flex items-center justify-center ">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
