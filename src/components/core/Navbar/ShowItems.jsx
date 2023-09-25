import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { VscSignIn } from "react-icons/vsc";
import { TbListDetails } from "react-icons/tb";

const ShowItems = ({ SetShowList }) => {
  return (
    <div className="relative">
      <div
        className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 
      overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
      >
        <div className="w-[180px]">
          <Link to="/">
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 justify-center"
            >
              <AiOutlineHome className="text-lg" />
              Home
            </div>
          </Link>
          <Link to="/about">
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 justify-center"
            >
              <TbListDetails className="text-lg" />
              About
            </div>
          </Link>
          <Link to="/contact">
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 justify-center"
            >
              <AiOutlineContacts className="text-lg" />
              Contact
            </div>
          </Link>

          <Link to={"/login"}>
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 justify-center"
            >
              <VscSignIn className="text-lg" />
              Log In
            </div>
          </Link>
          <Link to={"/signup"}>
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 justify-center"
            >
              <AiOutlineUserAdd className="text-lg" />
              Sign Up
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowItems;
