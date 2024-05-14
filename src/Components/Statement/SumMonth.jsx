import React, { useEffect, useState } from 'react'

const SumMonth = ({ groupedData, years }) => {

    const [formatData, setFormatData] = useState([]);

    useEffect(() => {
        groupDataByYear(years, groupedData);
    }, [ groupedData, years ])

    const TotalDirection = ({ inAmount, outAmount }) => {
        let diraction;
        const calculate = parseFloat(inAmount) - parseFloat(outAmount);
        if (calculate >= 0) {
            diraction = "positive"
        }
        else {
            diraction = "negative"
        }
        return (
            <>
                {diraction === "positive"
                    ? <p className='text-[#45C2B4]'>{calculate} บาท</p>
                    : <p className='text-[#D64739]'>{calculate} บาท</p>}
            </>
        )
    }

    // Function to group data by year
    function groupDataByYear(years, data) {
        const groupedData = {};
        years.forEach((year, index) => {
            const monthData = data[index];
            if (!groupedData[year]) {
                groupedData[year] = [];
            }
            groupedData[year].push({
                month: monthData.group,
                year: year,
                IN: monthData.IN,
                OUT: monthData.OUT
            });
        });
        const result = Object.values(groupedData);
        setFormatData(result);
    }

    return (
        <div className='bg-white text-black mt-8 absolute w-full start-0 h-full'>

            {formatData && formatData.length > 0 && formatData.map((year, yearIndex) => (
                <div key={yearIndex} className='pt-4'>
                    <p className='text-left px-8'>{year[yearIndex].year}</p>
                    {year && year.map((month, indexMonth) => {
                        if (month.IN > 0 || month.OUT > 0) {
                            return (
                                <div key={indexMonth} className='bg-slate-100 text-left my-2 px-8 py-2'>
                                    <p className='text-lg mb-1'>{month.month} {years[yearIndex].slice(-2)}</p>
                                    <div className='flex justify-between text-[#45C2B4]'>
                                        <p>เงินเข้าทั้งหมด:</p>
                                        <p>{month.IN} บาท</p>
                                    </div>
                                    <div className='flex justify-between text-[#D64739]'>
                                        <p>เงินออกทั้งหมด:</p>
                                        <p>-{month.OUT} บาท</p>
                                    </div>
                                    <p className='border-b-[1px] border-b-slate-300 pt-1'></p>
                                    <div className='flex justify-between mt-1'>
                                        <p>สรุปยอด: </p>
                                        <TotalDirection inAmount={month.IN} outAmount={month.OUT} />
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={indexMonth} className='bg-slate-100 text-left my-2 px-8 py-2'>
                                    <p className='text-lg mb-1'>{month.month} {years[yearIndex].slice(-2)}</p>
                                    <p className='text-slate-600'>ไม่มีรายการเงินเข้า - ออก</p>
                                </div>
                            )
                        }
                    })}
                </div>
            ))}

            {/* <p className='text-left px-8 mt-8'>2567</p>
            {groupedData.map((month, index) => {
                if (month.IN > 0 || month.OUT > 0) {
                    return (
                        <div key={index} className='bg-stone-200 text-left my-2 px-8 py-2'>
                            <p className='text-lg mb-1'>{month.group} {years[index].slice(-2)}</p>
                            <div className='flex justify-between text-green-600'>
                                <p>เงินเข้าทั้งหมด:</p>
                                <p>{month.IN} บาท</p>
                            </div>
                            <div className='flex justify-between text-red-600'>
                                <p>เงินออกทั้งหมด:</p>
                                <p>-{month.OUT} บาท</p>
                            </div>
                            <p className='border border-b-[1px] border-b-stone-300 pt-1'></p>
                            <div className='flex justify-between text-red-600 mt-1'>
                                <p>สรุปยอด</p>
                                <TotalDirection inAmount={month.IN} outAmount={month.OUT} />
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div key={index} className='bg-stone-200 text-left my-2 px-8 py-2'>
                            <p className='text-lg mb-1'>{month.group} {years[index].slice(-2)}</p>
                            <p className='text-slate-600'>ไม่มีรายการเงินเข้า - ออก</p>
                        </div>
                    )
                }
            })} */}
        </div>
    )
}

export default SumMonth