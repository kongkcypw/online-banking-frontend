import React from "react";
import { Link } from "react-router-dom";

import { TbTransfer } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { LuPanelTopOpen } from "react-icons/lu";

const UrgentTransaction = () => {
    return (
        <div className="pt-12 font-notoTH">
            <div className="flex border-s-4 border-orange-400">
                <h2 className="font-bold ms-2 text-white">ธุรกรรมด่วน</h2>
            </div>

            <div className="grid grid-cols-4 items-center mt-4">
                <Link to="/register">
                    <div className="col-span-1 flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="inset-0 border-2 border-slate-300 rounded-full w-10 h-10 flex items-center justify-center">
                                <TbTransfer className="text-slate-300 text-2xl m-auto" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-slate-300">โอนเงิน</p>
                        </div>
                    </div>
                </Link>

                <Link to="/topup">
                    <div className="col-span-1 flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="inset-0 border-2 border-slate-300 rounded-full w-10 h-10 flex items-center justify-center">
                                <LuPanelTopOpen className="text-slate-300 text-2xl m-auto" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-slate-300">เติมเงิน</p>
                        </div>
                    </div>
                </Link>

                <Link to="/register">
                    <div className="col-span-1 flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="inset-0 border-2 border-slate-300 rounded-full w-10 h-10 flex items-center justify-center">
                                <MdOutlinePayment className="text-slate-300 text-2xl m-auto" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-slate-300">จ่ายเงิน</p>
                        </div>
                    </div>
                </Link>

                <Link to="/register">
                    <div className="col-span-1 flex-col items-center justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="inset-0 border-2 border-slate-300 rounded-full w-10 h-10 flex items-center justify-center">
                                <BiMoneyWithdraw className="text-slate-300 text-2xl m-auto" />
                            </div>
                        </div>
                        <div className="mt-2">
                            <p className="text-slate-300">ถอนเงิน</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default UrgentTransaction;