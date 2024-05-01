import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../Components/Tranfer/UserInfo';
const MoneyNumber = [100, 200, 300, 400, 500, 900, 1000, 2000, 3000];
const Withdraw = () => {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const [amountCheck, setAmountCheck] = useState(false);
  const [firstname, setFirstname] = useState('ชยุตม์');
  const [lastname, setLastname] = useState('ขอดเมชัย');
  const [useraccount, setUseraccount] = useState('4200000');
  const [balance, setBalance] = useState(1000000.00);
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
    return (<button className={`text-black col-span-1  rounded-md ${selectMoney === index ? "bg-orange-400" : "bg-orange-300"}`} onClick={() => handleClick(amountButton, index)}>
      {amountButton}
    </button>)
  };

  return (

    <div className=' text-white mt-8'>
      <div className='text-black'><UserInfo firstname={firstname}
        lastname={lastname}
        useraccount={useraccount}
        balance={balance} /></div>


      <p className='text-2xl font-bold'>ถอนเงิน</p>

      <div className='mt-2 text-black text-left'>
        <p className='border-2 rounded bg-white border-white'>
          <p className='ml-2 text-lg font-bold'> {firstname} {lastname} </p>
          <p className='ml-6 text-gray-600'>{useraccount} </p>
          <p className='ml-6 text-gray-600'> {balance} บาท</p>
        </p>
      </div>

      <p className='mt-2 text-lg text-left'>เลือกจำนวนเงิน</p>
      <div className='grid grid-cols-2 gap-y-2 gap-x-2 mt-2'>
        {MoneyNumber.map((number, index) => (
          <MoneyButton amountButton={number} key={index} index={index} />
        ))}
        <button className={`text-black col-span-1  rounded-md ${selectMoney === 9 ? "bg-orange-400" : "bg-orange-300"}`} onClick={() => handleAmount(9)}>
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
      <div className='flex'>
        <button onClick={() => navigate("/")} type="submit" className="mt-4 px-4 py-2 bg-white border-blue-500 border-2 text-blue-500 rounded hover:bg-blue-200">
          กลับ
        </button>
        {(parseFloat(amount) > 0 && parseFloat(amount) <= balance && parseFloat(amount) % 100 == 0) && (
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={handleSubmit}>
            ต่อไป
          </button>
        )}
      </div>
    </div>
  )
}

export default Withdraw;
