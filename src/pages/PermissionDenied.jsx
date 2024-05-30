import React from 'react'
import { useNavigate } from 'react-router-dom';

const PermissionDenied = () => {
  const navigate = useNavigate();

  const previousPage = () => {
    window.history.back();
  }

  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between gap-y-4 md:gap-y-2 gap-x-2 mt-20 md:mt-72 items-center px-4 md:px-20'>
      <div className='flex justify-center md:justify-start'>
        <svg className="h-40 w-40 md:h-96 md:w-96 text-white" width="64" height="64" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
        </svg>
      </div>
      <div className='mt-6 md:mt-0 text-2xl md:text-4xl text-white text-center md:text-left'>
        <p className='font-bold'>คุณไม่ได้รับสิทธิ์ให้เข้าถึงข้อมูลในหน้านี้ !</p>
        <div className='text-lg md:text-xl mt-4 md:mt-6'>
          ไม่มีอะไรให้คุณดูในหน้านี้ ดังนันให้เรากลับไปยังที่ที่คุณจากมากันเถอะ.
          <p className="text-orange-300">ต้องเป็นคนที่ได้รับสิทธิ์เท่านั้น</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-y-2 md:gap-y-0 gap-x-2 mt-4 font-semibold'>
          <button className='text-lg bg-orange-500 text-white rounded-lg p-2 border' onClick={previousPage}>
            ไปยังหน้าล่าสุด
          </button>
          <button className='text-lg text-gray-500 bg-slate-200 rounded-lg p-2 border' onClick={() => navigate("/")}>
            ไปยังหน้าหลัก
          </button>
        </div>
      </div>
    </div>
  )
}

export default PermissionDenied
