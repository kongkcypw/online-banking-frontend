import React from 'react'
import { useNavigate } from 'react-router-dom';


const PermissionDenied = () => {

  const nevigate = useNavigate();
  const previousPage = () => {
    window.history.back();
  }



  return (
    <div className=' flex justify-between gap-y-2 gap-x-2 mt-72 items-center px-20'>
      <div className=' flex justify-center'>
        <svg className="h-96 w-96 text-white" width="64" height="64" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="5" y="11" width="14" height="10" rx="2" />  <circle cx="12" cy="16" r="1" />  <path d="M8 11v-4a4 4 0 0 1 8 0v4" /></svg>
      </div>
      <div className=' mt-6 text-4xl text-white text-left'>
        <p className=' font-bold'>คุณไม่ได้รับสิทธิ์ให้เข้าถึงข้อมูลในหน้านี้ !</p>
        <div className='text-lg mt-6'>ไม่มีอะไรให้คุณดูในหน้านี้ ดังนันให้เรากลับไปยังที่ที่คุณจากมากันเถอะ.
          <p className=" text-orange-300">ต้องเป็นคนที่ได้รับสิทธิ์เท่านั้น</p>
        </div>
        <div className=' text-center grid grid-cols-4 gap-y-2 gap-x-2  mt-4 font-semibold'>
          <button className=' text-lg text-center bg-orange-500 rounded-lg p-2 border' onClick={previousPage}>
            ไปยังหน้าล่าสุด
          </button>
          <button className=' text-lg text-center text-gray-500 bg-slate-200 rounded-lg mr-5 p-2 border' onClick={() => nevigate("/")}>
            ไปยังหน้าหลัก
          </button>
        </div>
      </div>

    </div>
  )
}

export default PermissionDenied