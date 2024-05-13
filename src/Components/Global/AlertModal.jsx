import React from 'react'
import { CiCircleAlert } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmark } from "react-icons/io5";

const AlertModal = ({ icon, headerMessage, bodyMassage, isDisplay, handleCancle, handleOk, textCancle, textOk }) => {
  return (
    <>
      {isDisplay === true ?
        <div className='fixed flex start-0 top-0 z-20 bg-black bg-opacity-30 h-screen w-full'>
          <div className='relative bg-white rounded-lg mx-10 my-80 flex justify-center items-start w-full'>
            <div className='mt-4 w-full mx-4'>
              <div className='flex justify-center'>
                <CiCircleAlert className='text-4xl' />
              </div>
              <p className='text-black font-semibold mt-2'>{headerMessage}</p>
              <p className='text-black mt-2'>{bodyMassage}</p>
            </div>

            {/* NO & Yes */}
            <div className='absolute bottom-0 px-6 pb-4 w-full'>
              <div className='flex justify-between items-center w-full pt-2 border-t border-slate-400'>
                <div className='flex justify-center items-center gap-x-2'>
                  <button
                    className="flex justify-center items-center rounded-full bg-red-500 h-8 w-8"
                    onClick={handleCancle} type="submit"
                  >
                    <RxCross2 className='text-xl text-white' />
                  </button>
                  <span className='text-black'>{textCancle || "ไม่"}</span>
                </div>
                <></>
                <div className='flex justify-center items-center gap-x-2'>
                  <span className='text-black'>{textOk || "ใช่"}</span>
                  <button
                    className="flex justify-center items-center rounded-full bg-green-500 h-8 w-8"
                    onClick={handleOk} type="submit"
                  >
                    <IoCheckmark className='text-xl text-white' />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
        : null}
    </>
  )
}

export default AlertModal