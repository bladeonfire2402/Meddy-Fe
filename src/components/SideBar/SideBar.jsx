import {  Person  } from "@mui/icons-material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { assets } from "../../../public/assets/assets"
import './index.css'

const SideBar=({setSection})=>{
    return(
        <div className="SideBar-wrapper">
            <div className="flex justify-center flex-col items-center rounded-md h-48 w-full bg-primary">
                <div className="rounded-full bg-white size-16 flex  items-center justify-center mb-5">
                    <Person fontSize="large"/>
                </div>
                <h1 className="text-xl font-medium text-white">Phạm Đình Liêm</h1>
            </div>

            {/*Switch*/}
            <div className="shadow-vip rounded-md mt-3 Sidebar-item-switch" onClick={()=>{setSection("profile")}}>
                <div className="flex justify-between items-center py-3 px-2">
                    <div className="flex gap-2"><h3>Thông tin cá nhân </h3></div>
                    <ArrowForwardIosIcon fontSize=""/>
                </div>
            </div>

            <div className="shadow-vip rounded-md mt-3 Sidebar-item-switch" onClick={()=>{setSection("order")}}>
                <div className="flex justify-between items-center py-3 px-2">
                    <div className="flex gap-2"><h3>Danh sách đơn hàng</h3></div>
                    <ArrowForwardIosIcon fontSize=""/>
                </div>
            </div>

            <div className="shadow-vip rounded-md mt-3 Sidebar-item-switch"  onClick={()=>{setSection("prescription")}}>
                <div className="flex justify-between items-center py-3 px-2">
                    <div className="flex gap-2"><h3>Danh sách đơn thuốc</h3></div>
                    <ArrowForwardIosIcon fontSize=""/>
                </div>
            </div>

            <div className="shadow-vip rounded-md mt-3 Sidebar-item-switch">
                <div className="flex justify-between items-center py-3 px-2">
                    <div className="flex gap-2"><h3>Đăng xuất</h3></div>
                </div>
            </div>
            
            
        </div>
    )
}
export default SideBar