import React, { useContext } from "react";
import { IoPersonSharp, IoPersonOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import { useLocation, Link } from "react-router-dom";


const TopbarWithBack = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isOverall = location.pathname === "/overall";
    const isTopUp = location.pathname === "/topup";
    const isTransfer = location.pathname === "/transfer";
    const isWithdraw = location.pathname === "/withdraw";
    return (
        <div className={`fixed ${(isHome || isOverall) ? " hidden" : "block"} w-full top-0 start-0 py-2 pt-3 z-10 bg-gradient-to-r from-slate-700 to-slate-800`}>
            <div className="grid grid-cols-3 items-center">
                <Link to="/">
                    <div className="col-span-1 flex justify-start ms-2">
                        <FaArrowLeft className="text-xl text-white m-1" />
                    </div>
                </Link>
                <div className="col-span-1 flex justify-center items-center">
                    <p className="font-bold text-white text-lg">
                        {isTransfer && "โอนเงิน"}
                        {isTopUp && "เติมเงิน"}
                        {isWithdraw && "ถอนเงิน"}
                    </p>
                </div>
                <div className="col-span-1"/>
            </div>
        </div>
    )
}

export default TopbarWithBack; 