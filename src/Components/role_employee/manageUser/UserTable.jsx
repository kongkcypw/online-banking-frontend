import React from 'react'

const UserTable = ({ userList, displayDetail, setSelectUser }) => {

    const handleClickDetail = (data) => {
        setSelectUser(data);
        displayDetail();
    }

    return (
        <div className='pt-4 w-full'>
            <div className=" container mx-auto mt-2 min-w-full">
                <div className="flex mb-4 max-w-6xl">
                    <table className="min-w-full bg-slate-100 rounded-sm drop-shadow-sm">
                        <thead className='border-b-[2px] bg-white font-thin'>
                            <tr>
                                <th className="px-4 py-2 border-b">ลำดับ</th>
                                <th className="px-4 py-2 border-b">เลขบัญชี</th>
                                <th className="px-4 py-2 border-b">ชื่อ</th>
                                <th className="px-4 py-2 border-b">นามสกุล</th>
                                <th className="px-4 py-2 border-b">รายละเอียด</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((data, index) => (
                                <tr key={index} className="hover:bg-slate-100 bg-white text-black">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{data.AccountNumber}</td>
                                    <td className="px-4 py-2 border-b">{data.FirstName}</td>
                                    <td className="px-4 py-2 border-b">{data.LastName}</td>
                                    <td className="px-4 py-2 border-b underline text-slate-600 cursor-pointer" onClick={() => handleClickDetail(data)}>ตรวจสอบข้อมูล</td>
                                </tr>
                            ))}
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserTable