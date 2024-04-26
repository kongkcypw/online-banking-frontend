import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDataFetch } from '../hooks/useDataFetch';

const CreatePin = () => {

  const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

  const navigate = useNavigate();

  const [firstPin, setFirstPin] = useState('');
  const [secondPin, setSecondPin] = useState('');
  const [pin, setPin] = useState();

  const validatePin = () => {
    
  }

  const handleOnclick = async() => {
    const localStorageData = JSON.parse(window.localStorage.getItem(import.meta.env.VITE_LOCAL_STORAGE_NAME));
    console.log(localStorageData);
    const bodyParams = {
      email: localStorageData.email,
      pin: secondPin
    }
    const response = await POST_DATA_WITH_BODYPARAMS('/register/pin', bodyParams);
    console.log(response)

    if(response.status === 200) {
      navigate('/');
    }
  }

  return (
    <div className='text-white'>

      <p className='text-2xl font-bold'>ตั้ง PIN</p>

      <p className="block text-lg text-left font-medium"></p>
      <input
        type="text"
        id="firstpin"
        value={firstPin}
        onChange={(e) => setFirstPin(e.target.value)}
        className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="ระบุ Pin"
      />

      <input
        type="text"
        id="secondpin"
        value={secondPin}
        onChange={(e) => setSecondPin(e.target.value)}
        className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="ยืนยัน Pin อีกครั้ง"
      />

      <button onClick={handleOnclick}>ยืนยัน</button>

    </div>
  )
}

export default CreatePin