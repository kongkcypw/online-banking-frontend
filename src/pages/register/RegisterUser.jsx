import React, { useContext, useState, useCallback } from 'react';
import { useDataFetch } from '../../hooks/useDataFetch';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { RegisterContext } from '../../contexts/registerContext';

const Register = () => {

    const { storeUser } = useContext(UserContext);
    const { regFirstName,
        regLastName,
        regPhoneNumber,
        regEmail,
        regPassword,
        setStateFirstRegPage } = useContext(RegisterContext);

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const navigate = useNavigate();

    // State for form input
    const [firstname, setFirstname] = useState(regFirstName);
    const [lastname, setLastname] = useState(regLastName);
    const [phoneNumber, setPhoneNumber] = useState(regPhoneNumber);
    const [email, setEmail] = useState(regEmail);
    const [tempPassword, setTempPassword] = useState(regPassword);
    const [confirmPassword, setConfirmPassword] = useState(regPassword);

    // Warning state
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
            phoneNumber: phoneNumber,
            email: email,
            password: confirmPassword
        }

        const response = await POST_DATA_WITH_BODYPARAMS('/register/password', bodyParams);
        console.log(response);

        if (response.status === 200) {
            console.log(response.message);
            setStateFirstRegPage(bodyParams)
            // storeUser(response.email, response.userID);
            navigate("/register/info");
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

    const inputFieldStyling = `w-full bg-transparent border-b-2 mt-1 block py-2 focus:outline-none focus:ring-indigo-500 focus:border-orange-400`

    return (
        <div className='text-black min-h-screen'>

            <p className='text-xl px-2 font-bold text-left mt-8 text-white'>สมัครบริการ Krungthon Previous</p>
            <p className='text-xl px-2 font-bold text-left mt-1 text-orange-400'>กรอกข้อมูลส่วนตัว</p>

            <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
                <div className=' bg-white w-full px-2 pb-2 rounded-lg drop-shadow-lg bottom-10 -mt-12'>

                    <div className='pt-4 mx-4'>
                        <input
                            type={"text"}
                            id={"firstname"}
                            value={firstname}
                            onChange={(e) => handleInputChange(e, setFirstname)}
                            className={inputFieldStyling}
                            placeholder="ชื่อ"
                        />
                    </div>


                    <div className='pt-2 mx-4'>
                        <input
                            type="text"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => handleInputChange(e, setLastname)}
                            className={inputFieldStyling}
                            placeholder="นามสกุล"
                        />
                    </div>

                    <div className='pt-2 mx-4'>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => handleInputChange(e, setPhoneNumber)}
                            className={inputFieldStyling}
                            placeholder="เบอร์มือถือ"
                        />
                    </div>

                    <div className='pt-2 mx-4'>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => handleInputChange(e, setEmail)}
                            className={inputFieldStyling}
                            placeholder="อีเมล"
                        />
                    </div>

                    <div className='pt-2 mx-4'>
                        <input
                            type="password"
                            id="temp_password"
                            value={tempPassword}
                            onChange={(e) => handleInputChange(e, setTempPassword)}
                            className={inputFieldStyling}
                            placeholder="ตั้งรหัสผ่าน"
                        />
                    </div>

                    <div className='pt-2 mx-4'>
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
                        ? <p className='text-orange-400 py-3'>{warningMessage}</p>
                        : <p className='py-6'></p>
                    }


                </div>

                <p className='text-slate-500 text-left px-2 pt-4'>แจ้งเตือน: อีเมลและรหัสผ่านใช้สำหรับการระบุตัวตนในการเข้าใช้งานบริการ Krungthon Previous </p>

                <div className='flex absolute max-w-4xl top-[560px] left-8 gap-2' onClick={() => navigate("/")}>
                    <FaArrowLeft className='my-auto bg-orange-400 text-white text-3xl rounded-full p-1' />
                    <span className='font-medium text-slate-600 my-auto'>กลับ</span>
                </div>

                <div className='flex absolute max-w-4xl top-[560px] right-8 gap-2' onClick={handleSubmit}>
                    <span className='font-medium text-slate-600 my-auto'>ต่อไป</span>
                    <FaArrowRight className='my-auto bg-orange-400 text-white text-3xl rounded-full p-1' />
                </div>
            </div>


        </div>
    )
}

export default Register;
