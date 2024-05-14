import React, { useContext, useState } from 'react'
import { PaymentContext } from '../../contexts/paymentContext'
import { UserContext } from '../../contexts/userContext';
import NextButton from '../../Components/Payment/NextButton';
import DestinationDetail from '../../Components/Payment/DestinationDetail';
import PayFlow from '../../Components/Payment/PayFlow';
import { useDataFetch } from '../../hooks/useDataFetch';
import AlertModal from '../../Components/Global/AlertModal';
import { useNavigate } from 'react-router-dom';
import Notify from '../../Components/Global/Notify';
import BackButton from '../../Components/Payment/BackButton';

const PaymentConfirm = () => {

  const {
    // URL
    payType,
    payDestID,
    // DB
    payDestinationInfo,
    payRequireInfo,
    // User
    payRequireInput,
    payAmount,
    payDescription,
  } = useContext(PaymentContext);

  const navigate = useNavigate();

  const { userAccountInfo } = useContext(UserContext);
  const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(null);
  const [startBouceAnimate, setStartBouceAnimate] = useState(false);

  const handleConfirmPayment = async () => {
    try {
      const bodyParams = {
        accountNumber: userAccountInfo.AccountNumber,
        userID: userAccountInfo.UserID,
        transactionType: payType.toUpperCase(),
        destID: payDestID,
        amount: parseFloat(payAmount),
        description: payDescription,
        transactionFee: 0
      }
      const response = await POST_DATA_WITH_BODYPARAMS("/transaction/insert", bodyParams);
      console.log(response);
      setIsPaymentSuccess(true)
    } catch (error) {
      console.log(error.response.status)
      setIsPaymentSuccess(false)
      // await bouceNotification();
    }
  }

  const bouceNotification = async () => {
    setStartBouceAnimate(true)
    setTimeout(() => {
      setStartBouceAnimate(false);
    }, 1000);
  }

  return (
    <div>
      <p className='text-white text-2xl font-bold'>ตรวจสอบข้อมูล</p>
      <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
        <div className=' bg-white w-full px-2 rounded-lg drop-shadow-lg bottom-10 -mt-12 text-slate-700'>
          <PayFlow
            srcInfo={userAccountInfo}
            destType={payType}
            destInfo={payDestinationInfo}
            payDestID={payDestID}
            payRequireInfo={payRequireInfo}
            payRequireInput={payRequireInput}
            payAmount={payAmount}
            payDescription={payDescription} />
        </div>
      </div>
      {isPaymentSuccess === null &&
        <NextButton
          previousPage={payType === "transfer" ? `/transfer` : `/payment/${payDestID}`}
          nextFuntion={() => handleConfirmPayment()}
          textColor={`text-black`}
          isAllowNext={true} />
      }
      {
        (isPaymentSuccess !== null && isPaymentSuccess === true)
          ?
          <div>
            <Notify
              AccountNumber={userAccountInfo.AccountNumber}
              Amount={payAmount}
            />
            <BackButton BackHome={"/"} BackAgain={"/topup"}/>
          </div>

          : <AlertModal />}
    </div>
  )
}

export default PaymentConfirm