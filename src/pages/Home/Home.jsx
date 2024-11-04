
import './Home.css'
import Header from '../../components/Header/Header'

import AppDownload from '../../components/AppDownload/AppDownload'
import Speacial from '../../components/Speacial/Speacial'
import DrugStoreLocation from '../../components/DrugStoreLocation/DrugStoreLocation'
import HealthScreen from '../../components/Health/Health'
import DrugByPerson from '../../components/DrugByPerson/DrugByPerson'
import NewsSection from '../../components/News/News'

const Home = () => {
  
  return (
    <div>
      <Header/>
      <DrugByPerson/>
      <HealthScreen/>
      <Speacial/>
      <NewsSection/>
      <DrugStoreLocation/>
      <AppDownload />
    </div>
  )
}

export default Home
