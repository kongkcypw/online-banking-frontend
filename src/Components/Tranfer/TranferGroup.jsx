import React from "react"
import { useState } from "react"
import TransferDropdown from "./TransferDropdown"

const TranferGroup = ({ accountnum, setAccountnum, amount, setAmount, handleInputChange, bankData, payDescription, setPayDescription }) => {

    return (
        <div>
            <p className='text-left font-bold text-orange-400 my-3'> ถึง </p>
            <div className='border-2 rounded bg-white border-white pt-4 pb-6 px-2'>
                <TransferDropdown bankData={bankData}/>
                <div className="px-2 mt-4">
                    <p className="text-left text-sm text-slate-500">เลขบัญชี</p>
                    <input
                        type="text"
                        value={accountnum}
                        onChange={(e) => handleInputChange(e, setAccountnum, 'text')}
                        placeholder="กรอกเลขบัญชี"
                        className=" placeholder:font-normal placeholder:text-sm font-bold text-right text-orange-400 mt-1 block w-full border-b border-gray-300 focus:outline-none focus:text-orange-400"
                    />
                </div>
                <div className="px-2">
                    <div className='text-left text-sm text-slate-500 mt-2'> จำนวนเงิน: </div>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => handleInputChange(e, setAmount, 'number')}
                        placeholder="0.00 THB"
                        className="text-right text-black mt-1 block w-full border-b border-gray-300 focus:outline-none focus:text-orange-400"
                    />
                </div>
                <div className="px-2">
                    <div className='text-left text-sm text-slate-500 mt-4'> บันทึกช่วยจำ: </div>
                    <div className="mt-2 px-2 pt-1 pb-2 border border-gray-300">
                        <div className="border-b border-gray-300">
                            <textarea 
                                value={payDescription}
                                onChange={(e) => setPayDescription(e.target.value)}
                                maxLength={62}
                                className="text-left text-black mt-1 block w-full focus:outline-none focus:text-orange-400"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TranferGroup
