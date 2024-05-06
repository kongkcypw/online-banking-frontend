import React, { useState } from 'react'
import AccountDetail from '../Components/TopUp/AccountDetail'
import TopUpChoice from '../Components/TopUp/TopUpChoice'
import { useDataFetch } from '../hooks/useDataFetch';
import { useEffect } from 'react';

const TopUp = () => {
    const [TopUpData, setTopUpData] = useState()
    const { GET_DATA } = useDataFetch();
    useEffect(() => {
        FetchData()
    }, [])
    const FetchData = async () => {
        const data = await GET_DATA('/topup/get-all')
        setTopUpData(data.topup)
        console.log(data)
    }

    return (
        <div>
            <AccountDetail />
            <p className='text-orange-400 text-md text-left mt-6'>ไปยัง</p>
            {TopUpData &&
                <div className='absolute bg-white w-full h-full left-0 mt-2 rounded-md'>
                    <TopUpChoice TopUpData={TopUpData} />
                </div>
            }

        </div>
    )
}

export default TopUp