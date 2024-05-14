import React from 'react'

const SumYear = ({ yearData, currentDate }) => {
    return (
        <div className='pt-8'>
            <div className='bg-black bg-opacity-30 rounded-sm px-4 py-2'>
                <p className='text-left'>สรุปรายการเดินบัญชีเงินฝากปี {currentDate.fullYear}</p>
                <div className='flex justify-between'>
                    <p>เงินเข้า {yearData.find(item => item.TransactionFlow === 'IN')?.TransactionCount || 0} รายการ:</p>
                    <p>{yearData.find(item => item.TransactionFlow === 'IN')?.TotalAmount || 0} บาท</p>
                </div>
                <div className='flex justify-between'>
                    <p>เงินออก {yearData.find(item => item.TransactionFlow === 'OUT')?.TransactionCount || 0} รายการ:</p>
                    <p>{yearData.find(item => item.TransactionFlow === 'OUT')?.TotalAmount || 0} บาท</p>
                </div>
            </div>
        </div>
    )
}

export default SumYear