import React from "react";

import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Amount = () => {
    return (
        <div>
            <div className="flex-col text-start">
                <div className="flex items-center gap-1">
                    <p className="text-white">บัญชีของฉัน</p>
                    <button className=" rounded-full bg-black bg-opacity-50">
                        <IoIosArrowDown className="text-white text-xs m-0.5" />
                    </button>
                </div>
                <p className="text-white text-xs">xxx-x-x0000-x</p>
            </div>

            <div className="relative mt-6 flex justify-center">
                <div className="relative flex-col border-2 border-orange-400 rounded-full h-36 w-36 py-12 bg-black bg-opacity-25">
                    <p className="text-slate-200 text-xs">ยอดเงินที่ใช้ได้</p>
                    <p className="text-white mt-1">16,000.00</p>
                    <button className="absolute right-1 mt-3">
                        <div className="bg-gray-800 border-2 border-white rounded-full h-8 w-8 flex justify-center items-center">
                            <IoSettingsSharp className="text-white text-lg" />
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Amount;