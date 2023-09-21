import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Main = () => {
  return (
    <div className=" max-w-[1500px] mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-50px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
