import React, { useState } from 'react';

const Register = () => {

    const [username, setUsername] = useState('');
    const [tempPassword, setTempPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    };

    const handleSubmit = () => {
        console.log(`Username: ${username}`);
        console.log(`Temp Password: ${tempPassword}`);
        console.log(`Confirm Password: ${confirmPassword}`);
    };

    return (
        <div>
            <p className='text-2xl font-bold'>สมัครบัญชี</p>
            <p className="block text-lg text-left font-medium text-gray-700">อีเมล</p>
            <input
                type="text"
                id="email"
                value={username}
                onChange={(e) => handleInputChange(e, setUsername)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ระบุอีเมลของคุณ"
            />

            <p className="block text-lg text-left font-medium text-gray-700">ตั้งรหัสผ่าน</p>
            <input
                type="text"
                id="temp_password"
                value={tempPassword}
                onChange={(e) => handleInputChange(e, setTempPassword)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ตั้งรหัสผ่าน"
            />

            <p className="block text-lg text-left font-medium text-gray-700">ยืนยันรหัสผ่าน</p>
            <input
                type="text"
                id="confirm_password"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e, setConfirmPassword)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="ยืนยันรหัสผ่าน"
            />

            <div className='flex'>
                <button type="submit" className="mt-4 px-4 py-2 bg-white border-blue-500 border-2 text-blue-500 rounded hover:bg-blue-200" onClick={handleSubmit}>
                    ยกเลิก
                </button>
                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleSubmit}>
                    สมัคร
                </button>
            </div>

        </div>
    )
}

export default Register;
