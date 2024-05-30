import React from 'react'

const AtmTable = ({ atmList, setIsDisplayModal, setSelectedAtm }) => {

    const handleSelectAtm = (data) => {
        setSelectedAtm(data);
        setIsDisplayModal(true)
    }

    return (
        <div className='w-full'>
            <div className='text-left py-4'>
                <p className='text-3xl font-semibold'>ข้อมูลตู้ ATM</p>
            </div>
            <div className="container mx-auto mt-2 w-full">
                <div className="flex mb-4 w-full">
                    <table className=" bg-slate-100 rounded-sm drop-shadow-sm w-full max-w-6xl">
                        <thead className='border-b-[2px] bg-white font-thin'>
                            <tr>
                                <th className="px-4 py-2 border-b">ลำดับ</th>
                                <th className="px-4 py-2 border-b">รหัส ATM</th>
                                <th className="px-4 py-2 border-b">รหัสสาขา</th>
                                <th className="px-4 py-2 border-b">ชื่อสาขา</th>
                                <th className="px-4 py-2 border-b">จำนวนเงินในตู้</th>
                                <th className="px-4 py-2 border-b">แก้ไขจำนวนเงิน</th>
                            </tr>
                        </thead>
                        <tbody>
                            {atmList.slice(0,1).map((data, index) => (
                                <tr key={index} className="hover:bg-slate-100 bg-white text-black">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{data.ATMID}</td>
                                    <td className="px-4 py-2 border-b">{data.BranchID}</td>
                                    <td className="px-4 py-2 border-b">{data.Name}</td>
                                    <td className="px-4 py-2 border-b">{data.Balance}</td>
                                    <td className="px-4 py-2 border-b underline text-slate-600 cursor-pointer" onClick={() => handleSelectAtm(data)}>แก้ไข</td>
                                </tr>
                            ))}
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default AtmTable