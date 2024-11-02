import './index.css'

export const RoundedBludeRadiatnt=()=>{
    return(
        <div className="w-80 h-80 rounded-full bg-grad-pastel-utra"></div>
    )

}

export const RoundedBludeRadiatntBig=()=>{
    return(
        <div className="w-96 h-96 rounded-full bg-grad-pastel-utra"></div>
    )

}

export const RoundedBludeRadiatntEnormous=()=>{
    return(
        <div className="enormouse rounded-full bg-grad-pastel-utra"></div>
    )
}


export const RoundedBludeRadiatntWithItem=({item})=>{
    return(
        <div className="w-80 rounded-full flex justify-center h-80 bg-grad-pastel-utra overflow-hidden border-blue-100 bor">
            <img className="-rotate-12" src={item}/>
        </div>
    )
}

export const RoundedBludeRadiatntWithItemVer2=({item})=>{
    return(
        <div className="w-80 rounded-full flex justify-center h-80 bg-grad-pastel-utra overflow-hidden border-blue-200 bor">
            <img className="-rotate--30" src={item}/>
        </div>
    )

}

export const RoundedBludeRadiatntWithItemVer3=({item})=>{
    return(
        <div className="w-96 rounded-full flex justify-center h-96 bg-grad-pastel-utra overflow-hidden border-blue-300 bor">
            <img className="-rotate--35" src={item}/>
        </div>
    )

}

