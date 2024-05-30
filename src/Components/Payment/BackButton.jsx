import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const BackButton = ({ BackHome, BackAgain }) => {

    const navigate = useNavigate();

    return (
        <div className=' absolute w-full start-0 px-8 pb-12 bottom-0'>
            <div className='my-4'>
                <button onClick={() => navigate(BackHome)} className='bg-orange-400 rounded-md px-12 py-1'>
                    <p className='text-white font-semibold'>กลับสู่หน้าหลัก</p>
                </button>
            </div>
            <button
                onClick={() => navigate(BackAgain)}
                className=' underline underline-offset-1 text-orange-400'>
                โอนเงินรายการอื่น
            </button>
        </div>
    )
}

export default BackButton