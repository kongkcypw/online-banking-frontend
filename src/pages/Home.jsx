import React, { useState, useEffect, useContext } from 'react'
import UrgentTransaction from '../Components/Home/UrgentTransaction'
import QuickBalance from '../Components/Home/QuickBalance'
import Favorites from '../Components/Home/Favorites'
import Welcome from '../Components/Home/Welcome'
import useAuth from '../hooks/useAuth'
import Loading from '../Components/Global/Loading'

const Home = () => {

  const { userAccountInfo, getAccountInfo } = useAuth();

  useEffect(() => {
    getAccountInfo()
  }, [])

  return (
    <>
      {(userAccountInfo)
        ? <div className="w-full h-screen">
          <UrgentTransaction />
          <QuickBalance info={userAccountInfo} />
          <Favorites />
        </div>
        : <Loading />}
    </>
  )
}

export default Home