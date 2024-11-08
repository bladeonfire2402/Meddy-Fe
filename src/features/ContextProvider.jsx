import { createContext, useReducer } from "react";

const ShopContext=createContext()

const ContextProvider=()=>{
    const [cart, dispatch]=useReducer(1,[2])
    return(
        <div>ContextProvider</div>
    )
}
export default ContextProvider 

