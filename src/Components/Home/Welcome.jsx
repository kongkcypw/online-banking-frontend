import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate();

  return (
    <div class="absolute start-0 top-0	
    bg-[url('https://i.ibb.co/ry1Kw8v/austin-distel-DS1h-Z4xz-D7-M-unsplash.jpg')] 
    h-full w-full bg-cover bg-center overflow-y-hidden"
    >
      <div className='absolute top-0 w-full h-full bg-gradient-to-b from-black to-zinc-900 opacity-35'>|</div>
      <div className='relative w-full h-full text-white px-4 py-8'>
        <div className='flex justify-between items-end'>
          <p className='font-bold'>Krungthon Previous</p>
          <div className='flex gap-2'>
            <p className='text-sm'>
              ช่วยเหลือ
            </p>
            <p className='text-white text-sm'>|</p>
            <p className='text-sm'>ไทย</p>
          </div>
        </div>
        <div className='absolute bottom-0 h-1/4 mb-12 text-start text-2xl font-bold'>
          <p>สวัสดี</p>
          <p>ยินดีต้อนรับสู่</p>
          <p>บริการโมบายเเบงก์กิ้ง</p>
        </div>
        <div className='absolute bottom-0 flex flex-col w-full mb-20 gap-4 pr-8'>
          <button className='bg-orange-400 bg-opacity-95' onClick={() => navigate("/login")}>
            <p className='my-1 font-bold'
            >เข้าสู่ระบบ
            </p>
          </button>
          <button className='text-orange-400 font-bold' onClick={() => navigate("/register/user")}>สมัคร
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome