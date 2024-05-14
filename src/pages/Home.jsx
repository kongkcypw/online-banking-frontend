import React, { useState, useEffect, useContext } from 'react'
import UrgentTransaction from '../Components/Home/UrgentTransaction'
import QuickBalance from '../Components/Home/QuickBalance'
import FavPreview from '../Components/Home/FavPreview'
import Welcome from '../Components/Home/Welcome'
import useAuth from '../hooks/useAuth'
import Loading from '../Components/Global/Loading'

const Home = () => {

  const { userAccountInfo } = useAuth();

  return (
    <>
      {(userAccountInfo)
        ? <div className="w-full h-screen">
          <UrgentTransaction />
          <QuickBalance info={userAccountInfo} />
          <FavPreview />
        </div>
        : <Loading />}
    </>
  )
}

export default Home