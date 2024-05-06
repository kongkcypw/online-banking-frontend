import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDataFetch } from '../../hooks/useDataFetch';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { UserContext } from '../../contexts/userContext';

const CreatePin = () => {

  const { getUserData } = useContext(UserContext);
  const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

  const navigate = useNavigate();

  const [firstPin, setFirstPin] = useState('');
  const [secondPin, setSecondPin] = useState('');

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWaringMessage] = useState(null);

  const validatePin = async () => {
    if (firstPin.length !== 6 || secondPin.length !== 6) {
      setWaringMessage("โปรดระบุ PIN ที่มีความยาว 6 ตัว")
      setWarning(true)
      return false;
    }
    else if (firstPin !== '' && secondPin !== '' && firstPin !== secondPin) {
      setWaringMessage("PIN ไม่ตรงกัน กรุณาตรวจสอบ")
      setWarning(true)
      return false;
    }
    else if (firstPin !== '' && secondPin !== '' && firstPin === secondPin) {
      setWarning(false);
      return true;
    }
  }

  const handleOnclick = async () => {
    const isPinValid = await validatePin();
    if(isPinValid === true){
      const { email } = getUserData();
      const bodyParams = {
        email: email,
        pin: secondPin
      }
      const response = await POST_DATA_WITH_BODYPARAMS('/register/pin', bodyParams);
      console.log(response)
  
      if (response.status === 200) {
        navigate('/');
      }
    }
  }

  const inputFieldStyling = `w-full bg-transparent border-b-2 mt-1 block py-2 focus:outline-none focus:ring-indigo-500 focus:border-orange-400`

  return (
    <div className='text-black'>

      <p className='text-xl px-2 font-bold text-left mt-8 text-white'>ตั้งค่า PIN สำหรับการทำธุรกรรม</p>
      <p className='text-xl px-2 font-bold text-left mt-1 text-orange-400'>ขั้นตอนสุดท้าย</p>
      <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
        <div className=' bg-white w-full px-2 pb-2 rounded-lg drop-shadow-lg bottom-10 -mt-12'>
          <div className='pt-4 mx-4'>
            <input
              type="password"
              id="firstpin"
              value={firstPin}
              onChange={(e) => setFirstPin(e.target.value)}
              className={inputFieldStyling}
              placeholder="ระบุ Pin"
            />
          </div>

          <div className='pt-4 mx-4'>
            <input
              type="password"
              id="secondpin"
              value={secondPin}
              onChange={(e) => setSecondPin(e.target.value)}
              className={inputFieldStyling}
              placeholder="ยืนยัน Pin อีกครั้ง"
            />
          </div>

          {warning === true
            ? <p className='text-orange-400 py-3'>{warningMessage}</p>
            : <p className='py-2'></p>
          }
        </div>

        <p className='text-slate-500 text-left px-2 pt-4'>แจ้งเตือน: โปรดตั้ง PIN เป็นตัวเลขที่มีความยาว 6 ตัว </p>
      </div>

      <div className='flex max-w-4xl pt-16'>
        <button type="submit" className="w-full mt-4 py-2 bg-white text-blue-500 rounded"
          onClick={handleOnclick}>
          <span className='font-medium'>ยืนยัน</span>
        </button>
      </div>

      <div className='flex absolute max-w-4xl top-[760px] right-8 gap-2' onClick={() => handleOnclick()}>
        <span className='font-medium text-slate-600 my-auto'>ต่อไป</span>
        <FaArrowRight className='my-auto bg-orange-400 text-white text-3xl rounded-full p-1' />
      </div>

    </div>
  )
}

export default CreatePin