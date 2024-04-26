import React from 'react'
import UrgentTransaction from '../Components/Home/UrgentTransaction'
import Topbar from '../Components/Global/Topbar'
import QuickBalance from '../Components/Home/QuickBalance'
import NavBar from '../Components/Global/NavBar'

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Topbar />
      <UrgentTransaction />
      <QuickBalance/>
      <NavBar/>
    </div>
  )
}

export default Home