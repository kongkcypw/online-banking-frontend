import React, { useContext, useState } from 'react';
import { useDataFetch } from '../hooks/useDataFetch';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';

const Register = () => {

    const { storeEmail } = useContext(UserContext);
    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [tempPassword, setTempPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [warning, setWarning] = useState(false);
    const [warningMessage, setWaringMessage] = useState();

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    };

    const handlePassword = (event) => {
        setConfirmPassword(event.target.value);
        validatePassword(tempPassword, event.target.value);
    };

    const validatePassword = (password1, password2) => {
        if (password1 !== password2) {
            setWaringMessage("รหัสผ่านของคุณไม่ตรงกัน");
            setWarning(true);
        }
        else {
            setWaringMessage("");
            setWarning(false);
        }
    }

    const handleSubmit = async () => {
        const bodyParams = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: confirmPassword,
            phoneNumber: phoneNumber
        }
        const response = await POST_DATA_WITH_BODYPARAMS('/register/password', bodyParams);
        console.log(response);

        if(response.status === 200){
            console.log(response.message);
            storeEmail(response.email);
            navigate("/register/pin");
        }
        else if(response.status === 201){
            setWaringMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
            setWarning(true);
        }
        else if(response.status === 202){
            setWaringMessage("บัญชีผู้ใช้นี้มีอยู่แล้ว กรุณาเข้าสู่ระบบ");
            setWarning(true);
        }
    };

    return (
        <div className='text-white'>
            <p className='text-2xl font-bold'>สมัครบัญชี</p>

            <p className="block text-lg text-left font-medium">ชื่อ</p>
            <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => handleInputChange(e, setFirstname)}
                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ระบุชื่อ"
            />

            <p className="block text-lg text-left font-medium">นามสกุล</p>
            <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => handleInputChange(e, setLastname)}
                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ระบุนามสกุล"
            />

            <p className="block text-lg text-left font-medium">เบอร์โทร</p>
            <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => handleInputChange(e, setPhoneNumber)}
                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ระบุเบอร์โทร"
            />

            <p className="block text-lg text-left font-medium">อีเมล</p>
            <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => handleInputChange(e, setEmail)}
                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ระบุอีเมล"
            />

            <p className="block text-lg text-left font-medium">ตั้งรหัสผ่าน</p>
            <input
                type="text"
                id="temp_password"
                value={tempPassword}
                onChange={(e) => handleInputChange(e, setTempPassword)}
                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ตั้งรหัสผ่าน"
            />

            <p className="block text-lg text-left font-medium">ยืนยันรหัสผ่าน</p>
            <input
                type="text"
                id="confirm_password"
                value={confirmPassword}

                onChange={(e) => handlePassword(e)}
                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ยืนยันรหัสผ่าน"
            />

            {warning &&
                <p className=''>{warningMessage}</p>
            }

            <div className='flex'>
                <button type="submit" className="mt-4 px-4 py-2 bg-white border-blue-500 border-2 text-blue-500 rounded hover:bg-blue-200"
                    onClick={handleSubmit}>
                    ยกเลิก
                </button>
                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={handleSubmit}>
                    สมัคร
                </button>
            </div>

        </div>
    )
}

export default Register;
