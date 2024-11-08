import { DoctorList, MeddyAssetsIllustrator, MedicalTest } from "../../../public/meddy-assets/meddy-assets"
import CustomSwipper from "../customSwiper/customSwiper"
import doctorImg from '/meddy-assets/other/doctor.png'
import doctor1 from '/meddy-assets/doctor/doctor.png'

const HealthScreen = ()=>{
    return(
        <div className="Health-section bg-blue-300 flex justify-center bg- py-10">
            <div className="wrapper">
                <div className="Health-Diese ">
                    <HealthDiease/>
                </div>
                <div className="mt-7">
                    <MedicalTestSection/>
                </div>
            </div>

        </div>
    )
}
export default HealthScreen


export const HealthDiease=()=>{
    return(
        <div className="px-6 py-8 bg-grad-pastel-utra rounded-md relative overflow-hidden mt-0.5">
            <h1 className="text-3xl font-semibold text-white mb-2">Chuyên trang bệnh và sức khỏe</h1>
            <p className="text-xl text-white ">Tổng hợp thông tin và kiến thức chuyên sâu về các lĩnh vực sức khỏe</p>
            <button className="bg-white px-3 py-2 rounded-lg text-primary text-xl mt-7 mb-8">Tìm hiểu thêm</button>
            <div className="">
                <CustomSwipper list={DoctorList}/>
            </div>
            <img className="absolute top-0 right-0" src={doctorImg}></img>
        </div>
    )
}

export const MedicalTestSection=()=>{
    return(
        <div className="px-6 py-8 rounded-md bg-grad-secondary-utra relative">
            <h1 className="text-3xl font-semibold text-white mb-2 ">Kiểm tra sức khỏe</h1>
            <p className="text-xl text-white ">Kết quả đánh giá sẽ cho bạn lời khuyên xử trí phù hợp!</p>
            <div className="w-10/12 flex gap-4">
               {MedicalTest.map((item,index)=>(
                <div className="bg-white rounded-md px-6 py-2 mt-7" key={index}>
                    <div className="flex gap-4 items-center">
                        <div className="rounded-full overflow-hidden mr-2">
                            <img src={item.img} className="size-20 object-fill"/>
                        </div>
                     <h3 className="text-primary text-sm">{item.type}</h3>
                    </div>
                    
                </div>
               ))}
            </div>
            <img className="absolute right-0 bottom-0" src={MeddyAssetsIllustrator.med2}/>
            <img className="absolute right-36 bottom-24" src={MeddyAssetsIllustrator.med}/>
         

        </div>
    )
}