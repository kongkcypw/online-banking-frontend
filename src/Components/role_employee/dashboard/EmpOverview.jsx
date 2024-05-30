import React from 'react'

const EmpOverview = () => {
    return (
        <div className='pt-8'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <p className='text-2xl my-auto'>สรุปข้อมูลโดยรวม</p>
                    <p className='my-auto ml-2 text-slate-500'>(เดือนพฤษภาคม)</p>
                </div>

                <p className='underline text-slate-600 mr-4'>ข้อมูลธุรกรรมรายวัน</p>
            </div>
            <div className='grid grid-cols-9 gap-4'>
                <div className='col-span-3 bg-white my-2 px-4 py-4 drop-shadow'>
                    <p className='text-xl'>จำนวนธุรกรรม</p>
                    <p>0.00</p>
                </div>
                <div className='col-span-3 bg-white my-2 px-4 py-4 drop-shadow'>
                    <p className='text-xl'>รายการขาเข้า</p>
                    <p>0.00</p>
                </div>
                <div className='col-span-3 bg-white my-2 px-4 py-4 drop-shadow'>
                    <p className='text-xl'>รายการขาออก</p>
                    <p>0.00</p>
                </div>
            </div>
            <div className='grid grid-cols-9 gap-4'>
                <div className='col-span-3 bg-white my-2 px-4 py-4 drop-shadow'>
                    <p className='text-xl'>จำนวนบัญชีทั้งหมด</p>
                    <p>0.00</p>
                </div>
                <div className='col-span-3 bg-white my-2 px-4 py-4 drop-shadow'>
                    <p className='text-xl'>บัญชีที่มียอดธุรกรรมสูงสุด</p>
                    <p>0.00</p>
                </div>
                <div className='col-span-3 bg-white my-2 px-4 py-4 drop-shadow'>
                    <p className='text-xl'>ATM ที่มีการถอนเงินมากที่สุด</p>
                    <p>0.00</p>
                </div>
            </div>
        </div>
    )
}

export default EmpOverview