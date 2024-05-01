import React, { useState } from 'react'
import TranferGroup from '../Components/Tranfer/TranferGroup';
import UserInfo from '../Components/Tranfer/UserInfo';



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
    <div className='mt-6'>
      <UserInfo firstname={firstname}
      lastname={lastname}
      useraccount={useraccount}
      balance={balance}

      />


      <TranferGroup accountnum={accountnum}
        setAccountnum={setAccountnum}
        amount={amount}
        setAmount={setAmount}
        handleInputChange={handleInputChange} />

      <button className="mt-7 px-4 py-2  border-green-200 border-2 text-white rounded bg-green-500" onClick={handleTransfer}>Transfer</button>


    </div>

  );
};


export default Tranfer