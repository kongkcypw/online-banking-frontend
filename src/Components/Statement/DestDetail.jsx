import React from 'react'

const DestDetail = ({ type, detail }) => {

    console.log(detail);

    return (
        <div className='py-4'>
            <div className='border-t-[1px] border-slate-400 pt-4'>
                {type === "TRANSFER" &&
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <p className='text-slate-600'>เลขที่บัญชีปลายทาง:</p>
                            <p className='text-black'>XXX-X-X{detail.AccountNumber.slice(5, 9)}-X</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-slate-600'>ชื่อบัญชี:</p>
                            <p className='text-black'>{detail.FirstName} {detail.LastName}</p>
                        </div>
                    </div>
                }
                {type === "WITHDRAW" &&
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <p className='text-slate-600'>สาขา ATM:</p>
                            <p className='text-black'>{detail.BranchName}</p>
                        </div>
                    </div>
                }
                {type === "TOPUP" &&
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <p className='text-slate-600'>ประเภท:</p>
                            <p className='text-black'>{detail.Type}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-slate-600'>ชื่อรายการ:</p>
                            <p className='text-black'>{detail.Name}</p>
                        </div>
                    </div>
                }
                {type === "BILL" &&
                    <div className='w-full'>
                        <div className='flex justify-between'>
                            <p className='text-slate-600'>ประเภท:</p>
                            <p className='text-black'>{detail.Type}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-slate-600'>ชื่อรายการ:</p>
                            <p className='text-black'>{detail.Name}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default DestDetail