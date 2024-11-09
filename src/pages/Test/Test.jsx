import { Route, Routes } from "react-router-dom"
import Hometest from "./hometest"
import Navtest from "./Navtest"
import CartTest from "./CartTest"

const TestPage=()=>{
    return(
        <div className="">
            <Navtest/>
            <Routes>
                <Route path="/" element={<Hometest/>}/>
                <Route path="/cart" element={<CartTest/>}/>

            </Routes>
        </div>
    )
}
export default TestPage