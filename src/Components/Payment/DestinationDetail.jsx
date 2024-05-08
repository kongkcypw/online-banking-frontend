import React from 'react'

const DestinationDetail = ({ detail }) => {
    return (
        <div className=''>
            <div className='flex bg-white rounded-lg'>
                <img src={detail.Image} className='w-16 rounded-lg' />
                <div className='text-left my-auto ml-2'>
                    <p className='font-semibold'>{detail.Name}</p>
                    <p className=''>{detail.Type}</p>
                </div>
            </div>
        </div>
    )
}

export default DestinationDetail