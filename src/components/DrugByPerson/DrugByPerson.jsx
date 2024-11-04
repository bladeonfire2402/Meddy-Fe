import { useEffect, useState } from 'react';
import ContentText from '../Text/ContentText';
import HeadLineText from '../Text/HeadlLine';
import { AccountBox, Check, Person } from '@mui/icons-material';
import ProductLine from '../Product-Line/ProductLine';
import Doctorimg from '/public/meddy-assets/other/doctor2.png'
import { food_list } from '../../../public/assets/assets';
import { MeddyAssetsIllustrator } from '../../../public/meddy-assets/meddy-assets';

function DrugByPerson() {
  const [products, setProducts] = useState([]);  // Lưu trữ dữ liệu sản phẩm
  const [loading, setLoading] = useState(true);  // Trạng thái loading
  const [error, setError] = useState(null);      // Trạng thái lỗi
  const [person,setPerson]=useState('Nam giới')
  const PersonList=["Nam giới","Trẻ em","Mẹ và bé","Người bị tiểu đường"]
  
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok'); // Xử lý lỗi nếu phản hồi không ổn định
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);   // Cập nhật state với danh sách sản phẩm
        setLoading(false);    // Kết thúc trạng thái loading
      })
      .catch((error) => {
        setError(error);      // Lưu lỗi vào state
        setLoading(false);    // Kết thúc trạng thái loading
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Hiển thị trạng thái loading
  }

  if (error) {
    return <p>Error: {error.message}</p>;  // Hiển thị lỗi nếu có
  }

  const RealProduct=products.slice(0,20)
  const ProductMoi=food_list.slice(0,10)

  return (
    <div className='flex justify-center flex-col bg-slate-50 items-center py-7 relative'>
        <div className='wrapper px-5 bg-blue-100 py-6 rounded-md relative'>
            <div className='flex gap-2 items-center text-blue-900 '>
                <Person fontSize='large'/>
               <HeadLineText text={"Sản phẩm theo đối tượng"}/>
            </div>
            <div className='absolute right-5 bottom-0'><img className='w-72' src={Doctorimg}/></div>
         
            <div className='flex gap-3 mt-6 cursor-pointer'>
                {PersonList.map((item,index)=>(
                    <div className='person-item flex gap-2 border-2 px-4 py-2 bg-white rounded-2xl border-blue-500 overflow-hidden relative'
                     key={index}
                     onClick={(()=>{setPerson(item)})}
                     >
                        {item}
                        {person===item?<div className=' flex items-center w-6 text-white bg-blue-600 rounded-full '><Check fontSize='small' className='ml-0.5'/></div>:<p></p>}
                    </div>
                ))}
            </div>
        </div>
        <div className='wrapper'>
              <ProductLine item={ProductMoi}/>
        </div>
        <div className='absolute size-16 top-2 rotate-12 right-6'><img src={MeddyAssetsIllustrator.cross}/></div>
        <div className='absolute size-7 top-24 rotate-12 right-3'><img src={MeddyAssetsIllustrator.cross}/></div>
        <div className='absolute size-24 top-28 rotate-45 right-20'><img src={MeddyAssetsIllustrator.cross1}/></div>
        <div className='absolute size-24 top-24 rotate-12 left-20'><img src={MeddyAssetsIllustrator.cross3}/></div>
        <div className='absolute size-14 top-2 -rotate-12 left-5'><img src={MeddyAssetsIllustrator.cross}/></div>
        <div className='absolute size-64 top-60 rotate-12 -left-11'><img src={MeddyAssetsIllustrator.heart}/></div>
        <div className='absolute size-16 bottom-6 rotate-45 left-2'><img src={MeddyAssetsIllustrator.cross1}/></div>
        <div className='absolute size-24 bottom-28 -rotate-12 left-24'><img src={MeddyAssetsIllustrator.cross2}/></div>
        <div className='absolute size-7 bottom-52 rotate-45 left-2'><img src={MeddyAssetsIllustrator.cross3}/></div>
        <div className='absolute size-16 bottom-6 -rotate-12 right-2'><img src={MeddyAssetsIllustrator.heart}/></div>
        <div className='absolute size-12 bottom-20 rotate-12 right-28'><img src={MeddyAssetsIllustrator.cross}/></div>
        <div className='absolute size-32 bottom-40 -rotate-45 right-10'><img src={MeddyAssetsIllustrator.cross2}/></div>
      
    </div>
  );
}

export default DrugByPerson;
