import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'

const Loading = () => {

  const { getAccountInfo } = useAuth();

  useEffect(() => {
    getAccountInfo();
  }, [])

  return (
    <div className='absolute z-50 start-0 top-0 w-full min-h-screen bg-gradient-to-r from-[#334155] to-[#0F172A] text-white'>
      <div className="flex justify-center items-center h-screen">
        <div className='relative'>
          <div className="border-2 border-slate-400 rounded-full w-40 h-40"></div>
          <div className="absolute top-0 border-b-4 border-orange-400 rounded-full w-40 h-40 animate-spin"></div>
          <div className='absolute top-0 flex justify-center items-center w-full h-full'>
            <img className="h-12" src="https://i.ibb.co/MyHVMps/Krungthon-Previous-Pure.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading