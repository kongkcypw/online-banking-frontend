import React, { useState } from 'react'
import AccountDetail from '../Components/TopUp/AccountDetail'
import TopUpChoice from '../Components/TopUp/TopUpChoice'

const TopUp = () => {

    return (
        <div>
            <p className='text-white text-xl font-bold mt-8'>เติมเงิน</p>
            <AccountDetail/>
            <p className='text-orange-400 text-md text-left mt-6'>ไปยัง</p>
            <div className='absolute bg-white w-full h-full left-0 mt-2 rounded-md'>
                <TopUpChoice/>
            </div>
        </div>
    )
}

export default TopUp