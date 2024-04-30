import React, { useState } from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";

const Numpad = ({handleNumpadClick}) => {

    const [numberIndex, setNumberIndex] = useState(null);
    const [isActive, setIsActive] = useState(false);

    const NumberButton = ({ number }) => {
        return (
            <div className='col-span-1 w-16 h-16 flex justify-center mt-8 mx-4'>
                <button className={`w-full flex justify-center items-center border-2 rounded-full 
                                    ${(isActive && numberIndex === number) ? 'border-orange-400 text-orange-400' : ''}`}
                   onClick={() => handleClick(number)}>{number}
                </button>
            </div>
        )
    }

    const handleClick = (number) => {
        setIsActive(true); // Activate the button
        setNumberIndex(number);
        handleNumpadClick(number); // Call the parent handler

        // Set a timeout to deactivate the button
        setTimeout(() => {
            setIsActive(false);
        }, 100); // Adjust time as needed for the effect
    };

    return (
        <div className='text-2xl pt-12 w-full'>
            <div className='flex justify-center'>
                <div>
                    <div className='w-full grid grid-cols-3'>
                        <NumberButton number={1} />
                        <NumberButton number={2} />
                        <NumberButton number={3} />
                    </div>

                    <div className='w-full grid grid-cols-3'>
                        <NumberButton number={4} />
                        <NumberButton number={5} />
                        <NumberButton number={6} />
                    </div>

                    <div className='w-full grid grid-cols-3'>
                        <NumberButton number={7} />
                        <NumberButton number={8} />
                        <NumberButton number={9} />
                    </div>


                    <div className='w-full grid grid-cols-3'>
                        <div className='col-span-1 w-16 h-16 flex justify-center mt-8 mx-4'>
                        </div>
                        <NumberButton number={0} />
                        <div className='col-span-1 flex justify-center items-end'>
                            <RiDeleteBack2Fill className={`mb-5 ${(isActive && numberIndex === 10) ? 'text-orange-400' : ''}`} 
                                               onClick={() => handleClick(10)}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Numpad