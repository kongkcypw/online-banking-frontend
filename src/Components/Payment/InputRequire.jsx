import React, { useEffect } from 'react'

const InputRequire = ({ payRequireInfo, payRequireInput, setPayRequireInput }) => {

    const handleInputChange = (event, index, requireKey) => {
        const { value } = event.target;
        setPayRequireInput(prevState => ({
            ...prevState,
            [requireKey]: value // Use the requireKey to set the value in the state object
        }));
    }

    return (
        <div className=''>
            {payRequireInfo.map((item, index) => (
                <div key={index} className=' w-full text-left pt-4'>
                    <p className='text-slate-800'>{item.Label}</p>
                    <input 
                        type='text' 
                        value={payRequireInput[item.Require] || ''}
                        className='w-full mt-2 rounded-md text-black border-b-2'
                        onChange={(e) => handleInputChange(e, index, item.Require)}/>
                </div>
            ))}
        </div>
    )
}

export default InputRequire