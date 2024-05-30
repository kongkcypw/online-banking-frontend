import React from 'react'

const InputMoney = ({ payAmount, payDescription, setPayAmount, setPayDescription }) => {
    return (
        <div>
            <div className='mt-4 w-full text-left'>
                <p className=''>จำนวนเงิน:</p>
                <input
                    type='number'
                    className='text-right w-full mt-2 rounded-md border-b-2'
                    value={payAmount === 0.00 ? "": payAmount}
                    placeholder='0.00 THB'
                    onChange={(e) => setPayAmount(e.target.value)} />
            </div>
            <div className='mt-4 w-full text-left'>
                <p className=''>บันทึกช่วยจำ</p>
                <input
                    type='text'
                    className='text-left w-full mt-2 rounded-md border-b-2'
                    value={payDescription}
                    onChange={(e) => setPayDescription(e.target.value)} />
            </div>
        </div>
    )
}

export default InputMoney