import React, { useContext, useState } from 'react'
import { useDataFetch } from '../hooks/useDataFetch';
import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const Login = () => {

  const navigate = useNavigate();
  const { storeEmail } = useContext(UserContext);
  const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    const bodyParams = {
      email: email,
      password: password
    }
    const response = await POST_DATA_WITH_BODYPARAMS('/login/password', bodyParams);
    if (response.status === 200) {
      console.log(response.message);
      storeEmail(response.email);
      navigate('/');
    }
    else if (response.status === 201) {
      console.log(response.message);
    }
    else if (response.status === 202) {
      console.log(response.message);
    }
  }

  const inputFieldStyling = `w-full bg-transparent border-b-2 mt-1 block py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`

  return (
    <div className="text-white">
      <IoMdArrowRoundBack className='text-2xl' onClick={() => navigate('/')}/>
      <p className='text-xl font-bold text-left mt-8'>เข้าสู่ระบบเพื่อเริ่มใช้งาน</p>

      <div className='pt-8'>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputFieldStyling}
          placeholder="อีเมล"
        />
      </div>

      <div className='pt-8'>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputFieldStyling}
          placeholder="รหัสผ่าน"
        />
      </div>

      <div className='flex max-w-4xl pt-16'>
        <button type="submit" className="w-full mt-4 py-2 bg-white text-blue-500 rounded"
          onClick={handleClick}>
          <span className='font-medium'>เข้าสู่ระบบ</span>
        </button>
      </div>
    </div>
  )
}

export default Login