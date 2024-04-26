import React from "react";
import { useState } from "react";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const QuickBalance = () => {
    const [isView, setIsView] = useState(false);
    const viewBalance = () => {
        setIsView(!isView);
    };
    return (
        <div className="mt-12 font-notoTH">
            <div className="flex border-s-4 border-orange-400">
                <h2 className="font-bold ms-2 text-white">เช็คยอดเงินทันที</h2>
            </div>

            <div className="mt-4 bg-white rounded-md py-2">
                <div className="grid grid-cols-2">
                    <div className=" col-span-1 flex justify-start items-center ms-4">
                        <p className="text-black text-sm">บัญชีของฉัน</p>
                    </div>
                    <div className=" col-span-1">
                        {!isView ? (
                            <p className="text-slate-500 text-sm font-semibold flex justify-end items-center mr-4">XX.XX</p>
                        ) :(
                            <p className="text-Black text-sm font-semibold flex justify-end items-center mr-4">16,000.00</p> 
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-1">
                    <div className=" col-span-1 flex justify-start items-center ms-4">
                        <p className="text-slate-500 text-xs font-semibold">XXX-X-X0000-X</p>
                    </div>
                    <div className=" col-span-1">
                        <div onClick={viewBalance}>
                            {!isView ? (

                                <div className="text-orange-600 text-xs flex justify-end items-center mr-4 gap-x-1">
                                    ดูยอดเงิน
                                    <IoEyeOutline />
                                </div>
                            ) : (
                                <div className="text-orange-600 text-xs flex justify-end items-center mr-4 gap-x-1">
                                    ซ่อนยอดเงิน
                                    <IoEyeOffOutline />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickBalance;