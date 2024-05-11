import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import moment from 'moment-timezone';
import DestDetail from "./DestDetail";

const date = ["2024-05", "2024-04", "2024-03", "2024-02", "2024-01"];
const transaction = [
    {
        date: "2024-05-11",
        time: "12:00",
        amount: 100,
        destination: "Wichai Bunpho",
        channel: "K Bank",
    },
    {
        date: "2024-05-10",
        time: "12:00",
        amount: 100,
        destination: "Wichai Bunpho",
        channel: "K Bank",
    },
    {
        date: "2024-05-10",
        time: "12:00",
        amount: 100,
        destination: "Wichai Bunpho",
        channel: "K Bank",
    },
];

const StatmentList = ({ transactionData }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isExpand, setIsExpand] = useState(false);
    const [selectOption, setSelectOption] = useState(null);

    const togling = () => setIsOpen(!isOpen);
    const expand = () => setIsOpen(!isOpen);
    const onOptionClicked = (value) => () => {
        setSelectOption(value);
        setIsOpen(false);
    }

    const uniqueGroupTypes = Array.from(new Set(transaction.map(item => item.date)));

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

    // Group transactions by date
    const groupedTransactions = transactionData.reduce((acc, transaction) => {
        const date = new Date(transaction.DateTime).toLocaleDateString('th-TH', date_options);

        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(transaction);
        return acc;
    }, {});

    const sortedDates = Object.keys(groupedTransactions)
    .sort((a, b) => new Date(groupedTransactions[b][0].DateTime) - new Date(groupedTransactions[a][0].DateTime));

    const handleDisplayDetail = (dateGroupIndex, index) => {
        setDateIndex(dateGroupIndex)
        setDetailIndex(index)
        setIsDisplayDetail(!isDisplayDetail)
    }

    return (
        <div className="absolute bg-white h-full w-full rounded-lg start-0 mt-6">
            <div className="flex justify-between mt-3 mx-3">
                <p className="text-left font-semibold text-orange-400">ช่วงเวลา</p>
                <div className="relative w-2/4 flex justify-end">
                    <button onClick={togling} className="ps-2 flex border-b justify-between w-full items-center gap-x-4">
                        {selectOption || 'ทั้งหมด'}
                        {!isOpen ? (
                            <MdKeyboardArrowDown />
                        ) : (
                            <MdKeyboardArrowUp />
                        )}
                    </button>
                    {isOpen &&
                        <div className="absolute bg-white border max-h-60 w-full top-8 flex-col rounded-md">
                            {date.map((item, index) => (
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
            <></>

            {/* <div className=" text-left">
                {transaction.map((group, index) => (
                    <div>
                        <p className="mx-3">{group.date}</p>
                        {transaction.filter(item => item.date === group)
                            .map((item, itemIndex) => (
                                <div className=" bg-gray-200 w-full py-2">
                                    <div className="flex justify-between">
                                        <p className="mx-3 font-medium text-gray-700">รับเงิน</p>
                                        <p className="mx-3 font-medium text-emerald-400">500.00 บาท</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="mx-3 text-xs font-normal text-gray-600">22:27 น.</p>
                                        <MdKeyboardArrowDown className="mx-3 text-2xl text-gray-500" />
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div> */}

            {sortedDates.map((date, dateGroupIndex) => (
                <div key={date} className="mb-4">
                    <h2 className="font-semibold mb-1 text-left text-lg ml-4">{date}</h2>
                    <div className="">
                        {groupedTransactions[date].map((transaction, index) => (
                            <div key={index} className="p-4 my-2 bg-slate-100">
                                <div className="flex justify-between">
                                    <p className="font-semibold">
                                        {(transaction.TransactionFlow === "OUT" && transaction.TransactionType === "TRANSFER") ? "โอนเงิน"
                                            : (transaction.TransactionFlow === "OUT" && transaction.TransactionType === "TOPUP") ? "เติมเงิน"
                                                : (transaction.TransactionFlow === "OUT" && transaction.TransactionType === "BILL") ? "จ่ายบิล"
                                                    : (transaction.TransactionFlow === "OUT" && transaction.TransactionType === "WITHDRAW") ? "ถอนเงิน"
                                                        : "รับเงิน"}
                                    </p>
                                    <p className={` font-medium ${transaction.TransactionFlow === "OUT" ? "text-red-600" : "text-green-600"}`}>
                                        {transaction.Amount}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-slate-600">{new Date(transaction.DateTime).toLocaleTimeString("th-TH", time_options)} น.</p>
                                    {(isDisplayDetail && dateIndex === dateGroupIndex && detailIndex === index)
                                        ? <MdKeyboardArrowUp className="mx-3 text-2xl text-gray-500" onClick={() => handleDisplayDetail(dateGroupIndex, index)} />
                                        : <MdKeyboardArrowDown className="mx-3 text-2xl text-gray-500" onClick={() => handleDisplayDetail(dateGroupIndex, index)} />}
                                </div>
                                {(isDisplayDetail && dateIndex === dateGroupIndex && detailIndex === index)
                                    ? <DestDetail
                                        type={transaction.TransactionType}
                                        detail={transaction.Detail} />
                                    : null
                                }
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}
export default StatmentList;