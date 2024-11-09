import  { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOder from './pages/PlaceOder/PlaceOder'
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import AboutPages from './pages/About/About'

import PrescriptionPage from './pages/Prescription/Perscription'
import ShopPages from './pages/Shop/ShopPage'
import ProfilePage from './pages/Profile/Profile'
import ProducDetail from './pages/ProductDetail/ProductDetail'



const App = () => {

 const[showLogin,setShowLogin] =useState(false);
  return (
    <div>
     {/* ShowLogin? Nếu biến Showlogin là  true thì đoạn mã sau dấu ? sẽ thực hiện */}
    {showLogin?<LoginPopUp  setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOder />} />
          <Route path='/about' element={<AboutPages/>}/>
          <Route path='/shop' element={<ShopPages/>}/>
          <Route path='/prescription' element={<PrescriptionPage/>}/>
          <Route path='/profile'element={<ProfilePage/>}/>
          <Route path="/product/:id" element={<ProducDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
