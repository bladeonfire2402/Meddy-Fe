const CartProduct = ({ product }) => {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <div><strong>ID:</strong> {product.Med_ID}</div>
            <div><strong>Name:</strong> {product.Name}</div>
            <div><strong>Price:</strong> {product.Price.toLocaleString()} VND</div>
            <div><strong>Quantity:</strong> {product.quantity}</div>
            <div><strong>Benefits:</strong> {product.Benefit}</div>
        </div>
    );
};

export default CartProduct;
