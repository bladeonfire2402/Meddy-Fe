
import SliderCustom from '../Custom Slider';
import Banner5 from '/meddy-assets/slider/banner5.png'; // Absolute path
import Banner6 from '/meddy-assets/slider/banner6.png'; // Absolute path
import './index.css'


const Banner = () => {
    return<div className="Banner-wrapper mt-2">
        <div className='Banner-content flex gap-1 justify-between'>
            <div className='Banner-slider'>
              <SliderCustom/>
            </div>
            <div className='Banner-side flex flex-col gap-2'>
                <img src={Banner5}/>
                <img src={Banner6}/>
            </div>
        </div>
    </div>
}
export default Banner