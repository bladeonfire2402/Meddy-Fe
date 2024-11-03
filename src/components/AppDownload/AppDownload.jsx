
import './AppDowload.css'
import { assets } from '../../../public/assets/assets'
const AppDownload = () => {
  return (
   <div className="app-download" id='app-download'>
    <p>Để có trải nghiệm tốt nhất hãy tải ngay <br /> <p className='text-blue-600'>Meddy App</p></p>
    <div className="app-download-plantforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
   </div>
  )
}

export default AppDownload
