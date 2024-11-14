import MeddyLogo from '/meddy-assets/main-assets/logo.png'; // Absolute path
import Banner1 from '/meddy-assets/slider/banner1.png'; // Absolute path
import Banner2 from '/meddy-assets/slider/banner2.png'; // Absolute path
import Banner3 from '/meddy-assets/slider/banner3.png'; // Absolute path
import Banner4 from '/meddy-assets/slider/banner4.png'; // Absolute path
import Man from '/meddy-assets/man.png';
import BuyMedicine from '/meddy-assets/other-navigation-assets/buymedicine.png'
import Test from '/meddy-assets/other-navigation-assets/test.png'
import Advice from '/meddy-assets/other-navigation-assets/tuvan.png'
import Device from '/meddy-assets/other-navigation-assets/device.png'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HealingIcon from '@mui/icons-material/Healing';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import shield from '/meddy-assets/illustrator/shield.png'
import acneBlue from '/meddy-assets/illustrator/acne-blue-light-therapy.png'
import med from '/meddy-assets/illustrator/med.png'
import med2 from '/meddy-assets/illustrator/med2.png'
import medical from '/meddy-assets/illustrator/medical.png'
import a from '/meddy-assets/illustrator/a.jpg'
import b from '/meddy-assets/illustrator/b.jpg'
import c from '/meddy-assets/illustrator/c.jpg'
import liver from '/meddy-assets/illustrator/liver.jpg'
import brain from '/meddy-assets/illustrator/brain.jpg'
import stomach from '/meddy-assets/illustrator/stomach.jpg'
import cross from '/meddy-assets/illustrator/cross1.png'
import cross1 from '/meddy-assets/illustrator/cross2.png'
import cross2 from '/meddy-assets/illustrator/cross3.png'
import cross3 from '/meddy-assets/illustrator/cross4.png'
import heart from '/meddy-assets/illustrator/heart.png'
import MeddyLogoVer2 from '/meddy-assets/main-assets/Logoweb.png'
import doctor1 from '/meddy-assets/doctor/doctor.png'
import doctor2 from '/meddy-assets/doctor/doctor2.png'
import doctor3 from '/meddy-assets/doctor/doctor3.png'
import doctor4 from '/meddy-assets/doctor/doctor4.png'
import doctor5 from '/meddy-assets/doctor/doctor5.png'
import info from '/meddy-assets/illustrator/info.png'
import ingridient from '/meddy-assets/illustrator/ingridient.png'
import usage from '/meddy-assets/illustrator/usage.png'
import indication from '/meddy-assets/illustrator/indication.png'
import Contraindications from '/meddy-assets/illustrator/Contraindications.png'
import Paracetamon from '/meddy-assets/drug/paracetamon.jpg'; // Absolute path
import Ibuprofen from '/meddy-assets/drug/Ibuprofen.jpg'; // Absolute path
import Ketoconazole from '/meddy-assets/drug/Ketoconazole.png'; // Absolute path
import Amlodipine from '/meddy-assets/drug/Amlodipine.png'; // Absolute path
import Metformin from '/meddy-assets/drug/Metformin.jpg'; // Absolute path
import Omeprazole from '/meddy-assets/drug/Omeprazole.jpg'; // Absolute path
import Cetirizine from '/meddy-assets/drug/Cetirizine.jpg'; // Absolute path






import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { Person } from '@mui/icons-material';



export const MeddyAssets = [
    MeddyLogo,
    MeddyLogoVer2
    
    
];

export const OtherIcon={
    Person,
    Man,
}

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

export const DoctorList=[
    {
        id:1,
        name:"Phạm Đình Liêm",
        major:"Truyền nhiễm",
        eductation:"Thạc sĩ",
        img:doctor1
    },
    {
        id:2,
        name:"Nguyễn Đức An",
        major:"Sản phụ khoa",
        eductation:"Tiến sĩ",
        img:doctor2
    },
    {
        id:3,
        name:"Nguyễn Nhất Minh",
        major:"Tim mạch",
        eductation:"Giáo sư",
        img:doctor3
    },
    {
        id:4,
        name:"Đặng Bá Nhất",
        major:"Y học cố truyền",
        eductation:"Thạc sĩ",
        img:doctor4
    },
]

export const MeddyAssetsIllustrator={
    shield,
    acneBlue,
    med,
    med2,
    medical,
    a,
    b,
    c,
    liver,
    brain,
    stomach,
    cross,
    cross1,
    cross2,
    cross3,
    heart,
    ingridient,
    indication,
    usage,
    Contraindications,
    info,

}

export const MedicalTest=[
    {
        type:"Kiểm tra nguy cơ mắc bệnh về thận",
        img:liver
    },
    {
        type:"Kiểm tra nguy cơ mắc bệnh Alzheimer",
        img:brain
    },
    {
        type:"Kiểm tra nguy cơ mắc trào ngược dạ dày    ",
        img:stomach
    },

]

export const MedicineType = [
    {
        type: "Thuốc dị ứng",
        img: Paracetamon
    },
    {
        type: "Thuốc da liễu",
        img: Ibuprofen
    },
    {
        type: "Thuốc ung thư",
        img: Ketoconazole
    },
    {
        type: "Thuốc hệ thần kinh",
        img: Amlodipine
    },
    {
        type: "Thuốc hô hấp",
        img: Metformin
    },
    {
        type: "Thuốc tiêu hóa - gan mật",
        img: Omeprazole
    },
    {
        type: "Thuốc tai mũi họng",
        img: Cetirizine
    },
    {
        type: "Thuốc tim mạch",
        img: Paracetamon
    }
];
