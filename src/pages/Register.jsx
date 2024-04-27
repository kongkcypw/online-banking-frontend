import React, { useContext, useState, useCallback } from 'react';
import { useDataFetch } from '../hooks/useDataFetch';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
import { IoMdArrowRoundBack } from "react-icons/io";

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
    const [warningMessage, setWaringMessage] = useState(null);

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

        if (response.status === 200) {
            console.log(response.message);
            storeEmail(response.email);
            navigate("/register/pin");
        }
        else if (response.status === 201) {
            setWaringMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
            setWarning(true);
        }
        else if (response.status === 202) {
            setWaringMessage("บัญชีผู้ใช้นี้มีอยู่แล้ว กรุณาเข้าสู่ระบบ");
            setWarning(true);
        }
    };

    const inputFieldStyling = `w-full bg-transparent border-b-2 mt-1 block py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`
    const inputPasswordStyling = ``;

    return (
        <div className='text-white px-2 min-h-screen'>

            <IoMdArrowRoundBack  className='text-2xl' onClick={() => navigate('/')}/>

            <p className='text-xl font-bold text-left mt-8'>สมัครบัญชีเพื่อเริ่มใช้งาน</p>


            <div className='pt-8'>
                <input
                    type={"text"}
                    id={"firstname"}
                    value={firstname}
                    onChange={(e) => handleInputChange(e, setFirstname)}
                    className={inputFieldStyling}
                    placeholder="ชื่อ"
                />
            </div>


            <div className='pt-2'>
                <input
                    type="text"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => handleInputChange(e, setLastname)}
                    className={inputFieldStyling}
                    placeholder="นามสกุล"
                />
            </div>

            <div className='pt-2'>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => handleInputChange(e, setPhoneNumber)}
                    className={inputFieldStyling}
                    placeholder="เบอร์มือถือ"
                />
            </div>

            <div className='pt-2'>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => handleInputChange(e, setEmail)}
                    className={inputFieldStyling}
                    placeholder="อีเมล"
                />
            </div>

            <div className='pt-2'>
                <input
                    type="password"
                    id="temp_password"
                    value={tempPassword}
                    onChange={(e) => handleInputChange(e, setTempPassword)}
                    className={inputFieldStyling}
                    placeholder="ตั้งรหัสผ่าน"
                />
            </div>

            <div className='pt-2'>
                <input
                    type="password"
                    id="confirm_password"
                    value={confirmPassword}
                    onChange={(e) => handlePassword(e)}
                    className={inputFieldStyling}
                    placeholder="ยืนยันรหัสผ่าน"
                />
            </div>

            {warning === true
                ? <p className='text-red-400 pt-6'>{warningMessage}</p>
                : null
            }

            <div className='flex max-w-4xl pt-16'>
                <button type="submit" className="w-full mt-4 py-2 bg-white text-blue-500 rounded"
                    onClick={handleSubmit}>
                    <span className='font-medium'>ถัดไป</span>
                </button>
            </div>

        </div>
    )
}

export default Register;
