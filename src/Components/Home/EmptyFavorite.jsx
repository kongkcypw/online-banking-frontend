import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const EmptyFavorite = () => {

    const navigate = useNavigate();

    return (
        <div className='bg-white w-full relative rounded-md text-left text-sm px-4 py-2 mt-4 text-black'>
            <div className='grid grid-cols-3'>
                <div className=' col-span-1'>
                    <img className='w-20 h-20'
                        src='https://i.ibb.co/fknhnrq/Fav.jpg' />
                </div>
                <div className=' col-span-2'>
                    <p>ทำธุรกรรมได้รวดเร็วมากยิ่งขึ้น! ด้วยรายการโปรดที่คุณสามารถเพิ่มได้ด้วยตนเอง</p>
                    <div className='flex justify-end' onClick={() => navigate("/favorite")}>
                        <p className='text-orange-600 text-xs text-right mr-1 my-auto'>เพิ่มเลย</p>
                        <IoMdAddCircleOutline className='my-auto text-orange-600' />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EmptyFavorite