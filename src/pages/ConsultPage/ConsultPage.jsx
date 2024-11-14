
import { useState } from "react";
import { PrimaryMediumbutton } from "../../components/button/PrimaryMediumButton";


const ConsultPage=()=>{
  const [uploadImg, setUpLoadImg] = useState('');
  const [adviceType,setadviceType]=useState('default')
  console.log(adviceType)

  const importPicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUpLoadImg(imageUrl);
    }
  };
    
  return(
        <div className="flex justify-center bg-slate-100 h-full pb-20">
            <div className="wrapper py-5 ">
                <div className="bg-white px-10 py-4 rounded-md shadow-sm">
                <h1 className="font-semibold text-3xl text-primary">Gửi yêu cầu tư vấn</h1>
                <div className="flex gap-4 items-center mt-4">
                  <div onClick={()=>{setadviceType('default')}}>
                  <PrimaryMediumbutton title={"Form tư vấn"} />
                  </div>
                  <div onClick={()=>{setadviceType("Đơn thuốc")}}>
                  <PrimaryMediumbutton title={"Tư vấn theo Đơn thuốc"}/>
                  </div>
                </div>
                </div>

                {adviceType!=="default"
                ?
                <div>
                  <div className="bg-white flex flex-col rounded-md mt-5 gap-4 py-6">
                  <h2 className="text-center text-primary mb-10 text-4xl font-semibold  uppercase">TƯ Vấn Theo đơn thuốc</h2>
                  <div className="flex">
                    <div className="w-2/3 border-r-2 px-7">
                      <div className="flex justify-between  px-4 py-5">
                        <div className="flex flex-col items-center">
                         <div className=" bg-primary rounded-full flex justify-center items-center text-white size-14">1</div>
                         <p className="mt-3 w-36 text-center text-gray-500">Tải lên hình ảnh đơn thuốc</p>
                        </div>
                        <div className="flex flex-col items-center">
                         <div className=" bg-primary rounded-full flex justify-center items-center text-white size-14">2</div>
                         <p className="mt-3 w-36 text-center text-gray-500">Dược sĩ sẽ gọi điện tư vấn trong 15 phút</p>
                        </div>
                        <div className="flex flex-col items-center">
                         <div className=" bg-primary rounded-full flex justify-center items-center text-white size-14">3</div>
                         <p className="mt-3 w-36 text-center text-gray-500">Meddy sẽ giao hàng tận tay bạn</p>
                        </div>
                      </div>
                      <form className="px-5">
                        <div className="w-full h-48 border-2 z-10 relative rounded-md">
                          {uploadImg &&(
                            <img 
                            className="relative w-full z-20 h-48 object-contain rounded-md"
                            src={uploadImg}
                            />
                          )}
                          <input type="file"
                          name="file"
                          accept="image/"
                          onChange={importPicture}
                          className="absolute inset-0 opacity-0 cursor-pointer rounded-md"
                          />
                        </div>
                        <h1 className="font-semibold mt-4">Ghi chú</h1>
                        <textarea maxLength={"500"} className="border-2 rounded-md w-full mt-4 px-2 py-2 min-h-32" required placeholder="Vui lòng để lại thông tin"/>
                        <hr className="mt-6 mb-6" />
                        <div className="flex gap-4 mb-9">
                          <div className="w-1/2">
                             <h3 className="mb-4 font-semibold">Nhập tên</h3>
                             <input type="text" className="border-2 rounded-md px-2 py-2 w-full" placeholder="Nguyễn Văn A" required/>
                          </div> 
                          <div className="w-1/2">
                             <h3 className="mb-4 font-semibold">Số điện thoại</h3>
                             <input type="tel   " className="border-2 rounded-md px-2 py-2 w-full" placeholder="0900 - 0009" pattern="[0-9]{10}" required/>
                          </div>       
                        </div>
                     
                        <button type="submit" className="bg-primary w-full py-4 text-lg font-medium rounded-md mb-6 text-white">Gửi đơn thuốc</button>
                      </form>
                    </div>
                    <div className="w-1/3 py-5 px-3">
                      <h1 className="text-center font-medium text-3xl text-primary mb-4">Đơn thuốc mẫu</h1>
                     <img src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706162938-0-prescription-tips.png"/>
                     <h1 className="mt-5 mb-3 font-semibold text-lg">Quy tắc</h1>
                    <ul className="list-disc px-7">
                        <li>Có thông tin đơn vị phát hành đơn thuốc </li>
                        <li>Có chi tiết thông tin bệnh nhân, chẩn đoán bệnh</li>
                        <li>Có tên thuốc, hàm lượng, số lượng, liều dùng</li>
                        <li>Còn hiệu lực: Đơn thuốc chỉ có hiệu lực trong vòng 5 ngày kể từ ngày kê đơn</li>
                        <li>Có chữ ký và họ tên bác sĩ kê đơn</li>
                    </ul>
                    </div>
                  </div>
                </div>
                </div>
                :
                <div className="bg-white flex flex-col rounded-md mt-5 gap-4 py-12">
                  <h2 className="text-center text-primary mb-4 text-4xl font-semibold  uppercase">Điền Form tư vấn</h2>
                  <div className="flex justify-center gap-16  px-4 py-1">
                        <div className="flex flex-col items-center">
                         <div className=" bg-primary rounded-full flex justify-center items-center text-white size-14">1</div>
                         <p className="mt-3 w-36 text-center text-gray-500">Điền tên thuốc muốn tư vấn</p>
                        </div>
                        <div className="flex flex-col items-center">
                         <div className=" bg-primary rounded-full flex justify-center items-center text-white size-14">2</div>
                         <p className="mt-3 w-36 text-center text-gray-500">Dược sĩ sẽ gọi điện tư vấn trong 10 phút</p>
                        </div>
                        <div className="flex flex-col items-center">
                         <div className=" bg-primary rounded-full flex justify-center items-center text-white size-14">3</div>
                         <p className="mt-3 w-36 text-center text-gray-500">Dược sĩ tạo đơn thuốc theo tư vấn</p>
                        </div>
                  </div>
                  <div className="w-full flex justify-center">
                  <form className="wrapper">
                    <div className="flex items-center gap-10">
                      <div className="w-full">
                        <h3 className="text-xl mb-3">Họ và tên</h3>
                        <input type="text" className="border-2 rounded-md px-3 py-3 w-full" required placeholder="Nguyễn Văn A"/>
                      </div>
                      <div className="w-full">
                        <h3 className="text-xl mb-3">Số điện thoại</h3>
                         <input type="tel" className="border-2 rounded-md px-3 py-3 w-full" required placeholder="09636xxxx"/>
                      </div>
                    </div>
                    <h3 className="mt-5 text-xl mb-3">Thuốc muốn tư vấn</h3>
                    <input type="text" className="border-2 rounded-md px-3 py-3 w-full" placeholder="Paracetamol"/>

                    <h3 className="mt-5 text-xl mb-3">Bệnh muốn tư vấn</h3>
                    <input type="text" className="border-2 rounded-md px-3 py-3 w-full" placeholder="Sốt xuất huyết"/>

                    
                    <h3 className="mt-5 text-xl mb-3">Tư vấn khác</h3>
                    <input type="text" className="border-2 rounded-md px-3 py-3 w-full" placeholder="Sốt xuất huyết"/>

                    <h3 className="mt-5 text-xl">Ghi chú </h3>
                    <textarea maxLength={"500"} className="border-2 rounded-md w-full mt-3 px-2 py-2 min-h-32" required placeholder="Vui lòng để lại thông tin" />

                    <button type="submit" className="text-primary bg-slate-50 mt-4 text-2xl px-5 py-3 shadow-md">
                      Gửi ngay
                    </button>

                  </form>
                  </div>
                </div>}
                
            </div>
        </div>
    )
}
export default ConsultPage