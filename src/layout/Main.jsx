import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-[calc(100vh-50px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
