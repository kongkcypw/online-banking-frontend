import React from "react";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBin7Line } from "react-icons/ri";

const SpvTopUp = () => {
    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const data = [...val, []];
        setVal(data);
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val];
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata);
    }
    const handleDelete = (i) => {
        const delVal = [...val];
        delVal.splice(i,1);
        setVal(delVal);
    }

    return (
        <div className="max-w-auto h-screen flex justify-center">
            <img className="absolute bg-cover h-screen w-full start-0 top-0" src="https://i.ibb.co/xD9gmnV/67163.jpg" />
            <form className=" w-2/4 h-4/5 rounded-md drop-shadow-lg bg-white px-14">
                <h1 className="font-bold text-xl mt-12 text-sky-900">สร้างช่องทางการเติมเงินใหม่</h1>

                <div className="text-left mt-6 flex justify-between items-start">
                    <p className=" font-semibold">เพิ่มช่องทางการจ่ายเงิน</p>
                    <button type="button" onClick={() => handleAdd()} className=" bg-sky-600 px-2 py-1 rounded-lg flex items-center gap-x-2">
                        <IoMdAddCircleOutline className="text-white" />
                        <p className="text-white">เพิ่มช่อง</p>
                    </button>
                </div>
                <div className=" grid grid-cols-2">
                    <div className="text-left px-3">
                        <p>หมายเลขการ์ด</p>
                        <input className="border-2 border-slate-200 w-full focus:outline-none" />
                    </div>
                    {val.map((item, i) => (
                        <div className="text-left ps-3">
                            <p>หมายเลขการ์ด</p>
                            <div className="flex">
                                <input value={item} onChange={e => handleChange(e, i)} className="border-2 border-slate-200 w-full focus:outline-none" />
                                <button type="button" onClick={() => handleDelete(i)} className="bg-red-600 w-10 rounded-sm text-white flex justify-center items-center">
                                    <RiDeleteBin7Line className="text-xl"/>
                                </button>
                            </div>
                        </div>
                    ))}
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

export default SpvTopUp;