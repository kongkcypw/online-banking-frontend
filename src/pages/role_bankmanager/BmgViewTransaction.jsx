import React, { useState, useEffect } from 'react'
import { useDataFetch } from '../../hooks/useDataFetch'
import moment from 'moment'; // Import moment for date formatting
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import Loading from '../../Components/Global/Loading';
import ViewHeader from '../../Components/role_employee/ViewTransaction/ViewHeader';
import ViewTable from '../../Components/role_employee/ViewTransaction/ViewTable';
import ViewDestinationModal from '../../Components/role_employee/ViewTransaction/ViewDestinationModal';
import BmgSidebar from '../../Components/Layout/BmgSidebar';

const BmgViewTransaction = () => {

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();

    const [sumTransaction, setSumTransaction] = useState([]);
    const [inOutTransaction, setInOutTransaction] = useState([]);
    const [transactionDetail, setTransactionDetail] = useState([]);

    const [destinationDetail, setDestinationDetail] = useState(null);
    const [isDisplayDestinationModal, setIsDisplayDestinationModal] = useState(false);
    const [allBranchesData, setAllBranchesData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
    const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));

    useEffect(() => {
        fetchTransaction(startDate, endDate);
    }, [])

    const fetchTransaction = async (startDate, endDate) => {
        try {
            setIsLoading(true)
            const response = await POST_DATA_WITH_BODYPARAMS("/transaction/bmg/get-current-date", { branchID: "BR1097", startDate: startDate, endDate: endDate });
            console.log(response);
            if (response.status === 200) {
                console.log(response);
                setInOutTransaction(response.flow);
                setSumTransaction(response.sum)
                setTransactionDetail(response.detail);
                setAllBranchesData(response.branch);
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleDisplayDestinationDetail = async (destID, destType, transaction) => {
        try {
            console.log(destID);
            const bodyParams = {
                destinationID: destID,
                destinationType: destType,
                transactionFlow: transaction.Flow,
                referenceID: transaction.ReferenceID,
                transactionID: transaction.TransactionID
            }
            const response = await POST_DATA_WITH_BODYPARAMS("/transaction/spv/get-destination-detail", bodyParams);

            if (response.status === 200) {
                setDestinationDetail({
                    detail: response.detail,
                    type: response.type,
                    source: transaction
                });
                setIsDisplayDestinationModal(true);
            }
            console.log(response);
        } catch (error) {

        }

    }

    // Function to handle date change
    const handleDateChange = (dates) => {
        console.log(dates);
        if (dates) {
            // If dates array is not empty
            const [start, end] = dates;
            const formatStartDate = start.format('YYYY-MM-DD');
            const formatEndDate = end.format('YYYY-MM-DD');
            setStartDate(formatStartDate);
            setEndDate(formatEndDate);
            console.log("TEST");
            fetchTransaction(formatStartDate, formatEndDate)
        } else {
            // If dates array is empty
            setStartDate(null);
            setEndDate(null);
        }
    };


    return (
        <div className='absolute w-full h-full start-0 top-0 bg-[#F7F7F8] '>

            {isLoading ? <Loading /> : null}

            <div className='flex'>

                <BmgSidebar />
                <div className='w-full m-20 text-black'>
                    <div className='flex justify-between'>
                        <p className='text-3xl my-auto font-semibold'>ข้อมูลธุรกรรม</p>
                        <div className='flex items-center gap-4 my-auto'>
                            <p className='text-lg my-auto'>ช่วงเวลา</p>
                            <RangePicker
                                picker="day"
                                placeholder={[startDate, endDate]}
                                onChange={handleDateChange}
                                needConfirm
                                style={{
                                    width: '250px', // Adjust the width as needed
                                    fontFamily: 'sans-serif',
                                }}
                            />
                        </div>
                    </div>

                    {(sumTransaction && inOutTransaction)
                        ? <ViewHeader
                            sumTransaction={sumTransaction}
                            inOutTransaction={inOutTransaction}
                            startDate={startDate}
                            endDate={endDate} />
                        : null}

                    {transactionDetail
                        ? <ViewTable
                            transactions={transactionDetail}
                            handleDisplayDestinationDetail={handleDisplayDestinationDetail}
                            allBranches={allBranchesData} />
                        : null}

                    {(isDisplayDestinationModal === true && destinationDetail)
                        && <ViewDestinationModal
                            detail={destinationDetail.detail}
                            type={destinationDetail.type}
                            transactionSource={destinationDetail.source}
                            closeModal={() => setIsDisplayDestinationModal(false)} />
                    }

                </div>
            </div>
        </div>
    )
}

export default BmgViewTransaction