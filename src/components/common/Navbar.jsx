import React, { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { BsChevronDown } from "react-icons/bs";
import ShowItems from "../core/Navbar/ShowItems";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img
              src={logo}
              alt="Logo"
              width={160}
              height={42}
              loading="lazy"
              className="md:block  sm:object-cover"
            />
          </Link>
        </div>
        {/* Nav links */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 
                    
                    ${
                      matchRoute("/catalog/:catalogName")
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }`}
                  >
                    <div className="flex gap-1 sm:ml-4 lg:ml-0 md:ml-0">
                      <p className="md:block lg:text-[16px] md:text-[16px] sm:text-[12px]">
                        {link.title}
                      </p>
                      {/* <IoIosArrowDropdownCircle /> */}
                      <BsChevronDown />
                    </div>

                    <div
                      className="invisible absolute left-[50%] top-[50%] z-[1000] 
                      flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg
                       bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 
                       group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 
                       lg:w-[300px]"
                    >
                      {/* upper diamond div */}
                      <div
                        className="absolute left-[50%] top-0 -z-10 h-6 
                        w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none 
                        rounded bg-richblack-5"
                      ></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks?.length ? (
                        <>
                          {subLinks
                            ?.filter((subLink) => subLink?.courses?.length > 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                        </>
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : link.title === "All Courses" ? (
                  <Link to={link?.path}>
                    <p
                      className={`md:block lg:text-[16px] md:text-[16px] sm:text-[12px] sm:w-[80px] lg:w-full md:w-full
                       ${
                         matchRoute(link?.path)
                           ? "text-yellow-25"
                           : "text-richblack-25"
                       }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`hidden md:block ${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/SignUp/Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== "Instructor" && (
            <Link to={"/dashboard/cart"} className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span
                  className="absolute -bottom-2 -right-2 grid h-5 
                w-5 place-items-center overflow-hidden rounded-full
                 bg-richblack-600 text-center text-xs font-bold text-yellow-100"
                >
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to={"/login"}>
              <button
                className="rounded-[8px] border border-richblack-700
               bg-richblack-800 px-[12px] py-[8px] text-richblack-100"
              >
                Log In
              </button>
            </Link>
          )}
          {token === null && (
            <Link to={"/signup"}>
              <button
                className="rounded-[8px] border border-richblack-700
               bg-richblack-800 px-[12px] py-[8px] text-richblack-100"
              >
                Sign Up
              </button>
            </Link>
          )}
          {token != null && <ProfileDropDown />}
        </div>
        <div className="mr-4 md:hidden">
          {user?.accountType === "Instructor" || token != null ? (
            <button onClick={() => setShowList(false)}>
              <ProfileDropDown />
            </button>
          ) : (
            <AiOutlineMenu
              fontSize={24}
              fill="#AFB2BF"
              className="cursor-pointer"
              onClick={() => setShowList(!showList)}
            />
          )}
          {showList ? <ShowItems /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
