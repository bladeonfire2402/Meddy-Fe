import  { useContext } from 'react';
import './index.css'
import { StoreContext } from '../../context/StoreContext';

import MedicineBlock from '../MedicineBlock/MedicineBlock';

const DrugDisplay = ({ category }) => {
  const {Medicines}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <div className='food-display-list'>
        {Medicines.map((item,index)=>(
          <div key={index}>
            <MedicineBlock medicine={item}/>
          </div>      
        ))}
      </div>
    </div>
  );
};

export default DrugDisplay;
