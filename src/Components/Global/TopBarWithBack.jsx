import React, { useContext } from "react";
import { IoPersonSharp, IoPersonOutline } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import { useLocation, Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";


const TopbarWithBack = () => {

    const { isAuthPinSuccess, permissionLevel } = useContext(UserContext)

    const location = useLocation();
    const isWelcome = location.pathname === "/welcome";
    const isHome = location.pathname === "/";
    const isOverall = location.pathname === "/overall" && isAuthPinSuccess === true;
    const isTopUp = location.pathname === "/topup" && isAuthPinSuccess === true;
    const isTransfer = location.pathname === "/transfer" && isAuthPinSuccess === true;
    const isWithdraw = location.pathname === "/withdraw" && isAuthPinSuccess === true;
    const isBill = location.pathname === "/bill" && isAuthPinSuccess === true;
    const isRegister = location.pathname === "/register/user" || location.pathname === "/register/info" || location.pathname === "/register/account" || location.pathname === "/register/confirm" || location.pathname === "/register/pin"
    const isContact = location.pathname ==="/contact-bank"

    const splitPathName = location.pathname.split("/");
    const isEmployee = splitPathName[1] === "emp"
    const isSupervisor = splitPathName[1] === "spv"

    return (
        <div className={`fixed ${(isHome || isOverall || isRegister || isWelcome || isEmployee || isSupervisor) ? " hidden" : "block"} w-full top-0 start-0 py-2 pt-3 z-10 bg-gradient-to-r from-slate-700 to-slate-800`}>
            <div className="grid grid-cols-3 items-center">
                <Link to="/">
                    <button 
                        className="col-span-1 flex justify-start ms-2">
                        <FaArrowLeft className="text-xl text-white m-1" />
                    </button>
                </Link>
                <div className="col-span-1 flex justify-center items-center">
                    <p className="font-bold text-white text-lg">
                        {isTransfer && "โอนเงิน"}
                        {isTopUp && "เติมเงิน"}
                        {isWithdraw && "ถอนเงิน"}
                        {isBill && "จ่ายบิล"}
                        {isContact && "ติดต่อธนาคาร"}
                    </p>
                </div>
                <div className="col-span-1" />
            </div>
        </div>
    )
}

export default TopbarWithBack; 