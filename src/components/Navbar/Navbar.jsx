import { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../../public/assets/assets';
import Logo from '/meddy-assets/main-assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { TbChristmasBall } from "react-icons/tb";
import { ChristmastContext } from '../../App';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const { christTheme,toggleChristmasTheme }=useContext(ChristmastContext)
  const navigate = useNavigate()
  {/*Token để đăng nhập tạm*/}
  const [token,setToken]=useState(true)
  
  return (
    <div className='flex justify-center shadow-md'>
      <div className='navbar wrapper'>
        <Link to='/'><img src={Logo} alt="Logo" className="logo" /></Link>
        <div className="navbar-menu text-primary">
          <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "" : ""}>Trang chủ</Link>
          <Link to="/shop" onClick={() => setMenu("shop")} className={menu === "shop" ? "" : ""}>Mua thuốc</Link>
          <Link to="/prescription" onClick={() => setMenu("Tư vấn")} className={menu === "Tư vấn" ? "" : ""}>Tư vấn</Link>
          <Link to="/news" onClick={() => setMenu("Tin tức")} className={menu === "Tin tức" ? "" : ""}>Tin tức</Link>
          <Link to="/contact" onClick={() => setMenu("Liên hệ")} className={menu === "Liên hệ" ? "" : ""}>Liên hệ</Link>
        </div>
        <div className="navbar-right items-center">
          <div className={christTheme===true?"text-primary":"grey-img"}>
            <TbChristmasBall size={36} onClick={()=>{toggleChristmasTheme()}} /> {/* Toggle theme on click */}
          </div>
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {!token ? (
             <button onClick={() => setShowLogin(true)}>Sign In</button>
          )
          :
          (
            <div className='navbar-profile' onClick={()=>navigate("/profile")}>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
              <hr />
            </ul> 
            </div>
          ) 
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
