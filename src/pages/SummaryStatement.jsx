import React, { useEffect, useState } from 'react'
import { useDataFetch } from '../hooks/useDataFetch';
import useAuth from "../hooks/useAuth";
import SumBarchart from '../Components/Statement/SumBarchart';
import SumYear from '../Components/Statement/SumYear';
import UserInfoStatement from '../Components/Statement/UserInfoStatement';
import SumMonth from '../Components/Statement/SumMonth';
import Loading from '../Components/Global/Loading';
import  AlertModal from '../Components/Global/AlertModal';

const SummaryStatement = () => {

    const { POST_DATA_WITH_BODYPARAMS } = useDataFetch();
    const { userAccountInfo } = useAuth();

    const [summaryData, setSummaryData] = useState([]);
    const [yearData, setYearData] = useState([]);
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetchSummaryData();
    }, [])

    const fetchSummaryData = async () => {
        try{
            const accountID = userAccountInfo.AccountID;
            const response = await POST_DATA_WITH_BODYPARAMS("/statement/get-summary", { accountID: accountID });
            if(response.status === 200){
                setSummaryData(response.months);
                setYearData(response.year);
                setError(false);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage("เกิดข้อผิดพลาด กรุณาลองใหม่")
            setError(true)
        }

    }

    // Thai month names array
    const thaiMonthNames = [
        'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
        'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
    ];

    const getLatestSixMonthsThaiNames = () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth(); // 0-based index
        const currentYear = currentDate.getFullYear();

        const latestSixMonthsThaiNames = [];
        const monthsWithYears = [];
        for (let i = 0; i < 6; i++) {
            const monthIndex = (currentMonth - i + 12) % 12; // Handling wrap-around for previous year
            const year = currentMonth - i < 0 ? currentYear - 1 : currentYear; // Decrement year appropriately
            const thaiYear = parseInt(year) + 543;
            const shortYear = thaiYear.toString()
            const monthName = thaiMonthNames[monthIndex];
            // latestSixMonthsThaiNames.unshift(`${monthName} ${shortYear.slice(-2)}`);
            latestSixMonthsThaiNames.unshift(`${monthName}`);
            monthsWithYears.unshift(`${shortYear}`);
        }
        const months = latestSixMonthsThaiNames;
        const monthsYears = monthsWithYears;
        return { months: months, monthsWithYear: monthsYears };
    };
    // Example usage:
    const latestSixMonthsThaiNames = getLatestSixMonthsThaiNames().months;

    // Group data by month
    const groupedData = latestSixMonthsThaiNames.map(monthName => {
        const monthData = summaryData.filter(item => item.TransactionMonth === thaiMonthNames.indexOf(monthName) + 1);
        const inCount = monthData.find(item => item.TransactionFlow === 'IN')?.TotalAmount || 0;
        const outCount = monthData.find(item => item.TransactionFlow === 'OUT')?.TotalAmount || 0;
        return {
            group: monthName,
            IN: inCount,
            OUT: outCount
        };
    });

    function getCurrentDate() {
        const thaiShortYear = new Date().getFullYear() % 100; // Get the last two digits of the year
        const thaiMonth = thaiMonthNames[new Date().getMonth()];
        const thaiDay = new Date().getDate();
        const thaiYear = new Date().getFullYear() + 543; // Add 543 to convert to Thai year

        return {
            fullDate: `${thaiDay} ${thaiMonth} ${thaiYear}`,
            fullYear: thaiYear,
            shortYear: thaiShortYear
        };
    }
    const thaiDate = getCurrentDate();

    return (
        <div className='text-white overflow-y-auto'>
            {userAccountInfo
                ? <UserInfoStatement info={userAccountInfo} /> 
                : <Loading />}
            {yearData
                ? <SumYear
                    yearData={yearData}
                    currentDate={thaiDate}
                />
                : <Loading />}
            {(summaryData && summaryData.length > 0 && latestSixMonthsThaiNames && groupedData)
                ? <SumBarchart
                    latestSixMonthsThaiNames={latestSixMonthsThaiNames}
                    groupedData={groupedData}
                    thaiDate={thaiDate} />
                : <Loading />}
            {groupedData.length > 0
                ? <SumMonth
                    groupedData={groupedData}
                    years={getLatestSixMonthsThaiNames().monthsWithYear} />
                : <Loading />}
            {isError && <AlertModal />}
        </div>
    )
}

export default SummaryStatement