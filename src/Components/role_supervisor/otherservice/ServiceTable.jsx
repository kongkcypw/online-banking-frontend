import React from 'react'
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const ServiceTable = ({ list, type }) => {

    const navigate = useNavigate();

    const handleAdd = () => {
        if(type === "topup"){
            navigate("/spv/other-service/add/topup")
        }
        else if(type === "bill"){
            navigate("/spv/other-service/add/bill")
        }
    }

    return (
        <div className="min-w-full">
            <div className="container mt-2 max-w-5xl">
                <table className="min-w-full bg-slate-100 rounded-sm drop-shadow-sm">
                    <thead className='border-b-[2px] bg-white'>
                        <tr>
                            <th className="px-4 py-2 border-b">ลำดับ</th>
                            <th className="py-2 border-b"></th>
                            <th className="px-4 py-2 border-b">ไอดี</th>
                            <th className="px-4 py-2 border-b">ชื่อบริการ</th>
                            <th className="px-4 py-2 border-b">ประเภท</th>
                            <th className="px-4 py-2 border-b">รายละเอียด</th>
                            <th className="py-2 border-b">แก้ไข/ลบ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((data, index) => (
                            <tr key={index} className="hover:bg-slate-100 bg-white text-black">
                                <td className="px-4 py-2 border-b">{index + 1}</td>

                                <td className="py-2 border-b">
                                    <img src={data.Image}
                                        className='w-16 h-16' />
                                </td>
                                <td className="px-4 py-2 border-b">{data.TopupID || data.BillID}</td>
                                <td className="px-4 py-2 border-b">{data.Name}</td>
                                <td className="px-4 py-2 border-b">{data.Type}</td>
                                <td className="px-4 py-2 border-b text-slate-600 underline hover:cursor-pointer">ดูข้อมูลเพิ่มเติม</td>
                                <td className="py-2 border-b text-slate-600">
                                    <div className='flex text-left gap-3'>
                                        <div className='flex hover:cursor-pointer'>
                                            <span>แก้ไข</span>
                                            <AiOutlineEdit className='my-auto' />
                                        </div>
                                        <div className='flex hover:cursor-pointer'>
                                            <span>ลบ</span>
                                            <RiDeleteBin6Line className='my-auto text-sm' />
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        ))}
                        <tr className="hover:bg-slate-100 bg-white text-black">
                            <td className="py-2 border-b text-center" colSpan={7}>
                                <div className='flex justify-center text-slate-600 hover:cursor-pointer'
                                     onClick={() => handleAdd()}>
                                    <span>เพิ่ม</span>
                                    <IoMdAddCircleOutline className='my-auto'/>
                                </div>
                            </td>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default ServiceTable