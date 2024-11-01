import  { useContext } from 'react';
import './index.css'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const DrugDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  
  let DrugList = food_list
  const Few= DrugList.splice(0,10)
  console.log(Few)

  return (
    <div className='food-display' id='food-display'>
      <div className="food-display-list ">
        {Few.map((item, index) => {
          if(category==="All" || category===item.category){
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default DrugDisplay;
