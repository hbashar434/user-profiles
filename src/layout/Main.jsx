import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-indigo-700 underline">
        Hello world!
      </h1>
      <div className="min-h-[calc(100vh-50px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
