import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from '../../../public/assets/assets';

import './index.css'
import { useNavigate } from "react-router-dom";



const MedicineBlock=({medicine})=>{
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const navigate = useNavigate();
    const detailNavigate=useNavigate();

    return(
        <div className="">
            <div className='medicine-item bg-white'>
         <div className="medicine-item-img-container">
        <img className='medicine-item-image i' src={medicine.img} alt={"meoi"} />
      </div>

      <div className="medicine-item-info">
        <div className="medicine-item-name-rating">
          <p>{medicine.Name}</p>
        </div>
        <p className="medicine-item-desc">
           <p>{medicine.Med_Categories}</p>
        </p>
        <p className="medicine-item-price">
            {medicine.Price} VND / {medicine.Unit}
        </p>
        <div className="mt-2 mb-3 text-blue-500" onClick={() => detailNavigate(`/product/${medicine.Med_ID}`)}>Xem chi tiết</div>
        <div className="relative">
           
        {!cartItems[medicine.Med_ID] ? 
        (
           <div className="">
            {medicine.Prescription_drug=== false?
             <img
             className=''
             onClick={()=>addToCart(medicine.Med_ID)}
             src={assets.add_icon_white}
             alt="Add item"
           />
            :
            <button className="text-center bg-orange-400 text-white px-3 py-2 rounded-md w-full" onClick={()=>{navigate("/prescription")}}>Cần tư vấn</button>
            }

           </div>
        ) : (
          <div className='absolute flex gap-5 items-center'>
            <img
              className=" "
              onClick={()=>removeFromCart(medicine.Med_ID)}
              src={assets.remove_icon_red}
              alt="Remove item"
            />
            <p>{cartItems[medicine.Med_ID]}</p>
            <img
             onClick={()=>addToCart(medicine.Med_ID)}
              src={assets.add_icon_green}
              alt="Add item"
            />
          </div>
        )}
        </div>
      </div>
      
    </div>

    </div>
    )

}
export default MedicineBlock