import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../Components/Tranfer/UserInfo';

import { FaArrowRight } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { UserContext } from '../contexts/userContext';
import NextButton from '../Components/Payment/NextButton';
import { useDataFetch } from '../hooks/useDataFetch';
import AtmDropdown from '../Components/WithDraw/AtmDropdown';
import Loading from '../Components/Global/Loading';
import { WithDrawContext } from '../contexts/withdrawContext';
import { calculateDistanceFromATM } from '../Components/WithDraw/Util';
import AlertModal from '../Components/Global/AlertModal';

const MoneyNumber = [100, 400, 500, 900, 1000];

const Withdraw = () => {

  const { userAccountInfo } = useContext(UserContext);
  const {
    wdAmount,
    selectAmountButton,
    selectCustomAmount,
    setWdAmount,
    userLat,
    userLong,
    atmID,
    brID,
    setSelectAmountButton,
    setSelectCustomAmount,
    setUserLat,
    setUserLong,
  } = useContext(WithDrawContext);
  const { GET_DATA, POST_DATA_WITH_BODYPARAMS } = useDataFetch();

  const navigate = useNavigate();

  const [atmList, setAtmList] = useState([]);
  const [atmListWithDistance, setAtmListWithDistance] = useState([]);

  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchAtmInfo();
    getUserLocation(setUserLat, setUserLong);
  }, [])

  useEffect(() => {
    const distance = calculateDistanceFromATM(userLat, userLong, atmList)
    setAtmListWithDistance(distance)
  }, [userLat, userLong, atmList])

  const fetchAtmInfo = async () => {
    try {
      const response = await GET_DATA("/atm/get-info");
      if (response.status === 200) {
        setAtmList(response.atm);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getUserLocation = async (setLat, setLong) => {
    navigator.geolocation.watchPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }

  const handleClick = (amountButton, index) => {
    setWdAmount(amountButton);
    setSelectCustomAmount(false);
    setSelectAmountButton(index);
  };

  const handleClickCustomAmount = (index) => {
    setWdAmount(0);
    setSelectCustomAmount(true);
    setSelectAmountButton(index);
  };

  const isAtmBalanceEnough = async () => {
    try {
      const response = await POST_DATA_WITH_BODYPARAMS("/atm/get-balance", { atmID: atmID })
      if (response.status === 200) {
        const atmBalance = response.balance;
        if (parseFloat(atmBalance) >= parseFloat(wdAmount)) {
          return true;
        } else {
          return false;
        }
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  const handleSubmit = async() => {
    const atm_status = await isAtmBalanceEnough();
    if (atm_status == true) {
      navigate('/withdraw-confirm')
    } else if (atm_status == false) {
      setErrorMessage("เงินในตู้ ATM ไม่เพียงพอ กรุณาลองใหม่")
      setIsDisplayModal(true)
    }
    else {
      setErrorMessage("ไม่สามารถเข้าถึงตู้ ATM ได้ กรุณาลองใหม่")
      setIsDisplayModal(true)
    }
  };

  const MoneyButton = ({ amountButton, index }) => {
    return (
      <button
        className={`text-white font-medium col-span-1 py-2 rounded-md border-2 border-white
        ${selectAmountButton == index ? "bg-orange-400 bg-opacity-80" : "bg-transparent"}`}
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
        <button className={`text-white font-medium border-2 border-white col-span-1  rounded-md ${selectAmountButton === 9 ? "bg-orange-400 bg-opacity-80" : "bg-transparent"}`}
          onClick={() => handleClickCustomAmount(9)}>
          เลือกจำนวนเงิน
        </button>
      </div>

      {selectCustomAmount === true
        ? <div className='flex flex-col mt-2'>
          <label htmlFor="amount" className="text-left">จำนวนเงิน:</label>
          <div className='flex items-center'>
            <input
              type={"number"}
              id={"amount"}
              value={wdAmount}
              onChange={(e) => setWdAmount(e.target.value)}
              className='text-right w-10/12 bg-transparent border-b-2 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mr-2'
            />บาท
          </div>
          <p className='text-left text-sm mt-2'>ระบุได้เฉพาะจำนวนที่หารด้วย 100 ลงตัวเท่านั้น</p>
        </div>
        : null
      }

      <p className='mt-6 text-lg text-orange-400 text-left'>เลือกตู้ ATM</p>
      {atmListWithDistance
        ? <AtmDropdown atmData={atmListWithDistance} />
        : <Loading />}

      <NextButton
        previousPage={"/"}
        nextFuntion={handleSubmit}
        textColor={"text-white"}
        isAllowNext={(userAccountInfo && parseFloat(wdAmount) > 0 &&
          parseFloat(wdAmount) <= userAccountInfo.Balance &&
          parseFloat(wdAmount) % 100 == 0 && brID !== null)}
      />

      <AlertModal 
        headerMessage={"ขออภัย ไม่สามารถทำรายการถอนเงินได้"}
        bodyMassage={errorMessage}
        isDisplay={isDisplayModal}
        handleCancle={() => navigate("/")}
        handleOk={() => setIsDisplayModal(false)}
        textCancle={"ยกเลิก"}
        textOk={"ตกลง"}/>
    </div>
  )
}

export default Withdraw;
