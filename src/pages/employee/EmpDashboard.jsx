import React from 'react'
import EmpNavBar from './EmpNavBar'
import Notify from '../../Components/Global/Notify'

const EmpDashboard = () => {
  return (
    <div className='absolute bg-[#202A34] w-full h-full start-0 top-0 pt-4 px-6 mt-8'>
      <EmpNavBar/>
      <Notify/>
      <h1 className='text-left font-bold text-white mb-4 text-xl'>Dashboard</h1>
      <div className='grid grid-cols-6 gap-x-8'>
        {/* Column 1*/}
        <div className='col-span-3'>
          {/* Customer Transaction */}
          <div className='bg-[#232D37] rounded-sm drop-shadow-md'>
            <div className='bg-[#243443] p-2 px-4'>
              <p className='text-white text-left font-bold'>Customer transaction</p>
            </div>
            <div className='h-60 overflow-y-auto p-2 px-4'>
              <div className='flex text-white justify-between'>
                <p>Name</p>
                <p>Amounth</p>
              </div>
            </div>
          </div>
          {/* ATM transaction */}
          <div className='bg-[#232D37] rounded-sm drop-shadow-md mt-4'>
            <div className='bg-[#243443] p-2 px-4'>
              <p className='text-white text-left font-bold'>Customer transaction</p>
            </div>
            <div className='h-60 overflow-y-auto p-2 px-4'>
              <div className='flex text-white justify-between'>
                <p>Name</p>
                <p>Amounth</p>
              </div>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className='col-span-2'>
          {/* Employee */}
          <div className='bg-[#232D37] rounded-sm drop-shadow-md'>
            <div className='bg-[#243443] p-2 px-4'>
              <p className='text-white text-left font-bold'>Customer transaction</p>
            </div>
            <div className='h-96 overflow-y-auto p-2 px-4'>
              <div className='flex text-white justify-between'>
                <p>Name</p>
                <p>Amounth</p>
              </div>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className='col-span-1'>
          <div className='absolute bg-[#243443] h-full w-72 right-0 -my-16 pt-16 px-4'>
            <p className='text-left text-white'>Recently Payment</p>
            <div className='overflow-y-auto'>
              <div className='flex justify-between text-white'>
                <p>Activity</p>
                <p>Amounth</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EmpDashboard