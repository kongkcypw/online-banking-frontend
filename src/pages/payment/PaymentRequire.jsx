import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDataFetch } from '../../hooks/useDataFetch';
import AccountDetail from '../../Components/Topup/AccountDetail';
import { UserContext } from '../../contexts/userContext';
import InputRequire from '../../Components/Payment/InputRequire';
import DestinationDetail from '../../Components/Payment/DestinationDetail';
import InputMoney from '../../Components/Payment/InputMoney';
import { PaymentContext } from '../../contexts/paymentContext';
import NextButton from '../../Components/Payment/NextButton';

const paymentType = [
    { prefix: "TU", type: "topup" },
    { prefix: "BL", type: "bill" }
]

const PaymentRequire = () => {

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

    const { userAccountInfo } = useContext(UserContext);

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const navigate = useNavigate();
    const params = useParams();
    const [prefix, setPrefix] = useState(params.destid.slice(0, 2));

    useEffect(() => {
        if (payDestID && prefix) {
            fetchData();
        }
        else {
            setPayDestID(params.destid);
            setPrefix(params.destid.slice(0, 2));
        }
    }, [payDestID, prefix])

    const fetchData = async () => {
        const bodyParams = {
            destID: payDestID
        }
        const findType = paymentType.find(type => type.prefix === prefix);
        const type = findType.type;
        const response = await POST_DATA_WITH_BODYPARAMS(`/${type}/get-payment-require`, bodyParams);
        setPayType(findType.type);
        setPayRequireInfo(response.require);
        setDestinationInfo(response.info);
    }

    const validateInput = () => {
        navigate("/payment-confirm")
    }

    return (
        <div>
            <AccountDetail info={userAccountInfo} />
            <p className='text-orange-400 text-left my-4 font-bold'>ไปยัง</p>
            <div className='bg-white text-black p-4'>
                {payDestinationInfo
                    ? <DestinationDetail detail={payDestinationInfo} />
                    : null}
                {payRequireInfo
                    ? <InputRequire
                        payRequireInfo={payRequireInfo}
                        payRequireInput={payRequireInput}
                        setPayRequireInput={setPayRequireInput} />
                    : null}
                <InputMoney
                    payAmount={payAmount}
                    payDescription={payDescription}
                    setPayAmount={setPayAmount}
                    setPayDescription={setPayDescription} />
            </div>
            {payType !== null
                ? <NextButton 
                    previousPage={`/${payType}`}
                    nextFuntion={validateInput}
                    textColor={"text-white"}/>
                : null}

        </div>
    )
}

export default PaymentRequire