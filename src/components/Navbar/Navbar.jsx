import { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../../public/assets/assets'
import Logo from '/meddy-assets/main-assets/logo.png'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const[menu,setMenu] = useState("home");
  
    const{getTotalCartAmount} = useContext(StoreContext);
    return (
    <div className='flex justify-center shadow-md'>
    <div className='navbar wrapper'>
      <Link to='/'><img src={Logo} alt="" className="logo" /></Link>    
      <div className="navbar-menu text-primary">
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Trang chủ</Link>
        <Link to="/about" onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>Về Meddy</Link>
        <Link to="/shop" onClick={()=>setMenu("shop")} className={menu==="shop"?"active":""}>Sản phẩm</Link>
        <Link to="/prescription" onClick={()=>{setMenu("Tư vấn")}} className={menu==="Tư vấn"?"active":""}>Tư vấn</Link>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Liên hệ </a>
      </div>
      
      <div className="navbar-right">
       
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>        
    </div>
  )
}

export default Navbar

