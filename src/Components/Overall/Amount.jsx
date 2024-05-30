import React from "react";
import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMdCopy } from "react-icons/io";

const Amount = ({ info }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className="flex-col text-start">
                <button onClick={toggling} className="flex items-center gap-1">
                    <p className="text-white">บัญชีของฉัน</p>
                    <div className=" rounded-full bg-black bg-opacity-50">
                        {!isOpen ? (
                            <IoIosArrowDown className="text-white text-xs m-0.5" />
                        ) : (
                            <IoIosArrowUp className="text-white text-xs m-0.5" />
                        )}

                    </div>
                </button>
                <p className="text-white text-xs">xxx-x-x{info.AccountNumber.slice(5, 9)}-x</p>
            </div>
            {isOpen &&
                <div className="absolute z-20 bg-white top-32 mx-8 w-5/6 left-0 max-h-60 border-2 overflow-y-auto rounded-md">
                    <button
                        className="flex p-2 justify-between items-center w-full bg-white rounded-md">
                        <div className="flex justify-between w-full items-center gap-2">
                            <div className="flex items-center gap-x-2">
                                <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center">
                                    <BsFillPersonLinesFill className="text-xl text-" />
                                </div>
                                <div className="text-start">
                                    <p className=" font-semibold">{info.FirstName} {info.LastName}</p>
                                    <p className="text-sm">{info.AccountNumber}</p>
                                </div>
                            </div>
                            <div className=" ">
                                <IoMdCopy className="text-xl mx-1" />
                                <p className=" text-xs">Copy</p>
                            </div>
                        </div>
                    </button>
                </div>
            }

            <div className="relative mt-6 flex justify-center">
                <div className="relative flex-col border-2 border-orange-400 rounded-full h-36 w-36 py-12 bg-black bg-opacity-25">
                    <p className="text-slate-200 text-xs">ยอดเงินที่ใช้ได้</p>
                    <p className="text-white mt-1">{info.Balance}</p>
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