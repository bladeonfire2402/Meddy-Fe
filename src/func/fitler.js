export const FilterByPriceList=(list)=>{
    let newList=[]
}

export const TrundeText10=(string)=>{
    var newString=string
    if(string.length>10){
        newString=string.slice(0,15)+"..."
    }
    return newString
}