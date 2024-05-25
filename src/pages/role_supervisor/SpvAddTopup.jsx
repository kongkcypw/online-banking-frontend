import React, { useEffect, useState } from 'react'
import SpvSidebar from '../../Components/Layout/SpvSidebar'
import { AiOutlineMinus } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

const SpvAddTopup = () => {

    const [imageLink, setImageLink] = useState("");
    const [displayImage, setDisplayImage] = useState(false);
    const [requireAmount, setRequireAmount] = useState(1);

    const [requireArray, setRequireArray] = useState([])

    const handleRequireAmount = (direction) => {
        if (direction === "add") {
            let currentNumber = requireAmount;
            currentNumber = currentNumber + 1;
            setRequireAmount(currentNumber)
        }
        else if (direction === "minus" && requireAmount > 1) {
            let currentNumber = requireAmount;
            currentNumber = currentNumber - 1;
            setRequireAmount(currentNumber)
        }
    }

    useEffect(() => {

    }, [requireAmount])

    return (
        <div className='absolute bg-[#F7F7F8] w-full min-h-screen start-0 top-0'>
            <SpvSidebar />
            <div className='ml-72 w-full'>
                <div className='text-left p-12'>
                    <p className='text-3xl font-semibold'>เพิ่มบริการเติมเงิน</p>
                    <p className='pt-2 text-lg'>เพิ่มช่องทางการเติมเงินให้กับลูกค้า</p>

                    <div className='bg-white text-center text-xl max-w-6xl p-8 mt-8'>
                        <div className='grid grid-cols-10 gap-12'>
                            <div className='col-span-5 flex gap-4'>
                                <span className='min-w-fit'>ชื่อบริการเติมเงิน</span>
                                <input
                                    type='text'
                                    className='border-2 w-full'
                                />
                            </div>
                            <div className='col-span-5 flex gap-4'>
                                <span className='min-w-fit'>ประเภท</span>
                                <input
                                    type='text'
                                    className='border-2 w-full'
                                />
                            </div>
                        </div>

                        <div className='flex gap-4 pt-8'>
                            <span className='min-w-fit mr-8 my-auto'>รูปภาพ(โลโก้)</span>
                            <input
                                type='text'
                                className='border-2 w-full'
                                onChange={(e) => setImageLink(e.target.value)}
                            />
                            <span className='min-w-fit px-4 py-1 cursor-pointer bg-orange-400 text-white' onClick={() => setDisplayImage(!displayImage)}>
                                {displayImage === true ? "ซ่อนภาพตัวอย่าง" : "แสดงภาพตัวอย่าง"}
                            </span>
                        </div>

                        {displayImage &&
                            <div className='w-full pt-8'>
                                <img src={imageLink} className='mx-auto border rounded-full' />
                            </div>}

                        <div className='col-span-4 text-left flex pt-8'>
                            <p>จำนวนตัวเลขสำคัญที่ต้องระบุ</p>
                            <div className='h-7 flex my-auto ml-4'>
                                <AiOutlineMinus className='h-full w-6 my-auto border-2 text-slate-600 cursor-pointer'
                                    onClick={() => handleRequireAmount("minus")} />
                                <span className='h-full border-t-2 border-b-2 px-4 my-auto'>{requireAmount}</span>
                                <IoMdAdd className='h-full w-6 my-auto border-2 text-slate-600 cursor-pointer'
                                    onClick={() => handleRequireAmount("add")} />
                            </div>
                        </div>

                        {requireArray.map((data, index) => (
                            <div key={index} className=''>
                                <p>dsff</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpvAddTopup