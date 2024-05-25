import React from 'react'

const BankList = ({ bankList }) => {
    return (
        <div className='pt-4 max-w-xl'>
            <div className='flex justify-between'>
                <p className='text-2xl'>ธนาคารที่ร่วมให้บริการ</p>
                <p className='underline text-slate-600 mr-4'>ดูทั้งหมด</p>
            </div>

            <div className='flex justify-center gap-2 mt-2 py-2 px-4 bg-white rounded-sm'>
                {bankList.slice(1, 8).map((bank, index) => (
                    <div key={index} className=''>
                        <img
                            src={bank.Logo}
                            className='w-16 h-16 rounded-full' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BankList