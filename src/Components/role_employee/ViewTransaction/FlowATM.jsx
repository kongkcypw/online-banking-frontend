import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";

const FlowATM = ({ detail, transactionSource }) => {
    return (
        <div className='text-left text-lg'>
            <img
                src='https://cdn-icons-png.flaticon.com/512/9721/9721980.png'
                className='w-48 h-48 mx-auto' />
            <div className='flex gap-2 justify-center pt-8'>
                <p className='font-semibold'>หมายเลขตู้ ATM: </p>
                <p>{detail.ATMID}</p>
            </div>
            <div className='flex gap-2 justify-center'>
                <p className='font-semibold'>ชื่อสาขา:</p>
                <p>{detail.BankName}({detail.BranchID})</p>
            </div>
            <div className='flex gap-2 justify-center'>
                <p className='font-semibold'>ที่อยู่: <span className='font-normal'>{detail.Address}</span></p>
            </div>
        </div>
    );
};

export default FlowATM;
