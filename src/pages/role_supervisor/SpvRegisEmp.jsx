import React from "react";
import '../../App.css';
import SpvSidebar from "../../Components/Layout/SpvSidebar";
const SpvRegisEmp = () => {
    return (
        <div className='absolute bg-[#F7F7F8] w-full h-full start-0 top-0'>
            <div className='flex'>
                <SpvSidebar />
                <div className="ml-72 mt-24 w-full flex justify-center">
                    <form className="w-3/5 pb-12 px-24 rounded-md drop-shadow-lg bg-white">
                        <h1 className="font-bold text-xl pt-12 text-sky-900">ลงทะเบียนพนักงาน</h1>
                        {/* Form */}
                        {/* Left Column */}
                        <div className="flex flex-col gap-y-3 mt-6">
                            <div className="flex gap-x-3">
                                <div className="text-left w-full">
                                    <p className="text-left">ชื่อ*</p>
                                    <input className="border-2 p-2 w-full rounded-lg text-sm border-sky-400 focus:outline-none" />
                                </div>
                                <div className="text-left w-full">
                                    <p className="text-left">นามสกุล*</p>
                                    <input className="border-2 p-2 w-full rounded-lg text-sm border-sky-400 focus:outline-none" />
                                </div>
                            </div>
                            <div className="flex gap-x-3">
                                <div className="text-left w-full">
                                    <p className="text-left">เลขบัตรประชาชน*</p>
                                    <input className="border-2 p-2 w-full rounded-lg text-sm border-sky-400 focus:outline-none" />
                                </div>
                                <div className="text-left w-full">
                                    <p className="text-left">วันเกิด*</p>
                                    <input
                                        maxLength={155} rows={4}
                                        className="border-2 p-2 w-full resize-none rounded-lg text-sm border-sky-400 focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="flex flex-col gap-y-3 mt-3">
                            <div className="text-left w-full">
                                <p className="text-left">ที่อยู่*</p>
                                <input className="border-2 p-2 w-full rounded-lg text-sm border-sky-400 focus:outline-none" />
                            </div>
                            <div className="text-left w-full">
                                <p className="text-left">E-mail*</p>
                                <input className="border-2 p-2 w-full rounded-lg text-sm border-sky-400 focus:outline-none" />
                            </div>
                            <div className="text-left w-full">
                                <p className="text-left">รหัสผ่าน*</p>
                                <input className="border-2 p-2 w-full rounded-lg text-sm border-sky-400 focus:outline-none" />
                            </div>
                            <div className="text-left w-full">
                                <p className="text-left">ยืนยันรหัสผ่าน*</p>
                                <input className="border-2 p-2 w-full rounded-lg text-sm border-sky-400 focus:outline-none" />
                            </div>
                            <div className="text-left w-full">
                                <p className="text-left">ตำเเหน่ง</p>
                                <input disabled value={"พนักงาน"} className="border-2 p-2 w-full bg-slate-200 rounded-lg text-sm border-sky-400 focus:outline-none" />
                            </div>
                        </div>
                        <div className="mt-8">
                            <button className=" bg-gradient-to-br from-orange-600 to-orange-400 text-white font-semibold p-3 rounded-lg">
                                ลงทะเบียนพนักงาน
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SpvRegisEmp;