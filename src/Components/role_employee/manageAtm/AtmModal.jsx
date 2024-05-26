import React from 'react'
import { IoCloseCircle } from "react-icons/io5";

const AtmModal = ({ selectedAtm, closeModal }) => {

    console.log(selectedAtm);

    return (
        <div>
            <div className='fixed flex start-0 top-0 justify-center z-20 bg-black bg-opacity-30 h-screen w-full '>
                <div className='relative bg-white rounded-lg max-w-4xl min-h-[70vh] w-full my-auto p-8'>
                    <div className='flex justify-between pb-4 border-b-2'>
                        <p className='text-xl font-semibold'>แก้ไขจำนวนเงินภายในตู้ ATM</p>
                        <IoCloseCircle
                            onClick={closeModal}
                            className='text-2xl cursor-pointer' />
                    </div>
                    <div className='py-8 px-24 grid grid-cols-4 gap-14'>
                        <div className='col-span-2 text-right font-bold text-xl '>
                            <p className='my-3'>ATM Id</p>
                            <p className='my-3'>Branch Id</p>
                            <p className='my-3'>ที่อยู่ATM</p>
                            <p className='my-3'>จำนวนเงินปัจจุบัน</p>
                        </div>
                        <div className='col-span-2 text-left font-medium text-xl text-slate-500'>
                            <p className='my-3'>{selectedAtm.ATMID}</p>
                            <p className='my-3'>{selectedAtm.BranchID}</p>
                            <p className='my-3'>{selectedAtm.Name}</p>
                            <p className='my-3'>{selectedAtm.Balance} บาท</p>
                        </div>
                    </div>
                    <hr className='text-black mb-8' />
                    <div className=''>
                        <p className='font-semibold text-xl'>ระบุจำนวนเงินที่ต้องการแก้ไข</p>
                        <div className='flex justify-center items-end gap-1 mt-4'>
                            <input placeholder="0.00" className='border-b border-black text-xl focus:outline-none text-right'></input>
                            <p className='text-lg font-medium'>บาท</p>
                        </div>
                        <div className='flex justify-center mt-20'>
                            <div className=' bg-green-300 w-20 rounded-md py-2'>
                                <p className='text-lg font-medium text-white'>ตกลง</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AtmModal