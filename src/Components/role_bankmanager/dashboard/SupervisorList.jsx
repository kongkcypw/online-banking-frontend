import React from 'react'

const SupervisorList = ({ supervisorList }) => {
    return (
        <div className='max-w-xl'>
            <div className='flex justify-between'>
                <p className='text-2xl text-left'>สาขาธนาคาร</p>
                <p className='underline text-slate-600 mr-4'>ดูทั้งหมด</p>
            </div>
            {supervisorList.map((data, index) => (
                <div key={index} className='text-left my-2 drop-shadow-sm px-4 py-2 bg-white'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-xl'>{data.BranchName}</p>
                            <p className='text-lg text-slate-600'>รหัสสาขา: {data.BranchID}</p>
                            <p className='text-lg text-slate-600'>ผู้ดูแลสาขา: {data.FirstName} {data.LastName}</p>
                        </div>
                        <p className='text-slate-600'>ข้อมูลเพิ่มเติม</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default SupervisorList