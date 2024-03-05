function stringSplit(stringToSplit,noOfCharPerElement){
    
    var noOfCharPerElementStack = []

    var i=0
    var charSplitedArray=""

    while(i < (stringToSplit.length)){
        charSplitedArray = stringToSplit.slice(i,i+noOfCharPerElement)
        noOfCharPerElementStack.push(charSplitedArray)
        i=i+noOfCharPerElement
    }
    return noOfCharPerElementStack
}

var stringToSplit = "numenticaui"

var noOfCharPerElement =2


if (stringToSplit || noOfCharPerElement !== undefined){
    console.log(stringSplit(stringToSplit,noOfCharPerElement))
}
else{
    console.log("please enter the required parameter")
}
