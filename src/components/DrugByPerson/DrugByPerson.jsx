import { useEffect, useState } from 'react';
import ContentText from '../Text/ContentText';
import HeadLineText from '../Text/HeadlLine';
import { AccountBox, Check, Person } from '@mui/icons-material';
import ProductLine from '../Product-Line/ProductLine';
import ProductItemVer1 from '../ProductItem/ProductItemVer1';
import { food_list } from '../../../public/assets/assets';

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
    <div className='flex justify-center flex-col items-center py-7  bg-gray-50'>
        <div className='wrapper px-5 bg-blue-100 py-6 rounded-md'>
            <div className='flex gap-2 items-center text-blue-900'>
                <Person fontSize='large'/>
               <HeadLineText text={"Sản phẩm theo đối tượng"}/>
            </div>
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
      
    </div>
  );
}

export default DrugByPerson;
