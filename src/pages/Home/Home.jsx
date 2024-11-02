import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'

import AppDownload from '../../components/AppDownload/AppDownload'
import Speacial from '../../components/Speacial/Speacial'
import DrugStoreLocation from '../../components/DrugStoreLocation/DrugStoreLocation'
import HealthScreen from '../../components/Health/Health'

const Home = () => {
  
  return (
    <div>
      <Header/>
      <Speacial/>
      <HealthScreen/>
      <DrugStoreLocation/>
      <AppDownload />
    </div>
  )
}

export default Home
