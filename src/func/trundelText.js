export const TrundeText100 = (s)=>{
    var newString=s
    if(s.length>10){
        newString=s.slice(0,100)+"..."
    }
    return newString

}

export const TrundeText50 = (s) =>{
    var newString=s
    if(s.length>10){
        newString=s.slice(0,50)+"..."
    }
    return newString
}

export const TrundeText200=(s)=>{
    var newString=s
    if(s.length>10){
        newString=s.slice(0,200)+"..."
    }
    return newString
}