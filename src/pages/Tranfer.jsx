import React, { useContext, useEffect, useState } from 'react'
import TranferGroup from '../Components/Tranfer/TranferGroup';
import UserInfo from '../Components/Tranfer/UserInfo';
import NextButton from '../Components/Payment/NextButton';
import { PaymentContext } from '../contexts/paymentContext';
import { useDataFetch } from '../hooks/useDataFetch';
import { useNavigate } from 'react-router-dom';
import AlertModal from '../Components/Global/AlertModal';

const Tranfer = () => {

  const {
    // URL
    payType,
    payDestID,
    setPayType,
    setPayDestID,
    // DB
    payDestinationInfo,
    payRequireInfo,
    setDestinationInfo,
    setPayRequireInfo,
    // User
    payRequireInput,
    payAmount,
    payDescription,
    setPayRequireInput,
    setPayAmount,
    setPayDescription
  } = useContext(PaymentContext);

  const navigate = useNavigate();
  const { GET_DATA, POST_DATA_WITH_BODYPARAMS } = useDataFetch();
  const [bankData, setBankData] = useState(null);
  const [isInputValid, setIsInputValid] = useState(false);
  const [displayAlertModal, setDisplayAlertModal] = useState(false);

  useEffect(() => {
    fetchBankData();
  }, [])

  // Validate Input
  useEffect(() => {
    if (payDestinationInfo &&
      payDestinationInfo["Image"] &&
      payDestinationInfo["BankName"] &&
      payDestID.length === 10 &&
      payAmount > 0) {
      setIsInputValid(true);
    }
    else {
      setIsInputValid(false);
    }
  }, [payDestinationInfo, payDestID, payAmount])

  const fetchBankData = async () => {
    const response = await GET_DATA("/bank/get-all");
    console.log(response);
    if (response.status === 200) {
      setPayType("transfer")
      setBankData(response.bank)
    }
  }

  const handleInputChange = (event, setState, type) => {
    if (type === 'number') {
      const newValue = parseFloat(event.target.value);
      setState(newValue);
    }
    else {
      setState(event.target.value);
    }

  };

  const handleTransfer = async () => {
    console.log(payDestinationInfo)
    console.log(`AccountNo: ${payDestID}`);
    console.log(`Amount: ${payAmount}`);
    // navigate("/payment-confirm");

    const bodyParams = {
      accountNumber: payDestID,
      bankID: payDestinationInfo["BankID"]
    }
    const response = await POST_DATA_WITH_BODYPARAMS("/account/get-name", bodyParams);
    console.log(response);
    // // Validate and fetch Destination Account
    if (response.status === 200) {
      setDestinationInfo(prevState => ({
        ...prevState,
        ["FirstName"]: response.accountInfo.FirstName,
        ["LastName"]: response.accountInfo.LastName,
      }));
      navigate("/payment-confirm");
    }
    else {
      setDisplayAlertModal(true);
    }


  };

  return (
    <div>
      <UserInfo />
      {bankData
        ? <TranferGroup
          accountnum={payDestID}
          setAccountnum={setPayDestID}
          amount={payAmount}
          setAmount={setPayAmount}
          handleInputChange={handleInputChange}
          bankData={bankData}
          payDescription={payDescription}
          setPayDescription={setPayDescription}
        />
        : null}
      <NextButton
        previousPage={"/"}
        nextFuntion={handleTransfer}
        textColor={"text-white"}
        isAllowNext={isInputValid} />
      <AlertModal
        isDisplay={displayAlertModal}
        headerMessage={"ขออภัย ไม่สามารถโอนเงินได้"}
        bodyMassage={"ไม่พบเลขบัญชีในระบบ กรุณาตรวจสอบและทำรายการใหม่อีกครั้ง"}
        handleCancle={() => setDisplayAlertModal(false)}
        handleOk={() => setDisplayAlertModal(false)} />
    </div>
  );
};


export default Tranfer