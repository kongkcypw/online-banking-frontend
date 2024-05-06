import React, { useState } from 'react'
import TranferGroup from '../Components/Tranfer/TranferGroup';
import UserInfo from '../Components/Tranfer/UserInfo';

import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Tranfer = () => {
  const [firstname, setFirstname] = useState('ชยุตม์');
  const [lastname, setLastname] = useState('ขอดเมชัย');
  const [useraccount, setUseraccount] = useState('4200000');
  const [balance, setBalance] = useState(1000.00);

  const [accountnum, setAccountnum] = useState('');
  const [amount, setAmount] = useState(0);

  const handleInputChange = (event, setState, type) => {
    if (type === 'number') {
      const newValue = parseFloat(event.target.value);
      setState(newValue);
    }
    else {
      setState(event.target.value);
    }

  };
  const handleTransfer = () => {
    const newBalance = balance - amount

    console.log(newBalance);
    console.log(`AccountNo: ${accountnum}`);
    console.log(`Amount: ${amount}`);
  };

  return (
    <div>
      <UserInfo firstname={firstname}
        lastname={lastname}
        useraccount={useraccount}
        balance={balance}

      />


      <TranferGroup accountnum={accountnum}
        setAccountnum={setAccountnum}
        amount={amount}
        setAmount={setAmount}
        handleInputChange={handleInputChange}
      />

      <div className=' absolute w-full flex justify-between px-8 pb-8 start-0 bottom-0'>
        <div className='flex justify-center items-center gap-x-2'>
          <button
            className="flex justify-center items-center rounded-full bg-red-500 h-8 w-8"
            onClick={handleTransfer}
          >
            <RxCross2 className='text-xl text-white' />
          </button>
          <span className='text-white'>ยกเลิก</span>
        </div>
        <></>
        <div className='flex justify-center items-center gap-x-2'>
          <span className='text-white'>ต่อไป</span>
          <button
            className="flex justify-center items-center rounded-full bg-green-500 h-8 w-8"
            onClick={handleTransfer}
          >
            <FaArrowRight className='text-xl text-white' />
          </button>
        </div>

      </div>

    </div>


  );
};


export default Tranfer