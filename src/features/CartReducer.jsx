

export const totalMedicines=(cart)=>{
    return cart.reduce((sum,product)=>sum+product.quantity,0)
}

export const totalPrice=(cart)=>{
    return cart.reduce((total,product)=>total+product.quantity*product.price,0)
}

const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            const existingIndex = state.findIndex(medicine => medicine.Med_ID === action.medicine.Med_ID);
            if (existingIndex !== -1) {
                // Medicine already exists, increase quantity
                const updatedState = [...state];
                updatedState[existingIndex] = {
                    ...state[existingIndex],
                    quantity: state[existingIndex].quantity + (action.medicine.quantity || 1),
                };
                return updatedState;
            }
            // Medicine doesn't exist, add as new item
            return [...state, { ...action.medicine, quantity: action.medicine.quantity || 1 }];
            
        case "Remove":
            return state.filter(medicine => medicine.Med_ID !== action.Med_ID);

        case "Increase":
            const increaseIndex = state.findIndex(medicine => medicine.Med_ID === action.Med_ID);
            if (increaseIndex !== -1) {
                return state.map((medicine, index) =>
                    index === increaseIndex
                        ? { ...medicine, quantity: medicine.quantity + 1 }
                        : medicine
                );
            }
            return state;

        case "Decrease":
            const decreaseIndex = state.findIndex(medicine => medicine.Med_ID === action.Med_ID);
            if (decreaseIndex !== -1) {
                return state.map((medicine, index) =>
                    index === decreaseIndex
                        ? { ...medicine, quantity: Math.max(1, medicine.quantity - 1) }
                        : medicine
                );
            }
            return state;

        default:
            return state;
    }
};

export default CartReducer;
