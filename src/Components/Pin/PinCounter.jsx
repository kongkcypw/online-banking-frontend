import React, { useState, useEffect } from 'react'
import { FaCircle } from "react-icons/fa";

const initFilledState = [false, false, false, false, false, false]

const PinCounter = ({ fillAmount }) => {

    const [filledCircle, setFilledCircle] = useState(initFilledState);

    useEffect(() => {
        const updatedFilledState = initFilledState.map((item, index) => index < fillAmount);
        setFilledCircle(updatedFilledState);
    }, [fillAmount]);

    return (
        <div className='w-full pt-8'>
            {filledCircle.length > 0
                ? <div className='flex justify-center gap-4'>
                    {filledCircle.map((value, index) => (
                        <div key={index}>
                            <FaCircle className={`border-2 border-white rounded-full ${value ? 'text-white' : 'text-transparent'}`} />
                        </div>
                    ))}
                </div>
                : null}

        </div>
    )
}

export default PinCounter