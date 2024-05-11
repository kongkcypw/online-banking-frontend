import React from "react";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

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

const StatmentList = () => {
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
            <div className=" text-left">
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
            </div>
        </div>
    )
}
export default StatmentList;