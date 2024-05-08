import React from 'react'

const PayFlow = ({ srcInfo, destType, destInfo, payRequireInfo, payRequireInput, payAmount, payDescription }) => {

    return (
        <div className='text-black p-4'>
            <div className='text-left grid grid-cols-4'>
                <div className='col-span-1'>
                    <img />
                </div>
                <div className='col-span-3'>
                    <p>{srcInfo.FirstName} {srcInfo.LastName}</p>
                    <p>{srcInfo.AccountNumber}</p>
                    <p>{srcInfo.Balance} บาท</p>
                </div>

            </div>
            {destType === "topup" || "bill"
                ? <div className='text-left grid grid-cols-4 pt-8'>
                    <div className='col-span-1 my-auto rounded-lg'>
                        <img
                            src={destInfo.Image}
                            className='rounded-full w-14 h-14' />
                    </div>
                    <div className='col-span-3'>
                        <p>{destInfo.Name}</p>
                        <p>{destInfo.Type}</p>
                        {payRequireInfo.map((require, index) => (
                            <p>{require.Label}: {payRequireInput[require.Require]}</p>
                        ))}
                    </div>

                </div>
                : <div></div>}

            <p className='text-left pt-8'>กรุณาตรวจสอบบัญชีปลายทางให้ถูกต้องก่อนกด"ยืนยัน"เพื่อป้องกันการโอนเงินผิดบัญชี หรือตกเป็นเหยื่อมิจฉาชีพ หากยืนยันแล้วจะไม่สามารถเปลี่ยนแปลงได้</p>
            <div className='flex justify-between pt-12'>
                <p>จำนวนเงิน</p>
                <div className='flex'>
                    <p>{payAmount}</p>
                    <p className='ml-2'>บาท</p>
                </div>
            </div>
            <div className='flex justify-between pt-2'>
                <p>ค่าธรรมเนียม</p>
                <p>0.00 บาท</p>
            </div>

            {(payDescription !== null && payDescription !== "")
                ? <div className='flex justify-between pt-2'>
                    <p>บันทึกช่วยจำ</p>
                    <p className=''>{payDescription}</p>
                </div>
                : null}


        </div>
    )
}

export default PayFlow