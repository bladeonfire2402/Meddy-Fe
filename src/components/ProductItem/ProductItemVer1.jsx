import { TrundeText10 } from "../../func/fitler"
import ContentText from "../Text/ContentText"

const ProductItemVer1=({item})=>{
    
    return(
        <div className="flex flex-col bg-white overflow-hidden rounded-xl pb-3">
            <img alt="" src={item.image}/>

            <div className="px-3 mt-3">
                <ContentText text={item.name}/>
                <ContentText text={TrundeText10(item.description)}/>

                <button className=" mt-5 shadow-fight text-ultra py-1 rounded-md text-center w-full">Chọn mua</button>
            </div>
            
        </div>
    )

}
export default ProductItemVer1