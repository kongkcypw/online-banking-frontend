import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const NextButton = ({ previousPage, nextFuntion, textColor, isAllowNext }) => {

    const navigate = useNavigate();

    return (
        <div className=' absolute w-full flex justify-between px-8 pb-8 start-0 bottom-0'>
            <div className='flex justify-center items-center gap-x-2'>
                <button
                    className="flex justify-center items-center rounded-full bg-red-500 h-8 w-8"
                    onClick={() => navigate(previousPage)}
                >
                    <RxCross2 className='text-xl text-white' />
                </button>
                <span className={`${textColor}`}>ยกเลิก</span>
            </div>

            {isAllowNext === true
                ?
                <div className='flex justify-center items-center gap-x-2'>
                    <span className={`${textColor}`}>ต่อไป</span>
                    <button
                        className="flex justify-center items-center rounded-full bg-green-500 h-8 w-8"
                        onClick={() => nextFuntion()}
                    >
                        <FaArrowRight className='text-xl text-white' />
                    </button>
                </div>
                :
                <div className='flex justify-center items-center gap-x-2'>
                    <span className='text-slate-400'>ต่อไป</span>
                    <button
                        className="flex justify-center items-center rounded-full bg-slate-500 h-8 w-8"
                    >
                        <FaArrowRight className='text-xl text-slate-300' />
                    </button>
                </div>
            }
        </div>
    )
}

export default NextButton