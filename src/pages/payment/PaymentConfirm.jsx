import React, { useContext } from 'react'
import { PaymentContext } from '../../contexts/paymentContext'
import { UserContext } from '../../contexts/userContext';
import NextButton from '../../Components/Payment/NextButton';
import DestinationDetail from '../../Components/Payment/DestinationDetail';
import PayFlow from '../../Components/Payment/PayFlow';
import { useDataFetch } from '../../hooks/useDataFetch';

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

  const { userAccountInfo } = useContext(UserContext);
  const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

  const handleConfirmPayment = async () => {
    const bodyParams = {
      accountNumber: userAccountInfo.AccountNumber,
      userID: userAccountInfo.UserID, 
      transactionType: payType.toUpperCase(), 
      destinationID: payDestID, 
      amount: payAmount, 
      description: payDescription, 
      transactionFee: 0
    }
    console.log(bodyParams);
    const response = await POST_DATA_WITH_BODYPARAMS("/transaction/insert", bodyParams);
    
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
            payRequireInfo={payRequireInfo}
            payRequireInput={payRequireInput}
            payAmount={payAmount}
            payDescription={payDescription} />
        </div>
      </div>
      <NextButton
        previousPage={`/payment/${payDestID}`}
        nextFuntion={() => handleConfirmPayment()} 
        textColor={`text-black`}/>
    </div>
  )
}

export default PaymentConfirm