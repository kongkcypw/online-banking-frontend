import React, { useEffect, useState } from 'react'
import SupervisorList from '../../Components/role_bankmanager/dashboard/SupervisorList'
import BmgOverview from '../../Components/role_bankmanager/dashboard/BmgOverview'
import BranchRanking from '../../Components/role_bankmanager/dashboard/BranchRanking'
import BankList from '../../Components/role_bankmanager/dashboard/BankList'
import { useDataFetch } from '../../hooks/useDataFetch'
import Loading from '../../Components/Global/Loading';
import BmgSidebar from '../../Components/Layout/BmgSidebar'

const BmgDashboard = () => {

    const { GET_DATA, POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [isLoading, setIsLoading] = useState(false);
    
    const [overviewData, setOverViewData] = useState({});
    const [transactionRankList, setTransactionRankList] = useState([]);
    const [supervisorList, setSupervisorList] = useState([]);
    const [bankList, setBankList] = useState([]);

    useEffect(() => {
        fetchBankList();
        fetchSupervisorList();
        fetchTransactionRankList();
        fetchOverviewData();
    }, [])

    const fetchBankList = async () => {
        try {
            setIsLoading(true);
            const response = await GET_DATA("/bank/get-all");
            if (response.status === 200) {
                console.log(response.bank);
                setBankList(response.bank)
                
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false);
        }
    }

    const fetchSupervisorList = async () => {
        try {
            setIsLoading(true);
            const response = await GET_DATA("/dashboard/get-all-supervisor");
            if (response.status === 200) {
                console.log(response);
                setSupervisorList(response.supervisor)
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const fetchTransactionRankList = async() => {
        try{
            setIsLoading(true);
            const startDate = "2024-05-01";
            const endDate = "2024-05-31";
            const response = await POST_DATA_WITH_BODYPARAMS("/transaction/bmg/get-ranking", { startDate: startDate, endDate: endDate });
            if(response.status === 200){
                setTransactionRankList(response.rank);
                setIsLoading(false);
            }
        } catch(error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const fetchOverviewData = async() => {
        try{
            setIsLoading(true);
            const startDate = "2024-05-01";
            const endDate = "2024-05-31";
            const response = await POST_DATA_WITH_BODYPARAMS("/transaction/bmg/get-overview", { startDate: startDate, endDate: endDate });
            if(response.status === 200){
                const formatData = {
                    flow: response.flow,
                    sum: response.sum,
                    account: response.account[0],
                    atm: response.atm[0]
                }
                setOverViewData(formatData);
                console.log(response)
                setIsLoading(false);
            }
        } catch(error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    return (
        <div className='absolute bg-[#F7F7F8] w-full h-full start-0 top-0'>

            {isLoading ? <Loading /> : null}

            <div className='flex'>
                <BmgSidebar />
                <div className='m-8'>
                    <div className='text-left p-8'>
                        <p className='text-3xl font-semibold'>ยินดีต้อนรับสู่หน้า Dashboard (Bank Manager)</p>
                        <p className='pt-2 text-lg'>คุณสามารถดูข้อมูลการทำธุรกรรมของทุกสาขาได้</p>
                    </div>

                    <div className='grid grid-cols-10'>
                        <div className='col-span-6 text-left mx-8'>
                            {(overviewData && overviewData.flow && overviewData.sum && overviewData.account && overviewData.atm) 
                            && <BmgOverview 
                                flow={overviewData.flow}
                                sum={overviewData.sum}
                                account={overviewData.account}
                                atm={overviewData.atm}/>}
                            {(transactionRankList && transactionRankList.length > 0)
                                && <BranchRanking transactionRankList={transactionRankList}/>}
                            

                        </div>
                        <div className='col-span-4 mx-8'>
                            {(supervisorList && supervisorList.length > 0)
                                && <SupervisorList supervisorList={supervisorList}/>}
                            {(bankList && bankList.length > 0)
                                && <BankList bankList={bankList} />}
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default BmgDashboard