import { useContext, useEffect, useState } from "react";
import { MedicineType } from "../../../public/meddy-assets/meddy-assets";
import CustomSearch from "../../components/CustomSearch/CustomSearch";
import './index.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import reloadPage from "../../func/reload";
import { SnowAnimation } from "../../func/Animation Function/snowAnimation";
import { ChristmastContext } from "../../App";
import SplashScreen from "../../components/SpalshScreen/SplashScreen";
import { StoreContext } from "../../context/StoreContext";
import DrugDisplayVer2 from "../../components/DrugDisplayVer2/DrugDisplay";

const ShopPages = () => {
   const [type, setType] = useState("Tất cả");
   const [medType, setMedType] = useState("default");
   const [price, setPrice] = useState("default");
   const [isPrescription, setIsPrescription] = useState("default");
   const { christTheme } = useContext(ChristmastContext);
   const [showSplash, setShowSplash] = useState(false);
   const {Medicines}=useContext(StoreContext)

   // Hàm Switch giữa các loại Type Medicine
   const handleType = (type) => setType(type);

   // Hàm Switch giữa lọc theo giá
   const handlePrice = (price) => setPrice(price);

   // Hàm Switch giữa các dạng bào chế
   const handleMedType = (medType) => setMedType(medType);

   const applyFilters = () => {
      return Medicines.filter(medicine => {
          const matchesPrescription = isPrescription === "default" || 
                                      (isPrescription === "Không kê đơn" && !medicine.Prescription_drug) ||
                                      (isPrescription === "Thuốc kê đơn" && medicine.Prescription_drug);
  
          const matchesPrice = price === "default" || 
                               (price === "Dưới 100000đ" && medicine.price < 100000) ||
                               (price === "100000 đến 300000đ" && medicine.price >= 100000 && medicine.price <= 300000) ||
                               (price === "Trên 5000000đ" && medicine.price > 5000000);
  
          const matchesMedType = medType === "default" || medicine.Med_type === medType;
  
          const matchesType = type === "Tất cả" || medicine.type === type;
  
          return matchesPrescription && matchesPrice && matchesMedType && matchesType;
      });
  };
  const filterdListMedicines = applyFilters()
  

   useEffect(() => {
      if (christTheme) {
         setShowSplash(true);
         setTimeout(() => {
            SnowAnimation(".bg-moi");
         }, 2000);
         
         const splashTimer = setTimeout(() => {
            setShowSplash(false);
         }, 4000);

         return () => {
            clearTimeout(splashTimer);
            SnowAnimation.stop(".bg-moi");
         };
      }
   }, [christTheme]);

   const PriceFilterdList = ["Dưới 100000đ", "100000 đến 300000đ", "Trên 5000000đ"];
   const MedTypeFilterdList = ["Viên nén bao phim", "Tuýp", "Chai", "Gói", "Viên nang cứng", "Viên sủi"];

   return (
      <div className="flex justify-center bg-christmas bg-moi relative overflow-hidden">
         {showSplash ? <SplashScreen />:
          <div className="wrapper py-10">
          {/* Các chức năng lọc tìm kiếm sản phẩm theo categories */}
          <div className="flex flex-col items-center justify-center bg-white rounded-md py-8 px-8">
             <CustomSearch />
             <div className="flex w-full gap-3 mt-8 text-xl">
                <h2>Danh sách thuốc theo nhóm trị liệu:</h2>
                <h2 className="text-primary font-medium">{type === "f" ? "Tất cả" : type}</h2>
             </div>
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
             <div className="drug-filter-price-unit bg-white rounded-md h-fit py-2 px-2">
                <div className="flex items-center gap-2 px-3 py-4 text-xl">
                   <FilterListIcon />
                   Bộ lọc nâng cao
                </div>
                <hr />
                <div className="px-3 mt-2">
                   <h1 className="text-gray-500">Loại thuốc</h1>
                   <div className="flex flex-col gap-3 py-3">
                      <button className="py-2 border" onClick={() => setIsPrescription("Không kê đơn")}>Không kê đơn</button>
                      <button className="py-2 border" onClick={() => setIsPrescription("Thuốc kê đơn")}>Thuốc kê đơn</button>
                   </div>
                   <h1 className="text-gray-500">Giá bán</h1>
                   <div className="flex flex-col gap-3 py-3">
                      {PriceFilterdList.map((item, index) => (
                         <button className="py-2 rounded-md border" key={index} onClick={() => handlePrice(item)}>
                            {item}
                         </button>
                      ))}
                   </div>
                   <h1 className="text-gray-500">Dạng bào chế</h1>
                   <div className="flex flex-col gap-3 py-3">
                      {MedTypeFilterdList.map((item, index) => (
                         <button className="py-2 rounded-md border" key={index} onClick={() => handleMedType(item)}>
                            {item}
                         </button>
                      ))}
                   </div>
                   <button className="w-full py-3 rounded-md bg-primary text-white uppercase mt-5 mb-4" onClick={reloadPage}>Reset mặc định</button>
                </div>
             </div>

             <div className="drug-content rounded-md py-5 px-6 bg-white">
                <div className="flex items-center justify-between">
                   <h1 className="text-4xl font-semibold text-primary">{type}</h1>
                   <div className="flex items-center gap-2">
                      <p className="text-gray-400"><em>Bạn đang tìm kiếm thuốc theo: </em></p>
                      {price !== "default" && <div className="px-3 py-1 bg-primary text-white rounded-md">{price}</div>}
                      {isPrescription !== "default" && <div className="px-3 py-1 bg-primary text-white rounded-md">{isPrescription}</div>}
                      {medType !== "default" && <div className="px-3 py-1 bg-primary text-white rounded-md">{medType}</div>}
                   </div>
                </div>

                {/*Sản phẩm sau khi được render */}
                <DrugDisplayVer2 item={filterdListMedicines}/>
             </div>
          </div>
       </div>
         }
        
      </div>
   );
};

export default ShopPages;
