import React from "react";
import { IoPersonSharp, IoPersonOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { useLocation } from "react-router-dom";


const Topbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isOverall = location.pathname === "/overall";
    return (
        <div className={`fixed ${(isHome||isOverall) ? " block" : "hidden"} w-full top-0 start-0 py-2 pt-3 z-10 bg-gradient-to-r from-slate-700 to-slate-800`}>
            <div className="grid grid-cols-3 items-center">
                <div className="col-span-1 flex justify-start ms-2">
                    <div className=" rounded-full border-2 border-orange-400">
                        <IoPersonOutline className="text-xl text-white m-1"/>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-end">
                    <p className="font-bold text-white text-lg">Online</p>
                    <p className="font-bold text-white">Banking</p>
                </div>
                <div className="col-span-1 flex justify-end mr-2 gap-x-3">
                    <FaRegBell className="text-lg text-white"/>
                    <FaPowerOff className="text-lg text-white"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar; 