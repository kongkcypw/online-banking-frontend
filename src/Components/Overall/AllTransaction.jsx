import React from "react";
import { Link } from "react-router-dom";

import { TbTransfer } from "react-icons/tb";
import { LuPanelTopOpen, LuPhone } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";
import { PiFileMagnifyingGlass } from "react-icons/pi";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const AllTransaction = () => {
    return (
        <div className="mt-20">
            <div className="grid grid-cols-4 gap-y-8">
                <Link to="/transfer">
                    <div className="col-span-1 flex-col ">
                        <div className="mx-auto border-2 rounded-full h-10 w-10 flex justify-center items-center">
                            <TbTransfer className="text-white text-2xl" />
                        </div>
                        <p className="text-white text-sm mt-2">โอนเงิน</p>
                    </div>
                </Link>
                <Link to="/topup">
                    <div className="col-span-1 flex-col mx-auto">
                        <div className="mx-auto border-2 rounded-full h-10 w-10 flex justify-center items-center">
                            <LuPanelTopOpen className="text-white text-2xl " />
                        </div>
                        <p className="text-white text-sm mt-2">เติมเงิน</p>
                    </div>
                </Link>
                <Link to="/withdraw">
                    <div className="col-span-1 flex-col mx-auto">
                        <div className="mx-auto border-2 rounded-full h-10 w-10 flex justify-center items-center">
                            <MdOutlinePayment className="text-white text-2xl " />
                        </div>
                        <p className="text-white text-sm mt-2">จ่ายบิล</p>
                    </div>
                </Link>
                <Link to="/withdraw">
                    <div className="col-span-1 flex-col mx-auto">
                        <div className="mx-auto border-2 rounded-full h-10 w-10 flex justify-center items-center">
                            <BiMoneyWithdraw className="text-white text-2xl " />
                        </div>
                        <p className="text-white text-sm mt-2">ถอนเงิน</p>
                    </div>
                </Link>
                <Link to="/statement">
                    <div className="col-span-1 flex-col mx-auto">
                        <div className="mx-auto border-2 rounded-full h-10 w-10 flex justify-center items-center">
                            <RiFilePaper2Line className="text-white text-2xl " />
                        </div>
                        <p className="text-white text-sm mt-2">Statement</p>
                    </div>
                </Link>
                <Link>
                    <div className="col-span-1 flex-col mx-auto">
                        <div className="mx-auto border-2 rounded-full h-10 w-10 flex justify-center items-center">
                            <PiFileMagnifyingGlass className="text-white text-2xl " />
                        </div>
                        <p className="text-white text-sm mt-2 px-2">สรุปรายรับรายจ่าย</p>
                    </div>
                </Link>
                <Link>
                    <div className="col-span-1 flex-col mx-auto">
                        <div className="mx-auto border-2 rounded-full h-10 w-10 flex justify-center items-center">
                            <FaMoneyCheckDollar className="text-white text-2xl " />
                        </div>
                        <p className="text-white text-sm mt-2">เรียกเก็บเงิน</p>
                    </div>
                </Link>
                <Link>
                    <div className="col-span-1 flex-col mx-auto">
                        <div className="mx-auto border-2 rounded-full h-10 w-10 flex justify-center items-center">
                            <LuPhone className="text-white text-2xl" />
                        </div>
                        <p className="text-white text-sm mt-2 px-3">ติดต่อธนาคาร</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AllTransaction;