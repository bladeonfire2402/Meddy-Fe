import { newsList } from "../../../public/meddy-assets/newsdata";
import HeadLineText from "../Text/HeadlLine"
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import './index.css'
import { TrundeText100 } from "../../func/trundelText";



const NewsSection=()=>{
    const firstNewItem=newsList[0]
    return(
        <div className="News-wrapper flex justify-center py-10 cursor-pointer bg-blue-100 mt-0.5">
            <div className="px-6 py-6 rounded-md wrapper bg-white">
                <div className="flex gap-2 items-center text-primary">
                    <MedicationLiquidIcon fontSize="large"/>
                    <HeadLineText text={"Góc sức khỏe"}/>    
                </div>
               <NewsLayout/>
            </div>
        </div>

    )

}
export default NewsSection

export const NewsLayout=()=>{
    const firstNewItem=newsList[0]
    const otherNews=newsList.slice(1,newsList.length)
    console.log(firstNewItem)
    return(
        <div className="NewsLayout-wrapper mt-4 ">
            <div className="w-full frist-news  rounded-md relative">
                <img className="w-full h-96 rounded-md object-cover bright-hover brightness-75 overflow-hidden" src={firstNewItem.imageUrl}/>
                <div className="absolute top-1/3 left-1/2 text-white translateY--50per translateX--50per ">
                 <h1 className="font-bold text-5xl  text-center">{firstNewItem.title}</h1>
                </div>
                 <button className="absolute bottom-24 left-1/2 translateX--50per bg-white px-4 py-1.5 text-primary rounded-2xl text-xl">Xem ngay</button>
            </div>
            <div className="flex justify-between mt-6">
                {otherNews.map((item)=>(
                    <div className="news-item" key={item.id}>
                        <img src={item.imageUrl} className="rounded-md w-full h-56 overflow-hidden mb-4 bright-hover"/>
                        <h1 className="text-xl font-semibold mb-2 text-blue-950">{item.title}</h1>
                        <p className="text-gray-700 mb-3">{TrundeText100(item.content)}</p>
                        <a href="" className="text-lg underline text-primary mt-4">Đọc ngay</a>
                    
                    </div>
                ))}
            </div>
        </div>
    )
    
}