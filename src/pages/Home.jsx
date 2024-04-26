import React, { useState, useEffect, useContext } from 'react'
import UrgentTransaction from '../Components/Home/UrgentTransaction'
import QuickBalance from '../Components/Home/QuickBalance'
import Favorites from '../Components/Home/Favorites'
import Welcome from '../Components/Home/Welcome'
import { UserContext } from '../contexts/userContext'

const Home = () => {

  const { checkUserLogin, isLogedIn } = useContext(UserContext);

  useEffect(() => {
    checkUserLogin()
  }, [])

  return (
    <>
      {isLogedIn
        ? <div className="w-full h-screen">
          <UrgentTransaction />
          <QuickBalance />
          <Favorites />
        </div>
        : <div className="w-full h-screen">
          <Welcome />
        </div>}

    </>
  )
}

export default Home