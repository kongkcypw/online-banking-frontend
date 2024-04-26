import React from 'react'
import UrgentTransaction from '../Components/Home/UrgentTransaction'
import Topbar from '../Components/Global/Topbar'
import QuickBalance from '../Components/Home/QuickBalance'
import NavBar from '../Components/Global/NavBar'
import Favorites from '../Components/Home/Favorites'

const Home = () => {
  return (
    <div className="w-full h-screen">
      <UrgentTransaction />
      <QuickBalance/>
      <Favorites/>
    </div>
  )
}

export default Home