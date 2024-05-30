import React, { useEffect, useState } from 'react'
import { useDataFetch } from '../../hooks/useDataFetch';
import BmgSidebar from '../../Components/Layout/BmgSidebar';
import Loading from '../../Components/Global/Loading';
import ServiceTable from '../../Components/role_supervisor/otherservice/ServiceTable';

function BmgViewOtherService() {

    const { GET_DATA } = useDataFetch()

    const [isLoading, setIsLoading] = useState();
    const [topupList, setTopupList] = useState([]);
    const [billList, setBillList] = useState([]);

    useEffect(() => {
        fetchTopupList()
        fetchBillList()
    }, [])

    const fetchTopupList = async () => {
        try {
            setIsLoading(true);
            const response = await GET_DATA("/topup/get-all");
            if (response.status === 200) {
                setTopupList(response.topup);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const fetchBillList = async () => {
        try {
            setIsLoading(true);
            const response = await GET_DATA("/bill/get-all");
            if (response.status === 200) {
                console.log(response);
                setBillList(response.bills)
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }


    return (
        <div className='absolute bg-[#F7F7F8] w-full start-0 top-0'>
            <div className='flex'>
                <BmgSidebar />
                {isLoading && <Loading />}
                <div className='m-12 w-full'>

                    <div className='text-left p-12'>
                        <p className='text-3xl font-semibold'>บริการเพิ่มเติม</p>
                        <p className='pt-2 text-lg'>คุณสามารถจัดการบริการเพิ่มเติมได้ เช่น เติมเงิน และจ่ายบิล</p>

                        <p className='text-2xl font-semibold mt-8'>เติมเงิน</p>
                        {(topupList && topupList.length > 0)
                            && <ServiceTable list={topupList} type={"topup"} pk={"TopupID"} />}

                        <p className='text-2xl font-semibold mt-8'>จ่ายบิล</p>
                        {(billList && billList.length > 0)
                            && <ServiceTable list={billList} type={"bill"} pk={"BillID"} />}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BmgViewOtherService