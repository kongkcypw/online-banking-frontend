import React from "react";
import { PiUserListLight } from "react-icons/pi";

const UserInfoStatement = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <div className="w-16 h-16 mt-4 border-2 border-gray-200 rounded-full flex justify-center items-center">
                    <PiUserListLight className="text-gray-200 text-5xl" />
                </div>
            </div>
            <div className=" col-span-3">
                <div className="flex-col text-left">
                    <p className="text-orange-400 text-lg">บัญชีของฉัน</p>
                    <p className="text-white text-xs">XXX-X-X0000-X</p>
                    <div className="flex justify-between mt-1">
                        <p className="text-white text-sm">ยอดเงินที่ใช้ได้</p>
                        <p className="text-white text-sm"> 100000.00 </p>
                    </div>
                    <div className="flex justify-between mt-1">
                        <p className="text-white text-sm">ยอดเงินในบัญชี</p>
                        <p className="text-white text-sm"> 100000.00 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfoStatement;