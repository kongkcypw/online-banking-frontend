import React from "react";

import { FaHome, FaDollarSign } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const NavBar = () => {
    return (
        <div className="fixed bottom-0 start-0 w-full">
            <div className="w-full bg-white py-2 h-12">
                <div className="grid grid-cols-3">
                    <div className=" col-span-1 flex justify-center">
                        <FaHome className="text-black text-3xl" />
                    </div>
                    <div className=" col-span-1 flex justify-center overflow-visible">
                        <div className="h-14 w-14 border-8 boder-white rounded-full flex justify-center items-center bg-slate-700">
                            <FaDollarSign className="text-3xl text-white m-1" />
                        </div>
                    </div>
                    <div className=" col-span-1 flex justify-center">
                        <IoPersonSharp className="text-black text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;