import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Speacial from '../../components/Speacial/Speacial'
import DrugStoreLocation from '../../components/DrugStoreLocation/DrugStoreLocation'

const Home = () => {
  
  return (
    <div>
      <Header/>
      <Speacial/>
      <DrugStoreLocation/>
      <AppDownload />
    </div>
  )
}

export default Home
