
import './ExploreMenu.css'
import { menu_list } from '../../../public/assets/assets'
import HeadLineText from '../Text/HeadlLine'
import StarsIcon from '@mui/icons-material/Stars';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu flex justify-center mt-4 py-4' id='explore-menu'>
      <div className='wrapper'>
        <div className='flex items-center gap-2'>
          <div className='text-primary'>
            <StarsIcon className='w-7'/>
          </div>
          <HeadLineText text={"Danh mục nổi bật"}/>
        </div>
      <div className='mt-14'></div>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
         return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
      </div>
  )
}

export default ExploreMenu
