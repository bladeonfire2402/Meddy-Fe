import { useContext } from "react";
import { cartContext } from "../../features/ContextProvider";
import CartProduct from "./cartProduct";

const CartTest = () => {
    const { cart } = useContext(cartContext);

    // Function to calculate total price
    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + product.Price * product.quantity, 0);
    };

    // Function to calculate total quantity of items
    const calculateTotalQuantity = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };

    return (
        <div>
            <h2>Giỏ hàng meomeo</h2>
            <div className="flex flex-col gap-9">
                {cart.map((item, index) => (
                    <CartProduct key={index} product={item} />
                ))}
            </div>
            <div className="font-bold mt-4">Tổng tiền: {calculateTotalPrice().toLocaleString()} VND</div>
            <div className="font-bold">Tổng số lượng: {calculateTotalQuantity()}</div>
        </div>
    );
};

export default CartTest;
