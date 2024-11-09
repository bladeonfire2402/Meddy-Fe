import { Medicines } from "../../../public/meddy-assets/drugData"
import Product from "./product"

const Hometest=()=>{
    
    return(
        <div className="flex gap-11">
            {Medicines.map((medicine)=>(
                <Product key={medicine.Med_ID} medicine={medicine}/>
            ))}
            
        </div>

    )
}
export default Hometest