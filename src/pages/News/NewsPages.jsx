import { useContext, useEffect } from "react"
import { Newscontext } from "../../context/NewsContext"
import { MeddyAssetsIllustrator } from "../../../public/meddy-assets/meddy-assets";
import './index.css'
import {  TrundeText200 } from "../../func/trundelText";
import { ChristmastContext } from "../../App";
import { SnowAnimation } from "../../func/Animation Function/snowAnimation";


const NewsPage=()=>{
    const NewListData = useContext(Newscontext);
    const firstNew=NewListData[0];
    const otherNews=NewListData.slice(1)
   const { christTheme } = useContext(ChristmastContext);

   
    const healthNews = otherNews.filter(newItem => newItem.category === "Sức khỏe");
    const medicineNews = otherNews.filter(newItem => newItem.category === "Thuốc");
    const diseaseNews = otherNews.filter(newItem => newItem.category === "Bệnh");
    const achivementNews = otherNews.filter(newItem => newItem.category === "Thành tựu y tế");
    
    useEffect(()=>{
        if(christTheme){
            SnowAnimation(".bg-moi")
        }

        return () => {
            SnowAnimation.stop(".bg-moi");
         };
    },[christTheme])

    return(
        <div className="flex justify-center relative py-5 bg-moi bg-slate-50">
            <div className="wrapper">
                <div className="news-section-pro rounded-md flex justify-center bg-slate-200 py-6 relative">
                <h1 className="text-3xl font-semibold text-primary text-center">Tin tức về y tế, sức khỏe<br/> mới nhất của Meddy</h1>
                <img className="size-4 absolute top-2 left-1/2 item1 " src={MeddyAssetsIllustrator.cross} alt=""/>
                <img className="size-8 absolute top-5 left-1/2 item2" src={MeddyAssetsIllustrator.cross} alt=""/>
                <img className="size-6 absolute bottom-2 left-1/2 item3" src={MeddyAssetsIllustrator.cross1} alt=""/>
                <img className="size-8 absolute left-1/2 item4" src={MeddyAssetsIllustrator.cross3} alt=""/>
                <img className="size-4 absolute bottom-3 right-1/2 item5 " src={MeddyAssetsIllustrator.heart} alt=""/>
                </div>
                {/*Tin tức đầu tiên nổi bật nhất*/}
                <div className="flex items-center gap-12 mt-7">
                    <img className="rounded w-5/12 h-64" src={firstNew.imageUrl} alt=""/>
                    <div className="w-1/2 flex flex-col gap-4">
                        <h1 className="text-3xl font-bold w-11/12 text-primary">{firstNew.title}</h1>
                        <p className="">{TrundeText200(firstNew.content)}</p>
                        <div className="flex gap-2"><p className="text-orange-500 font-semibold">{firstNew.category}</p><p className="text-gray-400">- {firstNew.publishDate}</p></div>
                        <p className="text-base text-primary underline">Xem ngay</p>
                    </div>
                </div>

                {/*Tin tức còn lại*/}
                {/*Tin tức sức khỏe*/}
                <div className="mt-6">
                    <h1 className="text-2xl font-semibold text-primary">Góc sức khỏe</h1>
                    <div className="grid grid-cols-5 gap-4">
                        {healthNews.map((item)=>(
                            <div className="flex flex-col gap-4 px-3 py-4 rounded-md shadow-xl" key={item.id}>
                                <img className="rounded-md" src={item.imageUrl}/>
                                <h2 className="text-primary font-semibold">{item.title}</h2>
                                <div className="flex text-sm gap-2">
                                <h3 className="text-orange-500 text-sm">{item.category}</h3>
                                <h3 className="text-sm text-gray-400">{item.publishDate}</h3>
                                </div>
                                <p className="underline text-gray-400 text-sm">Xem ngay</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/*Tin tức về Thuốc*/}
                <div className="mt-6">
                    <h1 className="text-2xl font-semibold text-primary">Sản phẩm thuốc</h1>
                    <div className="grid grid-cols-5 gap-4">
                        {medicineNews.map((item)=>(
                            <div className="flex flex-col gap-4 px-3 py-4 rounded-md shadow-xl" key={item.id}>
                                <img className="rounded-md" src={item.imageUrl}/>
                                <h2 className="text-primary font-semibold">{item.title}</h2>
                                <div className="flex text-sm gap-2">
                                <h3 className="text-orange-500 text-sm">{item.category}</h3>
                                <h3 className="text-sm text-gray-400">{item.publishDate}</h3>
                                </div>
                                <p className="underline text-gray-400 text-sm">Xem ngay</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/*Tin tức về Bệnh*/}
                <div className="mt-6">
                    <h1 className="text-2xl font-semibold text-primary">Tin tức về bệnh mới nhất</h1>
                    <div className="grid grid-cols-5 gap-4">
                        {diseaseNews.map((item)=>(
                            <div className="flex flex-col gap-4 px-3 py-4 rounded-md shadow-xl" key={item.id}>
                                <img className="rounded-md" src={item.imageUrl}/>
                                <h2 className="text-primary font-semibold">{item.title}</h2>
                                <div className="flex text-sm gap-2">
                                <h3 className="text-orange-500 text-sm">{item.category}</h3>
                                <h3 className="text-sm text-gray-400">{item.publishDate}</h3>
                                </div>
                                <p className="underline text-gray-400 text-sm">Xem ngay</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/*Tin tức về Thành tựu y tế*/}
                <div className="mt-6">
                    <h1 className="text-2xl font-semibold text-primary">Thành tựu y tế</h1>
                    <div className="grid grid-cols-5 gap-4">
                        {achivementNews.map((item)=>(
                            <div className="flex flex-col gap-4 px-3 py-4 rounded-md shadow-xl" key={item.id}>
                                <img className="rounded-md" src={item.imageUrl}/>
                                <h2 className="text-primary font-semibold">{item.title}</h2>
                                <div className="flex text-sm gap-2">
                                <h3 className="text-orange-500 text-sm">{item.category}</h3>
                                <h3 className="text-sm text-gray-400">{item.publishDate}</h3>
                                </div>
                                <p className="underline text-gray-400 text-sm">Xem ngay</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

        </div>
    )
}
export default NewsPage