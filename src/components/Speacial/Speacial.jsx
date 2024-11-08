import { CategoriesList,  } from '../../../public/meddy-assets/meddy-assets';
import HeadLineText from '../Text/HeadlLine'
import StarsIcon from '@mui/icons-material/Stars';
import TitleText from '../Text/TitleText';
import './index.css'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DrugDisplay from '../DrugDisplay/DrugDisplay';
import { useState } from 'react';


const Speacial=()=>{
   const [category,setCategory] = useState("All");
    
    return(
        <div className="Special-wrapper  flex justify-center py-10 cursor-pointer bg-slate-100 mt-0.5">
            <div className="wrapper bg-orange-500 px-6 py-6 rounded-md">
                <div className='bg-white relative px-7 py-3 rounded-md'>
                  <div className='flex items-center gap-2 mt-4 mb-7'>
                   <div className='text-red-color'>
                      <StarsIcon className='w-7'/>
                   </div>
                    <div className='text-red-color'>
                     <HeadLineText text={"Danh mục nổi bật"}/>    
                     </div>
                  </div>
                  <div className='categories-list flex justify-between items-center gap-7 mt-4 mb-8 text-orange-500 '>
                {CategoriesList.map((item, index)=>(
                    <div className='item flex-1 flex flex-col  items-center text-center justify-center py-8 rounded-md px-5 h-32' key={index}>
                        <div className='text-orange-500 mb-3'>
                         <item.img className='' fontSize='large'/>
                        </div>
                        <TitleText text={item.categoriesTitle}/>
                    </div>
                ))}
                </div>
               
                <div className='flex justify-center mb-6'>
                 <button className='px-9 py-2 bg-orange-500 rounded-md text-white'>Xem thêm</button>

                </div>
               </div>

               <div className='bg-white relative px-7 py-3 mt-7 rounded-md'>
                <div className='flex items-center gap-2 mt-4 mb-7'>
                   <div className='text-red-color'>
                      <LocalFireDepartmentIcon className='w-7' fontSize='large'/>
                   </div>
                    <div className='text-red-color'>
                     <HeadLineText text={"Sản phẩm nổi bật"}/>    
                     </div>
                  </div>
                     <DrugDisplay category={category}/>
                  </div>
                 <div>
               </div>
               

            </div>

        </div>
    )

}
export default Speacial