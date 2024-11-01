
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './index.css'
import { useState } from 'react';
import { BannerList } from '../../../public/meddy-assets/meddy-assets';

const SliderCustom=()=>{
    const [bannerIndex, setBannerIndex] = useState(0);
    const bannerList = BannerList

    const increaseIndex = () => {
        setBannerIndex((prevIndex) => (prevIndex + 1) % bannerList.length);
    };

    const decreaseIndex = () => {
        setBannerIndex((prevIndex) => (prevIndex - 1 + BannerList.length) % bannerList.length);
    };

 
    return (
        <div className="Slider-wrapper relative rounded-lg overflow-hidden ">
            <button onClick={decreaseIndex} className="button-slider left-rounded flex absolute px-2 py-2 trans-y left-0 top-1/2 text-black">
                <KeyboardArrowLeftIcon/>
            </button>
            <button onClick={increaseIndex} className="button-slider right-rounded flex absolute px-2 py-2 trans-y right-0 top-1/2  text-black ">
                <KeyboardArrowRightIcon/>
            </button>
            <img src={bannerList[bannerIndex]} alt="banner" className="slider-img rounded-lg" onChange={()=>{}}/>
        </div>
    );
}

export default SliderCustom