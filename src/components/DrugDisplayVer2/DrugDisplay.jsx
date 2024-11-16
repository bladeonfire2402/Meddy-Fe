  import  { useContext } from 'react';
  import './index.css'
  import { StoreContext } from '../../context/StoreContext';

  import MedicineBlock from '../MedicineBlock/MedicineBlock';

  const DrugDisplayVer2 = ({ item }) => {
    return (
      <div className='food-display' id='food-display'>
        <div className='food-display-list'>
          {item.map((item,index)=>(
            <div key={index}>
              <MedicineBlock medicine={item}/>
            </div>      
          ))}
        </div>
      </div>
    );
  };

  export default DrugDisplayVer2;
