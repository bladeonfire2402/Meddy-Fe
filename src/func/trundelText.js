export const TrundeText100 = (s)=>{
    var newString=s
    if(s.length>10){
        newString=s.slice(0,100)+"..."
    }
    return newString

}