import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { TbListDetails } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";

import {
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineContacts,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { logout } from "../../../services/operations/authAPI";

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  if (!user) return null;

  return (
    <button className="relative" onClick={() => setOpen(!open)}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
          onClick={() => setOpen(!open)}
        />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 
          overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          ref={ref}
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] 
            text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 mt-2"
            >
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          {user?.accountType === "Student" ? (
            <Link to={"dashboard/cart"}>
              <div
                className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
              >
                <AiOutlineShoppingCart className="text-lg" />
                Cart
              </div>
            </Link>
          ) : (
            <></>
          )}
          <Link to="/" onClick={() => setOpen(false)}>
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              <AiOutlineHome className="text-lg" />
              Home
            </div>
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              <TbListDetails className="text-lg" />
              About
            </div>
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            <div
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
            >
              <AiOutlineContacts className="text-lg" />
              Contact
            </div>
          </Link>
          {user?.accountType === "Student" ? (
            <Link to={"dashboard/enrolled-courses"}>
              <div
                className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
           text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
              >
                <PiStudent className="text-3xl" />
                Enrolled Courses
              </div>
            </Link>
          ) : (
            <></>
          )}
          <div
            onClick={() => {
              dispatch(logout(navigate));
              setOpen(false);
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm
             text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25 mb-2"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  );
}
