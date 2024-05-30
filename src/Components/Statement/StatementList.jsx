import React, { useEffect } from "react";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import moment from 'moment-timezone';
import DestDetail from "./DestDetail";
import ListDetail from "./ListDetail";

const date = ["2024-05", "2024-04", "2024-03", "2024-02", "2024-01"];

const StatmentList = ({ transactionData, previousMonth }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectOption, setSelectOption] = useState(previousMonth[0]);

    const togling = () => setIsOpen(!isOpen);

    const onOptionClicked = (selectedMonth) => () => {
        setSelectOption(selectedMonth);
        filterTransactionsByMonth(transactionDateHeader, selectedMonth)
        setIsOpen(false);
    }

    const [transactionDateHeader, setTransactionDateHeader] = useState([]);
    const [transactionDateHeaderFiltered, setTransactionDateHeaderFiltered] = useState([]);
    const [transactionEachDay, setTransactionEachDay] = useState({});
    const [isDisplayDetail, setIsDisplayDetail] = useState(false)
    const [dateIndex, setDateIndex] = useState(null);
    const [detailIndex, setDetailIndex] = useState(null);


    const date_options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const time_options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    }


    // Function to sort transactions by DateTime
    const sortByDateTime = (a, b) => new Date(b.DateTime) - new Date(a.DateTime);

    useEffect(() => {
        // Group transactions by date
        const groupedTransactions = transactionData.reduce((acc, transaction) => {
            const date = new Date(transaction.DateTime).toLocaleDateString('th-TH', date_options);
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(transaction);
            return acc;
        }, {});

        // Sort transactions date header
        const sortedDates = Object.keys(groupedTransactions)
            .sort((a, b) => new Date(groupedTransactions[b][0].DateTime) - new Date(groupedTransactions[a][0].DateTime));
        setTransactionDateHeader(sortedDates);
        filterTransactionsByMonth(sortedDates, selectOption)

        // Sort transactions within each date
        Object.keys(groupedTransactions).forEach(date => {
            groupedTransactions[date].sort(sortByDateTime);
        });
        setTransactionEachDay(groupedTransactions);
    }, [transactionData])

    const handleDisplayDetail = (dateGroupIndex, index) => {
        setDateIndex(dateGroupIndex)
        setDetailIndex(index)
        setIsDisplayDetail(!isDisplayDetail)
    }

    // Define a function to filter transactions by month
    const filterTransactionsByMonth = (dateHeader, selectedMonth) => {
        const filteredDateHeader = [];
        dateHeader.map((date) => {
            const year = date.slice(-2);
            const date_split = date.split(" ");
            const month = date_split[1];
            const monthWithYear = `${month} ${year}`;
            if (monthWithYear.includes(selectedMonth)) {
                filteredDateHeader.push(date);
            }
        })
        setTransactionDateHeaderFiltered(filteredDateHeader);
    };


    return (
        <div className="absolute bg-white h-full w-full rounded-lg start-0 mt-6">
            <div className="flex justify-between mt-3 mx-3">
                <p className="text-left font-semibold text-orange-400">ช่วงเวลา</p>
                <div className="relative w-2/4 flex justify-end">
                    <button onClick={togling} className="ps-2 flex border-b justify-between w-full items-center gap-x-4">
                        {selectOption}
                        {!isOpen ? (
                            <MdKeyboardArrowDown />
                        ) : (
                            <MdKeyboardArrowUp />
                        )}
                    </button>
                    {isOpen &&
                        <div className="absolute bg-white border max-h-60 w-full top-8 flex-col rounded-md">
                            {previousMonth.map((item, index) => (
                                <button
                                    key={index}
                                    className="w-full"
                                    onClick={onOptionClicked(item)}
                                >
                                    <p>{item}</p>
                                </button>
                            ))}
                        </div>
                    }
                </div>
            </div>

            {(transactionDateHeaderFiltered.length > 0)
                ? transactionDateHeaderFiltered.map((date, dateGroupIndex) => (
                    <div key={date} className="mb-4">
                        <p className="font-semibold mb-1 text-left text-lg ml-4">{date}</p>
                        {transactionEachDay[date] &&
                            <ListDetail
                                transactionEachDay={transactionEachDay}
                                date={date}
                                time_options={time_options}
                                dateGroupIndex={dateGroupIndex}
                                handleDisplayDetail={handleDisplayDetail}
                                dateIndex={dateIndex}
                                isDisplayDetail={isDisplayDetail}
                                detailIndex={detailIndex} />
                        }
                    </div>
                ))
                : <div className="text-black">
                    <p>ไม่มีข้อมูลธุรกรรมในเดือนนี้</p>
                </div>}

        </div>
    )
}
export default StatmentList;