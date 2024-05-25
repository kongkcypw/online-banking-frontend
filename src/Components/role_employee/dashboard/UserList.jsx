import React from 'react'

const UserList = () => {
    return (
        <div className='pt-4 '>
            <div className='flex justify-between'>
                <p className='text-2xl'>ลูกค้า</p>
                <p className='underline text-slate-600 mr-4'>ข้อมูลลูกค้า</p>
            </div>
            <div className=" container mx-auto mt-2 min-w-full">
                <div className="flex mb-4">
                    <table className="min-w-full bg-slate-100 rounded-sm drop-shadow-sm">
                        <thead className='border-b-[2px] bg-white font-thin'>
                            <tr>
                                <th className="px-4 py-2 border-b">ลำดับ</th>
                                <th className="px-4 py-2 border-b">ชื่อ</th>
                                <th className="px-4 py-2 border-b">สกุล</th>
                                <th className="px-4 py-2 border-b">เลขบัญชี</th>
                                <th className="px-4 py-2 border-b">เลขธุรกรรม</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-slate-100 bg-white text-black">
                                <td className="px-4 py-2 border-b">0</td>
                                <td className="px-4 py-2 border-b">สมมติ</td>
                                <td className="px-4 py-2 border-b">สุดยอด</td>
                                <td className="px-4 py-2 border-b">10157486</td>
                                <td className="px-4 py-2 border-b">A0004</td>
                            </tr>


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserList