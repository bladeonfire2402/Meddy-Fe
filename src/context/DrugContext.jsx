import { createContext, useState } from "react";
import { Medicines } from "../../public/meddy-assets/drugData";

export const DrugStoreContext = createContext(null)

const DrugStoreContextProvider=(props)=>{
    
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = Medicines.find((product)=>product._id===item)
                totalAmount += itemInfo.price*cartItems[item];
            }
        } 
        return totalAmount;
    }

    const contextValue = {
        Medicines,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return(
        <DrugStoreContext.Provider value={contextValue}>
           {props.children}
        </DrugStoreContext.Provider>
    )
}
export default DrugStoreContextProvider