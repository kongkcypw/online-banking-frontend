import React from 'react'
import EmpNavBar from './EmpNavBar'
import Notify from '../../Components/Global/Notify'
import EmpSidebar from '../../Components/Layout/EmpSidebar'
import AtmList from '../../Components/role_employee/dashboard/AtmList'
import UserList from '../../Components/role_employee/dashboard/UserList'
import EmpOverview from '../../Components/role_employee/dashboard/EmpOverview'

const EmpDashboard = () => {

  return (
    <div className='absolute bg-[#F7F7F8] w-full h-full start-0 top-0'>
      <div className='flex'>
        <EmpSidebar />
        <div className='m-8'>
          <div className='text-left p-8'>
            <p className='text-3xl font-semibold'>ยินดีต้อนรับสู่หน้า Dashboard (Employee)</p>
            <p className='pt-2 text-lg'>คุณสามารถดูข้อมูลการทำธุรกรรมของลูกค้าภายในสาขาได้</p>

            <div className='grid grid-cols-10'>
              <div className='col-span-6 text-left'>
                <EmpOverview />
                <UserList />
              </div>
              <div className='col-span-4 mx-8'>
                <AtmList />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmpDashboard