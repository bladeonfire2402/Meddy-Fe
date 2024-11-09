import { useContext } from "react"
import { cartContext } from "../../features/ContextProvider"

const Product = ({medicine})=>{
    const {dispatch}=useContext(cartContext)
    return(
        <div className="Product-wrapper">
            <div className="">Producid : {medicine.Med_ID}</div>
            <div className="">Tên : {medicine.Name}</div>
            <button onClick={()=>{dispatch({type:"Add",medicine:medicine})}}>Thêm</button>

        </div>
    )
}
export default Product