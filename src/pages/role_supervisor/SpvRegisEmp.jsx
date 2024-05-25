import React from "react";
import '../../App.css';
const SpvRegisEmp = () => {
    return (
        <div className="max-w-auto h-screen flex justify-center">
            <img className="absolute bg-cover h-screen w-full start-0 top-0" src="https://i.ibb.co/xD9gmnV/67163.jpg" />
            <form className=" w-2/4 h-4/5 rounded-md drop-shadow-lg bg-white px-24">
                <h1 className="font-bold text-xl mt-12 text-sky-900">ลงทะเบียนพนักงาน</h1>
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
    )
}

export default SpvRegisEmp;