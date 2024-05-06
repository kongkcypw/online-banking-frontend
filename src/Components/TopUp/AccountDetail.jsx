import React from "react";

const AccountDetail =()=>{
    return(
        <div>
            <p className='text-orange-400 text-md text-left'>จาก</p>
            <div className='bg-white rounded-lg px-4 py-4 mt-2'>
                <p className='text-left font-bold text-lg'>ดนัย เเสงบัวหมัด</p>
                <div className='flex gap-x-2 text-sm'>
                    <p>เลขบัญชี</p>
                    <p>XXX-X-X0000-X</p>
                </div>
                <p className='mt-2 text-2xl font-bold text-left'>16,000.00</p>
            </div>
        </div>
    )
}

export default AccountDetail;