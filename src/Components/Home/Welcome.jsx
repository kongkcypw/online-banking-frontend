import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

    const navigate = useNavigate();

  return (
    <div className='w-full text-white'>
        <p>ยินดีต้อนรับ</p>

        <button className='mx-4'
                onClick={() => navigate("/login")}>เข้าสู่ระบบ
        </button>
        <button onClick={() => navigate("/register")}>สมัคร
        </button>
    </div>
  )
}

export default Welcome