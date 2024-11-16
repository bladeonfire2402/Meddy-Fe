import { createContext } from "react";
import { NewListData } from "../../public/meddy-assets/newsdata";


export const Newscontext=createContext()

const NewscontextProvider=({ children })=>{
    return (
        <Newscontext.Provider value={NewListData}>
            {children}
        </Newscontext.Provider>
    )
}
export default NewscontextProvider