import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../Components/Tranfer/UserInfo';

import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { UserContext } from '../contexts/userContext';

const MoneyNumber = [100, 200, 300, 400, 500, 900, 1000, 2000, 3000];

const Withdraw = () => {

  const { userAccountInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const [amount, setAmount] = useState(0);
  const [amountCheck, setAmountCheck] = useState(false);
  const [selectMoney, setSelectMoney] = useState(null);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleClick = (amountButton, index) => {
    setAmount(amountButton);
    setAmountCheck(false);
    setSelectMoney(index);
  };

  const handleAmount = (index) => {
    setAmountCheck(true);
    setAmount(0);
    setSelectMoney(index);
  };

  const handleSubmit = () => {
    console.log(`Amount: ${amount}`);
  };

  const MoneyButton = ({ amountButton, index }) => {
    return (
      <button
        className={`text-white font-medium col-span-1 py-2 rounded-md border-2 border-white
        ${selectMoney == index ? "bg-orange-400 bg-opacity-80" : "bg-transparent"}`}
        onClick={() => handleClick(amountButton, index)}>

        {amountButton}
      </button>)
  };

  return (

    <div className=' text-white'>
      <p className='text-left text-lg text-orange-400 mb-2'>สร้างรายการถอนเงินจากบัญชี</p>
      <div className='text-black'>
        <UserInfo />
      </div>

      <p className='mt-6 text-lg text-orange-400 text-left'>เลือกจำนวนเงิน</p>
      <div className='grid grid-cols-2 gap-y-2 gap-x-2 mt-2'>
        {MoneyNumber.map((number, index) => (
          <MoneyButton amountButton={number} key={index} index={index} />
        ))}
        <button className={`text-white font-medium border-2 border-white col-span-1  rounded-md ${selectMoney === 9 ? "bg-orange-400 bg-opacity-80" : "bg-transparent"}`} onClick={() => handleAmount(9)}>
          เลือกจำนวนเงิน
        </button>
      </div>

      {amountCheck === true
        ? <div className='flex flex-col mt-2'>
          <label htmlFor="amount" className="text-left">จำนวนเงิน:</label>
          <div className='flex items-center'>
            <input
              type={"number"}
              id={"amount"}
              value={amount}
              onChange={(e) => handleInputChange(e, setAmount)}
              className='text-right w-10/12 bg-transparent border-b-2 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mr-2'
            />บาท
          </div>
          <p className='text-left text-sm mt-2'>ระบุได้เฉพาะจำนวนที่หารด้วย 100 ลงตัวเท่านั้น</p>
        </div>
        : null
      }

      <div className=' absolute w-full flex justify-between px-8 pb-8 start-0 bottom-0'>
        <div className='flex justify-center items-center gap-x-2'>
          <button
            onClick={() => navigate("/")} type="submit"
            className="flex justify-center items-center rounded-full bg-red-500 h-8 w-8"
          >
            <RxCross2 className='text-xl text-white' />
          </button>
          <span className='text-white'>ยกเลิก</span>
        </div>

        <></>

        {(userAccountInfo && parseFloat(amount) > 0 && parseFloat(amount) <= userAccountInfo.Balance && parseFloat(amount) % 100 == 0) ? (
          <div className='flex justify-center items-center gap-x-2'>
            <span className='text-white'>ต่อไป</span>
            <button
              onClick={handleSubmit}
              className="flex justify-center items-center rounded-full bg-green-500 h-8 w-8"
            >
              <FaArrowRight className='text-xl text-white' />
            </button>
          </div>
        ) : (
          <div className='flex justify-center items-center gap-x-2'>
            <span className='text-slate-400'>ต่อไป</span>
            <button
              className="flex justify-center items-center rounded-full bg-slate-500 h-8 w-8"
            >
              <FaArrowRight className='text-xl text-slate-300' />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Withdraw;
