function checkSpaces(sentence){

    for(var i=0;i<sentence.length;i++){
        if(sentence[i]==" "){
            return true
        }
    }
    return false
}


var sentence = "arun"

if (sentence !== undefined){
    console.log(checkSpaces(sentence))
}
else{
    console.log("please enter the required parameter")
}
