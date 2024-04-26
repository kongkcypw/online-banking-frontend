import React, { useContext, useState } from 'react'
import { useDataFetch } from '../hooks/useDataFetch';
import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const { storeEmail } = useContext(UserContext);
  const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async() => {
    const bodyParams = {
      email: email,
      password: password
    }
    const response = await POST_DATA_WITH_BODYPARAMS('/login/password', bodyParams );
    if (response.status === 200){
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

  return (
    <div className="text-white">
      <p className="block text-lg text-left font-medium">อีเมล</p>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="ระบุอีเมล"
      />
      <p className="block text-lg text-left font-medium">รหัสผ่าน</p>
      <input
        type="text"
        id="email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="ระบุรหัสผ่าน"
      />
      <button onClick={handleClick}>ยืนยัน</button>
    </div>
  )
}

export default Login