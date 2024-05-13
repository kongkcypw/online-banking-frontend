import React, { useContext } from 'react'
import { WithDrawContext } from '../../contexts/withdrawContext'
import NextButton from '../../Components/Payment/NextButton';
import { useDataFetch } from '../../hooks/useDataFetch';
import useAuth from '../../hooks/useAuth';

const WithDrawConfirm = () => {

    const { userAccountInfo } = useAuth();

    const {
        wdAmount,
        brName,
        atmID,
        atmDistance
    } = useContext(WithDrawContext);

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const handleConfirm = async () => {
        try {
            const bodyParams = {
                accountNumber: userAccountInfo.AccountNumber,
                userID: userAccountInfo.UserID,
                transactionType: "WITHDRAW",
                destID: atmID,
                amount: parseFloat(wdAmount),
                description: "",
                transactionFee: 0
            }
            console.log(bodyParams);
            const response = await POST_DATA_WITH_BODYPARAMS("/transaction/insert-withdraw", bodyParams);
            console.log(response);
        } catch (error) {

        }
    }

    return (
        <div>
            <p className='text-white text-2xl font-bold'>ยืนยันการถอนเงิน</p>
            <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
                <div className=' bg-white w-full px-2 rounded-lg drop-shadow-lg bottom-10 -mt-12 text-black'>
                    <div className='flex px-4 pt-4 text-md'>
                        <p>จำนวนเงินที่ถอน: </p>
                        <p className='ml-2'>{wdAmount} บาท</p>
                    </div>
                    <div className='flex justify-start text-left px-4 py-4 text-md'>
                        <p>สาขาตู้ ATM: </p>
                        <div className='flex ml-2'>
                            <p className='my-auto'>สาขา{brName} </p>
                            <p className='ml-1 text-sm my-auto text-slate-600'>({atmDistance} เมตร)</p>
                        </div>
                    </div>
                </div>
            </div>

            <NextButton
                previousPage={"/withdraw"}
                textColor={"text-black"}
                nextFuntion={handleConfirm}
                isAllowNext={true} />
        </div>
    )
}

export default WithDrawConfirm