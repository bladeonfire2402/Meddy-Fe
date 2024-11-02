import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import Swiper navigation styles
import { Navigation } from 'swiper/modules';
import './index.css'
import {  OtherIcon } from '../../../public/meddy-assets/meddy-assets';
import {  ArrowBackIos, ArrowForwardIos, } from '@mui/icons-material';
const CustomSwipper=({list})=>{
   
    return (
        <div className="swiper-container">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                    nextEl: '.custom-next', // Custom "Next" button selector
                    prevEl: '.custom-prev', // Custom "Previous" button selector
                }}
                modules={[Navigation]} // Include Navigation module
            >
            {list.map((item)=>(
                <SwiperSlide key={item.id}>
                    <div className='bg-white rounded-lg pl-9 pr-2 py-2 flex gap-4 items-center'>
                        <img src={OtherIcon.Man}/>
                        <div>
                        <h4 className='text-gray-700 text-lg '>{item.eductation}</h4>
                        <h4 className='text-gray-700 text-xl font-semibold '>{item.name}</h4>
                        <h4 className='text-gray-400 text-lg '>{item.major}</h4>
                        </div>

                    </div>
                </SwiperSlide>
            ))}

            </Swiper>


            {/* Custom navigation buttons */}
            <div className="custom-prev rounded-full flex justify-center items-center"><ArrowBackIos/></div>
            <div className="custom-next rounded-full flex justify-center items-center"><ArrowForwardIos/></div>
        </div>
    );
}
export default CustomSwipper