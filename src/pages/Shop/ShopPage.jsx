import { useContext, useEffect, useState } from "react";
import { MedicineType } from "../../../public/meddy-assets/meddy-assets";
import CustomSearch from "../../components/CustomSearch/CustomSearch";
import './index.css';
import DrugDisplay from "../../components/DrugDisplay/DrugDisplay";
import FilterListIcon from '@mui/icons-material/FilterList';
import reloadPage from "../../func/reload";
import {SnowAnimation} from "../../func/Animation Function/snowAnimation";
import { ChristmastContext } from "../../App";
import SplashScreen from "../../components/SpalshScreen/SplashScreen";

const ShopPages = () => {
   const [type, setType] = useState("Tất cả");
   const [medType, setMedType] = useState("default");
   const [price, setPrice] = useState("default");
   const [isPrescription, setIsPrescription] = useState("default");
   const { christTheme }=useContext(ChristmastContext)


   // Hàm Switch giữa các loại Type Medicine
   const handleType = (type) => {
      setType(type);
   };
   // Hàm Switch giữa lọc theo giá
   const handlePrice = (price) => {
      setPrice(price);
   };

   // Hàm Switch giữa các dạng bào chế
   const handleMedType = (medType) => {
      setMedType(medType);
   };

   
   useEffect(() => {
      // Hàm này sẽ chỉ chạy sau khi component render xong lần đầu tiên
      if(christTheme===true){
         {SnowAnimation(".bg-moi")}

         return()=>{
            SnowAnimation.stop(".bg-moi")
         }
      }
  }, [christTheme]);

  

   const PriceFilterdList = ["Dưới 100000đ", "100000 đến 300000đ", "Trên 5000000đ"];
   const MedTypeFilterdList = [
      "Viên nén bao phim",
      "Tuýp",
      "Chai",
      "Gói",
      "Viên nang cứng",
      "Viên sủi"
   ];

   return (
      <div className="flex justify-center bg-christmas bg-moi py-10 relative overflow-hidden">
         <div className="wrapper">
            {/* Các chức năng lọc tìm kiếm sản phẩm theo categories */}
            <div className="flex flex-col items-center justify-center bg-white rounded-md py-8 px-8">
               <CustomSearch />
               {/* Lọc thuốc theo danh mục */}
               <div className="flex w-full gap-3 mt-8 text-xl">
                  <h2>Danh sách thuốc theo nhóm trị liệu:</h2>
                  <h2 className="text-primary font-medium">{type === "f" ? "Tất cả" : type}</h2>
               </div>
               {/* Nút chọn danh mục thuốc */}
               <div className="flex justify-between flex-1 w-full items-center mt-5">
                  {MedicineType.map((item, index) => (
                     <div
                        className={type === item.type ? "flex flex-col items-center text-primary" : "flex flex-col items-center"}
                        key={index}
                        onClick={() => handleType(item.type)}
                     >
                        <div className="circle size-24">
                           <img className="size-24" src={item.img} alt={item.type} />
                        </div>
                        <h2>{item.type}</h2>
                     </div>
                  ))}
               </div>
            </div>

            {/* Render ra list sản phẩm */}
            <div className="flex mt-5 py-3 justify-between">
               {/* Lọc sản phẩm theo giá và dạng bào chế */}
               <div className="drug-filter-price-unit bg-white rounded-md h-fit py-2 px-2">
                  <div className="flex items-center gap-2 px-3 py-4 text-xl">
                     <FilterListIcon />
                     Bộ lọc nâng cao
                  </div>
                  <hr />
                  {/* Tùy chỉnh lọc theo danh mục theo giá và đơn vị tính */}
                  <div className="px-3 mt-2">
                     {/* Lọc theo loại thuốc */}
                     <h1 className="text-gray-500">Loại thuốc</h1>
                     <div className="flex flex-col gap-3 py-3">
                        <button className="py-2 border" onClick={() => setIsPrescription("Không kê đơn")}>Không kê đơn</button>
                        <button className="py-2 border" onClick={() => setIsPrescription("Thuốc kê đơn")}>Thuốc kê đơn</button>
                     </div>
                     {/* Lọc theo giá tiền */}
                     <h1 className="text-gray-500">Giá bán</h1>
                     <div className="flex flex-col gap-3 py-3">
                        {PriceFilterdList.map((item, index) => (
                           <button className="py-2 rounded-md border" key={index} onClick={() => handlePrice(item)}>
                              {item}
                           </button>
                        ))}
                     </div>
                     {/* Lọc theo dạng bào chế */}
                     <h1 className="text-gray-500">Dạng bào chế</h1>
                     <div className="flex flex-col gap-3 py-3">
                        {MedTypeFilterdList.map((item, index) => (
                           <button className="py-2 rounded-md border" key={index} onClick={() => handleMedType(item)}>
                              {item}
                           </button>
                        ))}
                     </div>
                     {/* Reset */}
                     <button className="w-full py-3 rounded-md bg-primary text-white uppercase mt-5 mb-4" onClick={() => reloadPage()}>Reset mặc định</button>
                  </div>
               </div>

               <div className="drug-content rounded-md py-5 px-6 bg-white">
                  <div className="flex items-center justify-between">
                     <h1 className="text-4xl font-semibold text-primary">{type}</h1>
                     {/* Hiển thị những gì người dùng đang filter */}
                     <div className="flex items-center gap-2">
                        <p className="text-gray-400"><em>Bạn đang tìm kiếm thuốc theo: </em></p>
                        {price !== "default" && <div className="px-3 py-1 bg-primary text-white rounded-md">{price}</div>}
                        {isPrescription !== "default" && <div className="px-3 py-1 bg-primary text-white rounded-md">{isPrescription}</div>}
                        {medType !== "default" && <div className="px-3 py-1 bg-primary text-white rounded-md">{medType}</div>}
                     </div>
                  </div>
                  <DrugDisplay category={type} />
               </div>
            </div>

         </div>
      </div>
   );
};

export default ShopPages;
