
import './Footer.css'
import { assets } from '../../../public/assets/assets'
import { MeddyAssets } from '../../../public/meddy-assets/meddy-assets'
const Footer = () => {
    return (
        <div className='footer bg-primary' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                   <img src={MeddyAssets[1]} className='w-64' alt="" />
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores laboriosam dolores impedit molestiae ex odit voluptatum, velit asperiores deleniti, alias doloremque temporibus autem veritatis natus, veniam totam est nobis.</p>
                    <div className="footer-social-icon flex">
                        <img src={assets.facebook_icon} alt="" />
                       <img src={assets.twitter_icon} alt="" />
                       <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                   <h2>COMPANY</h2>
                   <ul className=''>
                    <li>Trang chủ</li>
                    <li>Về Meddy</li>
                    <li>Đơn hàng</li>
                    <li>Chính sách</li>
                   </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+84-364244786</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © Meddy.com - All Right Reserved.
            </p>
        </div>
    )
}

export default Footer
