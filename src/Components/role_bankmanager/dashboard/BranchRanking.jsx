import React from 'react'

const BranchRanking = ({ transactionRankList }) => {
    return (
        <div className='pt-4 '>
            <div className='flex justify-between'>
                <p className='text-2xl'>ธุรกรรม</p>
                <p className='underline text-slate-600 mr-4'>ข้อมูลธุรกรรมรายวัน</p>
            </div>
            <div className=" container mx-auto mt-2 min-w-full">
                <div className="flex mb-4">
                    <table className="min-w-full bg-slate-100 rounded-sm drop-shadow-sm">
                        <thead className='border-b-[2px] bg-white font-thin'>
                            <tr>
                                <th className="px-4 py-2 border-b">อันดับ</th>
                                <th className="px-4 py-2 border-b">ชื่อสาขา</th>
                                <th className="px-4 py-2 border-b">รหัสสาขา</th>
                                <th className="px-4 py-2 border-b">จำนวนธุรกรรม</th>
                                <th className="px-4 py-2 border-b">จำนวนเงิน</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionRankList.map((data, index) => (
                                <tr key={index} className="hover:bg-slate-100 bg-white text-black">
                                    <td className="px-4 py-2 border-b">{index + 1}</td>
                                    <td className="px-4 py-2 border-b">{data.BranchName}</td>
                                    <td className="px-4 py-2 border-b">{data.BranchID}</td>
                                    <td className="px-4 py-2 border-b">{data.TotalCount}</td>
                                    <td className="px-4 py-2 border-b">{data.TotalAmount}</td>
                                </tr>
                            ))}
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default BranchRanking