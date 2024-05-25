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
                    <p className='text-black'></p>
                </div>
            </div>
        </div>
    )
}

export default AtmModal