import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

const FlowTrasfer = ({ detail, transactionSource }) => {
    return (
        <div className='text-left text-lg'>
            <div className='grid grid-cols-10'>
                <div className='col-span-4'>
                    <div className='flex justify-center drop-shadow-lg'>
                        <img src={detail.BankLogo} className='w-32 h-32 rounded-full' />
                    </div>
                    <div className='flex gap-2 justify-center pt-8'>
                        <p className='font-semibold'>ผู้โอน: </p>
                        <p>{detail.FirstName} {detail.LastName}</p>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <p className='font-semibold'>ธนาคาร:</p>
                        <p>{detail.BankName}</p>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <p className='font-semibold'>เลขบัญชี:</p>
                        <p>{detail.AccountNumber}</p>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <p className='font-semibold'>สาขาบัญชี:</p>
                        <p>{detail.BranchName}({detail.BranchID})</p>
                    </div>
                </div>
                <div className='col-span-2 w-full inline-flex'>
                    <div className=' border-dashed border-black border-t-2 mt-16'>
                        <p className='text-white'>aaaaaaaaaaaaaaa</p>
                    </div>
                    <MdArrowForwardIos className='mt-14 text-black' />
                </div>

                <div className='col-span-4'>
                    <div className='flex justify-center drop-shadow-lg'>
                        <img src={transactionSource.BankLogo} className='w-32 h-32 rounded-full' />
                    </div>
                    <div className='flex gap-2 justify-center pt-8'>
                        <p className='font-semibold'>ผู้รับ: </p>
                        <p>{transactionSource.FirstName} {transactionSource.LastName}</p>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <p className='font-semibold'>ธนาคาร:</p>
                        <p>{transactionSource.BankName}</p>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <p className='font-semibold'>เลขบัญชี:</p>
                        <p>{transactionSource.AccountNumber}</p>
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <p className='font-semibold'>สาขาบัญชี:</p>
                        <p>{transactionSource.BranchName}({transactionSource.BranchID})</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowTrasfer