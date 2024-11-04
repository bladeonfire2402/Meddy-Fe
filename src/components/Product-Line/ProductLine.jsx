import ProductItemVer1 from "../ProductItem/ProductItemVer1"
import './index.css'


const ProductLine=({item})=>{
    return(
        <div className="ProductLine-wrapper bg-blue-400 px-5 py-5 rounded-md">
            {item.map((item,index)=>(
                <ProductItemVer1 key={index} item={item}/>
            ))}
        </div>
    )

}
export default ProductLine