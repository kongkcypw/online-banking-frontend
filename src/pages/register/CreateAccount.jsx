import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

const CreateAccount = () => {

    const navigate = useNavigate();

    return (
        <div className='text-black min-h-screen'>

            <div className={`fixed block w-full top-0 start-0 py-2 pt-3 z-10 bg-gradient-to-r from-slate-700 to-slate-800`}>
                <div className="grid grid-cols-3 items-center">
                    <Link to="/register/user">
                        <div className="col-span-1 flex justify-start ms-2">
                            <FaArrowLeft className="text-xl text-white m-1" />
                        </div>
                    </Link>
                </div>
            </div>

            <p className='text-2xl pt-4 px-2 font-bold text-left mt-8 text-white'>Krungthon-eSavings</p>
            <p className='text-2xl px-2 text-left mt-1 text-white'>Account</p>

            <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
                <div className=' bg-white w-full px-2 pb-2 rounded-lg drop-shadow-lg bottom-10 -mt-12 text-slate-700'>
                    <p className='text-xl px-2 pt-6 text-left mt-1 '>เปิดบัญชีกับเรา</p>
                    <p className='text-md px-2 pt-4 text-left font-light'>บริการเปิดบัญชีเงินฝากออมทรัพย์อิเล็กทรอนิกส์แบบไม่มีสมุดคู่ฝากด้วยตัวเอง สะดวกทุกธุรกรรม</p>
                    <p className='text-md px-2 pt-6 text-left font-light'>เงื่อนไขการเปิดบัญชี:</p>
                    <p className='text-md px-2 pt-4 text-left font-light'>1. บุคคลธรรมดาสัญชาติไทย อายุ 12 ปีขึ้นไป</p>
                    <p className='text-md px-2 pt-4 text-left font-light'>2. เจ้าของข้อมูลจะต้องเป็นชื่อเดียวกับเจ้าของบัญชีเงินฝากเท่านั้น</p>
                    <p className='text-md px-2 pt-2 text-left font-light'>3. ขออนุญาตเข้าถึงตำแหน่งมือถือผู้ใช้ เพื่อเลือกสาขาธนาคารที่ใกล้ที่สุด</p>
                    <p className='text-md px-2 pt-2 text-left font-light'>4. เปิดบัญชีด้วยเงินฝากขั้นต่ำอย่างน้อย 500 บาท</p>
                    <p className='text-md px-2 pt-6 text-left font-light'>แจ้งเตือน: การรับจ้างเปิดบัญชี หรือยินยอมให้ผู้อื่นใชับัญชีมีโทษทางกฏหมาย</p>
                </div>
                <p className='text-md text-center px-2 pt-4 underline font-light text-slate-500'>รายละเอียดเพิ่มเติม</p>

                <div className='bg-orange-400 mt-24 text-white py-2 mx-16 rounded-full' onClick={() => navigate("/register/account")}>
                    <p className='font-semibold'>เปิดบัญชี</p>
                </div>

            </div>
        </div>
    )
}

export default CreateAccount;