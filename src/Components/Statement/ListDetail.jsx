import React from 'react'
import DestDetail from './DestDetail'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ListDetail = ({ transactionEachDay, date, time_options, dateGroupIndex, handleDisplayDetail, dateIndex, isDisplayDetail, detailIndex }) => {

    const FlowDirection = ({ Flow, Type }) => {
        let text;
        if(Flow === "OUT"){
            if(Type === "TRANSFER"){
                text = "โอนเงิน"
            }
            else if(Type === "TOPUP"){
                text = "เติมเงิน"
            }
            else if(Type === "BILL"){
                text = "จ่ายบิล"
            }
            else if(Type === "WITHDRAW"){
                text = "ถอนเงิน"
            }
        }
        else{
            text = "รับเงิน"
        }
        return(
            <p className="font-semibold">{text}</p>
        )
    }

    console.log(transactionEachDay);

    return (
        <div>
            {transactionEachDay[date].map((transaction, index) => (
                <div key={index} className="p-4 my-2 bg-slate-100">
                    <div className="flex justify-between">
                        <FlowDirection 
                            Flow={transaction.TransactionFlow}
                            Type={transaction.TransactionType}/>
                        <p className={` font-medium ${transaction.TransactionFlow === "OUT" ? "text-[#D64739]" : "text-[#45C2B4]"}`}>
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
                            detail={transaction.Detail}
                            description={transaction.Description} />
                        : null
                    }
                </div>
            ))}
        </div>
    )
}

export default ListDetail