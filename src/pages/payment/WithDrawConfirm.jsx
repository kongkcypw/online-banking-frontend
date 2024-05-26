import React, { useContext, useState } from 'react'
import { WithDrawContext } from '../../contexts/withdrawContext'
import NextButton from '../../Components/Payment/NextButton';
import { useDataFetch } from '../../hooks/useDataFetch';
import useAuth from '../../hooks/useAuth';
import Notify from '../../Components/Global/Notify';
import BackButton from '../../Components/Payment/BackButton';
import AlertModal from '../../Components/Global/AlertModal';

const KPreviousImage = "https://i.ibb.co/C1c2QcN/Krungthon-Previous.png KrungthonPrevious"

const WithDrawConfirm = () => {

    const { userAccountInfo, getAccountInfo } = useAuth();

    const {
        wdAmount,
        brName,
        atmID,
        atmDistance
    } = useContext(WithDrawContext);

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();
    const [isPaymentSuccess, setIsPaymentSuccess] = useState(null);

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
            getAccountInfo();
            setIsPaymentSuccess(true);
        } catch (error) {
            console.log(error);
            setIsPaymentSuccess(false)
        }
    }

    return (
        <div>

            {isPaymentSuccess === null &&
                <div>
                    <p className='text-white text-2xl font-bold'>ยืนยันการถอนเงิน</p>
                    <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
                        <div className=' bg-white w-full px-2 rounded-lg drop-shadow-lg bottom-10 -mt-12 text-black'>
                            <div className='flex justify-start text-left px-4 pt-4 text-md'>
                                <p>สาขาตู้ ATM: </p>
                                <div className='flex ml-2'>
                                    <p className='my-auto'>สาขา{brName} </p>
                                    <p className='ml-1 text-sm my-auto text-slate-600'>({atmDistance} เมตร)</p>
                                </div>
                            </div>
                            <div className='flex px-4 pt-4 text-md'>
                                <p>จำนวนเงินที่ถอน: </p>
                                <p className='ml-2'>{wdAmount} บาท</p>
                            </div>
                            <div className='flex px-4 py-4 text-md'>
                                <p>ค่าธรรมเนียม: </p>
                                <p className='ml-2'>0.00 บาท</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {isPaymentSuccess === true &&
                <div>
                    <p className='text-white text-2xl font-bold'>ถอนเงินสำเร็จ</p>

                    <div className='absolute bg-white start-0 w-full px-4 mt-24 min-h-screen'>
                        <div className=' bg-white w-full px-2 rounded-lg drop-shadow-lg bottom-10 -mt-12 text-slate-700'>
                            <div className='text-left grid grid-cols-4 px-4 pt-8'>
                                <div className='col-span-1'>
                                    <img
                                        src={KPreviousImage}
                                        className='rounded-full w-14 h-14' />
                                </div>
                                <div className='col-span-3'>
                                    <p>{userAccountInfo.FirstName} {userAccountInfo.LastName}</p>
                                    <p>{userAccountInfo.AccountNumber}</p>
                                    <p>{userAccountInfo.Balance} บาท</p>
                                </div>
                            </div>
                            <div className='flex justify-between pt-12 px-4'>
                                <p>สาขา ATM:</p>
                                <p>{brName}</p>
                            </div>
                            <div className='flex justify-between pt-2 px-4'>
                                <p>จำนวนเงินที่ถอน</p>
                                <div className='flex'>
                                    <p>{parseFloat(wdAmount)}</p>
                                    <p className='ml-2'>บาท</p>
                                </div>
                            </div>
                            <div className='flex justify-between pt-2 px-4 pb-8'>
                                <p>ค่าธรรมเนียม</p>
                                <p>0.00 บาท</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {isPaymentSuccess === null &&
                <NextButton
                    previousPage={"/withdraw"}
                    textColor={"text-black"}
                    nextFuntion={handleConfirm}
                    isAllowNext={true} />
            }

            {
                (isPaymentSuccess !== null && isPaymentSuccess === true)
                    ?
                    <div>
                        <Notify
                            AccountNumber={userAccountInfo.AccountNumber}
                            Amount={wdAmount}
                        />
                        <BackButton BackHome={"/"} BackAgain={"/topup"} />
                    </div>

                    : <AlertModal />}
        </div>
    )
}

export default WithDrawConfirm