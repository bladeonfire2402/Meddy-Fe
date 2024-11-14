export const PrimaryMediumbutton=({title,func})=>{
    return(
        <button className="px-4 py-2  bg-primary text-center text-white rounded-md" onClick={()=>{func}}>{title}</button>
    )
}