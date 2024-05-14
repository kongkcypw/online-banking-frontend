import React from "react";

import { IoMdPerson } from "react-icons/io";

const EmpNavBar = () => {
    return (
        <div className="fixed bg-[#243443] w-full h-10 top-0 start-0 z-10 drop-shadow-md px-8 ">
            <div className="flex justify-between items-center h-full">
                <img className="h-6" src="https://i.ibb.co/MyHVMps/Krungthon-Previous-Pure.png" />
                <div className="flex items-center h-full">
                    <div className="flex items-center bg-[#202A34] border-b-2 border-orange-400 px-3 h-full">
                        <p className="text-xs text-white">Dashboard</p>
                    </div>
                    <div className="flex items-center  px-3 h-full">
                        <p className="text-xs text-white">Transfer</p>
                    </div>
                    <div className="flex items-center  px-3 h-full">
                        <p className="text-xs text-white">Payments</p>
                    </div>
                    <div className="flex items-center  px-3 h-full">
                        <p className="text-xs text-white">Recents Transaction</p>
                    </div>
                    
                    {/* profile */}
                    <div className="flex justify-center items-center gap-x-2 ml-4">
                        <div className=" rounded-full border-2 border-orange-400 p-1">
                            <IoMdPerson className="text-white" />
                        </div>
                        <div className="flex gap-x-1 items-center">
                            <p className="text-white">Username</p>
                            <p className="text-xs text-slate-300">(Employee)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default EmpNavBar;