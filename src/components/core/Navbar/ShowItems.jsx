import React from "react";
import { Link } from "react-router-dom";

const ShowItems = ({ SetShowList }) => {
  return (
    <div className="relative">
      <div
        className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 
      overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
      >
        <div className="w-[180px]">
          <Link to={"/"}>
            <div
              className="flex flex-col w-full items-center gap-y-6 py-[10px] px-[12px] 
        text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              Home
            </div>
          </Link>
          <Link to={"/about"}>
            <div
              className="flex flex-col w-full items-center gap-y-6 py-[10px] px-[12px] 
        text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              About Us
            </div>
          </Link>
          <Link to={"/contact"}>
            <div
              className="flex flex-col w-full items-center gap-y-6 py-[10px] px-[12px] 
        text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              Contact Us
            </div>
          </Link>

          <Link to={"/login"}>
            <div
              className="flex flex-col w-full items-center gap-y-6 py-[10px] px-[12px] 
        text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              Log In
            </div>
          </Link>
          <Link to={"/signup"}>
            <div
              className="flex flex-col w-full items-center gap-y-6 py-[10px] px-[12px] 
        text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowItems;
