import React, { useState } from 'react'
import { useDataFetch } from '../hooks/useDataFetch';
import { useEffect } from 'react';
import TopUpChoice from '../Components/Topup/TopUpChoice'
import AccountDetail from '../Components/Topup/AccountDetail';

const Topup = () => {
    const [TopupData, setTopupData] = useState()
    const { GET_DATA } = useDataFetch();

    useEffect(() => {
        FetchData()
    }, [])

    const FetchData = async () => {
        const data = await GET_DATA('/topup/get-all')
        setTopupData(data.topup)
    }

    return (
        <div>
            <AccountDetail />
            <p className='text-orange-400 text-md text-left mt-6'>ไปยัง</p>
            {TopupData &&
                <div className='absolute bg-white w-full h-full left-0 mt-2 rounded-md'>
                    <TopUpChoice TopupData={TopupData} />
                </div>
            }

        </div>
    )
}

export default Topup