import { useEffect, useState } from 'react';
import ContentText from '../Text/ContentText';
import HeadLineText from '../Text/HeadlLine';
import { AccountBox, Check, Person } from '@mui/icons-material';
import ProductLine from '../Product-Line/ProductLine';
import Doctorimg from '/public/meddy-assets/other/doctor2.png'
import { food_list } from '../../../public/assets/assets';
import { MeddyAssetsIllustrator } from '../../../public/meddy-assets/meddy-assets';
import DrugDisplay from '../DrugDisplay/DrugDisplay';

function DrugByPerson() {    // Trạng thái lỗi
  const [person,setPerson]=useState('Nam giới')
  const PersonList=["Nam giới","Trẻ em","Mẹ và bé","Người bị tiểu đường"]

  return (
    <div className='flex justify-center flex-col  items-center py-10 relative'>
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
        <div className='wrapper px-6 pb-6 rounded-md bg-blue-50 mt-4'>
              <DrugDisplay/>
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
