import React, { useEffect,useState } from 'react';
import { useDataFetch } from "../hooks/useDataFetch";
import AccountDetail from "../Components/Topup/AccountDetail";
import BillChoice from "../Components/Bill/BillChoice";

const Bill = () => {
    const [BillData,setBillData] = useState()
    const { GET_DATA } = useDataFetch();
    useEffect(() => {
        FetchData()
    }, [])
    const FetchData = async () => {
        const data = await GET_DATA('/bill/get-all')
        setBillData(data.bills)
        console.log(data)
    }

    return (
        <div>
           <AccountDetail/>
           <p className='text-orange-400 text-md text-left mt-6'>ไปยัง</p>
           {BillData &&
                <div className='absolute bg-white w-full h-full left-0 mt-2 rounded-md'>
                    <BillChoice BillData={BillData} />
                </div>
            }

        </div>
    )

    
}

export default Bill
