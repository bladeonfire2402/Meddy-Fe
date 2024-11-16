import { createContext, useState } from "react";
import { food_list } from "../../public/assets/assets";
import { Medicines } from "../../public/meddy-assets/drugData";

export const StoreContext = createContext(null)

const StoreContextProvider = ({children}) => {
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
                let itemInfo = Medicines.find((product)=>product.Med_ID===item)
                totalAmount += itemInfo.Price*cartItems[item];
            }
        } 
        return totalAmount;
    }

    const contextValue = {
        Medicines,
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;