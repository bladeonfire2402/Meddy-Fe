const ProfilePage=()=>{
    return(
        <div className="Profile-wrapper bg-slate-50 py-10">
            <div className=""></div>
            <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg flex">
            <div className="w-1/3 bg-blue-600 text-white p-6 rounded-l-lg">
                <div className="text-center">
                    <div className="w-24 h-24 bg-blue-400 rounded-full mx-auto mb-4"></div>
                    <p className="text-lg font-semibold">anh Đinh Liêm</p>
                    <p className="text-sm">0963674165</p>
                </div>
                <nav className="mt-8 space-y-4">
                    <a href="#" className="flex items-center px-4 py-2 text-white bg-blue-700 rounded-lg">
                        <span className="material-icons mr-2">person</span> Thông tin cá nhân
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-blue-500 rounded-lg">
                        <span className="material-icons mr-2">shopping_bag</span> Đơn hàng của tôi
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-blue-500 rounded-lg">
                        <span className="material-icons mr-2">location_on</span> Quản lý sổ địa chỉ
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-blue-500 rounded-lg">
                        <span className="material-icons mr-2">event</span> Lịch hẹn tiêm chủng
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-blue-500 rounded-lg">
                        <span className="material-icons mr-2">medical_services</span> Đơn hàng tiêm chủng
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-blue-500 rounded-lg">
                        <span className="material-icons mr-2">medication</span> Đơn thuốc của tôi
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-blue-500 rounded-lg">
                        <span className="material-icons mr-2">logout</span> Đăng xuất
                    </a>
                </nav>
            </div>
            
            <div className="w-2/3 p-8">
                <h2 className="text-2xl font-semibold mb-6">Thông tin cá nhân</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600">Họ và tên</label>
                        <p className="text-gray-800">anh Đinh Liêm</p>
                    </div>
                    <div>
                        <label className="block text-gray-600">Số điện thoại</label>
                        <p className="text-gray-800">0963674165</p>
                    </div>
                    <div>
                        <label className="block text-gray-600">Giới tính</label>
                        <p className="text-gray-800">Nam</p>
                    </div>
                    <div>
                        <label className="block text-gray-600">Ngày sinh</label>
                        <p className="text-gray-800">24-02-2004</p>
                    </div>
                </div>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Chỉnh sửa thông tin</button>
            </div>
        </div>
    </div>
            

        </div>
    )
}
export default ProfilePage