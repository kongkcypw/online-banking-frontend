import { React, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaHome, FaDollarSign } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { UserContext } from "../../contexts/userContext";

const NavBar = () => {
  const { isLogedIn, isAuthPinSuccess } = useContext(UserContext);

  const location = useLocation();
  const isHome = location.pathname === "/" && isLogedIn === true;
  const isOverall = location.pathname === "/overall" && isAuthPinSuccess === true;

  return (
    <div
      className={`${
        isHome || isOverall ? " block" : "hidden"
      } fixed z-10 bottom-0 w-5/6 navbar-center bg-white pt-1 rounded-t-xl mr-2 `}
    >
      <div className="relative grid grid-cols-3">
        <Link to="/">
          <div className="relative col-span-1 flex-col justify-center items-end gap-y-0">
            <FaHome
              className={`text-2xl mx-auto ${
                location.pathname == "/" ? "text-orange-500" : "text-zinc-500"
              }`}
            />
            <p
              className={`text-[10px] ${
                location.pathname == "/" ? "text-orange-500" : "text-slate-500"
              } font-notoTH`}
            >
              หน้าเเรก
            </p>
          </div>
        </Link>
        <Link to="/overall">
          <div className="relative col-span-1 flex justify-center items-center">
            <div
              className={`absolute bg-white border-8 ${
                location.pathname == "/overall"
                  ? "border-orange-500"
                  : "border-zinc-500"
              } rounded-full mb-12 flex justify-center items-center`}
            >
              <FaDollarSign
                className={`text-3xl ${
                  location.pathname == "/overall"
                    ? "text-orange-500"
                    : "text-zinc-500"
                } m-1 `}
              />
            </div>
            <div className="relative flex items-end mt-5">
              <p
                className={`text-[10px] ${
                  location.pathname == "/overall"
                    ? "text-orange-500"
                    : "text-zinc-500"
                } m-1 font-notoTH`}
              >
                ธุรกรรม
              </p>
            </div>
          </div>
        </Link>
        <Link to="/profile">
          <div className="relative col-span-1 flex-xol justify-center items-end">
            <IoPersonSharp
              className={`text-2xl mx-auto ${
                location.pathname == "/login"
                  ? "text-orange-500"
                  : "text-zinc-500"
              }`}
            />
            <p
              className={`text-[10px] ${
                location.pathname == "login"
                  ? "text-orange-500"
                  : "text-zinc-500"
              } font-notoTH`}
            >
              ข้อมูล
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
