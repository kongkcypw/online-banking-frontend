import React, { useContext } from "react";
import { IoPersonSharp, IoPersonOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const authPinRequirePath = [
    "/transfer",
    "/topup",
    "/bill",
    "/withdraw",
    "/overall",
    "/profile",
    "/statement",
]

const Topbar = () => {

    const { isLogedIn, isAuthPinSuccess } = useContext(UserContext);

    const location = useLocation();
    const isHome = location.pathname === "/" && isLogedIn === true;
    const isOverall = location.pathname === "/overall";
    const isAuthPin = (authPinRequirePath.includes(location.pathname) === true && isAuthPinSuccess !== false)
    
    return (
        <div className={`fixed ${(isHome || isOverall || isAuthPin) ? " block" : "hidden"} w-full top-0 start-0 py-2 pt-3 z-10 bg-gradient-to-r from-slate-700 to-slate-800`}>
            <div className="grid grid-cols-3 items-center">
                <div className="col-span-1 flex justify-start ms-2">
                    <div className=" rounded-full border-2 border-orange-400">
                        <IoPersonOutline className="text-xl text-white m-1"/>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                    <img 
                    src="https://i.ibb.co/MyHVMps/Krungthon-Previous-Pure.png"
                    className="h-6 w-7"
                    />
                    
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