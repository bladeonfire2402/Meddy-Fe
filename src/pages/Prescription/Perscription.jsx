import { ArrowBackIos, ArrowForward, ArrowForwardIos } from "@mui/icons-material"
import { useState } from "react";


const PrescriptionPage=()=>{
  const [uploadImg, setUpLoadImg] = useState('');

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
                <h1 className="font-semibold text-3xl text-primary mt-4">Đặt thuốc theo đơn</h1>
                <div className="bg-white flex rounded-md mt-5 gap-4 py-6">
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
    )
}
export default PrescriptionPage