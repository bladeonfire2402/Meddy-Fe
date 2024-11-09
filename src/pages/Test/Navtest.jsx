import { Link } from "react-router-dom"
import { cartContext } from "../../features/ContextProvider"
import { useContext } from "react"

const Navtest=()=>{
    const {cart}=useContext(cartContext)
    return(
        <div className="flex justify-center gap-3">
            <Link to={'/'}>
            <div>Home</div>
            </Link>
            <Link to={'/cart'}>
            <div>Giỏ hàng</div>
            </Link>
            <div className="flex">Số lượng sản phẩm trong giỏ: {cart.length}</div>
        </div>
    )

}
export default Navtest