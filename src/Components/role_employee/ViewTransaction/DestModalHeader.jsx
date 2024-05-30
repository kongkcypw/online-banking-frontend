import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";

const DestModalHeader = ({ transactionSource, closeModal }) => {

    const FlowDirection = ({ Flow, Type }) => {
        let text;
        if (Flow === "OUT") {
            if (Type === "TRANSFER") {
                text = "โอนเงิน"
            }
            else if (Type === "TOPUP") {
                text = "เติมเงิน"
            }
            else if (Type === "BILL") {
                text = "จ่ายบิล"
            }
            else if (Type === "WITHDRAW") {
                text = "ถอนเงิน"
            }
        }
        else {
            text = "รับเงิน"
        }
        return (
            <p className=''>{text}</p>
        )
    }

    return (
        <div>
            <div className='flex justify-between pb-4 border-b'>
                <p className=' text-2xl font-bold text-left my-auto'>รายละเอียดธุรกรรม</p>
                <IoCloseCircleSharp
                    onClick={closeModal}
                    className='text-2xl my-auto cursor-pointer' />
            </div>
            <div className='w-full grid grid-cols-4 pt-8'>
                <div className='col-span-2 flex text-lg gap-2'>
                    <p className='font-semibold'>รหัสธุรกรรม: </p>
                    <p className=''>{transactionSource.TransactionID}</p>
                </div>
                <div className='col-span-2 flex text-lg gap-2'>
                    <p className='font-semibold'>หมายเลขอ้างอิง: </p>
                    <p className=''>{transactionSource.ReferenceID}</p>
                </div>
            </div>

            <div className='w-full grid grid-cols-4'>
                <div className='col-span-2 flex text-lg gap-2'>
                    <p className='font-semibold'>วันที่: </p>
                    <p className=''>{`${transactionSource.Day}/${transactionSource.Month}/${transactionSource.Year}`}</p>
                </div>
                <div className='col-span-2 flex text-lg gap-2'>
                    <p className='font-semibold'>เวลา: </p>
                    <p className=''>{transactionSource.Time} น.</p>
                </div>
            </div>

            <div className='w-full grid grid-cols-4'>
                <div className='col-span-2 flex text-lg gap-2'>
                    <p className='font-semibold'>ประเภทธุรกรรม: </p>
                    <FlowDirection
                        Flow={transactionSource.Flow}
                        Type={transactionSource.TransactionType} />
                </div>
                <div className='col-span-2 flex text-lg gap-2'>
                    <p className='font-semibold'>จำนวนเงิน: </p>
                    <p className=''>{transactionSource.Amount} บาท</p>
                </div>
            </div>
        </div>
    )
}

export default DestModalHeader