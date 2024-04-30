import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDataFetch } from '../hooks/useDataFetch';
import { IoMdArrowRoundBack } from "react-icons/io";

const CreatePin = () => {

  const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

  const navigate = useNavigate();

  const [firstPin, setFirstPin] = useState('');
  const [secondPin, setSecondPin] = useState('');
  const [pin, setPin] = useState();

  const validatePin = () => {

  }

  const handleOnclick = async () => {
    const localStorageData = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));
    console.log(localStorageData);
    const bodyParams = {
      email: localStorageData.email,
      pin: secondPin
    }
    const response = await POST_DATA_WITH_BODYPARAMS('/register/pin', bodyParams);
    console.log(response)

    if (response.status === 200) {
      navigate('/');
    }
  }

  const inputFieldStyling = `w-full bg-transparent border-b-2 mt-1 block py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`

  return (
    <div className='text-white'>

      <IoMdArrowRoundBack className='text-2xl' onClick={() => navigate('/')} />

      <p className='text-xl font-bold text-left mt-8'>ตั้งค่า PIN สำหรับการทำธุรกรรม </p>


      <div className='pt-8'>
        <input
          type="password"
          id="firstpin"
          value={firstPin}
          onChange={(e) => setFirstPin(e.target.value)}
          className={inputFieldStyling}
          placeholder="ระบุ Pin"
        />
      </div>

      <div className='pt-4'>
        <input
        type="password"
        id="secondpin"
        value={secondPin}
        onChange={(e) => setSecondPin(e.target.value)}
          className={inputFieldStyling}
          placeholder="ยืนยัน Pin อีกครั้ง"
        />
      </div>

      <div className='flex max-w-4xl pt-16'>
        <button type="submit" className="w-full mt-4 py-2 bg-white text-blue-500 rounded"
          onClick={handleOnclick}>
          <span className='font-medium'>ยืนยัน</span>
        </button>
      </div>

    </div>
  )
}

export default CreatePin