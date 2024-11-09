import { Person } from "@mui/icons-material"
import { ConvertPrice } from "../../func/converPrice"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GradeIcon from '@mui/icons-material/Grade';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import { useContext, useState } from "react";
import { MeddyAssetsIllustrator } from "../../../public/meddy-assets/meddy-assets";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";



const ProducDetail=()=>{
    const [focus,setFocus]=useState("Thành phần")
    const { id } = useParams(); // `id` will be the Med_ID passed from the URL
    const { Medicines } = useContext(StoreContext); // Assuming medicines are available in the StoreContext

    // Find the specific medicine by Med_ID
    const testItem = Medicines.find(med => med.Med_ID === id);

    if (!testItem) return <p>Medicine not found</p>;
    const HandlerFocus=(focus)=>{
        if(focus==="Thành phần"){
            return(
                <div>
                    <div className="flex items-center gap-2 mt-3">
                        <img src={MeddyAssetsIllustrator.ingridient} className="size-12"/>
                       <h1 className="text-3xl text-blue-500">Thành phần của {testItem.Name} có gì</h1>
                    </div>
                    <p className="mt-4 text-xl">Thành phần chủ yếu là : {testItem.Ingredients}</p>
                    <p className="mt-4 text-xl">Dạng bào chế : {testItem.Med_type}</p>                    
                </div>
            )
        }
        else if(focus==="Công dụng"){
            return(
                <div>
                    <div className="flex items-center gap-2 mt-3">
                       <img src={MeddyAssetsIllustrator.usage} className="size-8"/>
                       <h1 className="text-3xl text-blue-500">Công dụng của {testItem.Name} có gì</h1>
                    </div>
                    <p className="mt-4 text-xl">Công dụng chủ yếu là : {testItem.Usage}</p>
                    <p className="mt-4 text-xl">Tác dụng phụ là : {testItem.Side_effects}</p>
                    <p className="mt-4 text-xl">Liều dùng : {testItem.Med_Dosage}</p>    
                </div>
            )
        }
        else if(focus==="Chỉ định"){
            return(
                <div>
                <div className="flex items-center gap-2 mt-3">
                    <img src={MeddyAssetsIllustrator.indication} className="size-8"/>
                   <h1 className="text-3xl text-blue-500">Chỉ định của {testItem.Name} có gì</h1>
                </div>
                <p className="mt-4 text-xl">Chỉ định chủ yếu là : {testItem.Indications}</p>
            </div>
            )
        }
        else if(focus==="Chống chỉ định"){
            return(
                <div>
                <div className="flex items-center gap-2 mt-3">
                    <img src={MeddyAssetsIllustrator.Contraindications} className="size-8"/>
                   <h1 className="text-3xl text-blue-500">Chống chỉ định của {testItem.Name} có gì</h1>
                </div>
                <p className="mt-4 text-xl">Chống chỉ định với : {testItem.Contraindications}</p>
            </div>
            )
        }
        else if(focus==="Thông tin thêm"){
            return(
                <div>
                <div className="flex items-center gap-2 mt-3">
                    <img src={MeddyAssetsIllustrator.info} className="size-8"/>
                   <h1 className="text-3xl text-blue-500">Thông tin thêm về {testItem.Name} có gì</h1>
                </div>
                <p className="mt-4 text-xl">Số đăng kí : {testItem.TRN}</p>
                <p className="mt-4 text-xl">Hạn sử dụng :  {new Date(testItem.ExpDate).toLocaleDateString()}</p>    
                <p className="mt-4 text-xl">Ngày sản xuất :  {new Date(testItem.MfgDate).toLocaleDateString()}</p>    
            </div>
            )
        }
        
    }
    return(
        <div className="Product-details bg-slate-100 flex justify-center py-7 flex-col items-center gap-5">
            <div className="wrapper gap-7 px-9 py-10 flex bg-white rounded-md shadow-sm">
                <div className="w-2/5">
                   <img className="object-fill w-full" src={testItem.img}/>
                </div>
                <div className="w-3/5">
                   <div className="flex items-center gap-2 "><h3>Thương hiệu</h3><h3 className="text-primary">Agimexpharm</h3></div>

                   <h1 className="text-5xl mt-4 ">{testItem.Name}</h1>

                   <div className="flex items-center gap-2 mt-3 text-xl text-orange-500"><h3>{testItem.Med_ID}</h3><h3 className="text-orange-500">5</h3><GradeIcon color="orange" fontSize=""/></div>

                   <div className="flex items-center gap-2 text-5xl mt-3 font-medium text-primary"><h2 className="">{ConvertPrice(testItem.Price)}</h2>/<h2>{testItem.Unit}</h2></div>

                   <div className="flex flex-col gap-3 mt-7">
                   <div className="flex items-center gap-4 text-lg "><h2 className="text-gray-500 w-52">Đơn vị tính:</h2><h2>{testItem.Unit}</h2></div>
                   <div className="flex items-center gap-4 text-lg "><h2 className="text-gray-500 w-52">Danh mục thuốc:</h2><h2>{testItem.Med_Categories}</h2></div>
                   <div className="flex items-center gap-4 text-lg "><h2 className="text-gray-500 w-52">Dạng bào chế:</h2><h2>{testItem.Med_type}</h2></div>
                   <div className="flex items-center gap-4 text-lg "><h2 className="text-gray-500 w-52">Thành phần:</h2><h2>{testItem.Ingredients}</h2></div>
                   <div className="flex items-center gap-4 text-lg "><h2 className="text-gray-500 w-52">Công dụng:</h2><h2>{testItem.Benefit}</h2></div>
                   <div className="flex items-center gap-4 text-lg "><h2 className="text-gray-500 w-52">Số đăng kí:</h2><h2>{testItem.TRN}</h2></div>
                   <div className="flex items-center gap-4 text-lg "><h2 className="text-gray-500 w-52">Thuốc cần kê toa:</h2><h2>{testItem.Prescription_drug===true?"Cần kê đơn":"Không"}</h2></div>
                   <div className="flex  gap-4 text-lg "><h2 className="text-gray-500 w-52">Số đăng kí:</h2><h2>{testItem.Indications}, <h2>{testItem.Contraindications}</h2></h2></div>
                   </div>

                   <div className="mt-11 w-full">
                   {
                    testItem.Prescription_drug===true
                    ?
                    <button className="px-5 py-3 rounded-3xl text-center flex items-center text-white">
                        Tư vấn ngay
                        <Person/>
                    </button>
                    :
                    <div className="flex items-center gap-4">
                    <div className="flex gap-3  w-1/2">
                        <button className="text-white bg-primary px-5 py-3 w-full rounded-lg shadow-md text-2xl">Thêm vào giỏ hàng</button>
                    </div>
                    <button className=" bg-pastel-blue text-blue-800 px-5 w-1/2 py-3 rounded-lg text shadow-md text-2xl">Tìm nhà thuốc</button>
                    </div>
                   }
                   </div>

                   <hr className="mt-10 "/>

                   <div className="flex mt-4 items-center justify-between text-primary">
                    <div className="flex gap-2 items-center">
                        <SafetyCheckIcon fontSize="large"/>
                        <p>Đổi trả trong 30 ngày</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <AssignmentReturnIcon fontSize="large"/>
                        <p>Miễn phí trong 30 ngày</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <LocalShippingIcon fontSize="large"/>
                        <p>Miễn phí vận chuyển</p>
                    </div>
                    
                   </div>
                   
                </div>
            </div>
            <div className="wrapper gap-3 px-3 py-5 bg-white rounded-md shadow-sm">
               <div className="grid grid-cols-5 grid-rows-5 gap-4 cursor-pointer">
                 {["Thành phần", "Công dụng", "Chỉ định", "Chống chỉ định", "Thông tin thêm"].map((item, index) => (
                     <div
                        key={item}
                         onClick={() => setFocus(item)}
                        className={`col-start-1 row-start-${index + 1} rounded-md py-3 px-2 ${
                           focus === item ? "bg-slate-100" : ""
                   }`}
                   >
                   {item}
                 </div>
                ))}
                  <div className="col-span-4 row-span-5 col-start-2 row-start-1 py-1 px-4 bg-slate-50 rounded-md">
                    {HandlerFocus(focus)}
                   </div>
                </div>
            </div>
        </div>
    )
}
export default ProducDetail