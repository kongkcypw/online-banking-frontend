import React, { useContext } from 'react'
import { RegisterContext } from '../../contexts/registerContext'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useDataFetch } from '../../hooks/useDataFetch';
import { UserContext } from '../../contexts/userContext';

const ConfirmRegister = () => {

  const navigate = useNavigate();

  const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();
  const { storeUser } = useContext(UserContext);

  const {
    // First Page
    regFirstName,
    regLastName,
    regEmail,
    regPassword,
    regPhoneNumber,
    // Second Page
    regIdCard,
    regBirth,
    regAddress,
    regBalance,
    regBranchNumber,
    regClosestBranchID,
  } = useContext(RegisterContext);

  const TextList = ({ title, content }) => {
    return (
      <div className='pt-4 mx-4 text-left flex'>
        <p className='text-slate-500'>{title}: </p>
        <p className='ml-2'>{content}</p>
      </div>
    )
  }

  const handleClick = async() => {
    const bodyParams = {
      user: {
        email: regEmail,
        password: regPassword,
        firstname: regFirstName,
        lastname: regLastName, 
        idCard: regIdCard, 
        phoneNumber: regPhoneNumber, 
        address: regAddress, 
        birth: regBirth
      },
      account: {
        branchNumber: regBranchNumber,
        branchID: regClosestBranchID,
        bankID: "BK0001",
        balance: regBalance
      }
    }
    const response = await POST_DATA_WITH_BODYPARAMS('/register/confirm', bodyParams);
    console.log(response);
    if(response.status === 200){
      storeUser(response.email, response.userID);
      navigate("/register/pin");
    }
  }

  return (
    <div className='text-black'>
      <p className='text-xl px-2 font-bold text-left -mt-4 text-white'>เปิดบัญชี eSavings</p>
      <p className='text-xl px-2 font-bold text-left mt-1 text-orange-400'>ตรวจสอบข้อมูล</p>
      <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
        <div className=' bg-white w-full px-2 pb-2 rounded-lg drop-shadow-lg bottom-10 -mt-12'>
          <TextList title="ชื่อ" content={regFirstName} />
          <TextList title="นามสกุล" content={regLastName} />
          <TextList title="อีเมล" content={regEmail} />

          <TextList title="เลขบัตรประชาชน" content={regIdCard} />
          <TextList title="วันเกิด" content={regBirth} />
          <TextList title="ที่อยู่" content={regAddress} />
          <TextList title="เงินฝากเริ่มต้น" content={regBalance} />
        </div>
        <p className='text-slate-500 text-left px-2 pt-4'>แจ้งเตือน: หากมีข้อมูลที่ไม่ถูกต้อง สามารถย้อนกลับเพื่อแก้ไขได้ </p>

        <div className='flex absolute max-w-4xl top-[560px] left-8 gap-2' onClick={() => navigate("/register/account")}>
                    <FaArrowLeft className='my-auto bg-orange-400 text-white text-3xl rounded-full p-1' />
                    <span className='font-medium text-slate-600 my-auto'>กลับ</span>
                </div>

        <div className='flex absolute max-w-4xl top-[560px] right-8 gap-2' onClick={() => handleClick()}>
          <span className='font-medium text-slate-600 my-auto'>ต่อไป</span>
          <FaArrowRight className='my-auto bg-orange-400 text-white text-3xl rounded-full p-1' />
        </div>
      </div>
    </div>
  )
}

export default ConfirmRegister