import MeddyLogo from '/meddy-assets/main-assets/logo.png'; // Absolute path
import Banner1 from '/meddy-assets/slider/banner1.png'; // Absolute path
import Banner2 from '/meddy-assets/slider/banner2.png'; // Absolute path
import Banner3 from '/meddy-assets/slider/banner3.png'; // Absolute path
import Banner4 from '/meddy-assets/slider/banner4.png'; // Absolute path
import BuyMedicine from '/meddy-assets/other-navigation-assets/buymedicine.png'
import Test from '/meddy-assets/other-navigation-assets/test.png'
import Advice from '/meddy-assets/other-navigation-assets/tuvan.png'
import Device from '/meddy-assets/other-navigation-assets/device.png'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import WaterDropIcon from '@mui/icons-material/WaterDrop';

export const MeddyAssets = [
    MeddyLogo,
];

export const BannerList = [
    Banner1,
    Banner2,
    Banner3,
    Banner4
];

export const OtherNavigationList = [
    {
        title:"Cần mua thuốc",
        img: BuyMedicine,
        link:""
    },
    {
        title:"Kiểm tra sức khỏe",
        img: Test,
        link:""
    },
    {
        title:"Tư vấn",
        img: Advice,
        link:""
    },
    {
        title:"Thiết bị y tế",
        img: Device,
        link:""
    },
]

export const CategoriesList=[
    {
        categoriesTitle:"Thần kinh não",
        img:PsychologyIcon
    },
    {
        categoriesTitle:"Vitamin & Khoáng chất",
        img:WaterDropIcon
    },
    {
        categoriesTitle:"Tăng sức đề kháng miễn dịch",
        img:VaccinesIcon
    },
    {
        categoriesTitle:"Hỗ trợ điều trị",
        img:HealingIcon
    },
    {
        categoriesTitle:"Sức khỏe tim mạch",
        img:VolunteerActivismIcon
    }
]

export const DrugStoreLocationList=[
    {
        location:"Thành phố Hồ Chí Minh",
        quantity:3,
        img:"https://images2.thanhnien.vn/528068263637045248/2023/6/2/1-fpt-long-chau-chinh-thuc-can-moc-1234-nha-thuoc-16856817753341435401294.jpg"
    },
    {
        location:"Cần Thơ",
        quantity:3
    },
    {
        location:"Hà Nội",
        quantity:3
    },
    {
        location:"Đà Nẵng",
        quantity:3
    },
    {
        location:"Bình Dương",
        quantity:3
    }
]