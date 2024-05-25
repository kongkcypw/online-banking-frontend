import React, { useState } from 'react'
import { TbCurrencyBaht } from "react-icons/tb";
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

const formatDate = (date) => {
    return format(date, 'd/MM/yyyy', { locale: th });
};

// Convert year from Gregorian to Buddhist
const convertToBuddhistYear = (date) => {
    return date.getFullYear() + 543;
};

const ViewHeader = ({ sumTransaction, inOutTransaction, startDate, endDate }) => {

    // Convert date strings to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Format dates to Thai Buddhist calendar format
    const startFormatted = formatDate(start).replace(/\d{4}/, convertToBuddhistYear(start));
    const endFormatted = formatDate(end).replace(/\d{4}/, convertToBuddhistYear(end));


    return (
        <div className='pt-8'>
            <div className='text-black text-left text-xl pb-1'>
                <p>ภาพรวมของวันที่: {startFormatted} - {endFormatted}</p>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className=' col-span-4'>
                    <div className='w-full grid grid-cols-4 bg-white py-4 rounded-sm drop-shadow'>
                        <div className='col-span-2 text-left px-4'>
                            <p className='text-3xl'>{sumTransaction.TotalCount || 0}</p>
                            <p className='text-xl'>จำนวนธุรกรรม</p>
                        </div>
                        <div className='col-span-2 text-left px-4 '>
                            <div className='flex'>
                                <p className='text-3xl my-auto text-orange-500'>{sumTransaction.TotalAmount || 0}</p>

                                <TbCurrencyBaht className='text-3xl text-orange-500' />
                            </div>
                            <p className='text-xl '>จำนวนเงิน </p>
                        </div>
                    </div>
                </div>
                {inOutTransaction.map((data, index) => (
                        <div key={index} className=' col-span-4'>
                            <div className='w-full grid grid-cols-4 bg-white text-black py-4 rounded-sm drop-shadow'>
                                <div className='col-span-2 text-left px-4'>
                                    <p className='text-3xl '>{data.TotalCount}</p>
                                    <p className='text-xl'>รายการเงิน{data.TransactionFlow === "IN" ? "เข้า" : "ออก"}</p>
                                </div>
                                <div className='col-span-2 text-left px-4'>
                                    <div className='flex'>
                                        <p className='text-3xl text-orange-500'>{data.TotalAmount || 0}</p>
                                        <TbCurrencyBaht className='text-3xl text-orange-500' />
                                    </div>
                                    <p className='text-xl'>จำนวนเงิน</p>

                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ViewHeader