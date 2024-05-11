import React, { useContext, useState } from 'react'
import { useDataFetch } from '../hooks/useDataFetch';
import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const Login = () => {

  const navigate = useNavigate();
  const { storeUser } = useContext(UserContext);
  const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [warning, setWarning] = useState(false);
  const [warningMessage, setWaringMessage] = useState(null);

  const handleClick = async () => {
    const bodyParams = {
      email: email,
      password: password
    }
    const response = await POST_DATA_WITH_BODYPARAMS('/login/password', bodyParams);
    if (response.status === 200) {
      console.log(response.message);
      console.log(response);
      storeUser(response.email, response.userID, response.permissionLevel);
      navigate('/');
    }
    else if (response.status === 201) {
      setWarning(true);
      setWaringMessage("ข้อมูลไม่ครบถ้วน")
      console.log(response.message);
    }
    else if (response.status === 202) {
      setWarning(true);
      setWaringMessage("อีเมลหรือรหัสผ่านไม่ถูกต้อง")
      console.log(response.message);
    }
  }

  const inputFieldStyling = `w-full bg-transparent border-b-2 mt-1 block py-2 focus:outline-none focus:ring-indigo-500 focus:border-orange-400`

  return (
    <div className="text-black">
      <p className='text-xl px-2 font-bold text-left mt-8 text-white'>เข้าสู่ระบบเพื่อเริ่มใช้งาน</p>
      <p className='text-xl px-2 font-bold text-left mt-1 text-orange-400'>Krungthon Previous</p>
      <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
        <div className=' bg-white w-full px-2 pb-2 rounded-lg drop-shadow-lg bottom-10 -mt-12'>
          <div className='pt-4 mx-4'>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputFieldStyling}
              placeholder="อีเมล"
            />
          </div>

          <div className='pt-2 mx-4'>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputFieldStyling}
              placeholder="รหัสผ่าน"
            />
          </div>
          {warning === true
            ? <p className='text-orange-400 py-3'>{warningMessage}</p>
            : <p className='py-3'></p>
          }
        </div>
        <div className='flex max-w-4xl pt-4'>
          <button type="submit" className="w-full mt-4 py-2 bg-orange-400 text-white rounded"
            onClick={handleClick}>
            <span className='font-medium'>เข้าสู่ระบบ</span>
          </button>
        </div>
        <div className='flex pt-2 justify-center text-slate-600'>
          <p className=''>ยังไม่มีบัญชี ?</p>
          <p className='ml-1 underline'>สมัครเลย</p>
        </div>
      </div>
    </div>
  )
}

export default Login